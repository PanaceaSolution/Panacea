import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const toc = [
  "Artificial Intelligence Integration",
  "WebAssembly (WASM) Adoption",
  "Serverless Architecture",
  "Progressive Web Apps",
  "Micro-Frontend Architecture",
];

const relatedArticles = [
  { slug: "cloud-infrastructure", title: "Building Scalable Cloud Infrastructure: Best Practices", category: "Cloud", date: "July 25, 2025", readTime: "6 min read", image: "/services/outsourcing.jpg", author: "Michael Chen" },
  { slug: "mobile-native", title: "Building Scalable Cloud Infrastructure: Best Practices", category: "Cloud", date: "July 25, 2025", readTime: "6 min read", image: "/services/app-dev.jpg", author: "Michael Chen" },
  { slug: "data-analytics", title: "Building Scalable Cloud Infrastructure: Best Practices", category: "Cloud", date: "July 25, 2025", readTime: "6 min read", image: "/services/marketing.jpg", author: "Michael Chen" },
];

export default function BlogDetailPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors mb-6">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-600 ring-1 ring-teal-100">
              Development
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              July 28, 2025
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              8 min read
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              2,347 views
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-black text-slate-900 md:text-4xl">
            The Future of Web Development: Trends to Watch in 2025
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Exploring the latest technologies and methodologies shaping the web development landscape
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Development", "AI", "Web Assembly", "Serverless", "PWA"].map((tag) => (
              <span key={tag} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-5 text-xs text-slate-500">
              <button className="flex items-center gap-1.5 hover:text-teal-600 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                156
              </button>
              <button className="flex items-center gap-1.5 hover:text-teal-600 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                23
              </button>
              <button className="flex items-center gap-1.5 hover:text-teal-600 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                Save
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Share:</span>
              {[0, 1, 2, 3].map((i) => (
                <button key={i} className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 hover:border-teal-400 hover:text-teal-600 transition-colors" />
              ))}
            </div>
          </div>
        </div>

        {/* Body + Sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <article className="space-y-6">
            <div className="overflow-hidden rounded-2xl">
              <img src="/services/web-dev.jpg" alt="Web Development" className="h-72 w-full object-cover md:h-96" />
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-slate-600">
              <p>The web development landscape is evolving at an unprecedented pace, with new technologies, frameworks, and methodologies emerging regularly. As we move through 2025, several key trends are shaping how we build and deploy web applications.</p>

              <div>
                <h2 className="font-heading text-base font-bold text-slate-800 mb-2">Artificial Intelligence Integration</h2>
                <p>AI is no longer just a buzzword in web development—it&apos;s becoming an integral part of how we create user experiences. Modern development teams are leveraging AI for:</p>
                <ul className="mt-3 space-y-1.5">
                  {["Automated code generation and optimization", "Intelligent testing and quality assurance", "Personalized user experiences", "Performance monitoring and optimization"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {[
                { h: "WebAssembly (WASM) Adoption", p: "WebAssembly continues to gain traction as a way to run high-performance applications in web browsers. This technology allows developers to use languages like Rust, C++, and Go to build web applications that run at near-native speeds." },
                { h: "Serverless Architecture", p: "The shift towards serverless computing is accelerating, with more developers embracing Functions-as-a-Service (FaaS) platforms. This approach offers several benefits including reduced operational overhead, automatic scaling, and cost optimization." },
                { h: "Progressive Web Apps (PWAs)", p: "PWAs continue to bridge the gap between web and native applications, offering app-like experiences through web browsers. With improved browser support and new capabilities, PWAs are becoming a viable alternative to traditional mobile apps." },
                { h: "Micro-Frontend Architecture", p: "Large organizations are increasingly adopting micro-frontend architectures to enable better team autonomy and faster development cycles. This approach allows different teams to work on different parts of an application independently." },
                { h: "Conclusion", p: "The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning new technologies, developers can build better, more efficient, and more user-friendly web applications." },
              ].map(({ h, p }) => (
                <div key={h}>
                  <h2 className="font-heading text-base font-bold text-slate-800 mb-2">{h}</h2>
                  <p>{p}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
              <span>Last updated : July 30, 2025</span>
              <span>Found this helpful? <button className="font-bold text-teal-600 hover:text-teal-700">👍 Yes</button></span>
            </div>

            {/* Author */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 font-bold text-white">SM</div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">Sarah Mitchell</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-500">Senior Developer</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">Senior Full-Stack Developer at Panacea Solution with 8+ years of experience in web development and cloud architecture.</p>
                <button className="mt-2 flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  View Profile
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">Table of Contents</h3>
              <ul className="space-y-2.5">
                {toc.map((item, idx) => (
                  <li key={idx}>
                    <button className="text-left text-xs text-teal-600 hover:underline">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">Article Stats</h3>
              <ul className="space-y-3">
                {[["Views", "2,347"], ["Likes", "156"], ["Comments", "23"], ["Reading Time", "8 min Read"]].map(([label, value]) => (
                  <li key={label} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0 text-xs">
                    <span className="text-slate-500">{label}</span>
                    <span className="font-bold text-slate-800">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-teal-600 p-5 text-white">
              <h3 className="font-heading text-sm font-bold mb-2">Stay Updated</h3>
              <p className="text-xs leading-relaxed text-teal-100">Get the latest articles and insights delivered to your inbox.</p>
              <button className="mt-4 w-full rounded-lg bg-white py-2.5 text-xs font-bold text-teal-600 hover:bg-teal-50 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Related Articles */}
      <section className="border-t border-slate-100 bg-slate-50/50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-black text-teal-600 mb-8">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedArticles.map((article) => (
              <article key={article.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="relative h-44 overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-teal-600 backdrop-blur-sm">{article.category}</span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-500 backdrop-blur-sm">{article.readTime}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-teal-600 transition-colors">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 line-clamp-2">Learn how to design and implement cloud solutions that grow with your business needs.</p>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{article.author} • {article.date}</span>
                    <Link href={`/blog/${article.slug}`} className="font-bold text-teal-600">Read More →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
