"use client";
import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

const field = "w-full rounded-md border border-line bg-card px-3 py-2";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copy = async () => {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const message = String(d.get("message") || "").trim();
    const err: Record<string, string> = {};
    if (!name) err.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Enter a valid email address.";
    if (message.length < 10) err.message = "Write at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    // No backend yet: this opens the visitor's email app. Swap for an API route or a form service later.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Message from " + name)}&body=${encodeURIComponent(message + "\n\n" + email)}`;
  };

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <ul className="space-y-4">
        <li className="flex items-center gap-3"><Mail size={18} className="text-accent" /> {site.email}
          <button onClick={copy} aria-label="Copy email address" className="rounded p-1 text-muted hover:text-fg">{copied ? <Check size={16} /> : <Copy size={16} />}</button>
        </li>
        <li className="flex items-center gap-3"><Linkedin size={18} className="text-accent" /> <a href={site.linkedin} className="hover:text-accent">LinkedIn</a></li>
        <li className="flex items-center gap-3"><Github size={18} className="text-accent" /> <a href={site.github} className="hover:text-accent">GitHub</a></li>
        <li className="flex items-center gap-3"><MapPin size={18} className="text-accent" /> {site.location}</li>
      </ul>
      <form onSubmit={submit} noValidate className="space-y-4">
        {(["name", "email", "message"] as const).map((f) => (
          <div key={f}>
            <label htmlFor={f} className="mb-1 block text-sm capitalize">{f}</label>
            {f === "message" ? <textarea id={f} name={f} rows={4} className={field} aria-invalid={!!errors[f]} /> : <input id={f} name={f} type={f === "email" ? "email" : "text"} className={field} aria-invalid={!!errors[f]} />}
            {errors[f] && <p role="alert" className="mt-1 text-sm text-red-500">{errors[f]}</p>}
          </div>
        ))}
        <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg hover:opacity-90">Send message</button>
      </form>
    </div>
  );
}
