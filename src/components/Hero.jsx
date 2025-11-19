import { ArrowRight, Sparkles } from "lucide-react"
import ParallaxLayer from "./ParallaxLayer"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Parallax background glows */}
      <ParallaxLayer speed={0.12} className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl -z-10" />
      <ParallaxLayer speed={0.08} className="absolute top-10 -right-20 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" /> Available for new projects
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Minimal, bold design that makes brands unforgettable
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              I craft visual identities, websites, and product visuals that help startups look premium, credible, and clear. Design that feels effortless, because it’s carefully considered.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-50">
                See recent work
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop" alt="Design Showcase" className="h-full w-full object-cover" />
            </div>
            <ParallaxLayer speed={0.18} className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-xl bg-fuchsia-400/40 blur-2xl" />
            <ParallaxLayer speed={0.1} className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-xl bg-cyan-400/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
