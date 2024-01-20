import React from "react";
import { Card } from "react-bootstrap"
import Markdown from "react-markdown"
import { InfoCard, MarkDownCard } from "../components/Cards"
import Section from "../components/Section";
import SplitRow from "../components/SplitRow";
import VideoPlayer from "../components/VideoPlayer"
import content from "./data/AdditionAndSubtraction.json"


export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
  return (
    <Section onNext={onNext} ref={ref}>
      <SplitRow>
        <MarkDownCard markdown={content['Binary Addition (Unsigned)']} />
        <VideoPlayer src="" />
      </SplitRow>
      <SplitRow>
        <VideoPlayer src="" />
        <MarkDownCard markdown={content['Binary Addition (Signed)']} />
      </SplitRow>
      <SplitRow>
        <InfoCard motionProps={{ style: { width: '95%' }, whileTap: {}, whileHover: {} }}>
          <Markdown>{content['Long Hand Subtraction']}</Markdown>
          <Card style={{ width: '36em', height: '18em', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <strong style={{ color: 'red' }}>Todo: interactive example</strong>
          </Card>
        </InfoCard>
        <InfoCard motionProps={{ style: { width: '95%' }, whileTap: {}, whileHover: {} }}>
          <Markdown>{content['Adding Negative Number']}</Markdown>

          <Card style={{ width: '36em', height: '18em', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <strong style={{ color: 'red' }}>Todo: interactive example</strong>
          </Card>
        </InfoCard>
      </SplitRow>
    </Section>
  )
});