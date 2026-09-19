"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, Field, inputClassName, Result } from "../calculator-page";

export default function CorrectedCalciumPage() {
  const [calcium, setCalcium] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [corrected, setCorrected] = useState<number | null>(null);

  function calculate() {
    const measured = Number(calcium);
    const serumAlbumin = Number(albumin);
    if (measured <= 0 || serumAlbumin <= 0) return setCorrected(null);
    setCorrected(Number((measured + 0.8 * (4 - serumAlbumin)).toFixed(1)));
  }

  return <CalculatorPage title="Corrected Calcium" description="Adjust total serum calcium for the albumin concentration." formula="Corrected calcium = measured calcium + 0.8 × (4 − albumin)" note="This conventional equation uses calcium in mg/dL and albumin in g/dL. Ionized calcium may be preferred in some clinical settings.">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Measured calcium (mg/dL)"><input className={inputClassName} type="number" min="0" step="0.1" value={calcium} onChange={(event) => setCalcium(event.target.value)} placeholder="8.2" /></Field>
      <Field label="Albumin (g/dL)"><input className={inputClassName} type="number" min="0" step="0.1" value={albumin} onChange={(event) => setAlbumin(event.target.value)} placeholder="3.0" /></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate corrected calcium</button>
    {corrected !== null && <Result label="Corrected calcium" value={`${corrected} mg/dL`} />}
  </CalculatorPage>;
}
