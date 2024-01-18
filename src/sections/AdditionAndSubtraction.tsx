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
            <Col md={1} />
                <Col className="col-centered" ref={ref}>
                    <MarkDownCard markdown={`## Binary Addition (Unsigned)
- Perform one column at a time, working from right to left.
- Possible cases:
  - 0 + 0 = 0
  - 1 + 0 = 1 (and vice versa)
  - 1 + 1 = 10 in binary (0 sum bit, 1 carry-out)
- When adding three bits (including carry-in):
  - 1 + 1 + 1 = 11 in binary (1 sum bit, 1 carry-out)
### Video Example:
- Augend = 11 (in binary: 1011)
- Addend = 14 (in binary: 1110)
- Sum    = 25 (in binary: 11001)
  - Drop sum bit, carry over the carry bit to the next left column.
  - Final carry-out (leftmost bit) is written outside the normal bit range.
  `} />
                </Col>
                <Col className="col-centered">
                    <VideoPlayer src="" />
                </Col>
                <Col md={1} />
            </Row>
            <Row className="col-centered" >
            <Col md={1} />
                  <Col className="col-centered">
                      <VideoPlayer src="" />
                  </Col>
                <Col className="col-centered" >
                    <MarkDownCard markdown={`## Binary Addition (Signed)
- Use two's complement form with correct bit numbers (pad with zeros for 8 bits).
- Discard final carry-out for operations within the bit size (discard the 9th bit in 8-bit addition).
- Check for overflows, where values exceed the representable range.
  - 8-bit two's complement range: -128 to +127
### Overflow
- Overflows occur when the magnitude of a value exceeds the representable range in a given number of bits.
- All values (inputs and outputs) must fit the representable range for a calculation to be correct.
- More bits per variable mean a greater range but require more memory.
### Video Examples:
- 8-bit addition to add decimal -5 and +34.
  - Convert decimals to binary two's complement form.
    - Positive 5 in binary: 00000101
    - Negative 5 in binary: invert and add 1 (11111011)
    - Decimal 34 in binary: 00100010 (no negation needed)
  - Adding these values:
    - Follow binary addition rules, carry over where necessary.
    - Discard any final carry-out.
    - Result is 29 in decimal (binary: 00011101)

- Adding positive 108 and positive 34 provides an incorrect result because the sum exceeds the 8-bit maximum.
  - The incorrect sum in binary appears as a negative number, which is a sign of overflow.
`} />
                </Col>
                <Col md={1} />
            </Row>
            <Row>
                <Col md={1} />
                <Col className="col-centered">
                <InfoCard motionProps={{style:{width:'95%'}, whileTap: {}, whileHover:{}}}>
                    <Markdown>{`## Long Hand Subtraction
- Similar to learning long hand subtraction in decimal.
- Involves borrowing from the next column.
- In decimal, a borrow from a zero requires carrying a 10 into that column after temporarily holding a value of -1.
- In binary, borrowing works the same, but the carry is weighted as 2.


### Example in Binary
\`\`\`
  0   1   10
  0 1 1 1 10
-   1 1 1  1
____________
1 0 1 1  0
\`\`\`
- 0 minus 1 requires a carry (borrowing 2 in binary, written as '10').
- Temporarily holding -1 and adding the carry changes the value.
- Final subtraction in each column is done after all borrows are completed.
`}</Markdown>
  <Card style={{ width: '36em', height:'18em', alignSelf:'center', alignItems:'center', justifyContent:'center' }}>
  <strong style={{color:'red'}}>Todo: interactive example</strong>
  </Card>
                </InfoCard>
                </Col>
                <Col className="col-centered">   
                <InfoCard motionProps={{style:{width:'95%'}, whileTap: {}, whileHover:{}}}>
                    <Markdown>{`## Adding Negative Number
**(Two's Complement Method)**
- Two's complement operation simplifies negation of numbers.
- Easier for humans and for building circuits compared to longhand subtraction.
- Adding two's complement binary numbers is straightforward.

### Example: 
Decimal -3 and -7 in Binary
1. Convert to binary two's complement form.
2. Simply add the two numbers together.
3. The answer, after conversion back, equals the expected decimal result.`}</Markdown>

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