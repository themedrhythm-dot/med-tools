const calculators = [
  {
    name: "BMI Calculator",
    description: "Calculate body mass index from height and weight.",
    category: "General",
    href: "/calculators/bmi",
  },
  {
    name: "GFR Calculator",
    description: "Estimate glomerular filtration rate.",
    category: "Renal",
    href: "/calculators/gfr",
  },
  {
    name: "Anion Gap",
    description: "Calculate the serum anion gap.",
    category: "Electrolytes",
    href: "/calculators/anion-gap",
  },
  {
    name: "Corrected Calcium",
    description: "Adjust serum calcium for albumin.",
    category: "Electrolytes",
    href: "/calculators/corrected-calcium",
  },
  {
    name: "Wells Score",
    description: "Clinical probability assessment.",
    category: "Clinical Score",
    href: "/calculators/wells-score",
  },
  {
    name: "Parkland Formula",
    description: "Estimate fluid requirements in burns.",
    category: "Emergency",
    href: "/calculators/parkland-formula",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">

        <a
          href="/"
          className="text-sm font-medium text-slate-400 transition hover:text-slate-700"
        >
          ← med.tools
        </a>

        <header className="mt-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Medical tools
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Calculators
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Simple clinical calculators designed to give you the answer
            without unnecessary complexity.
          </p>
        </header>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {calculators.map((calculator) => (
            <a
              key={calculator.name}
              href={calculator.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {calculator.category}
                  </p>

                  <h2 className="mt-2 text-lg font-bold tracking-tight">
                    {calculator.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {calculator.description}
                  </p>
                </div>

                <span className="mt-1 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
