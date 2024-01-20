import React from "react";
import { Card } from "react-bootstrap"
import Markdown from "react-markdown"
import { InfoCard } from "../components/Cards"
import VideoPlayer from "../components/VideoPlayer"
import Section from "../components/Section";
import CenteredRow from "../components/CenteredRow";
import SplitRow from "../components/SplitRow";
import content from './data/Complements.json'


export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
    return (
        <Section onNext={onNext} ref={ref}>
            <CenteredRow>
                <VideoPlayer src="" />
            </CenteredRow>

            <SplitRow>
                <InfoCard motionProps={{ style: { width: '95%' }, whileTap: {}, whileHover: {} }}>
                    <Markdown>{content["1's Complement"]}</Markdown>
                    <Card style={{ width: '36em', height: '18em', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <strong style={{ color: 'red' }}>Todo: interactive example</strong>
                    </Card>
                </InfoCard>
                <InfoCard motionProps={{ style: { width: '95%' }, whileTap: {}, whileHover: {} }}>
                    <Markdown>{content["2's Complement"]}</Markdown>

                    <Card style={{ width: '36em', height: '18em', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <strong style={{ color: 'red' }}>Todo: interactive example</strong>
                    </Card>
                </InfoCard>
            </SplitRow>
        </Section>
    )
});