"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, ClinicalNote, Field, inputClassName, Result } from "../calculator-page";

export default function CorrectedCalciumPage() {
  const [calcium, setCalcium] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [corrected, setCorrected] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    const measured = Number(calcium);
    const serumAlbumin = Number(albumin);
    if (measured <= 0 || serumAlbumin <= 0) {
      setCorrected(null);
      setError("Enter calcium and albumin values greater than zero.");
      return;
    }
    setCorrected(Number((measured + 0.8 * (4 - serumAlbumin)).toFixed(1)));
    setError("");
  }

  return <CalculatorPage title="Corrected Calcium" description="Adjust total serum calcium for the albumin concentration." formula="Corrected calcium = measured calcium + 0.8 × (4 − albumin)" note="This conventional equation uses calcium in mg/dL and albumin in g/dL. Ionized calcium may be preferred in some clinical settings.">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Measured calcium (mg/dL)"><input className={inputClassName} type="number" min="0" step="0.1" value={calcium} onChange={(event) => setCalcium(event.target.value)} placeholder="8.2" /></Field>
      <Field label="Albumin (g/dL)"><input className={inputClassName} type="number" min="0" step="0.1" value={albumin} onChange={(event) => setAlbumin(event.target.value)} placeholder="3.0" /></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate corrected calcium</button>
    {error && <p className="mt-4 text-sm font-medium text-rose-600">{error}</p>}
    {corrected !== null && <Result label="Corrected calcium" value={`${corrected} mg/dL`} />}
    <ClinicalNote title="Reference values and limits">
      A typical total-calcium reference range is about 8.5–10.5 mg/dL, but use the laboratory’s stated range. This conventional correction is an estimate, not a measurement of biologically active calcium, and can be inaccurate in critical illness, kidney disease, or marked hypoalbuminemia. When the result will change management, an ionized-calcium measurement is often more informative.
    </ClinicalNote>
  </CalculatorPage>;
}
