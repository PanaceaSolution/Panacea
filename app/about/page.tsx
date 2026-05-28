"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const coreValues = [
  {
    title: "Our Mission",
    desc: "To empower businesses with innovative technology solutions that drive growth and success in the digital age.",
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    desc: "To be the leading technology partner that transforms ideas into reality through cutting-edge solutions.",
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Our Values",
    desc: "Excellence, innovation, integrity, and customer-centricity guide everything we do.",
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Our Reach",
    desc: "Serving clients globally with 24/7 support and localized expertise across multiple time zones.",
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

const stats = [
  { value: "150+", label: "Projects Completed", desc: "Successfully delivered projects" },
  { value: "50+", label: "Happy Clients", desc: "Satisfied customers worldwide" },
  { value: "98%", label: "Success Rate", desc: "Project completion rate" },
  { value: "5+", label: "Years Experience", desc: "In the technology industry" },
];

const team = [
  { name: "David Richardson", role: "Chief Executive Officer", desc: "15+ years of experience in technology leadership and business strategy.", color: "from-teal-600 to-teal-400" },
  { name: "David Richardson", role: "Chief Technology Officer", desc: "Expert in cloud architecture and enterprise software development.", color: "from-slate-600 to-slate-400" },
  { name: "David Richardson", role: "Managing Director", desc: "15+ years of experience in technology leadership and business strategy.", color: "from-teal-700 to-teal-500" },
  { name: "David Richardson", role: "Project Manager", desc: "Agile expert ensuring projects are delivered on time and within budget.", color: "from-slate-700 to-slate-500" },
  { name: "David Richardson", role: "Human Resource", desc: "15+ years of experience in technology leadership and business strategy.", color: "from-teal-500 to-emerald-400" },
  { name: "David Richardson", role: "Head of Design", desc: "Award-winning designer with a passion for user-centered design.", color: "from-teal-600 to-teal-800" },
];

const story = [
  {
    title: "The Beginning",
    text: [
      "In 2019, Panacea Solution Pvt. Ltd. started with a simple mission: \"To help businesses grow by using the right technology.\"",
      "What began as a small group of dedicated developers with big dreams has now become a dynamic team that builds smart solutions for clients across industries.",
      "We believed that technology shouldn't be complicated—it should solve problems. That belief still guides everything we do.",
    ],
  },
  {
    title: "Growing Together",
    text: [
      "As our team grew, so did our services. We added designers, strategists, and consultants who shared the same passion for creating meaningful digital experiences. Every new project brought a new lesson, and every challenge made us better.",
      "Today, Panacea isn't just a development company—we're your digital partner. Whether it's building websites, apps, business platforms, or customized solutions, we bring clarity and creativity to every step.",
    ],
  },
  {
    title: "Driven by Innovation",
    text: [
      "We never stop learning. From new tools and technologies to user behavior and design thinking, we constantly adapt to deliver better results for our clients.",
      "Our journey so far has been exciting—but we know the best is yet to come. We're proud to have helped startups, SMEs, and enterprises grow—and we're just getting started.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <CoreValues />
      <Stats />
      <Team />
      <Story />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200">
            About our Company
          </span>
          <h1 className="font-heading text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            We Build{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">Digital Excellence</span>
          </h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Founded with a passion for technology and innovation, we&apos;ve been helping businesses transform their digital presence and achieve their goals through cutting-edge solutions.
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            Our team of experienced professionals combines technical expertise with creative thinking to deliver solutions that not only meet current needs but also prepares businesses for future challenges.
          </p>
        </motion.div>

        {/* Company values image placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-100">
            <div className="flex h-72 w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50 p-8">
              <div className="mb-4 text-center">
                <div className="mb-2 text-2xl font-black text-slate-700 tracking-tight"># COMPANY</div>
                <div className="text-2xl font-black text-slate-700 tracking-tight">VALUES</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {["Respect", "Innovation", "Growth", "Integrity", "Quality", "Teamwork", "Customer", "Agility", "Trust"].map((v, idx) => (
                  <motion.div 
                    key={v}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="rounded-lg bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-slate-600 shadow-sm border border-slate-100"
                  >
                    {v}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreValues() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Our Core Values</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">The principles that guide our work and define our company culture.</p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {coreValues.map((val) => (
            <motion.div 
              key={val.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                {val.icon}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{val.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-teal-600 md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-bold text-slate-700">{stat.label}</div>
              <p className="mt-1 text-xs text-slate-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Meet Our Team</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">Our diverse team of experts brings together years of experience and innovative thinking.</p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer"
            >
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-xl font-bold text-white shadow-md`}>
                {member.name.split(" ").map(w => w[0]).join("")}
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-800">{member.name}</h3>
              <div className="mt-1 text-xs font-semibold text-teal-600">{member.role}</div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 text-center">{member.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-black text-teal-600 md:text-4xl">Our Story</h2>
          <p className="mt-2 text-sm text-slate-500">Panacea Solution Pvt. Ltd. – From a Simple Idea to a Trusted Tech Partner</p>
        </div>

        <div className="relative space-y-0">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-teal-100 md:left-6" />

          {story.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 pb-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 shadow-md md:left-2">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>

              <h3 className="font-heading text-base font-bold text-slate-800">{item.title}</h3>
              <div className="mt-3 space-y-3">
                {item.text.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-slate-600">{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
