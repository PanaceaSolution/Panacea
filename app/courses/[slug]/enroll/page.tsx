import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

const course = {
  title: "Mobile App Development Masterclass",
  duration: "5 Months",
  rating: "4.9",
  price: "Rs. 50,000",
  oldPrice: "Rs. 70,000",
  discountPrice: "Rs. 50,000",
  save: "Rs. 20,000",
  image: "/services/app-dev.jpg",
};

export default function EnrollPage() {
  return (
    <div className="bg-slate-50/50 text-slate-800">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <Link href={`/courses/${"mobile-app-development"}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mb-8 transition-colors">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Course
        </Link>
        
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FormStepper />
          <Summary />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function FormStepper() {
  return (
    <div className="glass-card rounded-3xl border border-slate-200/50 bg-white p-6 md:p-8 shadow-sm space-y-8">
      {/* Visual Workflow Steps */}
      <div className="flex items-center justify-between text-xs font-extrabold text-slate-500 max-w-md mx-auto">
        <div className="flex flex-col items-center gap-1.5">
          <Step active>1</Step>
          <span className="text-[10px] text-blue-600">Register</span>
        </div>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-4 shrink" />
        <div className="flex flex-col items-center gap-1.5">
          <Step active>2</Step>
          <span className="text-[10px] text-blue-600">Preferences</span>
        </div>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-teal-500 to-slate-200 mx-4 shrink" />
        <div className="flex flex-col items-center gap-1.5">
          <Step>3</Step>
          <span className="text-[10px] text-slate-400">Checkout</span>
        </div>
      </div>

      <div className="space-y-6 pt-2">
        <Section title="Payment Cohort Options">
          <div className="space-y-3 text-xs text-slate-700">
            <label className="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50/20 p-4 cursor-pointer shadow-inner">
              <input type="radio" name="payment" defaultChecked className="mt-1 h-4 w-4 accent-blue-600 shrink-0" />
              <div>
                <strong className="text-slate-800 font-bold block">Full Payment (10% Off Applied)</strong>
                <span className="text-[11px] text-slate-500 mt-1 block">Rs. 45,000 total tuition. Save an extra Rs. 5,000 today.</span>
              </div>
            </label>
            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 cursor-pointer hover:bg-slate-50 transition duration-200">
              <input type="radio" name="payment" className="mt-1 h-4 w-4 accent-blue-600 shrink-0" />
              <div>
                <strong className="text-slate-800 font-bold block">Installment Plan (0% Interest)</strong>
                <span className="text-[11px] text-slate-500 mt-1 block">Rs. 16,667 / month paid over 3 billing cycles.</span>
              </div>
            </label>
          </div>
          
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4.5 space-y-2.5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">✔</span>
              100% Encrypted Payment Bridge
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">✔</span>
              7-Day Tuition Refund Guarantee
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">✔</span>
              Full Lifetime Syllabus Material Access
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">✔</span>
              Direct Performance Placement Support
            </div>
          </div>
        </Section>

        <Section title="Agreements & Disclosures">
          <div className="space-y-3.5 text-xs text-slate-600">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 h-4.5 w-4.5 rounded border-slate-350 accent-blue-600 shrink-0" />
              <span>
                I agree to the <Link href="#" className="font-bold text-blue-600 hover:text-blue-700">Terms of Service</Link> and <Link href="#" className="font-bold text-blue-600 hover:text-blue-700">Privacy Disclosures</Link>.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 h-4.5 w-4.5 rounded border-slate-350 accent-blue-600 shrink-0" />
              <span>I agree to receive calendar triggers, class notifications, and cohort reminders.</span>
            </label>
          </div>
        </Section>

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition duration-300">
            Previous Step
          </button>
          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-3 text-xs font-bold text-white shadow-lg hover:opacity-95 transition duration-300">
            Complete Enrollment
          </button>
        </div>
      </div>
    </div>
  );
}

function Step({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black shadow-sm ${
        active 
          ? "bg-blue-600 text-white shadow-blue-500/10 border border-blue-500" 
          : "bg-slate-100 text-slate-400 border border-slate-200/50"
      }`}
    >
      {children}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-sm font-extrabold uppercase tracking-wide text-slate-800 pb-2 border-b border-slate-100">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Summary() {
  return (
    <aside className="glass-card rounded-3xl border border-slate-200/50 bg-white/70 p-6 shadow-md shadow-slate-900/5 space-y-6">
      <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-slate-850">Checkout Summary</h3>
      
      <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="space-y-2">
        <h4 className="font-heading text-sm font-bold text-slate-800 leading-snug">{course.title}</h4>
        <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
          <span>{course.duration} duration</span>
          <span>•</span>
          <span className="text-amber-500">★ {course.rating} Rating</span>
        </div>
      </div>
      
      <div className="space-y-3 pt-4 border-t border-slate-150 border-slate-200/60 text-xs">
        <div className="flex justify-between">
          <span className="text-slate-550 font-medium">Standard Tuition Fee</span>
          <span className="text-slate-400 line-through">{course.oldPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-550 font-medium">Cohort Discount Fee</span>
          <span className="font-bold text-slate-900">{course.discountPrice}</span>
        </div>
        <div className="flex justify-between border-t border-slate-100 pt-3 text-sm">
          <span className="font-bold text-slate-800">You Save</span>
          <span className="font-extrabold text-emerald-600">{course.save}</span>
        </div>
      </div>
      
      <div className="pt-4 border-t border-slate-100 space-y-3">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 block">Included with Intake</span>
        <ul className="space-y-2 text-xs text-slate-650">
          {[
            "Live Interactive Cohort Classes",
            "5+ Guided Production Capstones",
            "Dedicated Developer Mentor Sprints",
            "Verifiable Course Syllabus Certification",
            "Lifetime Workspace Resources Access",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg className="h-4 w-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4.5 space-y-1">
        <div className="text-xs font-bold text-slate-800">Have checkout queries?</div>
        <p className="text-[11px] text-slate-500 leading-relaxed">Our cohort mentors can discuss plans and schedules instantly.</p>
        <span className="text-[11px] font-bold text-blue-600 block pt-1.5">Direct Call: +977 9841*****</span>
      </div>
    </aside>
  );
}
