import Link from "next/link";

const subjects = [
  {
    name: "Medicine",
    description: "System-based clinical examination guides, beginning with the core medicine examinations.",
    href: "/clinical-examination/medicine",
  },
];

export default function ClinicalExaminationPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <Link href="/" className="text-sm font-medium text-slate-400 transition hover:text-slate-700">
          ← themedrhythm
        </Link>

        <header className="mt-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Clinical Examination</p>
          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Learn by subject.</h1>
          <p className="mt-4 text-base leading-7 text-slate-500">Interactive clinical-examination guides, designed to become visual and animated as the library grows.</p>
        </header>

        <section className="mt-12 grid gap-3 sm:grid-cols-2">
          {subjects.map((subject) => (
            <Link href={subject.href} key={subject.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Subject</p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight">{subject.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{subject.description}</p>
                </div>
                <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
