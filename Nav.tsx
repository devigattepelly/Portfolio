"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { site } from "@/data/site";

const links = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold">{site.name.split(" ")[0]}</Link>
        <ul className="hidden gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l}><Link href={`/#${l.toLowerCase()}`} className="hover:text-fg">{l}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button onClick={toggle} aria-label="Toggle light and dark theme" className="rounded p-2 text-muted hover:text-fg">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="rounded p-2 text-muted hover:text-fg md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l}><Link href={`/#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-fg">{l}</Link></li>
          ))}
        </ul>
      )}
    </header>
  );
}
