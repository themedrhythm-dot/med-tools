import { neetpgSubjects } from "@/data/neetpg";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectSlug } = await params;

  const subject = neetpgSubjects.find(
    (item) => item.slug === subjectSlug
  );

  if (!subject) {
    return (
      <main className="min-h-screen bg-[#f7f9fc] px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Subject not found</h1>

        <a
          href="/neetpg"
          className="mt-4 inline-block text-sm text-slate-500"
        >
          ← Back to NEET-PG
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">

        <a
          href="/neetpg"
          className="text-sm font-medium text-slate-400 transition hover:text-slate-700"
        >
          ← NEET-PG
        </a>

        <header className="mt-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            NEET-PG · Subject
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            {subject.name}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-500">
            High-yield material organised into chapters for quick revision,
            recall and exam-focused learning.
          </p>
        </header>

        <section className="mt-12">
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight">
              Topics
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Select a topic to access its study tools.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subject.topics.map((topic, index) => (
              <a
                href={`/neetpg/${subject.slug}/${topic.slug}`}
                key={topic.slug}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold text-slate-700 transition group-hover:text-slate-950">
                    {topic.name}
                  </span>
                </div>

                <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-slate-200 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Study tools
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Every topic will have its own notes, mnemonics, flowcharts,
            important images and rapid-revision material.
          </p>
        </section>

      </div>
    </main>
  );
}