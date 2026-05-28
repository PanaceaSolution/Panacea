"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Course", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="sticky top-0 z-50 border-b border-slate-200/40 bg-white/90 backdrop-blur-xl transition-all duration-300 shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-teal-400 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-800 group-hover:text-teal-600 transition-colors">
              Panacea
            </div>
            <div className="text-[9px] font-medium tracking-wide text-slate-400">
              Solution Pvt. Ltd.
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-teal-600 ${
                  isActive
                    ? "text-teal-600 font-semibold"
                    : "text-slate-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-teal-500" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all"
          >
            Get Quote
          </Link>
          <Link
            href="/courses"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-500/20 hover:bg-teal-700 transition-all hover:-translate-y-0.5"
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-full z-50 w-full overflow-hidden border-b border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-full border border-slate-200 bg-white py-3 text-center text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all"
                >
                  Get Quote
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
