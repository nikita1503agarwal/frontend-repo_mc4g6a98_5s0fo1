import ParallaxLayer from "./ParallaxLayer"

const projects = [
  {
    title: "Neon Finance",
    tags: ["Brand", "Web"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Astra AI",
    tags: ["Identity", "Product"],
    image: "https://images.unsplash.com/photo-1736754074119-e9588d29c14c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBc3RyYSUyMEFJfGVufDB8MHx8fDE3NjM1NDk0ODd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    title: "Voyage Studio",
    tags: ["Art Direction"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      {/* subtle floating glows */}
      <ParallaxLayer speed={0.06} className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <ParallaxLayer speed={0.04} className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Selected work</h2>
            <p className="mt-3 text-slate-600 max-w-xl">A glimpse of recent collaborations. Clean, modern, and built to move metrics.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 font-medium hover:bg-slate-50">Get in touch</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-slate-100 px-2 py-1">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
