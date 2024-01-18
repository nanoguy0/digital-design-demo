import { Button, Col, Container, Row } from "react-bootstrap"
import { InfoCard, MarkDownCard } from "../components/Cards"
import { motion } from "framer-motion"
import VideoPlayer from "../components/VideoPlayer"
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown"
// import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";


export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
    return (
        <Container fluid style={{ marginBottom: "90vh"}}>
            <Row>
                <Col md={1} />
                <Col className="col-centered" ref={ref}>
                    <MarkDownCard markdown={`
## Introduction

Numbers can be represented in any base system. Here are some common ones.

## Octal (Base 8)
- "Oct" prefix as in octopus, octagon
- Largest digit is 7
- Counting in octal matches decimal from 0-7
- Beyond 7, next digit position used (e.g., octal 10 for decimal 8)

**Octal Examples**
- Decimal 8 in octal: 10 (8 + 0)
- Decimal 12 in octal: 14 (8 + 4)
- Decimal 16 in octal: 20 (2 * 8 + 0)

## Hexadecimal (Base 16)
- "Hex" means 6, "deci" means 10; combined is 16
- Uses digits and letters (A-F) for values 10-15
- Useful for computer instructions (assembly language)
  
**Hexadecimal Examples**
- Decimal 10 = A
- Decimal 15 = F
- Decimal 16 = 10 (16 + 0)
- Decimal 20 = 14 (16 + 4)`} />
                </Col>
                <Col md={1} />
            </Row>
            <Row className="col-centered" >
                <Col md={2} />
                <Col className="col-centered" >

                </Col>
                <Col md={2} />
            </Row>
            <Row>
                <Col md={1} />
                <Col className="col-centered"><MarkDownCard markdown={`
## Binary to Hexadecimal Conversion
- Direct relationship with binary (easier than decimal)
- Uses fewer digits than binary (easier to read)

**Binary "Nibble"**
- 4-bit binary sequence = 1 hex digit
- Nibble: binary to hexadecimal direct conversion

**Conversion Example**
- Hexadecimal 5C0F: \`[0101] [1100] [0000] [1111]\`
## Converting Binary to Hexadecimal
- Split binary into groups of 4 bits (nibbles) from right to left
- Replace each group with hexadecimal equivalent

**Binary to Hex Example**
- Binary: \`11000111000101\`
- Hexadecimal: \`[0001] [1000] [1110] [0010]\` --> 1E2`} /></Col>
                <Col className="col-centered">   <InfoCard>
                    <Markdown>{`## Binary to Octal Conversion
- Octal numbers correspond to 3-bit binary codes

**Conversion Example**
- Octal 463: \`[100] [110] [011]\`
`}</Markdown>
 <h1 style={{ alignSelf: 'center', color: 'red', margin: '2em' }}><em><strong>todo</strong>: interactive example</em></h1>
                    </InfoCard></Col>


                <Col md={1} />
            </Row>
            <Row>
                <Col md={1} />
                <Col className="col-centered">
                    <h2 style={{ alignSelf: 'center', color: 'red', margin: '2em' }}>todo: video</h2>
                    <em>
Converting 1724 (Decimal) to Hexadecimal
- Set up a table with a column for the quotient (quo) and remainder (rem).
- Repeatedly divide by 16 and record the quotient and the decimal remainder.
- Convert the decimal remainder into its hexadecimal equivalent and note it in the hexadecimal remainder (Hex rem) column.
- Continue dividing until the quotient is 0.
- The hexadecimal number is read from the bottom to top of the Hex rem column.

In the example of converting 1724 in decimal to hexadecimal:
1724 ÷ 16 = 107 with remainder 12 (C in hexadecimal)
107 ÷ 16 = 6 with remainder 11 (B in hexadecimal)
6 ÷ 16 = 0 with remainder 6 (6 in hexadecimal)
The final result is hexadecimal 6BC.</em></Col>
                <Col className="col-centered">   <MarkDownCard markdown={`## Hexadecimal to Binary to Decimal
1. Convert the hexadecimal number into binary by replacing each hex digit with its 4-bit binary equivalent (nibble).
2. Convert the binary number into decimal by multiplying each bit by its relative weight (power of 2) and summing the results.

### Direct Hexadecimal to Decimal
1. Use the position weights that correspond to powers of 16 (since hexadecimal is base 16).
2. Multiply each hex digit by its respective power of 16, based on its position relative to the radix point.

- 'A' (which is 10 in decimal) is at the radix point, so it gets multiplied by 16^0.
- '4' is to the left, so it gets multiplied by 16^1.
- 'D' (which is 13 in decimal) is to the far left, so it gets multiplied by 16^2._

Adding all these products together yields the decimal value of the hexadecimal number.

## Converting Decimal to Hexadecimal
The process follows a division method similar to converting decimal to binary, now with a base of 16.

## Converting Octal to Decimal and Vice Versa
The same patterns and approaches used for hexadecimal apply to octal, with the base being 8 instead of 16. For conversion:

- Octal to decimal employs multiplication by powers of 8 for each octal digit's position.
- Decimal to octal uses the "repeated divide by 8" method, similarly noting quotient and remainder until the quotient is 0.

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