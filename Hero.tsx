import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { site } from "@/data/site";

const layers = [3, 5, 5, 2];
const pts = layers.map((n, i) => Array.from({ length: n }, (_, j) => ({ x: 30 + i * 80, y: 20 + ((j + 0.5) * 200) / n })));

function Network() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Illustration of a small neural network" className="w-full max-w-sm">
      {pts.slice(0, -1).map((layer, i) => layer.flatMap((a, j) => pts[i + 1].map((b, k) => (
        <line key={`${i}-${j}-${k}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--line)" strokeWidth="1" />
      ))))}
      {pts.flat().map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="6" fill={i % 3 === 0 ? "var(--violet)" : "var(--accent)"} />
      ))}
    </svg>
  );
}

const btn = "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
      <div>
        <div aria-hidden className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-line bg-card text-xl font-semibold text-accent">
          {site.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          {/* To use a photo: replace this div with <Image src="/profile.jpg" ... /> */}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{site.name}</h1>
        <p className="mt-2 text-lg text-accent">{site.headline}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.tagline} {site.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={`${btn} bg-accent text-bg hover:opacity-90`}>Projects <ArrowRight size={16} /></a>
          <a href={site.resume} download className={`${btn} border border-line hover:border-accent`}><FileText size={16} /> Resume</a>
          <a href={site.github} className={`${btn} border border-line hover:border-accent`}><Github size={16} /> GitHub</a>
          <a href={site.linkedin} className={`${btn} border border-line hover:border-accent`}><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>
      <div className="flex justify-center"><Network /></div>
    </section>
  );
}
