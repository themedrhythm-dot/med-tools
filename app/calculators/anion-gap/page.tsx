"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, ClinicalNote, Field, inputClassName, Result } from "../calculator-page";

export default function AnionGapPage() {
  const [sodium, setSodium] = useState("");
  const [chloride, setChloride] = useState("");
  const [bicarbonate, setBicarbonate] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [gap, setGap] = useState<number | null>(null);
  const [correctedGap, setCorrectedGap] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    const values = [Number(sodium), Number(chloride), Number(bicarbonate)];
    if (values.some((value) => value <= 0)) {
      setGap(null);
      setCorrectedGap(null);
      setError("Enter sodium, chloride, and bicarbonate values greater than zero.");
      return;
    }
    const anionGap = Number((values[0] - values[1] - values[2]).toFixed(1));
    const serumAlbumin = Number(albumin);
    setGap(anionGap);
    setCorrectedGap(serumAlbumin > 0 ? Number((anionGap + 2.5 * (4 - serumAlbumin)).toFixed(1)) : null);
    setError("");
  }

  return <CalculatorPage title="Anion Gap" description="Calculate the serum anion gap from standard electrolyte measurements." formula="Anion gap = sodium − chloride − bicarbonate" note="Values are in mEq/L. The laboratory’s own reference interval is the appropriate comparator.">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Sodium (mEq/L)"><input className={inputClassName} type="number" value={sodium} onChange={(event) => setSodium(event.target.value)} placeholder="140" /></Field>
      <Field label="Chloride (mEq/L)"><input className={inputClassName} type="number" value={chloride} onChange={(event) => setChloride(event.target.value)} placeholder="104" /></Field>
      <Field label="Bicarbonate (mEq/L)"><input className={inputClassName} type="number" value={bicarbonate} onChange={(event) => setBicarbonate(event.target.value)} placeholder="24" /></Field>
      <Field label="Albumin (g/dL, optional)"><input className={inputClassName} type="number" min="0" step="0.1" value={albumin} onChange={(event) => setAlbumin(event.target.value)} placeholder="4.0" /></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate anion gap</button>
    {error && <p className="mt-4 text-sm font-medium text-rose-600">{error}</p>}
    {gap !== null && (<><Result label="Anion gap" value={`${gap} mEq/L`} detail="Compare with the reference range reported by the testing laboratory." />{correctedGap !== null && <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center"><p className="text-xs font-bold uppercase tracking-wide text-slate-400">Albumin-corrected anion gap</p><p className="mt-2 text-2xl font-bold">{correctedGap} mEq/L</p><p className="mt-1 text-xs text-slate-500">Uses +2.5 mEq/L for each 1 g/dL albumin below 4.</p></div>}</>)}
    <ClinicalNote title="Reference values and importance">
      A traditional reference value is approximately 12 ± 2 mEq/L, but modern analyzers and local methods vary. Albumin is a major unmeasured anion, so a low albumin level can mask an elevated gap. An increased gap can occur in disorders such as ketoacidosis, lactic acidosis, renal failure, or some toxic ingestions; it needs clinical assessment.
    </ClinicalNote>
  </CalculatorPage>;
}
