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
                <InfoCard> 
                    <Markdown>{`# Signed Binary Numbers
- Binary only consists of two symbols: \`1\` and \`0\`.
- There is no negative sign \`-\` available in binary.
- Signed binary numbers enable the representation of both positive and negative numbers.

## Common Signed Binary Forms

1. **Leading Bit and Sign Indication**
   - \`0\` indicates a positive number.
   - \`1\` indicates a negative number.

2. **Sign-magnitude Form**
   - The left-most bit indicates the sign (\`0\` for positive, \`1\` for negative).
   - All remaining bits are the magnitude of the number.
   - Example:
     - \`+26\` in unsigned binary: \`11010\`
     - \`+26\` in sign-magnitude: \`0011010\`
     - \`-26\` in sign-magnitude: \`1011010\`

3. **1's Complement Form**
   - Positive numbers are represented the same as in unsigned binary.
   - Negative numbers are the 1's complement (invert each bit of the positive number).
   - Example:
     - \`+26\` in 1's complement: \`0011010\`
     - \`-26\` in 1's complement: \`1100101\`

4. **2's Complement Form**
   - Positive numbers are represented the same.
   - Negative numbers are the 2's complement (invert each bit and add 1 to the least significant bit).
   - Example:
     - \`+26\` in 2's complement: \`0011010\`
     - \`-26\` in 2's complement: \`11100110\`

## 2's Complement Conversion and Range

- **2's Complement Binary Conversion**
  - The bit positions carry the same weight as in unsigned binary, except the leading bit has a negative weight.
  - Converting to decimal:
    - Assign negative weight to the leading bit (e.g., \`-2^7\` for an 8-bit number).
    - Sum the weights corresponding to bits that are \`1\`.

- **Range of Integers in 2's Complement**
  - For \`n\` bits: range is from \`-2^(n-1)\` to \`+2^(n-1) - 1\`.
  - For an 8-bit system:
    - Smallest integer: \`-128\` (\`-2^7\`)
    - Largest integer: \`+127\` (\`2^7-1\`)

## The Term "Negate" in Binary

- In decimal:
  - Negate \`58\` gives \`-58\`
  - Negate \`-722\` gives \`+722\`

- In 2's complement binary:
  - To negate, perform the 2's complement operation.
  - Example: Negate \`1110\` becomes \`0010\`.`}</Markdown>

                </InfoCard>
                </Col>
                <Col md={2} />
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