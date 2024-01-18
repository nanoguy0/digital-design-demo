import { Button, Col, Container, Row } from "react-bootstrap"
import { InfoCard, MarkDownCard } from "../components/Cards"
import { motion } from "framer-motion"
import VideoPlayer from "../components/VideoPlayer"
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown"
// import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const BinaryBaseVisualizer = ({...props}) => {
    const [parentRefAnimate] = useAutoAnimate();

    const [currentIncrement, setIncrement] = useState(0);
    const [baseSystem, setBaseSystem] = useState(10);
    const [exponentView, setExponentView] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => setIncrement(currentIncrement + 1), 500);
        return () => clearInterval(interval);
    });

    // Update the exponent view
    useEffect(() => {
        let decimal = currentIncrement;
        let base = baseSystem;
        let exponent = 0;
        let pairs = [];

        while (decimal > 0) {
            let remainder = decimal % base;
            decimal = Math.floor(decimal / base);
            pairs.push([remainder, exponent]);
            exponent++;
        }

        setExponentView(pairs.reverse() as any);
    }, [currentIncrement, baseSystem]);

    return (
        <>
            <h3 style={{ width: '100%', textAlign: 'center' }} ref={parentRefAnimate}>
                <div style={{ display: 'inline-block', marginRight: '0.2em' }}>{currentIncrement}</div> {currentIncrement == 0 ? null : <div style={{ display: 'inline-block', marginRight: '0.2em' }}>=</div>} {
                    exponentView.map(([digit, exponent], i, l) => (<div style={{ display: 'inline-block', marginRight: '0.5em' }} key={exponent}>{digit}⋅{baseSystem}<sup>{exponent + 1}</sup> {(l.length - 1) == i ? '' : '+'} </div>))
                }</h3 >
            <div style={{ position: 'absolute', marginTop: '8em' }} >
                <Button onClick={() => setBaseSystem(Number.parseInt(prompt("Please enter a number.") || '') || 10)} style={{ margin: 10 }} variant="secondary">Change Base</Button>
                <Button onClick={() => setIncrement(0)} variant="secondary">Reset</Button>
            </div>
        </>
    )


}


export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
    return (
        <Container fluid style={{ marginBottom: "90vh"}}>
            <Row>
                <Col md={1} />
                <Col className="col-centered" ref={ref}>
                    <MarkDownCard markdown={`## Understanding Number Bases
- Binary means composed of two parts, only using digits 0 and 1.
- Decimal numbers are more commonly used, composed of digits 0 through 9.
- Different cultures have used various numeral systems to record numbers.
- Base-10 is common, likely due to humans having 10 fingers (digits).

*The base of a number is indicated by a subscript. By default they are 10.*
`} />
                </Col>
                <Col className="col-centered">
                    <VideoPlayer src="" />
                </Col>
                <Col md={1} />
            </Row>
            <Row className="col-centered" >
                <Col md={2} />
                <Col className="col-centered" >
                    <BinaryBaseVisualizer />

                </Col>
                <Col md={2} />
            </Row>
            <Row className="col-centered">
                <Col md={2} />
                <Col >
                    <InfoCard>
                        <Markdown>{`## Digit Position Weight in Decimal System
- Each digit position has a weight, based on powers of 10.
- Position to the left of the radix point multiplied by increasing powers of 10.`}</Markdown>
                        <h1 style={{ alignSelf: 'center', color: 'red', margin: '2em' }}><em><strong>todo</strong>: add image/animation of weight</em></h1>
                        <Markdown>{`## Binary Numerals (Base-2)
- Binary uses two unique digits (0, 1), known as bits (binary digits).
- Similar positional weighting scheme to decimal, but base is 2.
- Increasing powers of 2 from the radix point to the left, and decreasing to the right.
## Counting in Binary
- Counting in binary from 0 to 15 using 4 bits.
- Most significant bit (MSB): leftmost bit (carries largest weight).
- Least significant bit (LSB): rightmost bit.
## Patterns in Binary Sequences
- Identifying patterns such as alternating zeros and ones with doubling periodicity for each digit position moving left.
- Digital design is often about recognizing and leveraging such patterns.

`}</Markdown>
                    </InfoCard>
                </Col>
                <Col md={2} />
            </Row>
            <Row>
                <Col md={1} />
                <Col className="col-centered"><VideoPlayer src="" /></Col>
                <Col className="col-centered">   <MarkDownCard markdown={`## Converting Binary To Decimal
1. Write the binary number, spacing out each bit.
2. Write the weights under each bit, which are powers of 2 starting from 0 moving left.
3. Multiply each bit by its weight.
    - If the bit is 0, the result is 0 (ignore these in the next step).
    - If the bit is 1, the result is the weight value itself.
4. Add the non-zero results to get the decimal equivalent.

### Fraction Conversion
- Convert binary fractions by using negative powers of 2 starting from the radix point.
- The first position to the right of the radix point has a weight of \`2^-1\`, decreasing by 1 for each subsequent position.
                `} /></Col>


                <Col md={1} />
            </Row>
            <Row>
                <Col md={1} />
                <Col className="col-centered"><VideoPlayer src="" /></Col>
                <Col className="col-centered">   <MarkDownCard markdown={`## Decimal To Binary
### Shorthand Sum-of-Weights Method (for Integers)

- **Method Overview**: Break down the decimal number into powers of 2, and create a binary number with '1's where those powers exist and '0's elsewhere.

**Begin the sum with the power of 2 just below the decimal number.**

### Repeated Divide-by-2 Method (for Integers)

**Steps**:
1. Draw a table with two columns; 'quo' (quotient) and 'rem' (remainder).
2. Divide the decimal number by 2, write down the quotient and remainder.
3. Repeat dividing the updated quotient by 2 and noting the new quotient and remainder until you reach a quotient of 0.
4. Read the binary from the 'rem' column from bottom (most significant bit) to top (least significant bit).


### Repeated Multiply-by-2 Method (for Fractions)

**Steps**:
1. Draw a two-column table with 'mant' (mantissa, representing the fraction) and 'cant' (carry, the whole number part).
2. Multiply the fraction by 2, place the fraction part in 'mant' and the whole number part in 'cant'.
3. Repeat the multiplication for 'mant' by 2 and separating the resulting carry.
4. The binary fraction is obtained by reading the 'cant' column from top (immediately after the binary point) to bottom.
`} /></Col>


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