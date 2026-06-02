"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Projects Delivered", desc: "Across web, mobile & SaaS" },
  { value: "50+", label: "Enterprise Clients", desc: "From startups to corporations" },
  { value: "98%", label: "Client Retention Rate", desc: "Long-term partnerships" },
  { value: "5+", label: "Years of Excellence", desc: "Founded in 2019" },
];

const values = [
  {
    title: "Engineering Excellence",
    desc: "We hold every line of code to the same standard we'd demand for ourselves. Clean architecture, rigorous testing, and maintainable systems — no shortcuts.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Client Partnership",
    desc: "We're not a vendor — we're your technology partner. We invest in understanding your business so our solutions drive real outcomes.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Education Impact",
    desc: "We believe in growing Nepal's tech talent pool. Every training cohort we run creates ripple effects — skilled professionals build better businesses.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    desc: "Open communication, honest timelines, and no surprises. You always know what we're building, why, and when it ships.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Continuous Innovation",
    desc: "We stay ahead of emerging technologies so our clients always benefit from modern architectures and current best practices.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Community First",
    desc: "As a Nepali company, we're proud to contribute to the local tech ecosystem — through hiring, mentorship, and community programs.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Narayan Sharma",
    role: "Co-Founder & CEO",
    desc: "12+ years in product and business strategy. Previously led engineering teams at two Nepal-based fintech startups.",
    color: "from-teal-600 to-teal-400",
    initials: "NS",
  },
  {
    name: "Sanjay Adhikari",
    role: "Chief Technology Officer",
    desc: "Cloud architect and backend specialist with expertise in AWS, Kubernetes, and distributed systems at scale.",
    color: "from-indigo-600 to-indigo-400",
    initials: "SA",
  },
  {
    name: "Pooja Gurung",
    role: "Head of Training Programs",
    desc: "10+ years in education technology. Designed curricula for 2,000+ successful graduates across multiple disciplines.",
    color: "from-teal-700 to-emerald-500",
    initials: "PG",
  },
  {
    name: "Dipesh Thapa",
    role: "Lead Full Stack Engineer",
    desc: "8 years of MERN, Next.js, and mobile development. Oversees technical delivery and engineering standards.",
    color: "from-slate-600 to-slate-500",
    initials: "DT",
  },
  {
    name: "Alisha Rana",
    role: "Head of Product Design",
    desc: "Award-winning UX designer with a background in cognitive science. Leads design systems and user research.",
    color: "from-violet-600 to-violet-400",
    initials: "AR",
  },
  {
    name: "Rajan Khatri",
    role: "Business Development Manager",
    desc: "Builds partnerships and client relationships across Nepal and international markets. 7+ years B2B experience.",
    color: "from-teal-600 to-cyan-500",
    initials: "RK",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded",
    desc: "Panacea Solution Pvt. Ltd. was founded in Kathmandu with a three-person core team and a simple mission: make quality technology accessible to Nepali businesses.",
  },
  {
    year: "2020",
    title: "First 20 Clients",
    desc: "Despite global challenges, we delivered 20+ projects ranging from e-commerce platforms to custom ERP solutions, earning our first long-term retainers.",
  },
  {
    year: "2021",
    title: "Training Division Launch",
    desc: "Launched our first training cohort with 25 students. The program's 100% placement success rate validated our education model. We ran four cohorts in year one.",
  },
  {
    year: "2022",
    title: "100 Projects Milestone",
    desc: "Crossed 100 delivered projects. Expanded the team to 30+ professionals and opened a dedicated training center in New Baneshwor.",
  },
  {
    year: "2023",
    title: "1,000 Students Trained",
    desc: "Our training programs hit a landmark: 1,000 graduates placed in tech roles at companies like Leapfrog, CloudFactory, Fusemachines, and F1Soft.",
  },
  {
    year: "2024–25",
    title: "Enterprise & Growth Phase",
    desc: "Scaling to serve enterprise clients with dedicated pods, SaaS products, and expanded training tracks including AI/ML and cloud engineering.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Stats />
      <Values />
      <Team />
      <Story />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[400px] rounded-full bg-indigo-600/10 blur-[80px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="space-y-6"
          >
            <span className="section-badge-dark">About Our Company</span>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight">
              Building Nepal's
              <br />
              <span className="text-gradient-hero">Tech Future</span>
            </h1>
            <p className="text-base leading-relaxed text-slate-400">
              Founded in 2019, Panacea Solution has grown from a three-person startup into a full-spectrum technology company — delivering enterprise software, AI solutions, and training programs that have transformed thousands of careers.
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              We believe that great technology should be accessible to every business, regardless of size — and that the engineers who build it should come from diverse backgrounds, trained to world-class standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary glow-teal-btn">
                Work With Us
              </Link>
              <Link href="/courses" className="btn-ghost-dark">
                Join Our Programs
              </Link>
            </div>
          </motion.div>

          {/* Right: values grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.15 }}
            className="grid grid-cols-3 gap-3"
          >
            {["Integrity", "Innovation", "Excellence", "Teamwork", "Growth", "Quality", "Trust", "Agility", "Impact"].map((v, idx) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.06 }}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-3 text-center text-xs font-semibold text-slate-300 hover:bg-white/10 hover:border-teal-500/30 hover:text-teal-300 transition-all cursor-default"
              >
                {v}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={s.value} className="font-heading text-4xl font-black text-teal-600 md:text-5xl" />
              <div className="mt-2 text-sm font-bold text-slate-700">{s.label}</div>
              <p className="mt-1 text-xs text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Our Principles</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            What We Stand For
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Six principles guide every client engagement, training program, and internal decision at Panacea.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <motion.div
                key={v.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100">
                  {v.icon}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-800">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="border-y border-slate-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">The Team</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            People Behind Panacea
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            A diverse team of builders, designers, trainers, and strategists united by a passion for great technology.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="card-light group p-6 text-center"
              >
                <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-xl font-bold text-white shadow-lg`}>
                  {member.initials}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-800">{member.name}</h3>
                <div className="mt-1 text-xs font-semibold text-teal-600">{member.role}</div>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Our Journey</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-teal-700">
            From Idea to Industry Leader
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Five years of building, learning, and growing — alongside our clients and students.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-teal-500 to-teal-100 rounded-full" />
          <ScrollReveal animation="stagger">
            <div className="space-y-0">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16 pb-10"
                >
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 shadow-lg shadow-teal-500/30 ring-4 ring-white">
                    <span className="text-[10px] font-black text-white">{m.year.slice(2)}</span>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold text-teal-600 ring-1 ring-teal-200">{m.year}</span>
                      <h3 className="font-heading text-base font-bold text-slate-800">{m.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
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
          Want to be part of the story?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-400">
          Whether you're a business looking for a technology partner, or a professional ready to level up — we'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary glow-teal-btn">
            Start a Conversation
          </Link>
          <Link href="/career" className="btn-ghost-dark">
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
