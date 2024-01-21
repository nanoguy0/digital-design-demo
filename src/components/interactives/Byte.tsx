import React, { useReducer, useState } from 'react';
import { MotionProps, Variants, motion, animate } from 'framer-motion';

import { Signal, useComputed, useSignalEffect, } from '@preact/signals-react';
import { useSignal, useSignals } from '@preact/signals-react/runtime';
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

const SmoothValue = ({ value }: { value: Signal<number> }) => {
    const [shownSignal, updateSignal] = useState(0);

    useSignalEffect(() => {
        // todo: i want to make this parallel so you can queue up multiple update ands it ramps up to the last one
        const controls = animate(shownSignal, value.value, {
            duration: 0.25,
            onUpdate: (v) => updateSignal(Math.round(v.valueOf())),
            delay: 0.5,
        });
        return () => controls.stop();
    });
    return <p> = {shownSignal}</p>
};

const AnimatedBaseIndicator = ({ expo, neg, ...props }: { expo: number, neg: boolean} & MotionProps) => {
    
    return (<motion.p 
        initial={{scale: 0, opacity: 0.75, y: 30, x: 100}}
        animate={{scale: [null, 2.5, 2.5], y: [null, 0, 0], opacity: [null, 1, 0], x: [null, 100, 0]}}
        transition={{duration: 1, times:[0, 0.2, 1], type: 'tween', ease: 'anticipate'}}
        className='animated-base-indicator'
        {...props}>{neg?'-':'+'}{expo == 0 ? '1' : <>2<sup>{expo}</sup></>}</motion.p>)
}

export default React.forwardRef<HTMLDivElement, ByteProps>(({ numberValue, motionProps, readonly, ...props }: ByteProps, ref) => {
    useSignals();
    const byteTable = useComputed(() => numberValue.value.toString(2).padStart(8, '0').split('').map(x => x === '1'));
    const [baseIndicators, setIndicators] = useState([] as JSX.Element[]);
    // Base Indicator

    function onClick(i: number) {
        if (readonly) return;
        
        return (v: PointerEvent) => {
            // TODO: fix awful position hack
            setIndicators([...baseIndicators,<AnimatedBaseIndicator expo={7-i} neg={numberValue.value & (0b10000000 >> i) ? true : false} style={{position:'absolute', marginLeft: '700px', marginTop:'20px'}}/>])

            numberValue.value ^= 0b10000000 >> i;
        }
    }
    // 

    return (
        <>
            
            
            
            <motion.div
                ref={ref}
                initial="byte-hidden"
                whileInView="byte-visible"
                className='byte-container'
                transition={{ type: 'spring', duration: 2, staggerChildren: 0.1, delayChildren: 0.3 }}
                variants={variants}
                {...motionProps}
            >
                {baseIndicators}
            { /* note: I hate this so much its not dynamic but im so hungry rn that ill fix it later  */}
                <h1 style={{position:'absolute', marginLeft: '650px', marginTop:'20px'}} className='smooth-byte-counter'><SmoothValue value={numberValue} /></h1>
                {byteTable.value.map((bit, i) => <Binary state={bit} onTap={onClick(i)} readonly={readonly} stagger={i} />)}
            </motion.div>
            
        </>

    );
});