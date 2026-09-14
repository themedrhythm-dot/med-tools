const categories = [
  {
    icon: "⌁",
    title: "Medical Calculators",
    description: "Fast, reliable clinical calculations without the clutter.",
    tools: ["BMI", "GFR", "Anion Gap", "Corrected Calcium"],
  },
  {
    icon: "＋",
    title: "Medical Reference",
    description: "High-yield clinical information when you need it.",
    tools: ["Formulas", "Drug Reference", "Lab Values", "Scoring Systems"],
  },
  {
    icon: "✦",
    title: "NEET-PG Study",
    description: "Built for rapid revision and smarter recall.",
    tools: ["Mnemonics", "Flowcharts", "High-Yield Tables", "Rapid Revision"],
  },
  {
    icon: "♡",
    title: "Schedules & Guidelines",
    description: "Useful schedules and clinical references in one place.",
    tools: ["Immunization", "Screening", "Emergency", "Protocols"],
  },
];

const popularTools = [
  { name: "BMI Calculator", category: "Calculator" },
  { name: "GFR Calculator", category: "Renal" },
  { name: "Anion Gap", category: "Electrolytes" },
  { name: "Corrected Calcium", category: "Electrolytes" },
  { name: "Parkland Formula", category: "Emergency" },
  { name: "Wells Score", category: "Clinical Score" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* Navigation */}
      <nav className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-lg font-semibold text-white">
              M
            </div>

            <div>
              <div className="text-[15px] font-bold tracking-tight">
                med.tools
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Medical reference
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">

            <a
              href="/calculators"
              className="transition hover:text-slate-950"
            >
              Tools
            </a>

            <a
              href="/neetpg"
              className="transition hover:text-slate-950"
            >
              NEET-PG
            </a>

            <a
              href="#reference"
              className="transition hover:text-slate-950"
            >
              Reference
            </a>

          </div>

          <a
            href="/calculators"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
          >
            Explore tools
          </a>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">

        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Built for medical students & doctors
            </div>

            <h1 className="text-5xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Medical knowledge,
              <br />
              <span className="text-slate-400">
                made useful.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Clinical calculators, medical references and high-yield study
              tools — designed to help you find what you need in seconds.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center text-xl text-slate-400">
                ⌕
              </div>

              <input
                type="text"
                placeholder="Search calculators, topics, formulas..."
                className="h-12 flex-1 bg-transparent px-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
              />

              <div className="hidden rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-400 sm:block">
                ⌘ K
              </div>

            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
              <span>Try:</span>

              <button className="font-medium text-slate-600 hover:text-slate-950">
                BMI
              </button>

              <button className="font-medium text-slate-600 hover:text-slate-950">
                GFR
              </button>

              <button className="font-medium text-slate-600 hover:text-slate-950">
                Anion gap
              </button>

              <button className="font-medium text-slate-600 hover:text-slate-950">
                Wells score
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Main categories */}
      <section
        id="tools"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >

        <div className="mb-10 flex items-end justify-between">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Everything in one place
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              What are you looking for?
            </h2>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            More tools coming soon
          </span>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          {categories.map((category) => (

            <a
              href={
                category.title === "Medical Calculators"
                  ? "/calculators"
                  : category.title === "NEET-PG Study"
                  ? "/neetpg"
                  : "#"
              }
              key={category.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl font-medium text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                  {category.icon}
                </div>

                <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                  →
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold tracking-tight">
                {category.title}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {category.tools.map((tool) => (

                  <span
                    key={tool}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </a>

          ))}

        </div>

      </section>

      {/* Popular tools */}
      <section
        id="reference"
        className="border-y border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-10">

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Quick access
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Popular tools
            </h2>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {popularTools.map((tool, index) => (

              <a
                href={
                  tool.name === "BMI Calculator"
                    ? "/calculators/bmi"
                    : "#"
                }
                key={tool.name}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300 hover:bg-slate-50"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <div className="text-sm font-bold text-slate-800">
                      {tool.name}
                    </div>

                    <div className="mt-0.5 text-xs text-slate-400">
                      {tool.category}
                    </div>

                  </div>

                </div>

                <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                  →
                </span>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* NEET-PG Study */}
      <section
        id="study"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >

        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            <div>

              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                NEET-PG STUDY TOOLS
              </div>

              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Study less randomly.
                <br />
                Remember more.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                High-yield mnemonics, important flowcharts, rapid revision
                tables and visual summaries — organised around the things
                medical students actually need to remember.
              </p>

              <a
                href="/neetpg"
                className="mt-8 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Explore study tools →
              </a>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {[
                ["✦", "Mnemonics"],
                ["↗", "Flowcharts"],
                ["≡", "High-yield tables"],
                ["◈", "Rapid revision"],
              ].map(([icon, label]) => (

                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <div className="text-xl text-slate-300">
                    {icon}
                  </div>

                  <div className="mt-8 text-sm font-semibold text-slate-200">
                    {label}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div className="font-semibold text-slate-700">
            med.tools
          </div>

          <div>
            Medical tools & reference, thoughtfully organised.
          </div>

        </div>

      </footer>

    </main>
  );
}