import React from "react";
import { Button } from "react-bootstrap"
import Markdown from "react-markdown"

import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";

import { InfoCard, MarkDownCard } from "../components/Cards"
import VideoPlayer from "../components/VideoPlayer"
import Section from "../components/Section";
import SplitRow from "../components/SplitRow";
import CenteredRow from "../components/CenteredRow";
import content from './data/DecimalNumbers.json'

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSignals } from "@preact/signals-react/runtime";

const BinaryBaseVisualizer = ({ ...props }) => {
    useSignals();
    
    const [parentRefAnimate] = useAutoAnimate();
    
    const currentIncrement = useSignal(0);
    const baseSystem = useSignal(10);

    useSignalEffect(() => {
        const interval = setInterval(() => currentIncrement.value++, 500);
        return () => clearInterval(interval);
    });

    // Update the exponent view
    const exponentView = useComputed(() => {
        let decimal = currentIncrement.value;
        let exponent = 0;
        let pairs = [];

        while (decimal > 0) {
            let remainder = decimal % baseSystem.value;
            decimal = Math.floor(decimal / baseSystem.value);
            pairs.push([remainder, exponent]);
            exponent++;
        }

       return pairs.reverse();
    });

    return (
        <>
            <h3 style={{ width: '100%', overflow: 'hidden', textAlign: 'center' }} ref={parentRefAnimate}>
                <div style={{ display: 'inline-block', marginRight: '0.2em' }}>{currentIncrement}</div> {currentIncrement.value == 0 ? null : <div style={{ display: 'inline-block', marginRight: '0.2em' }}>=</div>} {
                    exponentView.value.map(([digit, exponent], i, l) => (<div style={{ display: 'inline-block', marginRight: '0.5em' }} key={exponent}>{digit}<div style={{ display: 'inline-block', color: 'gray' }}>⋅{baseSystem}<sup>{exponent + 1}</sup></div> {(l.length - 1) == i ? '' : '+'} </div>))
                }</h3 >
            <div style={{ position: 'absolute', marginTop: '8em' }} >
                <Button onClick={() => baseSystem.value = Number.parseInt(prompt("Please enter a number.") || '') || 10} style={{ margin: 10 }} variant="secondary">Change Base</Button>
                <Button onClick={() => currentIncrement.value = 0} variant="secondary">Reset</Button>
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