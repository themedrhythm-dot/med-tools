"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, ClinicalNote, Field, inputClassName, Result } from "../calculator-page";

export default function GFRPage() {
  const [age, setAge] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [sex, setSex] = useState<"female" | "male">("female");
  const [gfr, setGfr] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    const patientAge = Number(age);
    const scr = Number(creatinine);
    if (patientAge < 18 || scr <= 0) {
      setGfr(null);
      setError("Enter an adult age (18 years or older) and a serum creatinine value greater than zero.");
      return;
    }
    const isFemale = sex === "female";
    const kappa = isFemale ? 0.7 : 0.9;
    const alpha = isFemale ? -0.241 : -0.302;
    const result = 142 * Math.min(scr / kappa, 1) ** alpha * Math.max(scr / kappa, 1) ** -1.2 * 0.9938 ** patientAge * (isFemale ? 1.012 : 1);
    setGfr(Math.round(result));
    setError("");
  }

  return <CalculatorPage title="GFR Calculator" description="Estimate glomerular filtration rate using the 2021 CKD-EPI creatinine equation." formula="eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1.200 × 0.9938^age × sex factor" note="This estimate is for adults and uses serum creatinine in mg/dL. Interpret it alongside the clinical picture.">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Age (years)"><input className={inputClassName} type="number" min="1" value={age} onChange={(event) => setAge(event.target.value)} placeholder="45" /></Field>
      <Field label="Serum creatinine (mg/dL)"><input className={inputClassName} type="number" min="0" step="0.01" value={creatinine} onChange={(event) => setCreatinine(event.target.value)} placeholder="1.0" /></Field>
      <Field label="Sex used by the equation"><select className={inputClassName} value={sex} onChange={(event) => setSex(event.target.value as "female" | "male")}><option value="female">Female</option><option value="male">Male</option></select></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate eGFR</button>
    {error && <p className="mt-4 text-sm font-medium text-rose-600">{error}</p>}
    {gfr !== null && <Result label="Estimated GFR" value={`${gfr} mL/min/1.73 m²`} />}
    <ClinicalNote title="How to interpret this estimate">
      An eGFR below 60 for at least 3 months can support a diagnosis of chronic kidney disease; 60–89 may still be normal without other evidence of kidney damage. A single result does not diagnose disease. This equation is for adults and is less reliable with rapidly changing kidney function, pregnancy, extremes of muscle mass, or non-steady-state creatinine.
    </ClinicalNote>
  </CalculatorPage>;
}
