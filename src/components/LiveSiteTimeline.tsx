import React from 'react';
import { motion, useMotionValue, useScroll, useSpring } from 'framer-motion';
import './style.css';

export type TimelineItem = {
    name: string;
    anchor: React.RefObject<HTMLDivElement>;
    onChoice?: () => void;
}

type TimelineItemWithPercentage = TimelineItem & { percentage: number };

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);


export default ({ map, ...props }: { map: TimelineItem[] }) => {
    const { scrollYProgress } = useScroll();
    

    // calculate the percentage range each timeline item owns
    const [lastAnchor, setLastAnchor] = React.useState(1);

    // todo: clean this up
    React.useLayoutEffect(() => {
        setLastAnchor(Math.max( document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ))
    });

    const timeLineRanges = map.map(({ anchor, ...timelineItem }) => {
        // normalize 
        let anchorTop = anchor.current?.getBoundingClientRect().top! + window.scrollY;
        let percentage = anchorTop / lastAnchor;
        console.log(anchorTop)
        let percentageToNearestFive = Math.round(percentage * 20) / 20;
        return { percentage: percentageToNearestFive + scrollYProgress.get(), anchor, ...timelineItem } as TimelineItemWithPercentage;
    });
    
    return (
        <motion.ul 
        initial={{ 
            x: -100, opacity: 0
         }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ type:'spring', duration: 0.5, bounce: 0.5 }}
        className="timeline">

            { // todo: hacky way to do this, but it works for now 
            Array.from({ length: 21 }, (_, i) => Math.round(0.05*i*100)/100).map(i => {
                const scaleModifier = useMotionValue(1);
                const moveModifier = useMotionValue(0);

                scrollYProgress.on('change', (v) => {
                    // calculate the distance from the current scroll position to the timeline item
                    let distance = Math.abs(i - v);
                    // modify the scale so closer items are larger
                    let scale = clamp(1 - distance, 0.85, 1);
                    if (scale < 0.85) scale = 0;
                    else scale = ((scale - 0.85) / 0.15)* 1.2;
                    scaleModifier.set(scale + 1);
                    moveModifier.set(scale * 40)
                });
                
                let locatedAnchor = timeLineRanges.find(({ percentage }) => percentage === i);
                if (locatedAnchor) {
                    let { name, onChoice, anchor } = locatedAnchor;
                    if (!onChoice) onChoice = () => anchor.current?.scrollIntoView({ behavior: 'smooth' });
                    return (
                        <motion.li
                            key={i}
                            className="timeline-item-interactive"
                            whileHover={{ y: -5 }}
                            onClick={onChoice}
                            style={{ scale: scaleModifier, x: moveModifier}}
                        >
                            {name}
                        </motion.li>
                    )
                } else {
                    return (
                        <motion.li
                            key={i}
                            className="timeline-item"
                            whileHover={{ y: -5}}
                            style={{ scale: scaleModifier, width: '50%', x: moveModifier}}
                            onClick={() => window.scrollTo(0, lastAnchor * i)}
                        >
                            &nbsp;
                        </motion.li>
                    )
                }
            })
            }
        </motion.ul>
    )
}