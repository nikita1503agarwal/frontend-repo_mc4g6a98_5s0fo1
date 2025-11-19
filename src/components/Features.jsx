import { PenTool, Layout, Camera, Monitor, Sparkles } from "lucide-react"
import ParallaxLayer from "./ParallaxLayer"

const features = [
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Logos, typography, color systems, and brand guidelines that scale across touchpoints.",
  },
  {
    icon: Layout,
    title: "Web & Product UI",
    desc: "Frictionless interfaces and landing pages that convert and feel premium.",
  },
  {
    icon: Camera,
    title: "Art Direction",
    desc: "Moodboards, creative direction, and visuals that elevate your story.",
  },
  {
    icon: Monitor,
    title: "Design Systems",
    desc: "Reusable components and tokens so your team ships consistently and faster.",
  },
]

export default function Features() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <ParallaxLayer speed={0.1} className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-violet-400/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-500" /> Services
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">What I do best</h2>
          <p className="mt-3 text-slate-600">A flexible model tailored to early-stage companies and fast-moving teams.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
