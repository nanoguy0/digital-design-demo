import { Button } from "react-bootstrap";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSignals } from "@preact/signals-react/runtime";

export default ({ ...props }) => {
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
                <div style={{ display: 'inline-block', marginRight: '0.2em' }}>{currentIncrement}</div> {currentIncrement.value == 0 ? null : <div style={{ display: 'inline-block', marginRight: '0.2em' }}>=</div>} {exponentView.value.map(([digit, exponent], i, l) => (<div style={{ display: 'inline-block', marginRight: '0.5em' }} key={exponent}>{digit}<div style={{ display: 'inline-block', color: 'gray' }}>⋅{baseSystem}<sup>{exponent + 1}</sup></div> {(l.length - 1) == i ? '' : '+'} </div>))}</h3>
            <div style={{ position: 'absolute', marginTop: '8em' }}>
                <Button onClick={() => {
                    let newBase = Number.parseInt(prompt("Please enter a number.") || `${baseSystem.value}`);

                    if (newBase > 1) baseSystem.value = newBase;
                    else alert("Please enter a number greater than 1");

                }} style={{ margin: 10 }} variant="secondary">Change Base</Button>
                <Button onClick={() => currentIncrement.value = 0} variant="secondary">Reset</Button>
            </div>
        </>
    );


}
