import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactOptions = [
  {
    title: "Live Chat",
    desc: "Get instant support from our team",
    note: "Available 24/7",
    cta: "Start Chat",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Schedule Meeting",
    desc: "Book a consultation with our experts",
    note: "Within 24 hours",
    cta: "Book Meeting",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Phone Support",
    desc: "Speak directly with our support team",
    note: "Mon–Fri, 10AM–5PM",
    cta: "Call Support",
    icon: (
      <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const contactInfo = [
  {
    label: "Location :",
    value: "Sankhamul Marg, New Baneshwor\nKathmandu, Nepal",
    link: "Get Directions →",
    icon: (
      <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone Number :",
    value: "+977-9841-******, +977-9841-******",
    link: "Call Now →",
    icon: (
      <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email Address :",
    value: "career@panaceasolution.com\ninfo@panaceasolution.com",
    link: "Send Email →",
    icon: (
      <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Business Hours :",
    value: "Monday - Friday\n10 A.M. – 6:00 P.M.",
    icon: (
      <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const faqs = [
  { question: "What development services do you offer?", answer: "We cover end-to-end web development, cross-platform mobile apps, custom database migrations, UI/UX systems design, and dedicated managed engineering pods." },
  { question: "What training programs are available?", answer: "Our core tracks include full-stack React/Node MERN architectures, Python Data Science, Digital Marketing strategy, and dedicated Product UI/UX Design." },
  { question: "Do you provide placement assistance after training?", answer: "Yes. Active placement workshops cover mock systems reviews, resume building audits, global freelancing templates, and direct fast-track recruitment referral routes to our hiring partners." },
  { question: "How long does a typical development project take?", answer: "Most enterprise web and mobile development contracts span 6–12 weeks from complete functional discovery to launch. We also support accelerated MVP shipping within 4 weeks." },
  { question: "Are your training programs industry-relevant?", answer: "Yes, our curriculum is designed in collaboration with industry experts and updated regularly to reflect current market demands. We focus on practical, hands-on learning with real-world projects." },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <ContactOptions />
      <FormAndInfo />
      <FAQ />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md">
          Get In Touch
        </span>
        <h1 className="mt-5 font-heading text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          Let&apos;s Start Your <span className="text-gradient">Next Project</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
          Ready to transform your business with innovative technology solutions? Our team is here to help you every step of the way.
        </p>
        <div className="mt-4 text-sm font-semibold text-slate-700">How Can We Help You?</div>
        <p className="mt-1 text-xs text-slate-400">Choose the best way to reach us</p>
      </div>
    </section>
  );
}

function ContactOptions() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-3 lg:px-8">
        {contactOptions.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
              {item.icon}
            </div>
            <h3 className="font-heading text-sm font-bold text-slate-800">{item.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
            <p className="mt-1 text-[10px] font-medium text-slate-400">{item.note}</p>
            <button className="mt-4 w-full rounded-lg bg-teal-600 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors">
              {item.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function FormAndInfo() {
  return (
    <section className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="font-heading text-base font-bold text-slate-800">Send Us a Message</h3>
          <p className="mt-1 text-xs text-slate-500">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="First Name" placeholder="Unknown" />
              <Field label="Last Name" placeholder="Surname" />
            </div>
            <Field label="Email Address" type="email" placeholder="unknown@example.com" />
            <Field label="Phone Number" placeholder="+977-9841-*****" />
            <Field label="Company / Name" placeholder="Your company /name" />
            <SelectField label="Service Interested In" options={["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "IT Consulting", "Training & Courses"]} />
            <SelectField label="Project Budget" options={["Select budget range", "Rs. 50k–100k", "Rs. 100k–250k", "Rs. 250k–500k", "Rs. 500k+"]} />
            <TextareaField label="Message" placeholder="Tell us about your project requirements or any other queries…." />

            <button type="button" className="w-full rounded-xl bg-teal-600 py-3.5 text-xs font-bold text-white shadow-md hover:bg-teal-700 transition-colors">
              Send Message
            </button>
            <p className="text-center text-[10px] text-slate-400">By submitting this form, you agree to our privacy policy and terms of service.</p>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-800 mb-1">Get In Touch</h3>
            <p className="text-xs leading-relaxed text-slate-500 mb-5">We&apos;re here to answer your questions and discuss how we can help bring your vision to life. Reach out through any of the channels below.</p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{info.label}</div>
                    <div className="mt-1 text-xs font-medium text-slate-700 whitespace-pre-line">{info.value}</div>
                    {info.link && (
                      <button className="mt-1 text-[11px] font-bold text-teal-600 hover:text-teal-700 transition-colors">
                        {info.link}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
              <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h4 className="font-heading text-sm font-bold text-slate-800">Interactive Map</h4>
            <p className="mt-0.5 text-[11px] text-slate-400">Panacea Solution Location</p>
            <div className="mt-4 flex h-36 items-center justify-center rounded-2xl bg-teal-50/50 border border-teal-100 text-xs font-medium text-teal-600">
              📍 Sankhamul Marg, New Baneshwor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <input type={type} placeholder={placeholder} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10 transition" />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <select className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10 transition cursor-pointer">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function TextareaField({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <textarea placeholder={placeholder} rows={4} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10 transition resize-none" />
    </label>
  );
}

function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-black text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">Get answers to common questions about our development services and training programs</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50/40 p-5 open:bg-white open:shadow-sm transition-all duration-300">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-800 focus:outline-none">
                {faq.question}
                <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 text-teal-600 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
