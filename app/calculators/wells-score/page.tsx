"use client";

import { useState } from "react";
import { buttonClassName, CalculatorPage, Result } from "../calculator-page";

const criteria = [
  ["Clinical signs of DVT (leg swelling and pain with palpation)", 3],
  ["Pulmonary embolism is more likely than an alternative diagnosis", 3],
  ["Heart rate over 100 beats/minute", 1.5],
  ["Immobilization for 3 or more days or surgery in the previous 4 weeks", 1.5],
  ["Previous DVT or pulmonary embolism", 1.5],
  ["Hemoptysis", 1],
  ["Malignancy (on treatment, treated within 6 months, or palliative)", 1],
] as const;

export default function WellsScorePage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const toggle = (index: number) => setSelected((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  const total = selected.reduce((sum, index) => sum + criteria[index][1], 0);

  return <CalculatorPage title="Wells Score for Pulmonary Embolism" description="Estimate the pre-test probability of pulmonary embolism using the Wells criteria." formula="Wells score = sum of selected clinical criteria" note="This tool supports clinical assessment; it does not replace diagnostic testing or clinical judgment.">
    <div className="space-y-3">
      {criteria.map(([label, points], index) => <label key={label} className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-slate-300">
        <input type="checkbox" checked={selected.includes(index)} onChange={() => toggle(index)} className="mt-1 size-4 accent-slate-950" />
        <span className="flex-1 text-sm leading-6 text-slate-700">{label}</span><span className="text-sm font-semibold text-slate-500">+{points}</span>
      </label>)}
    </div>
    <button className={buttonClassName} onClick={() => setScore(total)}>Calculate Wells score</button>
    {score !== null && <Result label="Wells score" value={`${score} points`} detail={score > 6 ? "High probability" : score > 2 ? "Moderate probability" : "Low probability"} />}
  </CalculatorPage>;
}
