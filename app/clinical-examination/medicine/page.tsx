import Link from "next/link";

const systems = [
  { name: "Respiratory System", description: "A structured examination of the chest and lungs.", steps: ["Inspect", "Palpate", "Percuss", "Auscultate"] },
  { name: "Cardiovascular System", description: "A systematic examination of the precordium, pulse, and circulation.", steps: ["General survey", "Pulse", "Precordium", "Auscultation"] },
  { name: "Abdominal Examination", description: "A step-by-step examination of the abdomen and related signs.", steps: ["Inspect", "Auscultate", "Percuss", "Palpate"] },
  { name: "Neurological Examination", description: "A focused approach to higher function, cranial nerves, and the motor system.", steps: ["Higher function", "Cranial nerves", "Motor", "Reflexes"] },
];

export default function MedicineExaminationPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <Link href="/clinical-examination" className="text-sm font-medium text-slate-400 transition hover:text-slate-700">
          ← Clinical Examination
        </Link>

        <header className="mt-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Medicine</p>
          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Examination systems.</h1>
          <p className="mt-4 text-base leading-7 text-slate-500">Four core systems to start. Their interactive visual guides can be added one at a time.</p>
        </header>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          {systems.map((system, index) => (
            <article key={system.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-xs font-semibold tabular-nums text-slate-300">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-5 text-xl font-bold tracking-tight">{system.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{system.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {system.steps.map((step) => <span key={step} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">{step}</span>)}
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-400">Interactive guide coming next</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
