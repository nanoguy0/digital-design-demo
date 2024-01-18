
import { useSignal, signal } from '@preact/signals-react';
import { useSignalEffect, useSignals } from '@preact/signals-react/runtime';

import SplashHeader from './components/SplashHeader';

import { MarkDownCard, InfoCard } from './components/Cards';
import Introduction from './sections/Introduction';
import DecimalNumbers from './sections/DecimalNumbers';
import { useRef } from 'react';
import OctalHexadecimal from './sections/OctalHexadecimal';
import Complements from './sections/Complements';
import SignedBinary from './sections/SignedBinary';
import AdditionAndSubtraction from './sections/AdditionAndSubtraction';
import OtherBinaryCodes from './sections/OtherBinaryCodes';
import Ending from './sections/Ending';

const testMarkdown = `## Understanding Number Bases
- Binary means composed of two parts, only using digits 0 and 1.
- Decimal numbers are more commonly used, composed of digits 0 through 9.
- Counting with binary numbers, e.g., fingers on a hand without using number 5.`;


function App() {
  useSignals();
  const decimalNumbersRef = useRef<HTMLDivElement>(null);
  const octalHexadecimalRef = useRef<HTMLDivElement>(null);
  const complementsRef = useRef<HTMLDivElement>(null);
  const signedBinaryRef = useRef<HTMLDivElement>(null);
  const additionSubtractionRef = useRef<HTMLDivElement>(null);
  const otherBinaryCodesRef = useRef<HTMLDivElement>(null);


  return (<>
    <SplashHeader />
    <Introduction onStart={() => decimalNumbersRef.current?.scrollIntoView()}/>
    <DecimalNumbers onNext={() => octalHexadecimalRef.current?.scrollIntoView()} ref={decimalNumbersRef}/>
    <OctalHexadecimal ref={octalHexadecimalRef} onNext={() => complementsRef.current?.scrollIntoView()}/>
    <Complements ref={complementsRef} onNext={() => signedBinaryRef.current?.scrollIntoView()}/>
    <SignedBinary ref={signedBinaryRef} onNext={() => additionSubtractionRef.current?.scrollIntoView()}/>
    <AdditionAndSubtraction ref={additionSubtractionRef} onNext={() => otherBinaryCodesRef.current?.scrollIntoView()}/>
    <OtherBinaryCodes ref={otherBinaryCodesRef}/>
    <Ending />
    </>
  )

}

export default App;
