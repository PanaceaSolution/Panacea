"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";
import Link from "next/link";
import { useState } from "react";

const stats = [
  { value: "50+", label: "Team Members", desc: "Across engineering, design & training" },
  { value: "4.8/5", label: "Glassdoor Rating", desc: "Recognized as a top employer" },
  { value: "95%", label: "Employee Retention", desc: "We invest in our people" },
  { value: "15+", label: "Countries Served", desc: "Global client network" },
];

const perks = [
  {
    title: "Learning & Development Budget",
    desc: "Annual Rs. 50,000 budget per employee for courses, certifications, books, and conferences. We invest in your growth.",
    icon: "📚",
  },
  {
    title: "Flexible Work Arrangements",
    desc: "Hybrid and remote-friendly setup with flexible hours. We trust you to manage your time and deliver great work.",
    icon: "🏠",
  },
  {
    title: "20% Innovation Time",
    desc: "One day per week to explore new ideas, build side projects, or experiment with emerging technologies.",
    icon: "🔬",
  },
  {
    title: "Competitive Compensation",
    desc: "Market-rate salaries with performance-based bonuses, annual reviews, and transparent salary bands.",
    icon: "💰",
  },
  {
    title: "Career Growth Framework",
    desc: "Clear progression paths from junior to senior to lead — with structured mentorship and quarterly reviews.",
    icon: "📈",
  },
  {
    title: "Health & Wellness",
    desc: "Medical insurance coverage, wellness allowance, and mental health support for all full-time employees.",
    icon: "❤️",
  },
];

const cultureValues = [
  {
    title: "Build What Matters",
    desc: "We focus on work that creates real impact — for clients, for students, and for Nepal's tech ecosystem. Every project has a purpose.",
    image: "/services/web-dev.jpg",
  },
  {
    title: "Collaborate Openly",
    desc: "No silos. We share context freely, give direct feedback, and believe the best ideas come from diverse perspectives working together.",
    image: "/services/outsourcing.jpg",
  },
  {
    title: "Keep Learning",
    desc: "Technology evolves fast. We stay ahead by encouraging curiosity, championing upskilling, and sharing knowledge across the team.",
    image: "/services/it-design.jpg",
  },
  {
    title: "Own Your Work",
    desc: "We hire adults and trust them. Take ownership, make calls, and learn from outcomes — we value initiative over permission-seeking.",
    image: "/services/uiux.jpg",
  },
  {
    title: "Include Everyone",
    desc: "Diverse teams build better products. We actively cultivate inclusion across gender, background, experience level, and discipline.",
    image: "/services/marketing.jpg",
  },
  {
    title: "Serve the Customer",
    desc: "Whether it's a client, a student, or a colleague — we ask what they actually need before jumping to solutions.",
    image: "/services/app-dev.jpg",
  },
];

const openings = [
  {
    title: "Senior Full Stack Engineer",
    dept: "Engineering",
    type: "Full Time",
    exp: "4+ years",
    posted: "2 days ago",
    location: "Kathmandu / Remote",
    tags: ["React / Next.js", "Node.js & REST APIs", "AWS / cloud infra", "TypeScript"],
  },
  {
    title: "UI/UX Product Designer",
    dept: "Design",
    type: "Full Time",
    exp: "2+ years",
    posted: "1 week ago",
    location: "Kathmandu",
    tags: ["Figma proficiency", "Design systems", "User research", "Prototyping"],
  },
  {
    title: "DevOps & Cloud Engineer",
    dept: "Engineering",
    type: "Full Time",
    exp: "3+ years",
    posted: "5 days ago",
    location: "Kathmandu / Hybrid",
    tags: ["AWS / Azure", "Docker & Kubernetes", "Terraform / IaC", "CI/CD pipelines"],
  },
  {
    title: "Training Instructor — Full Stack",
    dept: "Training",
    type: "Full Time",
    exp: "3+ years",
    posted: "3 days ago",
    location: "Kathmandu",
    tags: ["MERN stack expertise", "Curriculum design", "Mentoring experience", "Communication skills"],
  },
  {
    title: "Business Development Executive",
    dept: "Sales",
    type: "Full Time",
    exp: "2+ years",
    posted: "1 week ago",
    location: "Kathmandu",
    tags: ["B2B sales", "Tech industry knowledge", "CRM tools", "Proposal writing"],
  },
];

