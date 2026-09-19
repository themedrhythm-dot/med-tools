"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  { id: "inspect", label: "Inspect", description: "Observe respiratory rate, work of breathing, chest shape, and symmetry before touching the patient.", hint: "Watch for equal chest movement." },
  { id: "palpate", label: "Palpate", description: "Assess tracheal position, chest expansion, and tactile vocal fremitus using comparable points on both sides.", hint: "Compare the left and right sides." },
  { id: "percuss", label: "Percuss", description: "Percuss matching lung fields from top to bottom to compare resonance across both sides.", hint: "A dull note can suggest reduced air beneath the point." },
  { id: "auscultate", label: "Auscultate", description: "Listen at paired lung zones from apices to bases, comparing breath sounds and added sounds.", hint: "Use a systematic side-to-side pattern." },
] as const;

type StepId = (typeof steps)[number]["id"];

export default function RespiratoryExaminationPage() {
  const [activeStep, setActiveStep] = useState<StepId>("inspect");
  const active = steps.find((step) => step.id === activeStep)!;

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <Link href="/clinical-examination/medicine" className="text-sm font-medium text-slate-400 transition hover:text-slate-700">← Medicine systems</Link>

        <header className="mt-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Interactive sample</p>
          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Respiratory examination.</h1>
          <p className="mt-4 text-base leading-7 text-slate-500">Hover over a step to change the visual. On a phone, tap a step instead.</p>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid grid-cols-2 gap-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onFocus={() => setActiveStep(step.id)}
                  onClick={() => setActiveStep(step.id)}
                  className={`rounded-2xl border p-4 text-left transition ${activeStep === step.id ? "border-slate-950 bg-slate-950 text-white shadow-sm" : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"}`}
                >
                  <span className={`text-xs font-semibold ${activeStep === step.id ? "text-slate-300" : "text-slate-400"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-5 block text-sm font-bold">{step.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{active.label}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{active.description}</p>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-700">{active.hint}</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white p-6 shadow-sm sm:p-10">
            <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="relative mx-auto max-w-md">
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Hover visual</p>
              <svg viewBox="0 0 360 450" className="mx-auto mt-4 w-full max-w-[360px]" role="img" aria-label={`Respiratory examination: ${active.label}`}>
                <path d="M131 72c0-25 98-25 98 0v53c0 22 25 28 40 40 26 21 33 59 33 121v104c0 20-16 36-36 36H94c-20 0-36-16-36-36V286c0-62 7-100 33-121 15-12 40-18 40-40V72Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                <path d="M180 84v82" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                <path d="M180 164c-26 0-51 20-60 58-6 25-4 67 20 91 13 13 27 12 40-3V164Z" fill={activeStep === "inspect" ? "#bae6fd" : "#e0f2fe"} stroke="#7dd3fc" strokeWidth="3" className={activeStep === "inspect" ? "origin-center animate-pulse" : ""} />
                <path d="M180 164c26 0 51 20 60 58 6 25 4 67-20 91-13 13-27 12-40-3V164Z" fill={activeStep === "inspect" ? "#bae6fd" : "#e0f2fe"} stroke="#7dd3fc" strokeWidth="3" className={activeStep === "inspect" ? "origin-center animate-pulse" : ""} />
                <path d="M144 210h72M132 252h96M127 294h106" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 6" />

                {activeStep === "palpate" && <><circle cx="133" cy="252" r="15" fill="#fbbf24" opacity=".8" className="animate-ping" /><circle cx="227" cy="252" r="15" fill="#fbbf24" opacity=".8" className="animate-ping" /><path d="M101 250h22M259 250h-22" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" /></>}
                {activeStep === "percuss" && <><circle cx="135" cy="210" r="9" fill="#fb7185" className="animate-pulse" /><circle cx="225" cy="210" r="9" fill="#fb7185" className="animate-pulse" /><circle cx="135" cy="294" r="9" fill="#fb7185" className="animate-pulse" /><circle cx="225" cy="294" r="9" fill="#fb7185" className="animate-pulse" /></>}
                {activeStep === "auscultate" && <><g fill="#0f172a"><circle cx="135" cy="210" r="13" /><circle cx="225" cy="210" r="13" /><circle cx="135" cy="294" r="13" /><circle cx="225" cy="294" r="13" /></g><path d="M135 210C85 175 80 145 108 126M225 210c50-35 55-65 27-84" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" /></>}
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-400"><span className="size-2 rounded-full bg-blue-500" />{active.label} view active</div>
            </div>
          </div>
        </section>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">This is a design prototype for learning the examination sequence. It is not a substitute for supervised clinical training, local guidance, or patient-specific assessment.</p>
      </div>
    </main>
  );
}
