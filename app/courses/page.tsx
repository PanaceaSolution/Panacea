import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const learningPaths = [
  { title: "Full Stack Developer", courses: "2", duration: "10 Months", desc: "Complete journey from frontend to backend development.", icon: "💻" },
  { title: "Data Professional", courses: "1", duration: "4 Months", desc: "Master data analysis and machine learning.", icon: "📊" },
  { title: "Digital Marketer", courses: "1", duration: "3 Months", desc: "Become a complete digital marketing expert.", icon: "📈" },
];

const courses = [
  {
    title: "Python & Data Science",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    rating: 4.7,
    students: "220",
    image: "/services/marketing.jpg",
    slug: "python-data-science",
    features: ["Real Dataset Projects", "Industry Case Studies", "Kaggle Competition Training", "Portfolio Development"],
    author: "R. Priya Sharma",
    exp: "15+ years",
  },
  {
    title: "Mobile App Development",
    level: "Beginner to Advanced",
    duration: "4 Months",
    rating: 4.7,
    students: "880",
    image: "/services/app-dev.jpg",
    slug: "mobile-app-development",
    features: ["Real Dataset Projects", "Industry Case Studies", "Kaggle Competition Training", "Portfolio Development"],
    author: "R. Amit Verma",
    exp: "10+ years",
  },
  {
    title: "Digital Marketing Mastery",
    level: "Beginner to Advanced",
    duration: "4 Months",
    rating: 4.7,
    students: "880",
    image: "/services/marketing.jpg",
    slug: "digital-marketing-mastery",
    features: ["Real Dataset Projects", "Industry Case Studies", "Kaggle Competition Training", "Portfolio Development"],
    author: "R. Rahul Gupta",
    exp: "14+ years",
  },
  {
    title: "MERN Stack",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    rating: 4.7,
    students: "880",
    image: "/services/web-dev.jpg",
    slug: "mern-stack",
    features: ["Real Dataset Projects", "Industry Case Studies", "Kaggle Competition Training", "Portfolio Development"],
    author: "R. Priya Sharma",
    exp: "15+ years",
  },
];

const batches = [
  { name: "Java full Stack", date: "Starts 8th Aug 2025", seats: "2 Seats Left", full: false, color: "bg-red-500" },
  { name: "Python & Data Science", date: "Starts 1st Sep 2025", seats: "2 Seats Left", full: false, color: "bg-orange-500" },
  { name: "Mobile Development", date: "Starts 30th Sep 2025", seats: "Limited Seats Left", full: false, color: "bg-teal-500" },
  { name: "UI UX Design", date: "Starts 6th Dec 2025", seats: "Cohort Full", full: true, color: "bg-slate-400" },
];

const testimonials = [
  { name: "Unknown Kumar", role: "Software Engineer at TCS", initials: "UK", text: "The course structure was excellent and the practical approach helped me transition from a non-tech background to software development in just 6 months." },
  { name: "Unknown Kumar", role: "Data Analyst at IIT", initials: "UK", text: "Amazing instructors and hands-on projects. Got placed within 2 months of completing the course with 100% salary hike." },
  { name: "Unknown Kumar", role: "Mobile Developer at Nepal", initials: "UK", text: "Comprehensive curriculum covering both Android and iOS. The placement support was outstanding." },
];

export default function CoursesPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <LearningPaths />
      <CoursesGrid />
      <Batches />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200">
          Professional Training Programs
        </span>
        <h1 className="mt-5 font-heading text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          Master Technology Skills with <span className="text-gradient">Expert Training</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
          Industry-focused training programs designed to accelerate your career growth. Learn from experienced professionals and get 100% placement assistance with hands-on projects and real-world applications.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="#courses" className="rounded-full bg-teal-600 px-8 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-teal-700 transition-all">
            Browse All Courses →
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all">
            Book Free Demo
          </Link>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 flex max-w-lg items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
            <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search Courses" className="flex-1 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400" />
          </div>
          <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-sm hover:border-teal-300 transition-colors">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}

function LearningPaths() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-black text-slate-900">Learning Paths</h2>
          <p className="mt-2 text-sm text-slate-500">Structured learning journeys designed to take you from beginner to professional in your chosen field.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {learningPaths.map((path) => (
            <div key={path.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl">
                {path.icon}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{path.title}</h3>
              <p className="mt-1.5 text-xs text-slate-500">{path.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>{path.courses} Courses</span>
                <span>{path.duration}</span>
              </div>
              <Link href="#courses" className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-colors">
                Explore Course
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesGrid() {
  return (
    <section id="courses" className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-black text-slate-900">All Courses</h2>
          {/* Filter tabs */}
          <div className="hidden items-center gap-2 sm:flex">
            {["All Courses", "Programming", "Data Science", "Mobile Dev"].map((tab, i) => (
              <button key={tab} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${i === 0 ? "bg-teal-600 text-white" : "border border-slate-200 text-slate-500 hover:border-teal-400 hover:text-teal-600"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img src={course.image} alt={course.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-slate-600 backdrop-blur-sm shadow-sm">{course.level}</span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-amber-500 shadow-sm backdrop-blur-sm">
                  ⭐ {course.rating} · {course.students}+
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-800">{course.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                    <span>Duration: <strong className="text-slate-600">{course.duration}</strong></span>
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-teal-600">Key Features :</div>
                  <ul className="space-y-1.5">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <svg className="h-4 w-4 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 border-t border-slate-100 pt-3 text-xs text-slate-400">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-[10px] font-bold text-teal-700">
                    {course.author.split(" ").pop()?.charAt(0)}
                  </div>
                  <span>{course.author}</span>
                  <span className="ml-auto text-slate-400">{course.exp}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link href={`/courses/${course.slug}`} className="rounded-xl border border-slate-200 py-3 text-center text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-colors">
                    View Details
                  </Link>
                  <Link href="/contact" className="rounded-xl bg-teal-600 py-3 text-center text-xs font-bold text-white hover:bg-teal-700 transition-colors">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Batches() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-black text-slate-900">Upcoming Batches</h2>
          <p className="mt-2 text-sm text-slate-500">Secure your spot in the next batch starting soon.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {batches.map((batch) => (
            <div key={batch.name} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold text-white ${batch.color}`}>
                {batch.seats}
              </div>
              <h4 className="font-heading text-sm font-bold text-slate-800">{batch.name}</h4>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {batch.date}
              </div>
              <Link
                href="/contact"
                className={`mt-4 flex w-full items-center justify-center rounded-lg py-2.5 text-xs font-bold transition-colors ${batch.full ? "bg-slate-100 text-slate-400 pointer-events-none" : "bg-teal-600 text-white hover:bg-teal-700"}`}
              >
                {batch.full ? "Batch Full" : "Reserve Seat"}
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
    <section className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-black text-slate-900">Success Stories</h2>
          <p className="mt-2 text-sm text-slate-500">Real career transformations from our training programs.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="flex gap-0.5 text-amber-400 text-sm">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{t.name}</div>
                  <div className="text-[10px] text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-teal-600" : "bg-slate-200"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-teal-600 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-teal-100">
          Join thousands of successful students who have transformed their careers with our expert-led training programs. Get industry-relevant skills and 100% placement assistance.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#courses" className="rounded-full bg-white px-8 py-3.5 text-xs font-bold text-teal-600 shadow-lg hover:bg-teal-50 transition-all">
            Explore All Courses
          </Link>
          <Link href="/contact" className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all">
            Talk to Career Counselor
          </Link>
        </div>
      </div>
    </section>
  );
}
