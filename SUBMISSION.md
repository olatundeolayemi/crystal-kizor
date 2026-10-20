## Short note

The brief asks for one personal brand, not seven businesses, so I organised the page by what a visitor needs. The hero says who Crystal is. The ecosystem then shows her work in three tiers: Studio COKA and The Effective Architect as the professional entry points, ELEvated and Speaking as extensions, and AKO Alliance, Alive and Free and her own research as the mission behind it. One card component changes size and emphasis by tier, so the hierarchy is visible, not just listed.

The Eye Specialist Hospital gives the positioning proof, and a four-button row sends each type of visitor to the right place.

Design: warm cream, charcoal and one terracotta accent, with Fraunces and Inter. The hero is a light well, a soft shaft of light across the headline, and seven rays lead from it into the seven brands. Motion is restrained and switches off for reduced-motion users.

Technology: Next.js 15 (App Router, TypeScript), Tailwind and Framer Motion. Server Components by default, with client code only for motion and the form. A Node route handler validates enquiries with zod and emails them through Resend.

Images and some brand links are clearly marked placeholders until the asset folder arrives.

## Part 2: AI product thinking

**Brand:** The Effective Architect (TEA). **Tool:** TEA Portfolio Coach.

**What it does.** A member uploads a portfolio PDF and names the role they want. The tool returns a page-by-page review against a clear rubric (story, project clarity, technical depth, process, layout), rewrites weak project descriptions and gives a 30-day improvement plan.

**Who it is for.** Architecture students, graduates and early-career professionals, especially those applying across borders without a mentor.

**The problem.** Good portfolio feedback is scarce, slow and depends on who you know. Capable architects lose opportunities to portfolios that hide their strengths.

**How it is used.** Upload, choose a target role, receive the review in minutes, revise, re-upload and watch the score move.

**Technology.** Claude through the Anthropic API: it reads PDFs and images natively, handles long documents and returns structured JSON matching the rubric. Later, retrieval over TEA's articles and Crystal's guidance (pgvector) so advice sounds like TEA. Built with Next.js, Supabase (auth, storage, Postgres) and Vercel.

**First version (four weeks).** Week 1: codify the rubric with Crystal and collect about 20 portfolios she has reviewed as a test set. Week 2: prompt, JSON schema and the upload-to-report flow. Week 3: compare output with her reviews and tune. Week 4: private beta with 30 members, tracking whether second drafts improve.

**Limitations and safeguards.** Portfolios contain client work, so files are deleted after processing, with explicit consent and no training use. The model can be confidently wrong, so each comment cites its page and the tool is framed as a coach, not a verdict; no scores go to employers. Rubrics can favour Western conventions, so Crystal's team reviews outputs for African context. Per-user limits control cost.

## Part 3: Analytics and improvement

**What to track.** Outcomes first: enquiry rate (enquiries divided by visitors), and enquiries by brand and source. Then behaviour: scroll depth, clicks on each call to action, clicks on each ecosystem card and next-step button, form starts versus submissions and the field where people drop off, and outbound clicks to each brand. Finally experience: Core Web Vitals (LCP, INP, CLS), device split and errors.

**Tools.** GA4 with named events, Search Console for search demand, Microsoft Clarity for heatmaps and recordings, Vercel Analytics or PageSpeed Insights for speed, Sentry for errors, and one Looker Studio dashboard reviewed weekly, behind a consent banner.

**Using the data.** Each week, find the biggest drop in the funnel, form a hypothesis, change one thing and compare before and after. With low traffic, I would test bold changes rather than tiny ones.

**Scenario: 5,000 visitors, 5 enquiries (0.1%).** I would investigate in this order:

1. **Measurement.** Submit the form myself. Does the email arrive, or are enquiries lost to spam or a broken form?
2. **Traffic quality.** Check sources, countries and engaged time. Bots or irrelevant keywords would explain low intent.
3. **Funnel.** Where do people leave: landing, services, call to action or form?
4. **Experience.** Compare mobile and desktop, speed, form length, clarity of the offer, and proof such as projects and testimonials.

Next: fix bugs first, then tighten targeting, shorten the form, show the main call to action without scrolling, add a WhatsApp or email option, and re-measure after four weeks.
