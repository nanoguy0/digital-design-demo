
import { useRef } from 'react';
import { useSignals } from '@preact/signals-react/runtime';

import SplashHeader from './components/SplashHeader';
import LiveSiteTimeline from './components/LiveSiteTimeline';

import Introduction from './sections/Introduction';
import DecimalNumbers from './sections/DecimalNumbers';
import OctalHexadecimal from './sections/OctalHexadecimal';
import Complements from './sections/Complements';
import SignedBinary from './sections/SignedBinary';
import AdditionAndSubtraction from './sections/AdditionAndSubtraction';
import OtherBinaryCodes from './sections/OtherBinaryCodes';
import Ending from './sections/Ending';


function App() {
  useSignals();
  const introductionRef = useRef<HTMLDivElement>(null);
  const decimalNumbersRef = useRef<HTMLDivElement>(null);
  const octalHexadecimalRef = useRef<HTMLDivElement>(null);
  const complementsRef = useRef<HTMLDivElement>(null);
  const signedBinaryRef = useRef<HTMLDivElement>(null);
  const additionSubtractionRef = useRef<HTMLDivElement>(null);
  const otherBinaryCodesRef = useRef<HTMLDivElement>(null);
  const endingRef = useRef<HTMLDivElement>(null);

  const map = [
    { name: "Intro", anchor: introductionRef },
    { name: "Decimal", anchor: decimalNumbersRef },
    { name: "Octal/Hexadecimal", anchor: octalHexadecimalRef },
    { name: "Complements", anchor: complementsRef },
    { name: "Signed Binary", anchor: signedBinaryRef },
    { name: "Add/Sub Binary", anchor: additionSubtractionRef },
    { name: "Other Codes", anchor: otherBinaryCodesRef },
    { name: "Conclusion", anchor: endingRef },
  ]
  return (<>
    <LiveSiteTimeline map={map}/>
    <SplashHeader />
    <Introduction ref={introductionRef} onStart={() => decimalNumbersRef.current?.scrollIntoView()}/>
    <DecimalNumbers ref={decimalNumbersRef} onNext={() => octalHexadecimalRef.current?.scrollIntoView()} />
    <OctalHexadecimal ref={octalHexadecimalRef} onNext={() => complementsRef.current?.scrollIntoView()}/>
    <Complements ref={complementsRef} onNext={() => signedBinaryRef.current?.scrollIntoView()}/>
    <SignedBinary ref={signedBinaryRef} onNext={() => additionSubtractionRef.current?.scrollIntoView()}/>
    <AdditionAndSubtraction ref={additionSubtractionRef} onNext={() => otherBinaryCodesRef.current?.scrollIntoView()}/>
    <OtherBinaryCodes ref={otherBinaryCodesRef}/>
    <Ending ref={endingRef}/>
    </>
  )

}

export default App;
