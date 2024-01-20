import React from "react";
import { Container, Row } from "react-bootstrap"
import Markdown from "react-markdown"
import { InfoCard } from "../components/Cards"
import CenteredRow from "../components/CenteredRow";
import content from './data/OtherBinaryCodes.json'

export default React.forwardRef(({ ...props }, ref) => {
    return (
        <Container fluid>
            <Row ref={ref} style={{display:'hidden'}}/>
            <CenteredRow>
                <InfoCard>
                    <Markdown>{content['Binary Coded Decimal (BCD)']}</Markdown>
                </InfoCard>
            </CenteredRow>
        </Container>
    )
});