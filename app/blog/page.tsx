"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featured = {
  slug: "future-of-web-development-nepal-2025",
  title: "The Future of Web Development in Nepal: Trends Shaping 2025 and Beyond",
  excerpt: "From AI-assisted coding to serverless architectures and edge computing — how Nepal's tech industry is catching up with global standards, and what it means for businesses and developers alike.",
  author: "Dipesh Thapa",
  authorRole: "Lead Engineer",
  date: "July 28, 2025",
  readTime: "8 min read",
  image: "/services/web-dev.jpg",
  category: "Development",
};

const articles = [
  {
    slug: "flutter-vs-react-native-2025",
    title: "Flutter vs React Native in 2025: Which Should You Choose?",
    excerpt: "A practical comparison based on real project experience — performance, ecosystem, developer experience, and deployment.",
    category: "Mobile",
    date: "July 25, 2025",
    readTime: "6 min read",
    image: "/services/app-dev.jpg",
    author: "Amit Verma",
  },
  {
    slug: "seo-nepal-businesses",
    title: "Technical SEO Mistakes Killing Nepali Business Websites",
    excerpt: "Core Web Vitals, crawlability issues, and local SEO gaps we see in 80% of Nepali business sites — and how to fix them.",
    category: "Marketing",
    date: "July 23, 2025",
    readTime: "7 min read",
    image: "/services/marketing.jpg",
    author: "Rahul Gupta",
  },
  {
    slug: "saas-product-launch-lessons",
    title: "5 Lessons from Launching 50+ SaaS Products in South Asia",
    excerpt: "What separates successful product launches from failed ones — architecture, pricing, onboarding, and the metrics that actually matter.",
    category: "Product",
    date: "July 20, 2025",
    readTime: "9 min read",
    image: "/services/outsourcing.jpg",
    author: "Narayan Sharma",
  },
  {
    slug: "python-data-science-career-nepal",
    title: "Is Data Science a Good Career Choice in Nepal Right Now?",
    excerpt: "Salary data, hiring trends, and the skills that top Nepali companies are actively recruiting for in 2025.",
    category: "Careers",
    date: "July 18, 2025",
    readTime: "5 min read",
    image: "/services/it-design.jpg",
    author: "Priya Sharma",
  },
  {
    slug: "design-systems-for-startups",
    title: "Why Every Startup Needs a Design System (Even at 3 People)",
    excerpt: "How we helped a Kathmandu-based fintech reduce UI inconsistency by 60% and cut design-to-development time in half.",
    category: "Design",
    date: "July 15, 2025",
    readTime: "6 min read",
    image: "/services/uiux.jpg",
    author: "Alisha Rana",
  },
  {
    slug: "cloud-migration-guide-2025",
    title: "Cloud Migration for Nepali Businesses: A Practical 2025 Guide",
    excerpt: "AWS vs Azure, cost considerations, compliance requirements, and a step-by-step migration framework.",
    category: "Cloud",
    date: "July 12, 2025",
    readTime: "10 min read",
    image: "/services/it-design.jpg",
    author: "Sanjay Adhikari",
  },
];

const categories = [
  { name: "All", count: 12 },
  { name: "Development", count: 4 },
  { name: "Mobile", count: 2 },
  { name: "Design", count: 2 },
  { name: "Marketing", count: 2 },
  { name: "Careers", count: 1 },
  { name: "Cloud", count: 1 },
];

const updates = [
  { title: "Panacea Solution Achieves AWS Partner Status", date: "July 22, 2025", tag: "Company News" },
  { title: "New MERN Batch Opens — August 8, 2025", date: "July 20, 2025", tag: "Training" },
  { title: "Partnership with Nepal IT Talent Association", date: "July 15, 2025", tag: "Partnership" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />

      {/* Featured article */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Featured Article</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="grid gap-0 md:grid-cols-[380px_1fr]">
              <div className="relative h-56 overflow-hidden bg-slate-100 md:h-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute left-4 top-4 rounded-full bg-teal-600 px-3 py-1 text-[10px] font-bold text-white">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{featured.excerpt}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center text-[9px] font-bold text-teal-700">
                      {featured.author.split(" ").map(w => w[0]).join("")}
                    </div>
                    <span className="font-medium text-slate-600">{featured.author}</span>
                    <span>·</span>
                    <span>{featured.authorRole}</span>
                  </div>
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors"
                >
                  Read Full Article
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles + Sidebar */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Main */}
            <div>
              {/* Category filter */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      activeCategory === cat.name
                        ? "bg-teal-600 text-white shadow-md"
                        : "border border-slate-200 text-slate-500 hover:border-teal-400 hover:text-teal-600"
                    }`}
                  >
                    {cat.name}
                    <span className="ml-1.5 text-[9px] opacity-70">({cat.count})</span>
                  </button>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {filtered.map((article, idx) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className="card-light overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute left-3 top-3 flex items-center justify-between w-[calc(100%-24px)]">
                        <span className="rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-bold text-teal-600 shadow-sm backdrop-blur-sm">
                          {article.category}
                        </span>
                        <span className="rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-medium text-slate-500 shadow-sm backdrop-blur-sm">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-teal-700 transition-colors">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">{article.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
                        <span>{article.author} · {article.date}</span>
                        <Link href={`/blog/${article.slug}`} className="font-bold text-teal-600 hover:text-teal-700 transition-colors">
                          Read →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <button className="rounded-full border border-slate-200 bg-white px-8 py-3 text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Newsletter */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-slate-800 mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-xs text-slate-500 mb-4">Tech insights and company updates — weekly, no spam.</p>
                {subscribed ? (
                  <div className="rounded-xl bg-teal-50 border border-teal-200 p-3 text-xs font-semibold text-teal-700">
                    ✓ You're subscribed. See you in your inbox!
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/20 transition mb-2"
                    />
                    <button type="submit" className="w-full rounded-xl bg-teal-600 py-2 text-xs font-bold text-white hover:bg-teal-700 transition-colors">
                      Subscribe Free
                    </button>
                  </form>
                )}
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">Categories</h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setActiveCategory(cat.name)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors ${
                          activeCategory === cat.name ? "bg-teal-50 text-teal-700 font-bold" : "text-slate-600 hover:bg-slate-50 hover:text-teal-600"
                        }`}
                      >
                        <span className="font-medium">{cat.name}</span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest updates */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">Company Updates</h3>
                <ul className="space-y-4">
                  {updates.map((u, idx) => (
                    <li key={idx} className={`${idx < updates.length - 1 ? "border-b border-slate-100 pb-4" : ""}`}>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-teal-600">{u.tag}</span>
                      <p className="mt-1 text-xs font-medium text-slate-700 leading-snug hover:text-teal-600 cursor-pointer transition-colors">
                        {u.title}
                      </p>
                      <div className="mt-1 text-[10px] text-slate-400">{u.date}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-5 text-white">
                <h3 className="font-heading text-sm font-bold">Ready to build?</h3>
                <p className="mt-1.5 text-xs text-teal-100 leading-relaxed">Start your project or enroll in a training program today.</p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link href="/contact" className="rounded-lg bg-white py-2 text-center text-xs font-bold text-teal-700 hover:bg-teal-50 transition-colors">
                    Start a Project
                  </Link>
                  <Link href="/courses" className="rounded-lg border border-white/30 py-2 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors">
                    Browse Courses
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="space-y-5"
        >
          <span className="section-badge-dark">Insights & Knowledge</span>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight">
            Ideas Worth
            <br />
            <span className="text-gradient-hero">Building On</span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-400">
            Deep dives into technology, business strategy, and career growth — written by the engineers, designers, and educators at Panacea Solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
