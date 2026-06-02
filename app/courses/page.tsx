"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const learningPaths = [
  {
    title: "Full Stack Engineer",
    icon: "💻",
    duration: "10 months",
    courses: 2,
    desc: "Become a job-ready full stack developer. MERN frontend to backend, cloud deployment, and real-world product delivery.",
    color: "from-teal-600 to-teal-400",
  },
  {
    title: "Data Professional",
    icon: "📊",
    duration: "4 months",
    courses: 1,
    desc: "Master data analysis, Python, machine learning, and visualization using industry datasets and Kaggle competitions.",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    title: "Digital Growth Marketer",
    icon: "📈",
    duration: "3 months",
    courses: 1,
    desc: "Command SEO, paid ads, analytics, and content strategy to drive measurable business growth online.",
    color: "from-orange-500 to-amber-400",
  },
];

const courses = [
  {
    title: "Full Stack MERN Development",
    level: "Beginner → Advanced",
    duration: "6 Months",
    rating: 4.8,
    students: "880+",
    image: "/services/web-dev.jpg",
    slug: "mern-stack",
    badge: "Most Popular",
    badgeColor: "bg-teal-600",
    curriculum: [
      "JavaScript & ES6+ fundamentals",
      "React.js, hooks & state management",
      "Node.js & Express REST APIs",
      "MongoDB & Mongoose ODM",
      "Next.js & full-stack deployment",
      "Git, GitHub & CI/CD basics",
    ],
    outcomes: ["Build 5+ real-world projects", "Deploy to AWS / Vercel", "100% placement assistance"],
    instructor: "Dipesh Thapa",
    instructorExp: "8+ years",
  },
  {
    title: "Python & Data Science",
    level: "Beginner → Intermediate",
    duration: "4 Months",
    rating: 4.7,
    students: "220+",
    image: "/services/outsourcing.jpg",
    slug: "python-data-science",
    badge: "High Demand",
    badgeColor: "bg-indigo-600",
    curriculum: [
      "Python programming fundamentals",
      "NumPy, Pandas & data wrangling",
      "Matplotlib & Seaborn visualization",
      "Scikit-learn & ML algorithms",
      "Real Kaggle competitions",
      "Capstone project portfolio",
    ],
    outcomes: ["Kaggle competition certification", "ML model deployment", "Data analyst job-ready portfolio"],
    instructor: "Priya Sharma",
    instructorExp: "10+ years",
  },
  {
    title: "Mobile App Development",
    level: "Beginner → Advanced",
    duration: "4 Months",
    rating: 4.7,
    students: "880+",
    image: "/services/app-dev.jpg",
    slug: "mobile-app-development",
    badge: "In Demand",
    badgeColor: "bg-emerald-600",
    curriculum: [
      "Dart programming language",
      "Flutter widgets & state management",
      "Navigation, routing & animations",
      "Firebase integration & auth",
      "REST API consumption",
      "Play Store & App Store deployment",
    ],
    outcomes: ["Publish on App Store & Play Store", "3+ production apps in portfolio", "Cross-platform expertise"],
    instructor: "Amit Verma",
    instructorExp: "7+ years",
  },
  {
    title: "Digital Marketing Mastery",
    level: "Beginner → Advanced",
    duration: "3 Months",
    rating: 4.6,
    students: "440+",
    image: "/services/marketing.jpg",
    slug: "digital-marketing-mastery",
    badge: "Fast Track",
    badgeColor: "bg-orange-500",
    curriculum: [
      "SEO fundamentals & technical SEO",
      "Google Ads & Search campaigns",
      "Meta Business Suite & social ads",
      "Email marketing & automation",
      "Analytics, attribution & GA4",
      "Content strategy & copywriting",
    ],
    outcomes: ["Manage ₹10L+ ad budget", "Google Ads certified", "Full-funnel campaign delivery"],
    instructor: "Rahul Gupta",
    instructorExp: "9+ years",
  },
];

const batches = [
  { name: "Full Stack MERN", date: "August 8, 2025", seats: "2 Seats Left", urgency: "high", color: "text-red-600 bg-red-50 ring-red-200" },
  { name: "Python & Data Science", date: "September 1, 2025", seats: "4 Seats Left", urgency: "medium", color: "text-orange-600 bg-orange-50 ring-orange-200" },
  { name: "Mobile Development", date: "September 30, 2025", seats: "Limited", urgency: "medium", color: "text-teal-600 bg-teal-50 ring-teal-200" },
  { name: "UI/UX Design", date: "December 6, 2025", seats: "Cohort Full", urgency: "none", color: "text-slate-500 bg-slate-50 ring-slate-200" },
];

const testimonials = [
  {
    name: "Rajan Shrestha",
    role: "Full Stack Developer",
    company: "Leapfrog Technology",
    initials: "RS",
    text: "The MERN program's depth was incredible. I built five real projects, learned Git workflows properly, and landed a job at Leapfrog within 3 months of graduating.",
    color: "from-teal-600 to-teal-400",
  },
  {
    name: "Priya Adhikari",
    role: "Data Analyst",
    company: "Deloitte Nepal",
    initials: "PA",
    text: "I came from accounting with zero coding experience. Four months later, I was writing Python scripts, building ML models, and interviewing at top firms. Placement team was outstanding.",
    color: "from-indigo-500 to-indigo-400",
  },
  {
    name: "Sunita Tamang",
    role: "Flutter Developer",
    company: "Yomari Inc.",
    initials: "ST",
    text: "Flutter course was thorough, practical, and always current. I published three apps on the Play Store during the course itself. Got hired before the last week of class.",
    color: "from-emerald-600 to-emerald-400",
  },
];

