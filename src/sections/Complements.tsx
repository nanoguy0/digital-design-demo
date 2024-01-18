import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { InfoCard, MarkDownCard } from "../components/Cards"
import { motion } from "framer-motion"
import VideoPlayer from "../components/VideoPlayer"
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown"
// import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";


export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
    return (
        <Container fluid style={{ marginBottom: "90vh" }}>
            <Row className="col-centered" >
                <Col md={2} />
                <Col className="col-centered" ref={ref} >
                <VideoPlayer src=""/>
                </Col>
                <Col md={2} />
            </Row>
            <Row>
                <Col md={1} />
                <Col className="col-centered">
                <InfoCard motionProps={{style:{width:'95%'}, whileTap: {}, whileHover:{}}}>
                    <Markdown>{`## 1's Complement
*(Diminished Radix Complement)*
- Applies to binary numbers (and numbers in any base)
- Subtract each digit of a number from the largest digit in that base
- In binary:
  - 1's complement is simply flipping the bits
  - 1 becomes 0, 0 becomes 1`}</Markdown>
  <Card style={{ width: '36em', height:'18em', alignSelf:'center', alignItems:'center', justifyContent:'center' }}>
  <strong style={{color:'red'}}>Todo: interactive example</strong>
  </Card>
                </InfoCard>
                </Col>
                <Col className="col-centered">   
                <InfoCard motionProps={{style:{width:'95%'}, whileTap: {}, whileHover:{}}}>
                    <Markdown>{`## 2's Complement 
*(Radix Complement)*
- Defined as 1's complement + 1
- Helps to represent negative numbers in binary
- In binary:
  - Perform 1's complement
  - Add 1 to the least significant bit (LSB)
  - If adding 1 causes a carry, propagate it to the left
- Binary shortcut for 2's complement:
  - Copy bits from right to left up to the first 1
  - Beyond that, flip each bit
- Note: Complement is spelled with an 'e', not with an 'i'`}</Markdown>

    <Card style={{ width: '36em', height:'18em', alignSelf:'center', alignItems:'center', justifyContent:'center' }}>
        <strong style={{color:'red'}}>Todo: interactive example</strong>
    </Card>
  </InfoCard>
                </Col>


                <Col md={1} />
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col className="col-centered">
                    <Button onClick={onNext} variant="secondary" style={{ marginTop: '20px' }}>Next</Button>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
});