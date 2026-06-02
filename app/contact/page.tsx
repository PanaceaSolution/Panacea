"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const contactChannels = [
  {
    title: "Schedule a Call",
    desc: "Book a 30-minute discovery call with our team.",
    note: "Response within 2 hours",
    cta: "Book a Meeting",
    href: "/contact",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-teal-50 text-teal-600 ring-teal-100",
  },
  {
    title: "WhatsApp Chat",
    desc: "Get instant answers from our team directly.",
    note: "Available 10AM–7PM NPT",
    cta: "Open WhatsApp",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "bg-green-50 text-green-600 ring-green-100",
  },
  {
    title: "Email Us",
    desc: "For project proposals and detailed inquiries.",
    note: "Response within 24 hours",
    cta: "Send Email",
    href: "mailto:info@panaceasolution.com",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
];

const contactInfo = [
  {
    label: "Office Location",
    value: "Sankhamul Marg, New Baneshwor\nKathmandu, Nepal 44600",
    actionLabel: "Get Directions →",
    actionHref: "#",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone Numbers",
    value: "+977 9841-XXXXXX (Sales)\n+977 9841-YYYYYY (Training)",
    actionLabel: "Call Now →",
    actionHref: "tel:+97798411234567",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email Addresses",
    value: "info@panaceasolution.com\ncareer@panaceasolution.com",
    actionLabel: "Email Us →",
    actionHref: "mailto:info@panaceasolution.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Sunday – Friday: 10AM – 6PM\nSaturday: 10AM – 2PM (Training only)",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What information do I need to start a project?",
    a: "A brief description of what you're building, your target users, your timeline, and a rough budget range. We handle everything else — architecture, design, stack selection, and delivery.",
  },
  {
    q: "How long does a typical project take to complete?",
    a: "Discovery through production launch typically spans 6–12 weeks depending on complexity. High-fidelity MVPs can ship within 4 weeks using our accelerated delivery framework.",
  },
  {
    q: "Do you offer support and maintenance after launch?",
    a: "Yes. Every project includes 30 days of complimentary post-launch support. We also offer ongoing SLA packages for monitoring, updates, and feature development.",
  },
  {
    q: "Can I visit your office to discuss my project in person?",
    a: "Absolutely. We welcome in-person meetings at our Sankhamul office during business hours. Contact us to schedule — we'll prepare a tailored overview of relevant case studies.",
  },
  {
    q: "How do I enroll in a training program?",
    a: "Fill out the contact form, choose 'Training & Courses', and our admissions team will reach out within 24 hours with cohort dates, curriculum details, and enrollment steps.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Channels />
      <FormAndInfo />
      <FAQ />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="space-y-5"
        >
          <span className="section-badge-dark">Get In Touch</span>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight">
            Let's Build Your
            <br />
            <span className="text-gradient-hero">Next Project</span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-400">
            Tell us about your project or training needs. We'll get back to you within 24 hours with a custom plan and transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs text-slate-500">
            {["Free initial consultation", "No commitment required", "Response within 24 hours"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
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

function Channels() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:grid-cols-3 lg:px-8">
        {contactChannels.map((channel, idx) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="card-light p-6 text-center"
          >
            <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${channel.color}`}>
              {channel.icon}
            </div>
            <h3 className="font-heading text-sm font-bold text-slate-800">{channel.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{channel.desc}</p>
            <p className="mt-1 text-[10px] font-medium text-slate-400">{channel.note}</p>
            <a
              href={channel.href}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors"
            >
              {channel.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FormAndInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="font-heading text-xl font-bold text-slate-800">Send Us a Message</h2>
          <p className="mt-1 text-sm text-slate-500">Fill out the form — we'll respond within 24 business hours.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 py-16 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-teal-800">Message Sent!</h3>
              <p className="mt-2 text-sm text-teal-600">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  label="First Name"
                  value={formData.firstName}
                  onChange={(v) => setFormData({ ...formData, firstName: v })}
                  placeholder="Rajan"
                  required
                />
                <FormField
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(v) => setFormData({ ...formData, lastName: v })}
                  placeholder="Sharma"
                  required
                />
              </div>
              <FormField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                placeholder="rajan@company.com"
                required
              />
              <FormField
                label="Phone Number"
                value={formData.phone}
                onChange={(v) => setFormData({ ...formData, phone: v })}
                placeholder="+977 9841-XXXXXX"
              />
              <FormField
                label="Company / Organization"
                value={formData.company}
                onChange={(v) => setFormData({ ...formData, company: v })}
                placeholder="Your company or personal name"
              />
              <FormSelect
                label="I'm interested in..."
                value={formData.service}
                onChange={(v) => setFormData({ ...formData, service: v })}
                options={[
                  "Select a service or program",
                  "Web Development",
                  "Mobile App Development",
                  "UI/UX Design",
                  "IT Consulting",
                  "Digital Marketing",
                  "E-Commerce Solution",
                  "Full Stack MERN Training",
                  "Python & Data Science Training",
                  "Mobile Dev Training",
                  "Digital Marketing Training",
                  "Other",
                ]}
              />
              <FormSelect
                label="Project Budget Range"
                value={formData.budget}
                onChange={(v) => setFormData({ ...formData, budget: v })}
                options={[
                  "Select budget range",
                  "Rs. 25k–50k",
                  "Rs. 50k–100k",
                  "Rs. 100k–250k",
                  "Rs. 250k–500k",
                  "Rs. 500k+",
                  "Not sure yet",
                ]}
              />
              <div>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Project Details / Message *</span>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, goals, timeline, or any questions you have..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10 transition resize-none"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-teal-700 transition-colors glow-teal-btn"
              >
                Send Message →
              </button>
              <p className="text-center text-[10px] text-slate-400">
                By submitting this form you agree to our privacy policy. We never share your data.
              </p>
            </form>
          )}
        </div>

        {/* Info + Map */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-800">Contact Information</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Prefer to reach us directly? Use any of the channels below.
            </p>
            <div className="mt-5 space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 text-teal-600 shadow-sm">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{info.label}</div>
                    <div className="mt-0.5 text-xs font-medium text-slate-700 whitespace-pre-line">{info.value}</div>
                    {info.actionLabel && (
                      <a href={info.actionHref} className="mt-1 block text-[11px] font-bold text-teal-600 hover:text-teal-700 transition-colors">
                        {info.actionLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Find Us</div>
                <div className="text-[10px] text-slate-400">Sankhamul, New Baneshwor</div>
              </div>
            </div>
            <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100">
              <div className="text-center">
                <div className="text-2xl mb-1">📍</div>
                <p className="text-xs font-semibold text-teal-700">Sankhamul Marg</p>
                <p className="text-[10px] text-teal-600">New Baneshwor, Kathmandu</p>
                <a href="#" className="mt-2 block text-[11px] font-bold text-teal-600 hover:text-teal-700">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, value, onChange, placeholder, type = "text", required = false }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-700">{label}{required && " *"}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10 transition"
      />
    </label>
  );
}

function FormSelect({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10 transition cursor-pointer"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="section-badge">FAQ</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-500">Quick answers about working with us.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 ${open === idx ? "border-teal-200 bg-white shadow-sm" : "border-slate-200 bg-white/60"}`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-heading text-sm font-semibold text-slate-800">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-lg font-light transition-colors ${open === idx ? "border-teal-500 text-teal-600" : "border-slate-200 text-slate-400"}`}
                >
                  +
                </motion.span>
              </button>
              {open === idx && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-slate-100 px-5 pb-5 pt-3"
                >
                  <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
