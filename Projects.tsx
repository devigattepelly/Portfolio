"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { categories, projects } from "@/data/site";

const linkCls = "inline-flex items-center gap-1 text-sm";
const off = "cursor-not-allowed text-muted opacity-60";

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${cat === c ? "border-accent text-accent" : "border-line text-muted hover:text-fg"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.slug} className="flex flex-col rounded-lg border border-line bg-card p-5 transition-colors hover:border-accent">
            <div className="mb-4 flex items-center justify-between text-sm text-muted">
              <span>{p.category}</span>
              <span className="rounded border border-line px-2 py-0.5">{p.status}</span>
            </div>
            <h3 className="text-lg font-semibold"><Link href={`/projects/${p.slug}`} className="hover:text-accent">{p.title}</Link></h3>
            <p className="mt-2 text-muted">{p.problem}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => <li key={t} className="rounded bg-bg px-2 py-0.5 text-xs text-muted">{t}</li>)}
            </ul>
            <div className="mt-auto flex flex-wrap gap-4 pt-5">
              {p.github ? <a href={p.github} className={`${linkCls} text-accent`}><Github size={14} /> GitHub</a> : <span className={`${linkCls} ${off}`}><Github size={14} /> GitHub</span>}
              {p.demo ? <a href={p.demo} className={`${linkCls} text-accent`}><ExternalLink size={14} /> Live demo</a> : <span className={`${linkCls} ${off}`}><ExternalLink size={14} /> Live demo</span>}
              <Link href={`/projects/${p.slug}`} className={`${linkCls} text-accent`}>Case study</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
