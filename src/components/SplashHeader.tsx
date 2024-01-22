import { motion, useScroll } from "framer-motion"
import { Col, Container, Row } from "react-bootstrap"



export default ({ ...props }) => {
    const { scrollYProgress } = useScroll();

    return (
        <Container fluid>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
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
                    >Digital Design In 100 Seconds<motion.h6
                        initial={{ opacity: 0, x: -35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }} style={{ textAlign: 'right', color: 'lightgray', marginTop: 10 }}>Version v0.1.5 (ALPHA)</motion.h6>
                        </motion.h1>

                </Col>
            </Row>
        </Container>
    )
}