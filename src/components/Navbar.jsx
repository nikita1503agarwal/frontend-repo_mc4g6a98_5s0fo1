import { Menu, Palette, Sparkles } from "lucide-react"
import { useState } from "react"
import ParallaxLayer from "./ParallaxLayer"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="relative">
        <ParallaxLayer speed={0.03} className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-fuchsia-400/20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 opacity-40 blur-sm group-hover:opacity-70 transition" />
              <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-slate-900 text-white">
                <Palette className="h-5 w-5" />
              </div>
            </div>
            <span className="text-slate-900 font-semibold text-lg tracking-tight">Studio Nova</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#work" className="hover:text-slate-900 transition">Work</a>
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <Sparkles className="h-4 w-4" /> Start a project
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-1 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
              <a href="#work" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Work</a>
              <a href="#services" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Services</a>
              <a href="#pricing" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Pricing</a>
              <a href="#about" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">About</a>
              <a href="#contact" className="block rounded-md px-3 py-2 font-medium text-white bg-slate-900 hover:bg-slate-800">Start a project</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
