import { Container } from "react-bootstrap"
import { MarkDownCard } from "../components/Cards"
import CenteredRow from "../components/CenteredRow"
import content from "./data/Ending.json"

export default ({ ...props }) => {
    return (
        <Container fluid style={{ marginTop: '50vh' }}>
            <CenteredRow md={3}>
                <MarkDownCard markdown={content['You did it!']} />
            </CenteredRow>
        </Container>
    )
}