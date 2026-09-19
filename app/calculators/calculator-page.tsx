"use client";

import type { ReactNode } from "react";

type CalculatorPageProps = {
  title: string;
  description: string;
  children: ReactNode;
  formula: string;
  note?: string;
};

export function CalculatorPage({
  title,
  description,
  children,
  formula,
  note,
}: CalculatorPageProps) {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="mb-10">
          <a href="/calculators" className="text-sm font-medium text-slate-400 transition hover:text-slate-700">
            ← All calculators
          </a>
          <div className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Medical Calculator</p>
            <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{title}</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">{description}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">{children}</div>

        <section className="mt-12">
          <h2 className="text-lg font-bold tracking-tight">Formula</h2>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono text-sm text-slate-600">{formula}</div>
          {note && <p className="mt-4 text-sm leading-7 text-slate-500">{note}</p>}
        </section>
      </div>
    </main>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      <span className="mb-2 block">{label}</span>
      {children}
    </label>
  );
}

export const inputClassName = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base outline-none transition placeholder:text-slate-300 focus:border-slate-400";
export const buttonClassName = "mt-7 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800";

export function Result({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="mt-8 border-t border-slate-100 pt-8 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <div className="mt-2 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">{value}</div>
      {detail && <p className="mt-3 text-sm font-semibold text-slate-600">{detail}</p>}
    </div>
  );
}
