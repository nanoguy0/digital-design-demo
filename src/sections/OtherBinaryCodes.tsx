import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { InfoCard, MarkDownCard } from "../components/Cards"
import { motion } from "framer-motion"
import VideoPlayer from "../components/VideoPlayer"
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown"
// import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";


export default React.forwardRef(({ ...props }, ref) => {
    return (
        <Container fluid>
            <Row className="col-centered" >
                <Col md={2} />
                <Col className="col-centered" ref={ref} >
                <InfoCard> 
                    <Markdown>{`## Binary Coded Decimal (BCD)
- BCD stands for Binary Coded Decimal.
- It is used to translate decimal numbers into 4-bit binary words.
- Each decimal digit is represented by a 4-bit binary word.
- The most commonly used BCD is the 8421 scheme, which corresponds with hexadecimal for digits 0-9.
- BCD does not represent decimal values higher than 9 with a single 4-bit word, hence values from \`1010\` (10 decimal) to \`1111\` (15 decimal) are invalid in BCD.
- Example Conversion:
  - Decimal 463 to BCD:
    - 4 -> \`0100\`
    - 6 -> \`0110\`
    - 3 -> \`0011\`
- BCD addition can be tricky because you might end up with an invalid BCD digit which requires adjustment by adding the binary code for decimal 6.
- BCD makes conversion very quick without the need for repeated division.

## Gray Code
- Also known as reflected binary code or minimum error code.
- It is an unweighted binary code.
- A 4-bit word represents numbers between 0 and 15.
- The key feature of Gray code is that only one bit changes between consecutive numbers.
- Gray code prevents glitches when used in digital counters because only one bit changes, reducing the chances of a temporary incorrect count.

## ASCII (American Standard Code for Information Interchange)
- Represents 128 common symbols and control operations with a 7-bit code, often with an 8th bit for error detection.
- Allows for communication between different computer systems.
- Example:
  - Capital "M" -> Hex \`4D\` -> Binary \`1001101\`
- ASCII can represent characters and control operations like \`Tab\` and \`Escape\`.

## Error Detection - Parity Bits
- Technique to identify data transmission errors.
- Choose even or odd parity.
- Include an extra lead bit before the data that makes the total number of '1's in the packet even (or odd for odd parity).
- The receiving machine checks and counts the '1's to determine if there were errors during transmission.
- Simple but not foolproof; cannot detect all errors nor correct them.

## Unicode
- Extends beyond ASCII with the intent to encode all written characters used in any language in the world.
- Contains over 140,000 characters.
- ASCII is a subset of Unicode.`}</Markdown>

                </InfoCard>
                </Col>
                <Col md={2} />
            </Row>

        </Container>
    )
});