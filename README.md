# Portfolio

Next.js (App Router), TypeScript and Tailwind. Dark by default, with a light mode toggle.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```
Requires Node 18.17 or newer.

## Replace the placeholders
Everything you see lives in **`data/site.ts`**: name, intro, about text, contact links, experience, skills, education, and projects.
- Anything in `[square brackets]` is a placeholder.
- Skills show with a dashed outline until you add them to `confirmedSkills`.
- Projects start as `Planned`. Set `status`, `github` and `demo` when they are real; empty links show as disabled.
- Put your resume at `public/resume.pdf` (the Download buttons point there).
- Profile photo: add `public/profile.jpg`, then replace the initials circle in `components/Hero.tsx` with a `next/image` tag.
- Set `site.url` to your real domain (used for sharing previews).
- Case study text is in `app/projects/[slug]/page.tsx`; per-project content can be moved into `data/site.ts` when you have it.

## Contact form
It validates input, then opens the visitor's email app (no backend). To receive messages directly, add a route handler or a form service such as Formspree.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. At vercel.com, choose Add New, then Project, and import the repository.
3. Keep the defaults (Next.js is detected) and click Deploy.
4. Add a custom domain under Project, then Settings, then Domains.
