import React from 'react';
import { AnimationProps, MotionProps, Variants, motion } from 'framer-motion';
import './binary.css';

export type BinaryProps = {
    state: boolean;
    onTap?: (v: PointerEvent) => void;
    motionProps?: MotionProps;
    readonly?: boolean;
    stagger?: number;
} & React.HTMLAttributes<HTMLDivElement>;


// Used to define animations
const variants: Variants = {
    'byte-hidden': { opacity: 0, y: 20 },
    'byte-visible': { opacity: 1, y: 0 },
    'byte-hover': { scale: 1.05 },
    'byte-tap': { scale: 0.8, fontSize: '40px' }
};

export default React.forwardRef<HTMLDivElement, BinaryProps>(({ state, motionProps, readonly, onTap, stagger, ...props }: BinaryProps & React.Attributes, ref) => {
    return (
        <motion.div
            className='binary-bit'
            initial="byte-hidden"
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { 
                    delay: (stagger ?? 0) * 0.1 + 0.1 // Workaround for framer-motion bug when dynamic added elements
                 }
            }}
            whileHover="byte-hover"
            style={{ backgroundColor: state ? "#68ABDF" : "#4f4f4f" }}
            whileTap={readonly ? undefined : "byte-tap"}
            transition={{ type: "spring", stiffness: 260, damping: 20}}
            ref={ref}
            onTapStart={onTap}
            variants={variants}
            {...motionProps}
            key={props.key}
        >
            {state ? "1" : "0"}
        </motion.div>
    )
});