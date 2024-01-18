import { motion, MotionProps, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import ReactPlayer from 'react-player/file'

const DEFAULT_VIDEO = `${process.env.PUBLIC_URL}/videos/default.mp4`;

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
        style={{
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        }}
        {...motionProps}
    >
        <ReactPlayer width="100%" style={{borderRadius:"5"}} height="100%" playing={true} loop={true} url={src ? `${process.env.PUBLIC_URL}/videos/${src}` : DEFAULT_VIDEO} muted/>
    </motion.div>)
}