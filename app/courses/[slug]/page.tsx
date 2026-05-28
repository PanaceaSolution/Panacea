import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const course = {
  slug: "mobile-app-development",
  title: "Mobile App Development Masterclass",
  level: "Beginner to Advanced",
  duration: "5 months",
  students: 723,
  rating: "4.9/5",
  certification: "Professional",
  price: "Rs. 50,000",
  oldPrice: "Rs. 70,000",
  save: "Save 29%",
  mode: "Hybrid (Kathmandu)",
  language: "English / Nepali",
  placement: "90% Success Rate",
  image: "/services/app-dev.jpg",
  includes: [
    "Build 5+ Production-grade Apps",
    "App Store & Play Store Publishing",
    "Cross-platform React Native & Flutter",
    "Tailored UI/UX Design Standards",
    "Direct Industry Mentorship Sessions",
    "Freelancing Blueprint & Advisoryflows",
  ],
};

const curriculum = [
  { title: "Module 1: Mobile UI/UX Design & Architecture", items: ["Responsive Mobile Layout Guidelines", "Clean Architecture Principles", "Git Workflows & Version Control"], weeks: 3 },
  { title: "Module 2: Cross-Platform Development Mastery", items: ["React Native Core Elements & State", "Advanced State (Redux / Toolkit)", "Secure API Integrations & Storage"], weeks: 6 },
  { title: "Module 3: Enterprise Native APIs & Deployments", items: ["Device hardware triggers (GPS, Camera)", "Crashlytics & Performance Profiling", "App Store Publishing Protocols"], weeks: 3 },
];

const prerequisites = ["Basic programming fundamentals", "Creative design mindset", "Active interest in custom mobile builds"];

const careerPaths = [
  "Senior Mobile App Developer",
  "iOS Platform Engineer",
  "Android Systems Developer",
  "React Native Integrator",
  "Mobile Product Designer",
];

const reviews = [
  { name: "Amit Verma", role: "Software Engineer", text: "The cohort completely transformed my developer capabilities. The practical sprints and placement referrals got me direct interviews immediately." },
  { name: "Amit Verma", role: "Full Stack Engineer", text: "Outstanding value. The structural focus on clean codebase standards and active mentoring was worth every single penny." },
  { name: "Amit Verma", role: "Mobile Developer Lead", text: "Instructors write actual production software. The curriculum is up-to-date and placement coaching helped me evaluate several offers." },
];

