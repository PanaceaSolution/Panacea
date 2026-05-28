import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featured = {
  slug: "future-of-web-development",
  title: "The Future of Web Development: Trends to Watch in 2025",
  excerpt: "Explore the latest technologies and methodologies shaping the web development landscape",
  author: "R. Amit Verma",
  date: "July 28, 2025",
  readTime: "8 min read",
  image: "/services/web-dev.jpg",
  category: "Development",
};

const articles = [
  { slug: "cloud-infrastructure", title: "Building Scalable Cloud Infrastructure: Best Practices", category: "Cloud", date: "July 25, 2025", readTime: "6 min read", image: "/services/outsourcing.jpg", author: "Michael Chen" },
  { slug: "cybersecurity-modern", title: "Cybersecurity Essentials for Modern Businesses", category: "Security", date: "July 25, 2025", readTime: "6 min read", image: "/services/it-design.jpg", author: "Michael Chen" },
  { slug: "mobile-native-crossplatform", title: "Mobile App Development: Native vs Cross-Platform", category: "Mobile", date: "July 25, 2025", readTime: "6 min read", image: "/services/app-dev.jpg", author: "Michael Chen" },
  { slug: "data-analytics", title: "Data Analytics: Turning Information into Insights", category: "Analytics", date: "July 25, 2025", readTime: "6 min read", image: "/services/marketing.jpg", author: "Michael Chen" },
  { slug: "digital-transformation", title: "Digital Transformation Success Stories", category: "Business", date: "July 25, 2025", readTime: "6 min read", image: "/services/outsourcing.jpg", author: "Michael Chen" },
  { slug: "ux-design-principles", title: "UX Design Principles for Better User Engagement", category: "Design", date: "July 25, 2025", readTime: "6 min read", image: "/services/uiux.jpg", author: "Michael Chen" },
];

const categories = [
  { name: "All", count: 12 },
  { name: "Development", count: 4 },
  { name: "Design", count: 3 },
  { name: "Cloud", count: 2 },
  { name: "Security", count: 2 },
  { name: "Business", count: 1 },
];

const recentNews = [
  { title: "TechSolutions Wins Innovation Award 2025", date: "July 25, 2025", tag: "Company News" },
  { title: "New Partnership with Cloud Provider", date: "July 22, 2025", tag: "Partnership" },
  { title: "Team Expansion in Q3 2025", date: "July 20, 2025", tag: "Company News" },
];

export default function BlogPage() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200">
            Latest Articles
          </span>
          <h1 className="mt-5 font-heading text-4xl font-black text-slate-900 md:text-5xl">
            Insights &amp; Knowledge
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            Stay updated with the latest trends, best practices, and insights from our team of experts in technology, design, and business strategy.
          </p>

          {/* Search */}
          <div className="mx-auto mt-6 flex max-w-lg items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
              <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search Articles..." className="flex-1 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400" />
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

      {/* Featured article */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="grid gap-0 md:grid-cols-[380px_1fr]">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 md:h-full">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="inline-block w-fit rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-600 ring-1 ring-teal-200">
                  Featured Article
                </span>
                <h2 className="mt-3 font-heading text-xl font-black text-slate-900 md:text-2xl hover:text-teal-600 transition-colors">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{featured.excerpt}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
                  <span>{featured.author}</span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {featured.readTime}
                  </span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-700 transition-colors">
                  Read Full Article
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid + sidebar */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            {/* Main articles */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-heading text-xl font-bold text-teal-600">Recent Articles</h2>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  Sort by:
                  <button className="font-bold text-teal-600">Latest</button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {articles.map((article) => (
                  <article key={article.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img src={article.image} alt={article.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute left-3 top-3 flex items-center justify-between w-[calc(100%-24px)]">
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-teal-600 shadow-sm backdrop-blur-sm">{article.category}</span>
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-500 shadow-sm backdrop-blur-sm">{article.readTime}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2">Learn how to design and implement cloud solutions that grow with your business needs.</p>
                      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                        <span>{article.author} • {article.date}</span>
                        <Link href={`/blog/${article.slug}`} className="font-bold text-teal-600 hover:text-teal-700">Read More →</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button className="rounded-full border border-slate-300 bg-white px-8 py-3 text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Categories */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs hover:bg-teal-50 hover:text-teal-600 transition-colors text-slate-600">
                        <span className="font-medium">{cat.name}</span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent News */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">Recent News</h3>
                <ul className="space-y-4">
                  {recentNews.map((news, idx) => (
                    <li key={idx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <div className="text-[10px] font-bold uppercase text-teal-600">{news.tag}</div>
                      <p className="mt-1 text-xs font-medium text-slate-700 leading-snug hover:text-teal-600 cursor-pointer transition-colors">{news.title}</p>
                      <div className="mt-1 text-[10px] text-slate-400">{news.date}</div>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 text-xs font-bold text-teal-600 hover:text-teal-700">View All News →</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-black text-slate-900">Stay Updated</h2>
          <p className="mt-3 text-sm text-slate-500">Get the latest articles and insights delivered to your inbox.</p>
          <div className="mx-auto mt-6 flex max-w-md items-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 text-xs text-slate-700 outline-none placeholder:text-slate-400" />
            <button className="bg-teal-600 px-5 py-3 text-xs font-bold text-white hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
