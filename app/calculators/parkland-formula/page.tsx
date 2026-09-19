"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, ClinicalNote, Field, inputClassName, Result } from "../calculator-page";

export default function ParklandFormulaPage() {
  const [weight, setWeight] = useState("");
  const [tbsa, setTbsa] = useState("");
  const [protocol, setProtocol] = useState<"parkland" | "aba">("parkland");
  const [volume, setVolume] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    const kilograms = Number(weight);
    const burnArea = Number(tbsa);
    if (kilograms <= 0 || burnArea <= 0 || burnArea > 100) {
      setVolume(null);
      setError("Enter a weight greater than zero and a TBSA between 1 and 100%.");
      return;
    }
    setVolume(Math.round((protocol === "parkland" ? 4 : 2) * kilograms * burnArea));
    setError("");
  }

  return <CalculatorPage title="Burn Resuscitation Volume" description="Compare the classic Parkland estimate with the current adult ABA starting-volume approach." formula={protocol === "parkland" ? "Classic Parkland: 4 mL × weight (kg) × TBSA burned (%)" : "ABA adult starting estimate: 2 mL × weight (kg) × TBSA burned (%)"} note="The first-half timing begins at the time of injury, not arrival. These are starting estimates; resuscitation must be titrated to clinical response.">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Weight (kg)"><input className={inputClassName} type="number" min="1" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="70" /></Field>
      <Field label="Total body surface area burned (%)"><input className={inputClassName} type="number" min="1" max="100" value={tbsa} onChange={(event) => setTbsa(event.target.value)} placeholder="25" /></Field>
      <Field label="Calculation approach"><select className={inputClassName} value={protocol} onChange={(event) => setProtocol(event.target.value as "parkland" | "aba")}><option value="parkland">Classic Parkland — 4 mL/kg/%TBSA</option><option value="aba">ABA adult starting estimate — 2 mL/kg/%TBSA</option></select></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate fluid volume</button>
    {error && <p className="mt-4 text-sm font-medium text-rose-600">{error}</p>}
    {volume !== null && <><Result label="24-hour starting volume" value={`${volume.toLocaleString()} mL`} detail={protocol === "parkland" ? "Classic Parkland calculation" : "ABA adult starting-volume calculation"} /><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-slate-50 p-4 text-center"><p className="text-xs font-bold uppercase tracking-wide text-slate-400">First 8 hours from injury</p><p className="mt-2 text-xl font-bold">{(volume / 2).toLocaleString()} mL</p></div><div className="rounded-xl bg-slate-50 p-4 text-center"><p className="text-xs font-bold uppercase tracking-wide text-slate-400">Following 16 hours</p><p className="mt-2 text-xl font-bold">{(volume / 2).toLocaleString()} mL</p></div></div></>}
    <ClinicalNote title="When this matters">
      Formal IV resuscitation is generally considered for adults with burns covering 20% or more of total body surface area. Count partial- and full-thickness burns, not superficial burns. The classic Parkland formula uses 4 mL/kg/%TBSA; current American Burn Association guidance suggests beginning adults at 2 mL/kg/%TBSA to reduce fluid overload, then titrating to urine output. This page is for adults—children require different assessment and added maintenance fluid.
    </ClinicalNote>
  </CalculatorPage>;
}
