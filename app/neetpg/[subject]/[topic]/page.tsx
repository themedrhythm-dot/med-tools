import { neetpgSubjects } from "@/data/neetpg";

const studyTools = [
  {
    title: "Notes",
    description: "Concise, high-yield explanations for the topic.",
  },
  {
    title: "Mnemonics",
    description: "Simple memory aids for difficult facts and lists.",
  },
  {
    title: "Flowcharts",
    description: "Visual pathways and processes for rapid understanding.",
  },
  {
    title: "Important Images",
    description: "Key diagrams and images worth remembering.",
  },
  {
    title: "Rapid Revision",
    description: "The essential points to review before an exam.",
  },
];

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;

  const subject = neetpgSubjects.find(
    (item) => item.slug === subjectSlug
  );

  const topic = subject?.topics.find(
    (item) => item.slug === topicSlug
  );

  if (!subject || !topic) {
    return (
      <main className="min-h-screen bg-[#f7f9fc] px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Topic not found</h1>

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
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">

        <a
          href={`/neetpg/${subject.slug}`}
          className="text-sm font-medium text-slate-400 transition hover:text-slate-700"
        >
          ← {subject.name}
        </a>

        <header className="mt-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            NEET-PG · {subject.name}
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            {topic.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Study tools and high-yield material organised for rapid revision.
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight">
            Study tools
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Choose how you want to study this topic.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {studyTools.map((tool, index) => (
              <a
                href="#"
                key={tool.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-base font-bold tracking-tight">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}