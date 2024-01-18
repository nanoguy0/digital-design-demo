import { Button, Col, Container, Row } from "react-bootstrap"
import { InfoCard, MarkDownCard } from "../components/Cards"

export default ({...props}) => {
    return (
        <Container fluid style={{ marginTop: '50vh'}}>
            <Row>
                <Col md={3}></Col>
                <Col style={{alignItems:'center'}}>
                    <MarkDownCard markdown={`
# You did it!
 

Thanks for reading my guide! Made by Benjamin Bartrim. January 2024.`} />
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}