"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { ScrollReveal } from "./components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── Data ─────────────────────────────────────────────────────────── */

const heroStats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "20+", label: "Enterprise Clients" },
  { value: "120+", label: "Students Trained" },
  { value: "5+", label: "Years of Excellence" },
];

const techStack = [
  "React", "Next.js", "Node.js", "Flutter", "Python", "AWS",
  "MongoDB", "TypeScript", "Kubernetes", "Docker", "Figma", "TailwindCSS",
  "React", "Next.js", "Node.js", "Flutter", "Python", "AWS",
  "MongoDB", "TypeScript", "Kubernetes", "Docker", "Figma", "TailwindCSS",
];

const services = [
  {
    title: "Web Development",
    desc: "Full-stack web applications built with modern frameworks, optimized for performance, security, and scalability.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ["React", "Next.js", "Node.js"],
    large: true,
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["Flutter", "React Native"],
    large: false,
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design that balances beauty with usability — wireframes to production-ready design systems.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    tags: ["Figma", "Design Systems"],
    large: false,
  },
  {
    title: "IT Consulting",
    desc: "Strategic technology guidance to align your digital infrastructure with business goals.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    tags: ["Strategy", "Architecture"],
    large: true,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns that grow your brand online — SEO, SEM, social, and content.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["SEO", "SEM", "Analytics"],
    large: false,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with payment gateways, inventory management, and conversion-optimized UX.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    tags: ["Shopify", "Custom"],
    large: false,
  },
];

const impactStats = [
  { value: "15+", label: "Projects Delivered", desc: "Across 12+ industries" },
  { value: "20+", label: "Enterprise Clients", desc: "From startups to corporations" },
  { value: "120+", label: "Students Trained", desc: "Career transformations" },
  { value: "5+", label: "Years in Business", desc: "Since 2019" },
];

const courses = [
  {
    title: "Full Stack MERN Development",
    level: "Beginner → Advanced",
    duration: "6 Months",
    students: "880+",
    rating: "4.8",
    outcomes: ["Build production-grade apps", "Git & deployment workflows", "REST & GraphQL APIs"],
    badge: "Most Popular",
    badgeColor: "bg-teal-500",
    slug: "mern-stack",
  },
  {
    title: "Python & Data Science",
    level: "Beginner → Intermediate",
    duration: "4 Months",
    students: "220+",
    rating: "4.7",
    outcomes: ["Machine learning fundamentals", "Real Kaggle datasets", "Data visualization"],
    badge: "High Demand",
    badgeColor: "bg-indigo-500",
    slug: "python-data-science",
  },
  {
    title: "Mobile App Development",
    level: "Beginner → Advanced",
    duration: "4 Months",
    students: "880+",
    rating: "4.7",
    outcomes: ["Flutter & Dart mastery", "iOS & Android deployment", "Firebase integration"],
    badge: "In Demand",
    badgeColor: "bg-emerald-500",
    slug: "mobile-app-development",
  },
  {
    title: "Digital Marketing Mastery",
    level: "Beginner → Advanced",
    duration: "3 Months",
    students: "440+",
    rating: "4.6",
    outcomes: ["SEO + paid ads strategy", "Analytics & reporting", "Content marketing"],
    badge: "Fast Track",
    badgeColor: "bg-orange-500",
    slug: "digital-marketing-mastery",
  },
];

