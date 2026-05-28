import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Blog & Articles", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const expertise = [
  "Web Development",
  "Mobile App Development",
  "Software Solutions",
  "Training & Certification",
  "Technical Consulting",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    svg: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.75a4.85 4.85 0 01-1.03-.06z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    svg: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.footer
      style={{ backgroundColor: "#0d3d52" }}
      className="text-slate-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <motion.div
            key="brand"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5 lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 shadow-md">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-xs font-extrabold uppercase tracking-widest text-white">Panacea</div>
                <div className="text-[9px] tracking-wide text-slate-400">Solution Pvt. Ltd.</div>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400">
              Panacea Solution Pvt Ltd specializes in cutting-edge development and comprehensive training solutions. We empower businesses and individuals with the latest technology skills and innovative software solutions.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+977 – 9818-*****</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sankhamul, New Baneshwor</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                </svg>
                <span>career.panaceasolution.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => (
                <motion.link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={socialIconVariants.hover}
                  whileTap={socialIconVariants.tap}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-slate-400 hover:border-teal-400 hover:text-teal-400 transition-colors"
                >
                  {s.svg}
                </motion.link>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Links */}
          <motion.div
            key="links"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Links</h4>
            <ul className="space-y-2.5 text-xs">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Our Expertise */}
          <motion.div
            key="expertise"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Our Expertise</h4>
            <ul className="space-y-2.5 text-xs">
              {expertise.map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Stay Updated */}
          <motion.div
            key="updated"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ delay: 0.3 }}
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Stay Updated</h4>
            <p className="mb-4 text-xs leading-relaxed text-slate-400">
              Subscribe to our newsletter for latest updates and training programs.
            </p>
            <div className="flex items-center overflow-hidden rounded-lg border border-slate-600 bg-slate-700/40">
              <input
                type="email"
                placeholder="Enter your Email address"
                className="flex-1 bg-transparent px-3 py-2.5 text-xs text-slate-300 placeholder:text-slate-500 outline-none"
              />
              <button className="flex h-full items-center justify-center bg-teal-600 px-3 py-2.5 hover:bg-teal-500 transition-colors">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="border-t border-slate-700/50 py-5 text-center text-xs text-slate-500"
      >
        © 2025 Panacea Solution Pvt. Ltd. Made with{" "}
        <span className="text-red-400">♥</span> in Nepal&nbsp;|&nbsp;All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
