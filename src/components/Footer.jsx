export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
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
