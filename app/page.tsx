'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Sparkles,
  Code2,
  Rocket,
  BriefcaseBusiness,
  CheckCircle2,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: '23andMe — Senior Frontend Engineer',
    eyebrow: '2025–Present · Remote',
    description:
      'Worked on frontend delivery across high-impact growth funnels and product pages. Built end-to-end customer journeys (discovery → purchase) with Next.js and React, partnering closely with the Marketing Director on promotions and experimentation.',
    tags: ['Next.js', 'React', 'TypeScript', 'A/B Testing', 'i18n', 'a11y'],
    impact: [
      'Collaborated directly with the Marketing Director to launch promotions and A/B tests across growth and purchase funnels',
      'Helped drive the migration from Django to Next.js, improving maintainability and iteration speed',
      'Implemented time-sensitive, multi-locale promotions with feature flags during high-traffic periods',
      'Improved performance, accessibility (WCAG), and localization (i18n) across product and campaign pages',
    ],
  },
  {
    title: 'ELSA Consulting — Investor & Tech Advisor',
    eyebrow: '2025–Present',
    description:
      'Advising on product strategy, technical decisions, and scalable architectures for early-stage initiatives.',
    tags: ['Advisory', 'Product Strategy', 'Architecture'],
    impact: [
      'Guiding technical direction and product decisions',
      'Supporting scalable architecture design',
    ],
  },
  {
    title: 'XSELL Technologies — Lead Frontend Engineer',
    eyebrow: '2023–2025 · Remote',
    description:
      'Led frontend development for an enterprise real-time chatbot platform (voice + chat) used by clients like AT&T and FedEx.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'WebSockets',
      'Zustand',
      'Tailwind',
    ],
    impact: [
      'Built agent-facing interfaces to support customer service workflows',
      'Implemented real-time communication using WebSockets (STOMP, SockJS)',
      'Integrated AI-powered features into support workflows',
      'Designed scalable frontend architecture for real-time systems',
    ],
  },
  {
    title: 'Alloy Digital — Frontend Engineer',
    eyebrow: '2022–2023 · Remote',
    description:
      'Worked across multiple frontend projects including React and Vue platforms for enterprise and public-sector clients.',
    tags: ['React', 'Gatsby', 'Vue 3', 'JavaScript', 'Tailwind'],
    impact: [
      'Built performance-focused web experiences for Nucar (automotive)',
      'Developed travel platform features for Alabama Department of Tourism',
      'Created reusable UI components and improved app stability',
    ],
  },
  {
    title: 'Perficient Latin America — Frontend Developer',
    eyebrow: '2021–2022',
    description:
      'Worked on React-based applications using modern frontend tooling and APIs.',
    tags: ['React', 'Redux', 'TypeScript', 'Next.js', 'GraphQL'],
    impact: [
      'Built scalable frontend features with modern React patterns',
      'Collaborated with API-driven architectures',
    ],
  },
  {
    title: 'Globant — Frontend Developer',
    eyebrow: '2021',
    description: 'Developed frontend features in React for enterprise clients.',
    tags: ['React', 'Redux', 'HTML', 'CSS'],
    impact: ['Delivered UI components and features in Agile teams'],
  },
  {
    title: 'TTS Solutions — React Developer',
    eyebrow: '2020–2021 · Barcelona / Remote',
    description:
      'Started professional career building React-based interfaces and learning production frontend development.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    impact: ['Built foundational frontend skills in real-world projects'],
  },
];

const strengths = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Frontend systems that scale',
    text: 'React, Next.js and TypeScript interfaces built with reusable patterns, clean state handling, accessibility, performance, and responsive polish.',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Business-first product shipping',
    text: 'Comfortable turning ambiguous product goals into production features, especially in growth funnels, commerce flows, dashboards, and internal tools.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'AI-driven development workflow',
    text: 'I use AI tools pragmatically to plan work, generate implementation paths, review edge cases, and speed up delivery without losing ownership of the code.',
  },
];

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind',
  'Sass/SCSS',
  'Jest',
  'Supabase',
  'Django',
  'REST APIs',
  'GitHub',
  'Figma',
  'Jira',
  'Codex',
  'Cursor',
];

