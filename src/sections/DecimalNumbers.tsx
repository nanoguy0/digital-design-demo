import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import Markdown from "react-markdown"

// import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";

import { InfoCard, MarkDownCard } from "../components/Cards"
import VideoPlayer from "../components/VideoPlayer"
import Section from "../components/Section";
import SplitRow from "../components/SplitRow";
import CenteredRow from "../components/CenteredRow";
import content from './data/DecimalNumbers.json'

import { useAutoAnimate } from "@formkit/auto-animate/react";

const BinaryBaseVisualizer = ({ ...props }) => {
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
            <h3 style={{ width: '100%', overflow: 'hidden', textAlign: 'center' }} ref={parentRefAnimate}>
                <div style={{ display: 'inline-block', marginRight: '0.2em' }}>{currentIncrement}</div> {currentIncrement == 0 ? null : <div style={{ display: 'inline-block', marginRight: '0.2em' }}>=</div>} {
                    exponentView.map(([digit, exponent], i, l) => (<div style={{ display: 'inline-block', marginRight: '0.5em' }} key={exponent}>{digit}⋅<div style={{ display: 'inline-block', color: 'gray' }}>{baseSystem}<sup>{exponent + 1}</sup></div> {(l.length - 1) == i ? '' : '+'} </div>))
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
        <Section ref={ref} onNext={onNext}>
            <SplitRow>
                <MarkDownCard markdown={content['Understanding Number Bases']} />
                <VideoPlayer src="" />
            </SplitRow>
            <CenteredRow>
                <BinaryBaseVisualizer />
            </CenteredRow>
            <CenteredRow noCenter>
                <InfoCard>
                    <Markdown>{content['Digit Position Weight in Decimal System']}</Markdown>
                    <h1 style={{ alignSelf: 'center', color: 'red', margin: '2em' }}><em><strong>todo</strong>: add image/animation of weight</em></h1>
                    <Markdown>{content['Binary Numerals (Base-2)']}</Markdown>
                </InfoCard>
            </CenteredRow>
            <SplitRow>
                <VideoPlayer src="" />
                <MarkDownCard markdown={content['Converting Binary To Decimal']} />
            </SplitRow>
            <SplitRow>
                <VideoPlayer src="" />
                <MarkDownCard markdown={content['Decimal To Binary']} />
            </SplitRow>
        </Section>
    )
});