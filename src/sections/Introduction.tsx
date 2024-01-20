import { Button, Col, Container, Row } from "react-bootstrap"
import { MarkDownCard } from "../components/Cards"
import content from "./data/Introduction.json"

export default ({ onStart }: {onStart: () => void}) => {
    return (
        <Container fluid style={{ marginBottom: "90vh" }}>
            <Row>
                <Col md={3}></Col>
                <Col style={{alignItems:'center'}}>
                    <MarkDownCard markdown={content['Greetings!']} />
                    <Button onClick={onStart} variant="secondary" style={{ marginTop: '20px' }}>Start</Button>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}