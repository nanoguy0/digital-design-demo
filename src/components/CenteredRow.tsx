import { Col, Row } from "react-bootstrap"
import React from "react";

export default (props: { md?: number, noCenter?: boolean } & React.PropsWithChildren) => {
    return (
        <Row>
            <Col md={props.md || 2}></Col>
            <Col className={props.noCenter ? undefined : "col-centered"}>
                {props.children}
            </Col>
            <Col md={props.md || 2}></Col>
        </Row>
    )
};