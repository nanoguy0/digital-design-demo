import { Col, Row } from "react-bootstrap"
import React from "react";

export default (props: {md?: number} & React.PropsWithChildren) => {
    return (
        <Row>
            <Col md={props.md || 1}></Col>
            <Col className="col-centered">
                {Array.isArray(props.children) && props.children.length > 0 ? props.children[0] : <></>}
            </Col>
            <Col className="col-centered">
                {Array.isArray(props.children) && props.children.length > 1 ? props.children[1] : <></>}
            </Col>
            <Col md={props.md || 1}></Col>
        </Row>
    )
};