export default function FefePortfolioLanding() {
  return (
    <main className="min-h-screen bg-[#0f0f0d] text-[#f4f0e8] antialiased selection:bg-[#f4f0e8] selection:text-[#0f0f0d]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-[0.02em] text-[#f4f0e8] md:hidden">
          Federico Lemaire
        </div>
        <a
          href="#top"
          className="hidden text-2xl font-semibold tracking-[0.08em] text-[#f4f0e8] transition-opacity hover:opacity-90 md:inline-flex lg:text-[2rem]"
        >
          Federico Lemaire
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#f4f0e8]/70 md:flex">
          <a href="#work" className="transition hover:text-[#f4f0e8]">
            Work
          </a>
          <a href="#positioning" className="transition hover:text-[#f4f0e8]">
            Positioning
          </a>
          <a href="#contact" className="transition hover:text-[#f4f0e8]">
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 md:px-10 md:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#f4f0e8]/15 bg-[#f4f0e8]/5 px-4 py-2 text-sm text-[#f4f0e8]/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Senior Frontend Engineer · React · Next.js · TypeScript
          </div>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.08em] text-[#f7f2e8] md:text-8xl lg:text-[8.5rem]">
            I build polished web products that move business metrics.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f4f0e8]/70 md:text-xl">
            Frontend engineer from Buenos Aires focused on building
            high-quality, scalable web interfaces. I ship production-grade React
            and Next.js experiences across growth, commerce, dashboards, AI
            products, and client-facing SaaS.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:federico.lemaire@gmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f0e8] px-6 py-3 text-sm font-semibold text-[#0f0f0d] transition hover:scale-[1.02]"
            >
              Contact me{' '}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/federico-lemaire-027a77147/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f4f0e8]/20 px-6 py-3 text-sm font-semibold text-[#f4f0e8] transition hover:bg-[#f4f0e8]/10"
            >
              LinkedIn{' '}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative self-end rounded-[2rem] border border-[#f4f0e8]/15 bg-[#f4f0e8]/5 p-5 shadow-2xl backdrop-blur"
        >
          <div className="rounded-[1.5rem] bg-[#181815] p-6">
            <div className="mb-10 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#f4f0e8]/40">
                  Profile
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Engineer / Builder / Founder
                </h2>
              </div>
              <BriefcaseBusiness className="h-7 w-7 text-lime-300" />
            </div>

            <div className="space-y-6">
              {[
                ['Location', 'Buenos Aires, Argentina'],
                ['Experience', '6+ years building web products'],
                ['Current focus', 'Frontend, AI workflows, B2B SaaS'],
                ['Best fit', 'High-ownership product teams'],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-[#f4f0e8]/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4f0e8]/40">
                    {label}
                  </p>
                  <p className="mt-1 text-lg text-[#f4f0e8]/90">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </section>

      <section
        id="positioning"
        className="relative border-y border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-[#f4f0e8]/10 bg-[#0f0f0d]/60 p-6"
            >
              <div className="mb-8 inline-flex rounded-full bg-lime-300/10 p-3 text-lime-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-[#f4f0e8]/65">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.32em] text-lime-300">
              Selected work
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.07em] md:text-7xl">
              Case studies with business context.
            </h2>
          </div>
          <p className="max-w-md text-[#f4f0e8]/60">
            Built for recruiters, founders and product leaders who care about
            ownership, product sense, and polished execution.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-120px' }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group grid gap-8 rounded-[2rem] border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.04] p-6 transition hover:border-lime-300/40 hover:bg-[#f4f0e8]/[0.06] md:grid-cols-[0.9fr_1.1fr] md:p-8"
            >
              <div className="flex min-h-72 flex-col justify-between rounded-[1.5rem] bg-[#181815] p-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f4f0e8]/40">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.06em] md:text-5xl">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#f4f0e8]/10 px-3 py-1 text-xs text-[#f4f0e8]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between py-2">
                <p className="text-xl leading-8 text-[#f4f0e8]/75">
                  {project.description}
                </p>
                <ul className="mt-10 space-y-4">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-3 text-[#f4f0e8]/75">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-lime-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="rounded-[2rem] border border-[#f4f0e8]/10 bg-[#181815] p-8 md:p-10">
          <p className="font-mono text-sm uppercase tracking-[0.32em] text-[#f4f0e8]/40">
            Stack
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#f4f0e8]/8 px-4 py-2 text-sm text-[#f4f0e8]/70 ring-1 ring-[#f4f0e8]/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-6 pb-10 md:px-10"
      >
        <div className="rounded-[2.5rem] bg-[#f4f0e8] p-8 text-[#0f0f0d] md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.32em] text-[#0f0f0d]/50">
                Available for selected roles & projects
              </p>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.07em] md:text-7xl">
                Looking for a high-ownership frontend engineer?
              </h2>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:federico.lemaire@gmail.com"
                className="flex items-center justify-between rounded-full bg-[#0f0f0d] px-6 py-4 font-semibold text-[#f4f0e8] transition hover:scale-[1.01]"
              >
                <span>Email me</span>
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/federico-lemaire-027a77147/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-full border border-[#0f0f0d]/15 px-6 py-4 font-semibold transition hover:bg-[#0f0f0d]/5"
              >
                <span>Connect on LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-full border border-[#0f0f0d]/15 px-6 py-4 font-semibold transition hover:bg-[#0f0f0d]/5"
              >
                <span>GitHub</span>
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#f4f0e8]/40 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2026 Federico Lemaire</p>
        <p>Built with React, Tailwind and product taste.</p>
      </footer>
    </main>
  );
}
