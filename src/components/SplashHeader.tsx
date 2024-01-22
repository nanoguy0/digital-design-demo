import { motion, useScroll, useSpring } from "framer-motion"
import { Col, Container, Row } from "react-bootstrap"



export default ({ ...props }) => {
    const { scrollYProgress } = useScroll();
    const smoothScrollYProgress = useSpring(scrollYProgress);

    return (
        <Container fluid>
            <motion.div className="progress-bar" style={{ scaleX: smoothScrollYProgress }} />
            <Row >
                <Col style={{ marginTop: '7em', marginBottom: '5em' }} className="d-flex justify-content-center">
                    <div />
                    <div />
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: 'spring',
                            duration: 1,
                        }}
                    >Digital Design In 100 Seconds<motion.div
                        initial={{ opacity: 0, x: -35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }} style={{ textAlign: 'right', color: 'lightgray', marginTop: 10, fontSize: 16 }}>Version v0.1.5 (ALPHA)</motion.div>
                        </motion.h1>

                </Col>
            </Row>
        </Container>
    )
}