"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "IT Design",
    description: "Creative and technical design solutions tailored to your IT infrastructure needs.",
    image: "/services/it-design.jpg",
    features: ["System Architecture Design", "Network & Security Planning", "Scalable Infrastructure Setup", "Custom IT Blueprinting", "Hardware & Software Integration"],
    technologies: ["React", "Angular", "Vue", "Vite", "Python"],
  },
  {
    title: "Web Development",
    description: "Robust and secure websites tailored for your brand and business operations.",
    image: "/services/web-dev.jpg",
    features: ["CMS & Custom Websites", "Frontend & Backend Integration", "SEO-Ready Code", "Performance Optimization", "Maintenance & Support"],
    technologies: ["HTML5", "CSS3", "Vue", "Django", "WordPress"],
  },
  {
    title: "UI UX Design",
    description: "User-centered digital experiences that combine beauty and usability.",
    image: "/services/uiux.jpg",
    features: ["Wireframing & Prototyping", "Design Systems & Style Guides", "Mobile-First & Responsive Design", "Accessibility Standards", "Usability Testing"],
    technologies: ["Figma"],
  },
  {
    title: "Digital Marketing",
    description: "Smart strategies that drive traffic, engagement, and conversions.",
    image: "/services/marketing.jpg",
    features: ["SEO & SEM", "Social Media Marketing", "Email Campaigns", "Analytics & Reporting", "Content Strategy"],
    technologies: ["Hubspot", "Facebook", "Instagram", "Google Ads"],
  },
  {
    title: "Outsourcing",
    description: "Reliable IT resource outsourcing for development, support, and operations.",
    image: "/services/outsourcing.jpg",
    features: ["Dedicated Developers/Teams", "Remote IT Support", "Project-Based Staffing", "QA & Testing Services", "Cost-Effective Hiring"],
    technologies: ["Jira", "QA", "DevOps", "Marketing", "ClickUp"],
  },
  {
    title: "App Development",
    description: "High-performance mobile and cross-platform applications that engage users.",
    image: "/services/app-dev.jpg",
    features: ["Android/iOS Development", "Flutter/React Native Apps", "Scalable Backend", "API Integration", "App Store Deployment"],
    technologies: ["Flutter", "Kotlin", "Swift", "React Native", "Nodejs"],
  },
];

const advantages = [
  { title: "Quality Assurance", desc: "Rigorous testing and quality control processes.", icon: "✅" },
  { title: "Fast Delivery", desc: "Agile methodology ensuring timely project completion.", icon: "⚡" },
  { title: "Expert Team", desc: "Experienced developers and certified trainers.", icon: "👥" },
  { title: "Industry Standards", desc: "Following international coding and training standards.", icon: "🌐" },
];

const processSteps = [
  { num: "01", title: "Requirement Analysis", desc: "Detailed understanding of project needs and objectives" },
  { num: "02", title: "Planning & Design", desc: "Create comprehensive project roadmap and UI/UX design" },
  { num: "03", title: "Development", desc: "Agile development with regular updates and feedback cycles" },
  { num: "04", title: "Testing & QA", desc: "Comprehensive testing and quality assurance processes" },
  { num: "05", title: "Deployment & Support", desc: "Launch and provide ongoing maintenance and support" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <WhyChoose />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="mx-auto max-w-5xl px-6 text-center lg:px-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200">
          Our Services
        </span>
        <h1 className="mt-5 font-heading text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          Development &amp; Training Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          Panacea Solution provides comprehensive software development services and professional training programs to help businesses grow and individuals advance their careers in technology.
        </p>
        <div className="mt-4 text-sm font-semibold text-teal-600">Development Services</div>
        <p className="mt-1 text-xs text-slate-400">Custom software solutions tailored to your business needs with cutting edge technologies</p>
      </motion.div>
    </section>
  );
}

function ServicesGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div 
              key={service.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-bold text-slate-800">{service.title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{service.description}</p>

                <div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-teal-600">Key Features:</div>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <svg className="h-4 w-4 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Technologies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t) => (
                      <span key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-2 flex w-full items-center justify-center rounded-xl bg-teal-600 py-3 text-xs font-bold text-white shadow-md hover:bg-teal-700 transition-all duration-300 hover:scale-102"
                >
                  Request a Proposal
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Why Choose Panacea Solution?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">Our commitment to excellence and customer satisfaction sets us apart in the industry.</p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((advantage) => (
            <motion.div 
              key={advantage.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
                {advantage.icon}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{advantage.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{advantage.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Our Process</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">We follow a systematic approach to ensure successful project delivery and effective learning outcomes.</p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {processSteps.map((step, idx) => (
            <motion.div 
              key={step.num}
              variants={item}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center hover:border-teal-200 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {idx < processSteps.length - 1 && (
                <div className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 items-center justify-center lg:flex">
                  <svg className="h-4 w-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-sm font-black text-white shadow-md">
                {step.num}
              </div>
              <h4 className="font-heading text-xs font-bold text-slate-800">{step.title}</h4>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-slate-50 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Ready to Get Started?</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
          Contact our experts to discuss your development needs or explore our training programs to advance your career.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-teal-600 px-8 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-teal-700 transition-all hover:scale-105">
            Request Proposal
          </Link>
          <Link href="/courses" className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all hover:scale-105">
            Book Free Demo
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
