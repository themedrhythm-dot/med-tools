import { neetpgSubjects } from "@/data/neetpg";

export default function NEETPGPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">

        {/* Back */}
        <a
          href="/"
          className="text-sm font-medium text-slate-400 transition hover:text-slate-700"
        >
          ← med.tools
        </a>

        {/* Header */}
        <header className="mt-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            NEET-PG Study
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Study by subject.
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-500">
            High-yield notes, mnemonics, flowcharts and rapid revision tools,
            organised across all 19 NEET-PG subjects.
          </p>
        </header>

        {/* Subjects */}
        <section className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {neetpgSubjects.map((subject, index) => (
              <a
                href={`/neetpg/${subject.slug}`}
                key={subject.slug}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold text-slate-700 transition group-hover:text-slate-950">
                    {subject.name}
                  </span>
                </div>

                <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}