const testimonials = [
  {
    name: "Rajan Shrestha",
    role: "Full Stack Developer",
    company: "Leapfrog Technology",
    text: "Panacea's MERN Stack program gave me exactly the depth I needed. The real-world projects were the game-changer — I had a portfolio before I even finished the course.",
    initials: "RS",
    color: "from-teal-600 to-teal-400",
  },
  {
    name: "Priya Adhikari",
    role: "Data Analyst",
    company: "Deloitte Nepal",
    text: "I transitioned from an accounting background to data analytics in four months. The placement team's support was exceptional — mock interviews, resume reviews, everything.",
    initials: "PA",
    color: "from-indigo-500 to-indigo-400",
  },
  {
    name: "Anuj Maharjan",
    role: "Co-Founder & CTO",
    company: "TechSpark Nepal",
    text: "Panacea built our entire SaaS platform from scratch. They understood our product vision and shipped a polished MVP in 8 weeks. We closed our seed round right after launch.",
    initials: "AM",
    color: "from-teal-700 to-teal-500",
  },
  {
    name: "Sunita Tamang",
    role: "Flutter Developer",
    company: "Yomari Inc.",
    text: "The mobile development curriculum is thorough and practical. Six months in, I had three published apps in the Play Store and a job offer before graduation.",
    initials: "ST",
    color: "from-emerald-600 to-emerald-400",
  },
  {
    name: "Bikash Thapa",
    role: "Product Manager",
    company: "CloudFactory",
    text: "The web app Panacea delivered helped us reduce manual processing by 70%. Their team communicates clearly, ships on time, and the code quality is enterprise-grade.",
    initials: "BT",
    color: "from-teal-600 to-cyan-500",
  },
  {
    name: "Nisha Koirala",
    role: "UI/UX Designer",
    company: "Fusemachines Nepal",
    text: "From zero design knowledge to landing a design role at a top AI company in Nepal. The program focuses on real outcomes — not just theory.",
    initials: "NK",
    color: "from-violet-500 to-indigo-500",
  },
];

