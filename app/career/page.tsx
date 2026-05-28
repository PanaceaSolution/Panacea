import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Team Members", desc: "Collaborating across major teams" },
  { value: "95%", label: "Employee Satisfaction", desc: "Valuing ownership and balance" },
  { value: "15", label: "Countries Represented", desc: "Serving global clients" },
  { value: "4.8/5", label: "Glassdoor Rating", desc: "Recognized as a leading employer" },
];

const perks = [
  {
    title: "Continuous Learning & Growth",
    desc: "We invest in your development with a dedicated learning budget, access to industry conferences, and hands-on skill-building programs.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Flexible Work-Life Harmony",
    desc: "Enjoy flexible working hours, remote work opportunities, and a generous time-off policy to help you maintain balance and recharge.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Innovation Time",
    desc: "Take 20% of your time to explore new ideas, build passion projects, or experiment with the latest tech – we encourage creative freedom.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Vibrant Team Culture",
    desc: "Work in a collaborative, inclusive environment where regular team activities, open communication, and creativity are part of the culture.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Career Advancement",
    desc: "Follow clear growth paths with mentorship, upskilling opportunities, and leadership development – we grow together, every step of the way.",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const cultureValues = [
  { title: "Innovation First", desc: "We stay ahead by embracing emerging technologies, encouraging experimentation, and solving problems with a creative mindset.", img: "/services/it-design.jpg" },
  { title: "Collaborative Spirit", desc: "Great ideas are born from teamwork. We foster an open, inclusive space where communication is clear and collaboration is constant.", img: "/services/outsourcing.jpg" },
  { title: "Continuous Learning", desc: "In tech, change is constant — that's why we champion curiosity, upskilling and growth through internal training, courses, and mentorship.", img: "/services/uiux.jpg" },
  { title: "Integrity & Ownership", desc: "We take pride in our work and hold ourselves accountable. Trust, transparency, and ethical tech practices are at our core.", img: "/services/web-dev.jpg" },
  { title: "Diversity in Thinking", desc: "We value diverse perspectives — across cultures, disciplines, and experiences — to build better, more inclusive solutions.", img: "/services/marketing.jpg" },
  { title: "Customer-Centric Thinking", desc: "From course design to software delivery, we put users first. Understanding real-world needs drives how we build, teach, and support.", img: "/services/app-dev.jpg" },
];

const openings = [
  {
    title: "Senior Full Stack Developer",
    dept: "Engineering",
    type: "Full Time",
    exp: "5+ years",
    posted: "Posted 2 days ago",
    tags: ["React/Next.js experience", "Nodejs js backend development", "AWS/Azure experience", "+4 more"],
  },
  {
    title: "UI UX Designer",
    dept: "Design",
    type: "Full Time",
    exp: "2+ years",
    posted: "Posted 1 week ago",
    tags: ["Figma proficiency", "User Research Experience", "User Research", "+2 more"],
  },
  {
    title: "DevOps Engineer",
    dept: "Engineering",
    type: "Full Time",
    exp: "3+ years",
    posted: "Posted 5 days ago",
    tags: ["React/Next.js experience", "Nodejs js backend development", "AWS/Azure experience", "+3 more"],
  },
  {
    title: "Business Development Representative",
    dept: "Sales",
    type: "Full Time",
    exp: "2+ years",
    posted: "Posted 1 week ago",
    tags: ["B2B sales Experience", "Technology industry knowledge", "CRM proficiency", "+2 more"],
  },
];

const processSteps = [
  { num: "01", title: "Apply", desc: "Submit your application and resume through our online portal." },
  { num: "02", title: "Review", desc: "Our team reviews your application and background." },
  { num: "03", title: "Interview", desc: "Technical and cultural fit interviews with the team." },
  { num: "04", title: "Offer", desc: "Final decision and offer discussion." },
];

export default function CareerPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Stats />
      <Perks />
      <Culture />
      <Openings />
      <Process />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200">
            Join Our Team
          </span>
          <h1 className="font-heading text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Build Your Career<br />
            <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Be a part of something meaningful. Join our team of passionate professionals who are shaping the future of technology and creativity. We offer competitive benefits, continuous learning opportunities, and a work culture that values innovation, collaboration, and growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#openings" className="rounded-full bg-teal-600 px-7 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-teal-700 transition-all">
              View Open Position
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-300 px-7 py-3.5 text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all">
              Get In Touch!
            </Link>
          </div>
        </div>

        {/* Right illustration */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-slate-100 shadow-xl border border-slate-100">
            <div className="flex h-72 w-full items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-600 shadow-lg">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-lg font-black text-slate-800">Join Our Team</div>
                <div className="mt-1 text-sm text-slate-500">Shape the future with us</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 animate-float">
            <div className="text-xs font-bold text-slate-700">⭐ 4.8+</div>
            <div className="text-[10px] text-slate-400">Employer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-xl font-bold text-slate-700">
            Why Choose <span className="text-teal-600">Panacea Solutions Pvt. Ltd.</span>?
          </h2>
          <p className="mt-1 text-xs text-slate-400">Our numbers speak for the culture we&apos;ve built and the people who power it.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-black text-teal-600 md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm font-bold text-slate-700">{stat.label}</div>
              <p className="mt-1 text-[11px] text-slate-400">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Benefits &amp; Perks</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            At Panacea Solution Pvt. Ltd., we believe in giving people from continuous learning to flexible work options, we create an environment where innovation thrives and careers grow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                {perk.icon}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{perk.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Culture() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Our Culture</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">The values that guide our work, define our mindset, and shape the environment where innovation and learning thrive.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cultureValues.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-sm font-bold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Openings() {
  return (
    <section id="openings" className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-3 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Open Positions</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">Find your next opportunity with us. We&apos;re always looking for talented individuals to join our team.</p>
        </div>

        <div className="mt-8 space-y-4">
          {openings.map((role) => (
            <div key={role.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-sm font-bold text-slate-800">{role.title}</h3>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold text-teal-600 ring-1 ring-teal-200">{role.dept}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-500">{role.type}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
                    <span>📍 Kathmandu</span>
                    <span>•</span>
                    <span>🕐 Full-time</span>
                    <span>•</span>
                    <span>💼 {role.exp}</span>
                    <span>•</span>
                    <span className="text-slate-300">{role.posted}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="shrink-0 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Don&apos;t see a position that fits? We&apos;re always interested in hearing from talented individuals.
        </p>
        <div className="mt-2 text-center">
          <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors">
            Send Us Your Resume
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-slate-50/50 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Application Process</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">Our straightforward hiring process designed to find the best fit for both sides.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-sm font-black text-white shadow-md">
                {step.num}
              </div>
              <h4 className="font-heading text-sm font-bold text-slate-800">{step.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
