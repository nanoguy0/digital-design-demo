import { MotionProps, motion } from "framer-motion"
import { Card } from "react-bootstrap"
import Markdown from "react-markdown"

export const MarkDownCard = ({ markdown, motionProps, ...props }: { markdown: string, motionProps?: MotionProps }) => {
    return (
      <motion.div
        initial={{ scale: 0, rotate: 25 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{
          scale: 0.95,
          rotate: -1
        }}
        {...motionProps}
      >
        <Card style={{ background: '#712cf926',  padding:'2em'  }} {...props}>
          <Markdown>
            {markdown}
          </Markdown>
        </Card>
      </motion.div>
    )
}
export const InfoCard = ({ motionProps, ...props }: { motionProps?: MotionProps } & React.PropsWithChildren) => {
return (
  <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ y:-10 }}
        whileTap={{
          scale: 0.95,
          rotate: -1
        }}
        {...motionProps}
      >
        <Card style={{ background: '#712cf926', padding:'2em' }} {...props}>
          {props.children}
        </Card>
      </motion.div>
    )
}