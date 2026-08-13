# Prompt: Generate the Fake API Hub Presentation Deck

Use this prompt later (in a new Claude conversation with the `pptx` skill, or with any other
AI/deck tool) once you're ready to actually produce the `.pptx` file. It's written so it can be
pasted as-is.

---

## Prompt to paste

> Create a 20-slide PowerPoint presentation for **Fake API Hub**, an open-source developer portal
> that provides free mock REST APIs for real-world business domains.
>
> Use `PRESENTATION.md` from the repo (github.com/uGSOT/fake-api-hub) as the **source of truth**
> for all content — it already contains the slide-by-slide copy, tables, and diagrams. Follow the
> structure in its "Appendix C — Suggested PPT Structure" section exactly (Title, Problem,
> Solution, Target Users, Vision/Roadmap, Tech Stack, Architecture Diagram, Frontend Features,
> Hospital API Overview, Sample API Response, Backend Architecture, Database Schema, User Journey,
> Developer Experience, Open Source & Contribution, Repository Layout, Status & Milestones, Key
> Differentiators, Live Demo Checklist, Q&A/GitHub Link).
>
> Design requirements:
> - Brand color: red `#e50913` as the primary accent (used sparingly — headers, key highlights,
>   not full backgrounds)
> - Font: Plus Jakarta Sans (or closest available equivalent) for headings; a clean sans-serif for
>   body text
> - Tone: modern developer-tool / SaaS portal — NOT an e-commerce or consumer-app look
> - Convert the ASCII architecture diagrams (Slides 6, 7, 11) into clean vector diagrams (boxes +
>   arrows), not code blocks
> - Turn markdown tables (tech stack, endpoints, milestones, database schema) into properly
>   formatted slide tables, not walls of text
> - Code/JSON samples (Slide 10) should render in a monospace code block with light syntax
>   highlighting
> - Keep each slide focused — one idea per slide, minimal text, presenter expands verbally
> - Add brief speaker notes per slide summarizing the talking points already listed in
>   `PRESENTATION.md` (e.g. Slide 13's "Demo talking points")
> - Close with the GitHub link (github.com/uGSOT/fake-api-hub) prominent on the final slide
>
> Output as a `.pptx` file.

---

## Notes for whoever runs this later

- Source content lives in [`PRESENTATION.md`](PRESENTATION.md) — update that file first if the
  project's status, roadmap, or milestones have changed since it was written, then regenerate the
  deck from the updated version rather than editing slide-by-slide.
- Once the `.pptx` is generated, attach/link it in the tracking sheet for this project alongside
  the repo link, per the wind-up checklist.
