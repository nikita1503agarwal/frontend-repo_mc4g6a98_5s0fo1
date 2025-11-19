import ParallaxLayer from "./ParallaxLayer"

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white overflow-hidden">
      <ParallaxLayer speed={0.03} className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
      <ParallaxLayer speed={0.02} className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Studio Nova — Independent graphic designer</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
