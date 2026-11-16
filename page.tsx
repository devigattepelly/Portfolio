import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/site";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? p.title : "Project" };
}

const sections = [
  "Executive summary", "Business problem", "Dataset and data preparation", "Architecture and methodology",
  "Model development", "Evaluation metrics", "Results and visualizations", "Technical challenges and tradeoffs",
  "Business impact", "Limitations and future improvements",
];

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/#projects" className="mb-8 inline-flex items-center gap-1 text-sm text-muted hover:text-fg"><ArrowLeft size={14} /> All projects</Link>
      <p className="text-sm text-muted">{p.category} · {p.status}</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-4 text-lg text-muted">{p.problem}</p>
      <p className="mt-2 text-muted">This project will demonstrate: {p.demonstrates}</p>
      <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded bg-card px-2 py-0.5 text-xs text-muted">{t}</li>)}</ul>

      {sections.map((s) => (
        <section key={s} className="mt-10">
          <h2 className="text-xl font-semibold">{s}</h2>
          <p className="mt-2 text-muted">[Write this section once the work exists. No results are shown until they are real.]</p>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Repository and demo</h2>
        <p className="mt-2 space-x-4">
          {p.github ? <a className="text-accent" href={p.github}>GitHub repository</a> : <span className="text-muted">GitHub: not published yet</span>}
          {p.demo ? <a className="text-accent" href={p.demo}>Live demo</a> : <span className="text-muted">Live demo: not connected</span>}
        </p>
      </section>
    </article>
  );
}
