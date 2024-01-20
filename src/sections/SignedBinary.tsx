import React from "react";
import Markdown from "react-markdown"
import { InfoCard } from "../components/Cards"
import Section from "../components/Section";
import CenteredRow from "../components/CenteredRow";
import content from './data/SignedBinary.json'

export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
  return (
    <Section onNext={onNext} ref={ref}>
      <CenteredRow>
        <InfoCard>
          <Markdown>{content['Signed Binary Numbers']}</Markdown>
        </InfoCard>
      </CenteredRow>
    </Section>
  )
});