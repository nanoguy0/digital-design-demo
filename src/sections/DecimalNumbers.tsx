import React from "react";
import Markdown from "react-markdown"

import { InfoCard, MarkDownCard } from "../components/Cards"
import VideoPlayer from "../components/VideoPlayer"
import Section from "../components/Section";
import SplitRow from "../components/SplitRow";
import CenteredRow from "../components/CenteredRow";

// Lesson contents
import content from './data/DecimalNumbers.json'

// Interactive components
import BaseVisualizer from "../components/interactives/decimalnumbers/BaseVisualizer";
import BytePositionWeight from "../components/interactives/decimalnumbers/BytePositionWeight";

export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {

    return (
        <Section ref={ref} onNext={onNext}>
            <SplitRow>
                <MarkDownCard markdown={content['Understanding Number Bases']} />
                <VideoPlayer src="" />
            </SplitRow>
            <CenteredRow>
                <BaseVisualizer />
            </CenteredRow>
            <CenteredRow noCenter>
                <InfoCard>
                    <Markdown>{content['Digit Position Weight in Decimal System']}</Markdown>
                    <BytePositionWeight />
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