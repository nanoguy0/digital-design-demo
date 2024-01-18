import { Button, Col, Container, Row } from "react-bootstrap"
import { InfoCard, MarkDownCard } from "../components/Cards"

export default ({ onStart }: {onStart: () => void}) => {
    return (
        <Container fluid style={{ marginBottom: "90vh" }}>
            <Row>
                <Col md={3}></Col>
                <Col style={{alignItems:'center'}}>
                    <MarkDownCard markdown={`
### Greetings!
 

Many people experience "eyes glaze over syndrome" when hearing the term binary. 
My name is \`Benjamin Bartrim\`, and I am a student currently in college currently 
attempting to graple with this topic. This short guide aims to explore and understand as much of digital design as possible! It is a compilation of all the notes I took and animations I made.
Let's get started! 


**for best experience use full screen*`} />
                    <Button onClick={onStart} variant="secondary" style={{ marginTop: '20px' }}>Start</Button>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}