const benefits = [
  { icon: "🎯", title: "100% Placement Assistance", desc: "Mock interviews, resume coaching, LinkedIn optimization, and direct referrals to 50+ hiring partners." },
  { icon: "👨‍🏫", title: "Industry Expert Instructors", desc: "All instructors are active professionals with 7–15 years of hands-on experience." },
  { icon: "🏗️", title: "Build Real Projects", desc: "Graduate with a portfolio of 3–5 production-quality projects deployed to the cloud." },
  { icon: "📅", title: "Flexible Schedule", desc: "Weekday mornings, evenings, and weekend batches to fit your existing commitments." },
  { icon: "🔄", title: "Lifetime Access", desc: "Course materials, recordings, and community access never expire after enrollment." },
  { icon: "💬", title: "1-on-1 Mentorship", desc: "Weekly office hours and dedicated mentorship sessions throughout your cohort." },
];

export default function CoursesPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <LearningPaths />
      <CoursesGrid />
      <Benefits />
      <Batches />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative overflow-hidden bg-[#020817] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-dark" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="space-y-6"
        >
          <span className="section-badge-dark">Professional Training</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Master Technology.
            <br />
            <span className="text-gradient-hero">Transform Your Career.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
            Industry-designed curricula, expert instructors, real projects, and 100% placement assistance — everything you need to land your dream tech job.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-center pt-2">
            {[["120+", "Students Trained"], ["100%", "Placement Assistance"], ["4.7★", "Average Rating"]].map(([v, l]) => (
              <div key={l}>
                <div className="font-heading text-2xl font-black text-teal-400">{v}</div>
                <div className="text-xs text-slate-500">{l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="#courses" className="btn-primary glow-teal-btn">
              Browse All Courses
            </Link>
            <Link href="/contact" className="btn-ghost-dark">
              Book Free Demo Class
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LearningPaths() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="section-badge">Structured Learning Paths</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black text-slate-900">
            Find Your Track
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Curated journeys designed to take you from zero to job-ready in your chosen discipline.
          </p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-3">
            {learningPaths.map((path) => (
              <motion.div
                key={path.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-light group p-7"
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${path.color} text-2xl shadow-lg`}>
                  {path.icon}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{path.desc}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{path.courses} course{path.courses > 1 ? "s" : ""}</span>
                  <span>{path.duration}</span>
                </div>
                <Link
                  href="#courses"
                  className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-2 text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 transition-all"
                >
                  Explore Path
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CoursesGrid() {
  return (
    <section id="courses" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="section-badge">All Courses</span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-black text-slate-900">
              Current Programs
            </h2>
          </div>
          <Link href="/contact" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors">
            Book a Free Demo →
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {courses.map((course, idx) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-light overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold text-white ${course.badgeColor}`}>
                  {course.badge}
                </span>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-amber-500 shadow-sm backdrop-blur-sm">
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {course.rating} · {course.students} enrolled
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                    {course.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-teal-600">Curriculum Highlights</div>
                    <ul className="space-y-1">
                      {course.curriculum.slice(0, 4).map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-xs text-slate-500">
                          <svg className="mt-0.5 h-3 w-3 shrink-0 text-teal-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">What You'll Achieve</div>
                    <ul className="space-y-1">
                      {course.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-1.5 text-xs text-slate-500">
                          <span className="text-teal-500">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 border-t border-slate-100 pt-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-[11px] font-bold text-teal-700">
                    {course.instructor.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-700">{course.instructor}</div>
                    <div className="text-[10px] text-slate-400">{course.instructorExp} industry experience</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="rounded-xl border border-slate-200 py-3 text-center text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 transition-all"
                  >
                    View Syllabus
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl bg-teal-600 py-3 text-center text-xs font-bold text-white hover:bg-teal-700 transition-colors"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="section-badge">Program Benefits</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black text-slate-900">
            More Than Just a Course
          </h2>
          <p className="mt-2 text-sm text-slate-500">Everything we include to ensure you succeed — during and after the program.</p>
        </div>
        <ScrollReveal animation="stagger">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="card-light p-6 flex gap-4"
              >
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-800">{b.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Batches() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="section-badge">Enrollment</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black text-slate-900">
            Upcoming Batches
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Cohorts fill fast. Reserve your seat before enrollment closes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {batches.map((batch) => (
            <div key={batch.name} className={`rounded-2xl border bg-white p-5 shadow-sm ${batch.urgency === "none" ? "opacity-70" : ""}`}>
              <div className={`mb-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${batch.color}`}>
                {batch.seats}
              </div>
              <h4 className="font-heading text-sm font-bold text-slate-800">{batch.name}</h4>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {batch.date}
              </div>
              <Link
                href="/contact"
                className={`mt-4 flex w-full items-center justify-center rounded-xl py-2.5 text-xs font-bold transition-colors ${
                  batch.urgency === "none"
                    ? "bg-slate-100 text-slate-400 pointer-events-none"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {batch.urgency === "none" ? "Cohort Full" : "Reserve My Seat"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="section-badge">Student Outcomes</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black text-slate-900">
            Real Transformations
          </h2>
          <p className="mt-2 text-sm text-slate-500">From career switchers to fresh graduates — here's what our alumni say.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-light p-6 flex flex-col"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="h-4 w-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
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
          Your Career Transformation Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          Join thousands of professionals who chose Panacea to build real skills, work on real projects, and land real jobs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#courses" className="btn-primary glow-teal-btn">
            Browse All Programs
          </Link>
          <Link href="/contact" className="btn-ghost-dark">
            Talk to a Career Counselor
          </Link>
        </div>
      </div>
    </section>
  );
}
