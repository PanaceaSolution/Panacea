"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ─── Data ─────────────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Projects Delivered", desc: "Successfully delivered projects" },
  { value: "95%", label: "Client satisfaction", desc: "Satisfied customers worldwide" },
  { value: "2000+", label: "Students Trained", desc: "Career transformations achieved" },
  { value: "5+", label: "Years Experience", desc: "In the technology industry" },
];

const solutions = [
  { title: "IT Design", desc: "We craft scalable and efficient system architectures that lay the foundation for seamless tech management.", href: "/services" },
  { title: "IT Consultancy", desc: "Get expert guidance to align your technology strategy with your business goals and innovation.", href: "/services" },
  { title: "Web Development", desc: "We build fast, secure and responsive websites that deliver great user experiences and business impact.", href: "/services" },
  { title: "App Development", desc: "From concept to deployment, we create high performing mobile apps tailored to your needs.", href: "/services" },
  { title: "UI/UX Design", desc: "We design intuitive and engaging user experiences that enhance usability and brand identity.", href: "/services" },
  { title: "Digital Marketing", desc: "Boost your online presence with data-driven digital campaigns that convert and grow your brand.", href: "/services" },
  { title: "E-Commerce Solution", desc: "Launch and scale your online store with user-friendly, and fully integrated e-commerce platforms.", href: "/services" },
  { title: "Content Writing", desc: "Tell your story clearly and effectively with content that engages, informs, and drives results.", href: "/services" },
  { title: "Outsourcing", desc: "Scale your operations efficiently and effectively by leveraging our expert teams for development, design and support.", href: "/services" },
];

