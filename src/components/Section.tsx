import { Button, Container, Row } from "react-bootstrap"
import React from "react";
import CenteredRow from "./CenteredRow";

export default React.forwardRef(({ onNext, ...props }: { onNext: () => void } & React.PropsWithChildren, ref) => {
    return (
        <Container fluid style={{ marginBottom: "100vh" }}>
            <Row ref={ref} style={{ display: 'hidden' }} />

            {props.children}

            <CenteredRow>
                <Button onClick={onNext} variant="secondary" style={{ marginTop: '20px' }}>Next</Button>
            </CenteredRow>
        </Container>
    )
});