const faqs = [
  {
    q: "What software development services does Panacea offer?",
    a: "We build full-stack web applications, native and cross-platform mobile apps, e-commerce platforms, custom SaaS products, UI/UX design systems, and provide end-to-end IT consulting and digital marketing services.",
  },
  {
    q: "What training programs are available?",
    a: "Our core tracks include Full Stack MERN Development (6 months), Python & Data Science (4 months), Mobile App Development with Flutter (4 months), and Digital Marketing Mastery (3 months). All programs include hands-on projects.",
  },
  {
    q: "Do you provide placement assistance after training?",
    a: "Yes — 100% placement assistance. This includes mock technical interviews, resume and portfolio workshops, LinkedIn optimization, and direct referrals to our hiring partner network.",
  },
  {
    q: "How long does a typical software project take?",
    a: "Discovery through launch typically spans 6–12 weeks depending on complexity. We can deliver high-fidelity MVPs within 4 weeks using our accelerated delivery framework.",
  },
  {
    q: "Can I join training if I have no prior coding experience?",
    a: "Absolutely. Our programs are structured from the ground up — zero experience required. We have dedicated beginner onboarding, foundational modules, and 1:1 support throughout.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <Impact />
      <Training />
      <Process />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────── */
function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        containerRef.current?.querySelectorAll("[data-hero-in]") ?? [],
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.2 }
      );
    });
    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#020817] py-24 md:py-32"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-teal-600/20 blur-[120px]" />
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute right-1/4 top-1/3 h-[200px] w-[300px] rounded-full bg-teal-400/10 blur-[80px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div data-hero-in className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-semibold text-teal-400 tracking-wide">Nepal's Premier Technology Partner · Since 2019</span>
        </div>

        {/* Headline */}
        <h1 data-hero-in className="mt-8 font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight">
          Build Digital Products
          <br />
          <span className="text-gradient-hero">That Define Industries</span>
        </h1>

        {/* Subtext */}
        <p data-hero-in className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
          We engineer enterprise-grade software, deliver AI-powered digital transformation, and train Nepal's
          next generation of technology professionals — all under one roof.
        </p>

        {/* CTAs */}
        <div data-hero-in className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary glow-teal-btn">
            Start a Project
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link href="/courses" className="btn-ghost-dark">
            Explore Training Programs
          </Link>
        </div>

        {/* Social proof line */}
        <p data-hero-in className="mt-5 text-xs text-slate-500">
          Trusted by 20+ companies · 120+ careers transformed · 4.8★ employer rating
        </p>

        {/* Stats */}
        <div data-hero-in className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-6 py-6">
              <span className="font-heading text-3xl font-black text-white">{s.value}</span>
              <span className="text-xs text-slate-500 font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div data-hero-in className="mt-12 flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-600"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll to explore</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Tech Marquee ──────────────────────────────────────────────────── */
function TechMarquee() {
  return (
    <section className="border-b border-slate-100 bg-white py-8">
      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
        Technologies We Build With
      </p>
      <div className="marquee-wrapper">
        <div className="flex animate-marquee gap-10 whitespace-nowrap w-max">
          {techStack.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 select-none">
              <span className="h-1 w-1 rounded-full bg-teal-400/60" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────────────── */
function Services() {
  return (
    <section className="bg-slate-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="section-badge">Our Services</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Build & Scale</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            From strategy and design to development and growth — a full-spectrum technology partner for ambitious businesses.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, idx) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`card-light group cursor-pointer p-7 flex flex-col ${service.large ? "lg:col-span-2" : ""}`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-600 group-hover:text-white group-hover:ring-teal-600 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 flex-1">{service.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Learn More
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}

          {/* Extra services card */}
          <ScrollReveal animation="fade-up" delay={0.4}>
            <Link href="/services">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light group cursor-pointer p-7 flex flex-col items-center justify-center text-center border-dashed"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-slate-400 group-hover:text-teal-600 transition-colors">
                  View All 9 Services
                </p>
                <p className="mt-1 text-xs text-slate-400">Content writing, outsourcing & more</p>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Impact ────────────────────────────────────────────────────────── */
function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[80px]" />
        <div className="absolute inset-0 bg-dot-dark" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <ScrollReveal animation="slide-left">
            <span className="section-badge-dark">Why Panacea</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-white leading-tight">
              A Technology Partner,{" "}
              <span className="text-gradient-hero">Not Just a Vendor</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              We don't just write code. We architect solutions, mentor teams, and stay invested in your outcomes long after launch day.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: "🛡️", title: "Enterprise Security Standards", desc: "ISO-aligned practices and data protection on every project." },
                { icon: "⚡", title: "Agile Delivery, Fast Turnaround", desc: "MVPs in 4 weeks. Full products in 6–12 weeks." },
                { icon: "🌐", title: "Global Standards, Local Expertise", desc: "International quality benchmarks with deep regional insight." },
                { icon: "🕐", title: "Ongoing Support & Maintenance", desc: "Post-launch monitoring, updates, and dedicated SLA." },
              ].map((item) => (
                <div key={item.title} className="card-dark group flex items-start gap-4 p-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="mt-0.5 text-xs leading-relaxed text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right stats grid */}
          <ScrollReveal animation="slide-right">
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-dark flex flex-col items-center justify-center py-10 text-center"
                >
                  <AnimatedCounter
                    value={stat.value}
                    className="font-heading text-4xl font-black text-teal-400"
                  />
                  <div className="mt-1.5 text-sm font-bold text-white">{stat.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Training ──────────────────────────────────────────────────────── */
function Training() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-badge">Training Programs</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Launch Your{" "}
              <span className="text-gradient">Tech Career</span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-500">
              Industry-designed curricula, expert mentors, real projects, and 100% placement assistance.
            </p>
          </div>
          <Link href="/courses" className="btn-ghost shrink-0">
            View All Programs →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, idx) => (
            <ScrollReveal key={course.slug} animation="fade-up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light group flex flex-col overflow-hidden"
              >
                {/* Badge + rating row */}
                <div className="p-5 pb-0 flex items-center justify-between">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-base font-bold text-slate-800 group-hover:text-teal-700 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {course.students} students
                    </span>
                  </div>

                  <div className="mt-1 text-[11px] font-medium text-slate-400">{course.level}</div>

                  <ul className="mt-4 flex-1 space-y-2">
                    {course.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-xs text-slate-500">
                        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {o}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <Link href={`/courses/${course.slug}`} className="rounded-xl border border-slate-200 py-2.5 text-center text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-colors">
                      Details
                    </Link>
                    <Link href="/contact" className="rounded-xl bg-teal-600 py-2.5 text-center text-xs font-bold text-white hover:bg-teal-700 transition-colors">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Training benefits strip */}
        <div className="mt-12 rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🎯", title: "100% Placement Assistance", desc: "Mock interviews, resume reviews, referrals" },
              { icon: "👨‍🏫", title: "Expert Instructors", desc: "5–15 years of industry experience" },
              { icon: "🏗️", title: "Real-World Projects", desc: "Build a portfolio you can showcase" },
              { icon: "📅", title: "Flexible Scheduling", desc: "Weekday, weekend & evening batches" },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">{b.title}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Process ───────────────────────────────────────────────────────── */
function Process() {
  const steps = [
    { num: "01", title: "Discovery Call", desc: "We understand your goals, constraints, and vision before a single line is written." },
    { num: "02", title: "Architecture & Design", desc: "Wireframes, system design, and technical stack selection — aligned to your roadmap." },
    { num: "03", title: "Agile Development", desc: "Two-week sprints with weekly demos. You're in the loop at every milestone." },
    { num: "04", title: "QA & Testing", desc: "Automated and manual testing across devices and edge cases before any release." },
    { num: "05", title: "Launch & Support", desc: "Zero-downtime deployment, monitoring, and ongoing SLA-backed maintenance." },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">How We Work</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
            Our Delivery Process
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Transparent, structured, and built around your outcomes — not just deliverables.
          </p>
        </div>

        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light group p-6 text-center cursor-pointer"
              >
                <div className="mx-auto step-number">{step.num}</div>
                <h3 className="mt-4 font-heading text-sm font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 text-slate-200">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────────── */
// function Testimonials() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <span className="section-badge">Success Stories</span>
//           <h2 className="mt-4 font-heading text-4xl md:text-5xl font-black text-slate-900">
//             Outcomes, Not Just Opinions
//           </h2>
//           <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
//             Real results from engineers, founders, and professionals who chose Panacea.
//           </p>
//         </div>

//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.07 }}
//               whileHover={{ y: -4 }}
//               className="card-light p-6 flex flex-col"
//             >
//               <div className="flex gap-0.5">
//                 {[1,2,3,4,5].map((s) => (
//                   <svg key={s} className="h-4 w-4 text-amber-400 fill-current" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 italic">&ldquo;{t.text}&rdquo;</p>
//               <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
//                 <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
//                   {t.initials}
//                 </div>
//                 <div>
//                   <div className="text-sm font-bold text-slate-800">{t.name}</div>
//                   <div className="text-[11px] text-slate-400">{t.role} · {t.company}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ─── FAQ ───────────────────────────────────────────────────────────── */
function FAQ() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-badge">FAQ</span>
          <h2 className="mt-4 font-heading text-4xl font-black text-slate-900">
            Common Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-200 ${open ? "border-teal-200 bg-white shadow-sm" : "border-slate-200 bg-white/60"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none"
      >
        <span className="font-heading text-sm font-semibold text-slate-800">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-lg font-light transition-colors ${open ? "border-teal-500 text-teal-600" : "border-slate-200 text-slate-400"}`}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-500">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-teal-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge-dark mb-4 inline-flex">
            Ready to Build?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Let's Build Something
            <br />
            <span className="text-gradient-hero">Extraordinary Together</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Whether you're launching a startup, scaling an enterprise, or transforming your career — we're your partner in every step.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary glow-teal-btn text-sm">
              Start a Project
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/courses" className="btn-ghost-dark text-sm">
              Enroll in Training
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {["Free initial consultation", "No commitment required", "Response within 24 hours"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="h-3.5 w-3.5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
