import React from "react";
import Markdown from "react-markdown"
import { InfoCard, MarkDownCard } from "../components/Cards"
import Section from "../components/Section";
import CenteredRow from "../components/CenteredRow";
import SplitRow from "../components/SplitRow";
import content from './data/OctalHexadecimal.json'

export default React.forwardRef(({ onNext, ...props }: { onNext: () => void }, ref) => {
    return (
        <Section ref={ref} onNext={onNext}>
            <CenteredRow>
                <MarkDownCard markdown={content['Introduction']} />
            </CenteredRow>
            <SplitRow>
                <MarkDownCard markdown={content['Binary to Hexadecimal Conversion']} />
                <InfoCard>
                    <Markdown>{content['Binary to Octal Conversion']}</Markdown>
                    <h1 style={{ alignSelf: 'center', color: 'red', margin: '2em' }}><em><strong>todo</strong>: interactive example</em></h1>
                </InfoCard>
            </SplitRow>

            <SplitRow>
                <div>
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
                        The final result is hexadecimal 6BC.
                    </em>
                </div>
                <MarkDownCard markdown={content['Hexadecimal to Binary to Decimal']} />
            </SplitRow>
        </Section>
    )
});