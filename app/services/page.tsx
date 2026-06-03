"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    id: "web-dev",
    title: "Web Development",
    tagline: "Enterprise-grade web applications, built to scale.",
    desc: "From marketing sites to complex SaaS platforms, we build fast, secure, and maintainable web applications that deliver measurable business outcomes.",
    image: "/services/web-dev.jpg",
    features: [
      "Custom CMS & headless architecture",
      "Full-stack React / Next.js applications",
      "REST & GraphQL API design",
      "Performance optimization & Core Web Vitals",
      "SEO-ready semantic architecture",
      "Ongoing maintenance & SLA support",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
    outcomes: ["3–5× faster page loads", "60% average increase in conversions", "99.9% uptime SLA"],
    color: "bg-teal-600",
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    tagline: "Native experiences, cross-platform efficiency.",
    desc: "We build high-performance mobile applications that feel native on every device — from consumer apps to complex enterprise tools with offline-first capabilities.",
    image: "/services/app-dev.jpg",
    features: [
      "Flutter & React Native cross-platform development",
      "Native iOS (Swift) & Android (Kotlin) builds",
      "Offline-first architecture with sync",
      "Push notifications & deep linking",
      "App Store & Play Store deployment",
      "Analytics integration & crash reporting",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js"],
    outcomes: ["4.7+ average App Store rating", "40% lower development cost vs dual-native", "2-week sprint delivery cycles"],
    color: "bg-indigo-600",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    tagline: "Design systems that scale. Interfaces that convert.",
    desc: "We create design experiences grounded in user research — beautiful, functional, and built as reusable component systems your engineering team will love working with.",
    image: "/services/uiux.jpg",
    features: [
      "User research & journey mapping",
      "Wireframing & interactive prototyping",
      "Design system & component library creation",
      "Mobile-first responsive design",
      "WCAG 2.1 accessibility compliance",
      "Usability testing & iteration",
    ],
    technologies: ["Figma", "FigJam", "Storybook", "Framer", "Lottie"],
    outcomes: ["35% improvement in task completion", "50% reduction in support tickets", "Consistent brand identity at scale"],
    color: "bg-violet-600",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Growth strategies backed by data, not guesswork.",
    desc: "We create and execute digital marketing strategies that build brand authority, drive qualified traffic, and convert visitors into customers — measurably.",
    image: "/services/marketing.jpg",
    features: [
      "Technical SEO & content strategy",
      "Google & Meta Ads management",
      "Social media marketing & growth",
      "Email marketing automation",
      "Analytics, attribution & reporting",
      "Conversion rate optimization",
    ],
    technologies: ["Google Ads", "Meta Business", "HubSpot", "Semrush", "GA4"],
    outcomes: ["3–8× ROAS on paid campaigns", "Top-10 organic rankings within 90 days", "Full attribution reporting"],
    color: "bg-orange-500",
  },
  {
    id: "outsourcing",
    title: "IT Outsourcing",
    tagline: "Elite dedicated engineering teams, on your terms.",
    desc: "Extend your engineering capacity with dedicated developers, QA engineers, and DevOps specialists who integrate seamlessly into your existing workflows and culture.",
    image: "/services/outsourcing.jpg",
    features: [
      "Dedicated development & QA pods",
      "Managed engineering teams",
      "Project-based staffing & sprint teams",
      "Remote-first DevOps & CI/CD setup",
      "Code review & architecture guidance",
      "Flexible contract structures",
    ],
    technologies: ["Jira", "GitHub", "Docker", "Kubernetes", "Terraform", "ClickUp"],
    outcomes: ["40% cost saving vs in-house hiring", "2-week onboarding timeline", "Direct team integration"],
    color: "bg-slate-600",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    tagline: "Technology strategy aligned to your business goals.",
    desc: "We audit your current stack, identify bottlenecks, and produce an actionable technology roadmap — from architecture decisions to vendor selection and team structure.",
    image: "/services/it-design.jpg",
    features: [
      "Technology stack assessment & audit",
      "Cloud migration planning (AWS, Azure, GCP)",
      "System architecture & scalability design",
      "Security review & compliance planning",
      "CTO-as-a-Service for startups",
      "Digital transformation roadmapping",
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"],
    outcomes: ["Clear 12-month tech roadmap", "20–50% infrastructure cost reduction", "Compliance-ready architecture"],
    color: "bg-teal-700",
  },
];

const processSteps = [
  { num: "01", title: "Discovery & Scoping", desc: "Deep-dive into your goals, constraints, and success metrics before committing to a direction." },
  { num: "02", title: "Architecture & Design", desc: "System design, wireframes, and technical specification — full alignment before development starts." },
  { num: "03", title: "Agile Development", desc: "Two-week sprints, weekly demos, and continuous feedback loops. You're never in the dark." },
  { num: "04", title: "QA & Performance", desc: "Automated + manual testing, load testing, and cross-device validation before every release." },
  { num: "05", title: "Launch & Grow", desc: "Zero-downtime deployment, monitoring setup, and ongoing SLA-backed support and iteration." },
];

const advantages = [
  { title: "Senior Engineers Only", desc: "Every engagement is led by senior engineers with 5+ years of production experience.", icon: "👨‍💻" },
  { title: "Transparent Pricing", desc: "Fixed-price projects or transparent hourly billing. No hidden fees, ever.", icon: "💳" },
  { title: "Agile & On Time", desc: "Structured sprints with clear milestones. Consistently deliver on time and on budget.", icon: "⚡" },
  { title: "Post-Launch Support", desc: "Every project includes 30 days of free post-launch support and optional SLA packages.", icon: "🛡️" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Advantages />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="space-y-6"
        >
          <span className="section-badge-dark">Our Services</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Technology That
            <br />
            <span className="text-gradient-hero">Drives Results</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
            End-to-end digital solutions — from product design to enterprise software delivery. Every service is backed by senior talent, transparent process, and measurable outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-primary glow-teal-btn">
              Request a Proposal
            </Link>
            <Link href="#services" className="btn-ghost-dark">
              Explore All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">What We Build</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            Full-Spectrum Technology Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Every engagement is handled by specialists — not generalists juggling too many projects.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 group"
            >
              <div className={`grid gap-0 md:grid-cols-[320px_1fr] ${idx % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
                {/* Image */}
                <div className={`relative overflow-hidden bg-slate-100 h-56 md:h-auto ${idx % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
                  <div className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl ${service.color} shadow-lg`}>
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 md:p-8 space-y-5 ${idx % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-600">{service.tagline}</p>
                    <h3 className="mt-1 font-heading text-2xl font-bold text-slate-800">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.desc}</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Key Capabilities</div>
                      <ul className="space-y-1.5">
                        {service.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Typical Outcomes</div>
                      <ul className="space-y-1.5">
                        {service.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-xs text-teal-700 font-medium">
                            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Technologies</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors"
                  >
                    Request a Proposal
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Why Panacea</span>
          <h2 className="mt-4 font-heading text-4xl font-black text-slate-900">
            The Panacea Difference
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Four commitments that set us apart from every other agency you've considered.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <motion.div
                key={a.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl">
                  {a.icon}
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-800">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">How We Deliver</span>
          <h2 className="mt-4 font-heading text-4xl font-black text-slate-900">
            Our Delivery Process
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            No black boxes. Every project follows the same structured, transparent process.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <motion.div
                key={step.num}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light group p-6 text-center"
              >
                <div className="mx-auto step-number">{step.num}</div>
                <h4 className="mt-4 font-heading text-sm font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-teal-600/15 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-4xl font-black text-white">
          Ready to Build Something Exceptional?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          Share your project requirements and we'll respond within 24 hours with a custom proposal and timeline.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary glow-teal-btn">
            Request a Proposal
          </Link>
          <Link href="/courses" className="btn-ghost-dark">
            Explore Training Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
