"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, Field, inputClassName, Result } from "../calculator-page";

export default function ParklandFormulaPage() {
  const [weight, setWeight] = useState("");
  const [tbsa, setTbsa] = useState("");
  const [volume, setVolume] = useState<number | null>(null);

  function calculate() {
    const kilograms = Number(weight);
    const burnArea = Number(tbsa);
    if (kilograms <= 0 || burnArea <= 0 || burnArea > 100) return setVolume(null);
    setVolume(Math.round(4 * kilograms * burnArea));
  }

  return <CalculatorPage title="Parkland Formula" description="Estimate initial crystalloid fluid requirements for adult burn resuscitation." formula="24-hour fluid volume = 4 mL × weight (kg) × TBSA burned (%)" note="Give half of the calculated volume in the first 8 hours from the time of burn, and the rest over the following 16 hours. Titrate to clinical response and local protocols.">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Weight (kg)"><input className={inputClassName} type="number" min="1" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="70" /></Field>
      <Field label="Total body surface area burned (%)"><input className={inputClassName} type="number" min="1" max="100" value={tbsa} onChange={(event) => setTbsa(event.target.value)} placeholder="25" /></Field>
    </div>
    <button className={buttonClassName} onClick={calculate}>Calculate fluid volume</button>
    {volume !== null && <><Result label="24-hour fluid volume" value={`${volume.toLocaleString()} mL`} /><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-slate-50 p-4 text-center"><p className="text-xs font-bold uppercase tracking-wide text-slate-400">First 8 hours</p><p className="mt-2 text-xl font-bold">{(volume / 2).toLocaleString()} mL</p></div><div className="rounded-xl bg-slate-50 p-4 text-center"><p className="text-xs font-bold uppercase tracking-wide text-slate-400">Next 16 hours</p><p className="mt-2 text-xl font-bold">{(volume / 2).toLocaleString()} mL</p></div></div></>}
  </CalculatorPage>;
}