const processSteps = [
  { num: "01", title: "Apply Online", desc: "Submit your application with your CV and portfolio via our online form." },
  { num: "02", title: "Resume Review", desc: "Our team reviews every application within 5 business days." },
  { num: "03", title: "Technical Screen", desc: "A 45-minute technical or portfolio review call with a senior team member." },
  { num: "04", title: "Team Interview", desc: "Meet the team — technical depth + cultural alignment, no trick questions." },
  { num: "05", title: "Offer & Join", desc: "Fast, transparent offer process. Onboarding starts within 2 weeks of acceptance." },
];

export default function CareerPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Stats />
      <Perks />
      <Culture />
      <Openings />
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
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[400px] rounded-full bg-indigo-600/10 blur-[80px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="space-y-6"
          >
            <span className="section-badge-dark">We're Hiring</span>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight">
              Build Your Best Work
              <br />
              <span className="text-gradient-hero">With Our Team</span>
            </h1>
            <p className="text-base leading-relaxed text-slate-400">
              Join a team of passionate engineers, designers, and educators who are building Nepal's tech future. We offer meaningful work, real growth, and a culture that respects your time.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact" className="btn-primary glow-teal-btn">
                Send Your Resume
              </Link>
              <Link href="#openings" className="btn-ghost-dark">
                View Past Roles
              </Link>
            </div>
          </motion.div>

          {/* Culture values preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.15 }}
            className="space-y-3"
          >
            {[
              { icon: "🏆", title: "4.8★ Glassdoor Rating", desc: "Consistently rated as a top employer in Nepal" },
              { icon: "🌱", title: "Annual Learning Budget", desc: "Rs. 50,000/year for courses, certs & conferences" },
              { icon: "⚡", title: "20% Innovation Time", desc: "One day per week for your own explorations" },
              { icon: "🌍", title: "Global Project Exposure", desc: "Work with clients across 15+ countries" },
            ].map((item) => (
              <div key={item.title} className="card-dark flex items-start gap-3.5 p-4">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-slate-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-light p-6 text-center"
            >
              <AnimatedCounter value={s.value} className="font-heading text-3xl font-black text-teal-600 md:text-4xl" />
              <div className="mt-2 text-sm font-bold text-slate-700">{s.label}</div>
              <p className="mt-1 text-xs text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Benefits</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            What You'll Get
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            We believe in investing in our team — financially, professionally, and personally.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light p-6 flex gap-4"
              >
                <span className="text-2xl">{perk.icon}</span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-800">{perk.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Culture() {
  return (
    <section className="border-y border-slate-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Our Culture</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            How We Work Together
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            The principles that define our environment and shape how decisions get made.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cultureValues.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light overflow-hidden group"
              >
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-sm font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Openings() {
  return (
    <section id="openings" className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Positions</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            No Open Positions Right Now
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            All current roles are filled. Drop us your resume and we'll reach out when a matching opportunity opens up.
          </p>
        </div>

        <div className="space-y-4">
          {openings.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="card-light p-5 opacity-60"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-sm font-bold text-slate-500 line-through decoration-slate-300">
                      {role.title}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-400">
                      {role.dept}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                      {role.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">📍 {role.location}</span>
                    <span>💼 {role.exp}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span key={tag} className="tag-pill opacity-60">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 rounded-xl bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-400 cursor-not-allowed select-none">
                  Position Closed
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">Interested in future opportunities? We'd still love to hear from you.</p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Send us your resume →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-y border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">Application Process</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black text-slate-900">
            How We Hire
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Transparent, fast, and respectful of your time. No surprise rounds or drawn-out processes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.num} className="card-light p-6 text-center group">
              <div className="mx-auto step-number">{step.num}</div>
              <h4 className="mt-4 font-heading text-sm font-bold text-slate-800">{step.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
            </div>
          ))}
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
          Ready to do the best work of your career?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          We're always interested in connecting with talented engineers, designers, and educators — even if there isn't an open role that fits today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary glow-teal-btn">
            Send Your Resume
          </Link>
          <Link href="/contact" className="btn-ghost-dark">
            Say Hello
          </Link>
        </div>
      </div>
    </section>
  );
}