const benefits = [
  {
    title: "Practical Learning",
    desc: "Learn from real with hands-on projects using industry tools and real-world applications.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Expert Instructors",
    desc: "Learn from top industry professionals with 5+ years of practical experience.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Placement Support",
    desc: "100% placement assistance with internship and job placement with 100% salary hike.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Flexible Timing",
    desc: "Weekend and evening flexible schedules to accommodate working professionals.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const usp = [
  { title: "Enterprise Security", desc: "Industry-standard security protocols and data protection measures for all solutions.", icon: "🛡️" },
  { title: "Rapid Development", desc: "Agile methodologies ensuring faster time-to-market for your projects.", icon: "⚡" },
  { title: "Global Standards", desc: "Solutions following international coding standards and best practices.", icon: "🌐" },
  { title: "24/7 Support", desc: "Comprehensive support system with dedicated technical assistance.", icon: "🕐" },
  { title: "Certified Trainers", desc: "Expert trainers with proven track records and certifications.", icon: "🏆" },
  { title: "Career Growth", desc: "Training program integration accelerates your professional development.", icon: "📈" },
];

const testimonials = [
  {
    name: "Unknown Kumar",
    role: "Software Developer at TCS",
    text: "Panacea Solution delivered an exceptional web application that transformed our business processes. Their technical expertise and project management skills were outstanding.",
    initials: "UK",
    gradient: "from-teal-600 to-teal-400",
  },
  {
    name: "Unknown Kumar",
    role: "Student at IIT",
    text: "The online training program at Panacea was comprehensive and practical. I secured a great job within 2 months of completing the course. Highly recommended!",
    initials: "UK",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    name: "Unknown Kumar",
    role: "Mobile Developer at Nepal",
    text: "They developed our complete mobile app solution from scratch. The team's dedication and technical skills helped us launch successfully in the market.",
    initials: "UK",
    gradient: "from-teal-700 to-teal-500",
  },
];

const faqs = [
  { question: "What development services do you offer?", answer: "We cover end-to-end web, mobile, UI/UX, e-commerce, content, cloud architecture, and strategic developer outsourcing engagements tailored to your engineering stack and targets." },
  { question: "What training programs are available?", answer: "We offer cohort-based and personalized tracks in full-stack MERN development, Python data science, mobile engineering, digital marketing, and modern product design." },
  { question: "Do you provide placement assistance after training?", answer: "Yes. We provide 100% placement assistance with mock interviews, resume workshops, portfolio analysis, and direct fast-track recruitment referral routes to our hiring partners." },
  { question: "How long does a typical development project take?", answer: "Discovery to final launch typically spans 6–12 weeks depending on complexity and integrations. High-fidelity MVPs can ship within 4 weeks with our pre-hardened cloud templates." },
  { question: "Are your training programs industry-relevant?", answer: "Yes. Curricula are co-designed directly with global tech hiring partners, refreshed every single quarter, and utilize live production-grade tools and micro-project workshops." },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Benefits />
      <Trusted />
      <Solutions />
      <WhyUs />
      <Impact />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        {/* Left content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Premium Development &amp; Training Partner
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-heading text-4xl font-black leading-tight text-slate-900 md:text-5xl"
          >
            Accelerate Your{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">Development</span> &amp;{" "}
            <span className="text-teal-800">Training</span> Journey
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-lg text-sm leading-relaxed text-slate-600"
          >
            Panacea Solution Pvt. Ltd. is your reliable partner for cutting-edge software development and career-focused training solutions. We craft innovative tech solutions, empower the next generation of skilled professionals.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-teal-500/20 hover:bg-teal-700 transition-all hover:-translate-y-0.5"
            >
              Build With Us
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all"
            >
              Explore Courses
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-medium text-slate-500"
          >
            {["Free Project Access", "Offer Placement Support", "Industry Certified Training"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right image */}
        <div className="relative justify-self-center w-full max-w-lg">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
            className="absolute -left-4 -top-4 z-10 rounded-2xl bg-white p-4 shadow-xl border border-slate-100"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                <span className="text-sm">⭐</span>
              </div>
              <div>
                <div className="text-base font-black text-slate-800">4.8+</div>
                <div className="text-[9px] text-slate-400 leading-none">Employer Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100"
          >
            <Image
              src="/hero-team.jpg"
              alt="Panacea team"
              width={600}
              height={450}
              className="h-[380px] w-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits ──────────────────────────────────────────────────── */
function Benefits() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Our Training Programs?"
          desc="Industry focused training programs designed for career success."
        />
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((itemObj) => (
            <motion.div 
              key={itemObj.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                {itemObj.icon}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{itemObj.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{itemObj.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Trusted By ────────────────────────────────────────────────── */
function Trusted() {
  const logos = ["Next.js", "React", "Node.js", "AWS", "Flutter", "MongoDB"];
  return (
    <section className="border-b border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Trusted by Leading companies and professionals
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((name, i) => (
            <motion.div 
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex h-10 w-20 items-center justify-center cursor-pointer"
            >
              <span className="text-sm font-black text-slate-300 hover:text-slate-500 transition-colors">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solutions Grid ────────────────────────────────────────────── */
function Solutions() {
  const icons = [
    <svg key="1" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    <svg key="2" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    <svg key="3" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    <svg key="4" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    <svg key="5" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    <svg key="6" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    <svg key="7" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
    <svg key="8" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    <svg key="9" className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  ];

  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Expertise"
          title="Development & Training Solutions"
          desc="Comprehensive technology solutions and professional training programs designed to accelerate growth and create value."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, idx) => (
            <motion.div 
              key={solution.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
                {icons[idx]}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{solution.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{solution.desc}</p>
              <Link href={solution.href} className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-teal-600 hover:text-teal-700">
                Learn More
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ────────────────────────────────────────────────────── */
function WhyUs() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Panacea Solution?"
          desc="We combine cutting-edge technology expertise with proven training methodologies to deliver exceptional results."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usp.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Impact ────────────────────────────────────────────────────── */
function Impact() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0d3d52" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Our Impact</h2>
          <p className="mt-3 text-sm text-slate-400">Numbers that showcase our commitment to excellence in development and training.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-4xl font-black text-teal-400">{stat.value}</div>
              <div className="mt-2 text-sm font-bold text-white">{stat.label}</div>
              <p className="mt-1 text-[11px] text-slate-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients and Students Say"
          desc="Testimonials from successful projects and career transformations."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-0.5 text-amber-400">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} text-xs font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{t.name}</div>
                  <div className="text-[10px] text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────── */
function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          desc="Get answers to common questions about our development services and training programs."
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-5 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between font-heading text-sm font-semibold text-slate-800 focus:outline-none text-left"
      >
        {question}
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 text-teal-600"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-500">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-black text-slate-900 md:text-4xl"
        >
          Ready to Grow Your Career or Business?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500"
        >
          From new tools and technologies to user behavior and design thinking, we constantly adapt to deliver better results for our clients.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link href="/courses" className="rounded-full bg-teal-600 px-8 py-3.5 text-xs font-bold text-white shadow-lg shadow-teal-500/20 hover:bg-teal-700 transition-all hover:scale-105">
            Start Learning Today
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all hover:scale-105">
            Discuss Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Shared ────────────────────────────────────────────────────── */
function SectionHeading({ title, badge, desc }: { title: string; badge?: string; desc?: string }) {
  return (
    <div className="mb-12 text-center">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-teal-50 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-600 ring-1 ring-teal-200">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">{title}</h2>
      {desc && <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">{desc}</p>}
    </div>
  );
}