export default function CourseDetailPage() {
  return (
    <div className="bg-slate-50/50 text-slate-800">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mb-8 transition-colors">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Courses
        </Link>
        
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main Course Content */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100/50 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-600">
              {course.level}
            </span>
            <h1 className="font-heading text-3xl font-black tracking-tight text-slate-900 md:text-4.5xl leading-tight">
              {course.title}
            </h1>
            <p className="text-sm leading-relaxed text-slate-500">
              Master the exact engineering blueprints required to ship responsive native and cross-platform mobile apps. Learn database connections, secure API bridges, and publishing rituals under active software leaders.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2">
              <Metric label="Duration" value={course.duration} svg={(
                <svg className="h-4.5 w-4.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )} />
              <Metric label="Trainees" value={`${course.students}+`} svg={(
                <svg className="h-4.5 w-4.5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )} />
              <Metric label="Rating" value={course.rating} svg={(
                <svg className="h-4.5 w-4.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )} />
              <Metric label="Certificate" value={course.certification} svg={(
                <svg className="h-4.5 w-4.5 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )} />
            </div>
            
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white p-3 shadow-xl">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <Instructor />
          </div>
          
          {/* Checkout Sticky Sidebar */}
          <Sidebar />
        </div>
        
        <Tabs />
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}

function Metric({ label, value, svg }: { label: string; value: string; svg: React.ReactNode }) {
  return (
    <div className="glass-card rounded-2xl border border-slate-200/50 bg-white p-4 shadow-sm flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
        {svg}
      </div>
      <div>
        <div className="text-[10px] font-bold text-slate-450 uppercase tracking-wide">{label}</div>
        <div className="text-xs font-black text-slate-800">{value}</div>
      </div>
    </div>
  );
}

function Instructor() {
  return (
    <div className="glass-card rounded-2xl border border-slate-200/50 bg-white p-5 shadow-sm space-y-4">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-blue-600">
        Lead Architect
      </span>
      
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white shadow-md">
          AV
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold text-slate-800">Amit Verma</h4>
          <p className="text-xs text-slate-500">8+ years inside enterprise platforms • Stack focus: React Native, Swift, Kotlin, Dart & Firebase.</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="glass-card rounded-3xl border border-slate-200/50 bg-white/70 p-6 shadow-md shadow-slate-900/5 space-y-6 lg:sticky lg:top-24 h-fit">
      <div className="flex items-start justify-between border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs text-slate-450 font-bold block mb-1">Tuition Fee</span>
          <div className="text-2.5xl font-black text-slate-900 leading-none">{course.price}</div>
          <span className="text-xs text-slate-400 line-through mt-1.5 block">{course.oldPrice}</span>
        </div>
        <span className="rounded-full bg-teal-50 border border-teal-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-teal-600">
          {course.save}
        </span>
      </div>
      
      <div className="space-y-3.5 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-semibold">Track Duration</span>
          <strong className="text-slate-800 font-bold">{course.duration}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-semibold">Cohort Mode</span>
          <strong className="text-slate-800 font-bold">{course.mode}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-semibold">Instruction</span>
          <strong className="text-slate-800 font-bold">{course.language}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-semibold">Career Referral</span>
          <strong className="text-emerald-600 font-extrabold">{course.placement}</strong>
        </div>
      </div>
      
      <div className="flex flex-col gap-2.5 pt-2">
        <Link 
          href={`/courses/${course.slug}/enroll`} 
          className="rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 py-3.5 text-center text-xs font-bold text-white shadow-lg shadow-blue-500/10 hover:opacity-95 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition duration-300"
        >
          Secure Your Cohort Spot
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-200 bg-white py-3 text-center text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition duration-300"
        >
          Download Syllabus Blueprint
        </Link>
      </div>
      
      <div className="pt-4 border-t border-slate-100 space-y-3">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 block">Track Benefits</span>
        <ul className="space-y-2 text-xs text-slate-600">
          {course.includes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg className="h-4 w-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Tabs() {
  return (
    <div className="mt-14 space-y-12">
      <TabPanel title="Cohort Curriculum Outline" svg={(
        <svg className="h-4.5 w-4.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )}>
        <div className="space-y-4">
          {curriculum.map((mod) => (
            <div key={mod.title} className="glass-card rounded-2xl border border-slate-200/50 bg-white p-5 shadow-sm relative">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-50 pb-3 mb-4.5">
                <h3 className="font-heading text-sm font-bold text-slate-800">{mod.title}</h3>
                <span className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-slate-450 text-slate-500">
                  {mod.weeks} Weeks duration
                </span>
              </div>
              <ul className="grid gap-3.5 text-xs text-slate-650 md:grid-cols-3">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-600">
                    <svg className="h-4 w-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel title="Admission Prerequisites" svg={(
        <svg className="h-4.5 w-4.5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )}>
        <div className="glass-card rounded-2xl border border-slate-200/50 bg-white p-5 shadow-sm">
          <ul className="space-y-3.5 text-xs text-slate-650">
            {prerequisites.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-slate-600">
                <svg className="h-4 w-4 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-4.5 text-xs text-slate-500 leading-relaxed">
            📢 <strong>Don&apos;t meet the technical prerequisites?</strong> We provide dynamic foundation modules to help you bridge any basics. Contact our counselors to request personalized prep material.
            <div className="mt-3.5">
              <Link href="/contact" className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700">
                Get Advisory Call
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel title="Target Career Placements" svg={(
        <svg className="h-4.5 w-4.5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {careerPaths.map((path) => (
            <div key={path} className="glass-card rounded-2xl p-5 border border-slate-200/50 text-center shadow-sm relative flex flex-col justify-between">
              <div className="text-xs font-bold text-slate-800 leading-relaxed">{path}</div>
              <span className="mt-3.5 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[8.5px] font-extrabold uppercase tracking-wide text-emerald-600 self-center">
                High Demand
              </span>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel title="Alumni Feedback Reviews" svg={(
        <svg className="h-4.5 w-4.5 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )}>
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-200/50 shadow-sm relative">
              <div className="flex items-center gap-1 text-amber-450 text-xs">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 italic">&ldquo;{review.text}&rdquo;</p>
              
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-bold text-slate-500">{review.name}</span>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    </div>
  );
}

function TabPanel({ title, children, svg }: { title: string; children: React.ReactNode; svg: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-250 border-slate-200/60">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 shadow-inner">
          {svg}
        </div>
        <h3 className="font-heading text-sm font-extrabold uppercase tracking-wide text-slate-800">{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 py-20 text-white border-b border-slate-850">
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-400">
          Admissions Open
        </span>
        <h3 className="font-heading text-3xl font-black text-white md:text-4xl">Reserve Your Tuition Slot</h3>
        <p className="max-w-2xl text-xs leading-relaxed text-slate-400">
          Intakes are strictly capped at 20 trainees to maximize hands-on mentoring. Lock in your placement referral class today.
        </p>
        
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link 
            href={`/courses/${course.slug}/enroll`} 
            className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-7 py-3.5 text-xs font-bold text-white shadow-lg hover:opacity-95 transition-all duration-300"
          >
            Enroll in Cohort
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white/10 px-7 py-3.5 text-xs font-bold text-white backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Talk to Advisor
          </Link>
        </div>
      </div>
    </section>
  );
}
