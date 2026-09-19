"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, Field, inputClassName, Result } from "../calculator-page";

export default function AnionGapPage() {
  const [sodium, setSodium] = useState("");
  const [chloride, setChloride] = useState("");
  const [bicarbonate, setBicarbonate] = useState("");
  const [gap, setGap] = useState<number | null>(null);

  function calculate() {
    const values = [Number(sodium), Number(chloride), Number(bicarbonate)];
    if (values.some((value) => value <= 0)) return setGap(null);
    setGap(Number((values[0] - values[1] - values[2]).toFixed(1)));
  }

  return <CalculatorPage title="Anion Gap" description="Calculate the serum anion gap from standard electrolyte measurements." formula="Anion gap = sodium − chloride − bicarbonate" note="Values are in mEq/L. Reference ranges vary by laboratory and albumin concentration.">
    <div className="grid gap-6 sm:grid-cols-3">
      <Field label="Sodium (mEq/L)"><input className={inputClassName} type="number" value={sodium} onChange={(event) => setSodium(event.target.value)} placeholder="140" /></Field>
      <Field label="Chloride (mEq/L)"><input className={inputClassName} type="number" value={chloride} onChange={(event) => setChloride(event.target.value)} placeholder="104" /></Field>
      <Field label="Bicarbonate (mEq/L)"><input className={inputClassName} type="number" value={bicarbonate} onChange={(event) => setBicarbonate(event.target.value)} placeholder="24" /></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate anion gap</button>
    {gap !== null && <Result label="Anion gap" value={`${gap} mEq/L`} detail={gap > 12 ? "Above the typical reference range" : "Within a typical reference range"} />}
  </CalculatorPage>;
}
