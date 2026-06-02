"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Training Programs", href: "/courses" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "IT Consulting", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
  { label: "E-Commerce Solutions", href: "/services" },
];

const training = [
  { label: "Full Stack MERN", href: "/courses" },
  { label: "Python & Data Science", href: "/courses" },
  { label: "Mobile App Dev", href: "/courses" },
  { label: "Digital Marketing", href: "/courses" },
  { label: "UI/UX Design", href: "/courses" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer-bg text-slate-300">
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/logo.png"
                alt="Panacea Solution Pvt. Ltd."
                width={180}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              />
              <div className="leading-tight">
                <div className="font-heading text-sm font-extrabold tracking-tight text-white">
                  Panacea Solution
                </div>
                <div className="text-[9px] font-medium tracking-wide text-slate-500">
                  Pvt. Ltd.
                </div>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
              Nepal's premier technology partner — building enterprise software, delivering AI-powered solutions, and training the next generation of tech professionals since 2019.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <svg className="h-3.5 w-3.5 mt-0.5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sankhamul Marg, New Baneshwor<br />Kathmandu, Nepal</span>
              </div>
              <a href="mailto:info@panaceasolution.com" className="flex items-center gap-2.5 hover:text-teal-400 transition-colors">
                <svg className="h-3.5 w-3.5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@panaceasolution.com
              </a>
              <a href="tel:+97798411234567" className="flex items-center gap-2.5 hover:text-teal-400 transition-colors">
                <svg className="h-3.5 w-3.5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +977 9841-XXXXXX
              </a>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:border-teal-500/50 hover:text-teal-400 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-slate-300">Company</h4>
            <ul className="space-y-2.5 text-xs">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-slate-300">Services</h4>
            <ul className="space-y-2.5 text-xs">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-slate-300">Training</h4>
            <ul className="space-y-2.5 text-xs">
              {training.map((t) => (
                <li key={t.label}>
                  <Link href={t.href} className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-slate-300">Stay Updated</h4>
            <p className="mb-4 text-xs leading-relaxed text-slate-400">
              Get tech insights, training updates, and company news directly in your inbox.
            </p>
            {subscribed ? (
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 p-3 text-xs font-semibold text-teal-400">
                ✓ You're subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-slate-300 placeholder:text-slate-600 outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-600 py-2.5 text-xs font-bold text-white hover:bg-teal-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-6 space-y-1.5 text-[10px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg className="h-3 w-3 text-teal-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No spam. Unsubscribe anytime.
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-3 w-3 text-teal-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Mon–Fri, 10AM–6PM NPT support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row">
          <span>© 2025 Panacea Solution Pvt. Ltd. Made with ♥ in Nepal</span>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
