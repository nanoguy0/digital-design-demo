import React, { useReducer, useState } from 'react';
import { MotionProps, Variants, motion, animate } from 'framer-motion';

import { Signal, signal } from '@preact/signals-react';
import { useComputed, useSignal, useSignalEffect, useSignals } from '@preact/signals-react/runtime';
import Binary from './Binary';
import { Container } from 'react-bootstrap';

export type ByteProps = {
    numberValue: Signal<number>;
    motionProps?: MotionProps;
    readonly?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const variants: Variants = {
    'byte-hidden': { opacity: 1 },
    'byte-visible': { opacity: 1 },
};

const SmoothValue = ({ value }: { value: Signal<Number> }) => {
    const nodeRef = React.useRef<HTMLParagraphElement>(null);
    useSignals();
    useSignalEffect(() => {
        // TODO: This is bad, we should be using a signal for this somehow
        const from = Number.parseInt(nodeRef.current?.textContent ?? '') || 0;
        const controls = animate(from, value.value, {
            duration: 0.25,
            onUpdate: (v) => {
                if (nodeRef.current)
                    nodeRef.current.textContent = ' = ' + v.toFixed(0);
            }
        });
        return () => controls.stop();
    });
    return <p className='smooth-counter' ref={nodeRef}></p>
};

const AnimatedBaseIndicator = ({ x, y, expo, neg }: {x:number, y:number, expo: number, neg: boolean}) => {
    
    return (<motion.p 
        initial={{scale: 0, opacity: 0.75}}
        animate={{scale: 2.5, y: -40, opacity: 0}}
        transition={{duration: 2.5}}
        className='animated-base-indicator'>{neg?'-':'+'}{expo == 0 ? '1' : <>2<sup>{expo}</sup></>}</motion.p>)
}

export default React.forwardRef<HTMLDivElement, ByteProps>(({ numberValue, motionProps, readonly, ...props }: ByteProps, ref) => {
    useSignals();
    const byteTable = useComputed(() => numberValue.value.toString(2).padStart(8, '0').split('').map(x => x === '1'));
    const [baseIndicators, setIndicators] = useState([] as JSX.Element[]);
    // Base Indicator

    function onClick(i: number) {
        if (readonly) return;
        
        return (v: PointerEvent) => {
            console.log(v); //!!!! I CANT FIGURE OUT WHY THIS ISNT WORKING, POSITIONS ARE ALL WRONG
            setIndicators([...baseIndicators,<AnimatedBaseIndicator x={v.x} y={v.y} expo={7-i} neg={numberValue.value & (0b10000000 >> i) ? true : false} />])

            numberValue.value ^= 0b10000000 >> i;
        }
    }
    // 

    return (
        <>
            
            {baseIndicators}
            <motion.div
                ref={ref}
                initial="byte-hidden"
                whileInView="byte-visible"
                className='byte-container'
                transition={{ type: 'spring', duration: 2, staggerChildren: 0.1, delayChildren: 0.3 }}
                variants={variants}
                {...motionProps}
            >

                {byteTable.value.map((bit, i) => <Binary state={bit} onTap={onClick(i)} readonly={readonly} stagger={i} />)}
            { /* note: I hate this so much its not dynamic but im so hungry rn that ill fix it later  */}
                <h1 style={{position:'absolute', marginLeft: '650px', marginTop:'20px'}}><SmoothValue value={numberValue} /></h1>
            </motion.div>
            
        </>

    );
});