import { motion, MotionProps, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

export default ({ src, motionProps, ...props }: { src: string, motionProps?: MotionProps }) => {
    const videoContainerRef = useRef<HTMLDivElement>(null);

    return (
    <motion.div 
        ref={videoContainerRef}
        initial={{ scale: 0.25, borderRadius: "100%" }}
        whileInView={{scale: 1, borderRadius: "5%" }}
        transition={{
            type: 'spring',
            duration: 1,
            borderRadius: { duration: 0.5}
        }}
        className="video-player"
        {...motionProps}
    >
    </motion.div>)
}