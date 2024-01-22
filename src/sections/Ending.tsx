import { Container } from "react-bootstrap"
import { MarkDownCard } from "../components/Cards"
import CenteredRow from "../components/CenteredRow"
import content from "./data/Ending.json"
import React from "react"

export default React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Container fluid style={{ marginTop: '50vh' }} ref={ref}>
            <CenteredRow md={3}>
                <MarkDownCard markdown={content['You did it!']} />
            </CenteredRow>
        </Container>
    )
});