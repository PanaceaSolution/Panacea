"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Training", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/career" },
];

const serviceLinks = [
  {
    title: "Web Development",
    desc: "Full-stack applications & CMS",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "Mobile App Development",
    desc: "iOS, Android & cross-platform",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "UI/UX Design",
    desc: "Design systems & prototypes",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "IT Consulting",
    desc: "Strategy & architecture",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, SEM & growth",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Online stores & platforms",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    href: "/services",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current?.querySelectorAll("[data-nav-item]") ?? [],
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.04, ease: "power3.out", delay: 0.15 }
    );

    ScrollTrigger.create({
      start: 20,
      end: 99999,
      onUpdate: (self) => {
        setScrolled(self.scroll() > 20);
      },
    });
  }, { scope: headerRef });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/95 shadow-sm shadow-slate-200/50 backdrop-blur-xl"
          : "border-b border-transparent bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-nav-item>
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 shadow-md shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-all duration-300">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
              Panacea Solution
            </div>
            <div className="text-[9px] font-medium tracking-wide text-slate-400">
              Pvt. Ltd.
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div
                  key="services"
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    data-nav-item
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive("/services") ? "text-teal-600 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    Services
                    <svg className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-1 w-80 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-slate-200/60"
                      >
                        <div className="grid grid-cols-2 gap-1.5">
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.title}
                              href={s.href}
                              className="group flex items-start gap-2.5 rounded-xl p-2.5 hover:bg-teal-50 transition-colors"
                            >
                              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                                {s.icon}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-700 group-hover:text-teal-700 transition-colors leading-tight">
                                  {s.title}
                                </div>
                                <div className="mt-0.5 text-[10px] text-slate-400 leading-tight">{s.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 border-t border-slate-100 pt-2">
                          <Link href="/services" className="flex items-center justify-center gap-1 py-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors">
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                data-nav-item
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-teal-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg bg-teal-50 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href="/contact"
            data-nav-item
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50/50 transition-all"
          >
            Get a Quote
          </Link>
          <Link
            href="/courses"
            data-nav-item
            className="rounded-full bg-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-500/20 hover:bg-teal-700 hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5"
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden transition-colors hover:border-teal-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="h-4.5 w-4.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="h-4.5 w-4.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h11" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-full z-50 w-full overflow-hidden border-b border-slate-200 bg-white shadow-xl lg:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {[{ label: "Home", href: "/" }, ...navItems].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-teal-50 text-teal-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-slate-100 pt-3 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-full border border-slate-200 py-3 text-center text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/courses"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-full bg-teal-600 py-3 text-center text-xs font-bold text-white hover:bg-teal-700 transition-all"
                >
                  Start Learning
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
