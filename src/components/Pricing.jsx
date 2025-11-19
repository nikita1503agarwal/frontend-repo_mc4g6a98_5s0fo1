import ParallaxLayer from "./ParallaxLayer"

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <ParallaxLayer speed={0.05} className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Simple, flexible pricing</h2>
          <p className="mt-3 text-slate-600">Pick a model that fits your stage. All packages include strategy, revisions, and source files.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-2 text-sm text-slate-600">Landing page or logo refresh</p>
            <p className="mt-4 text-3xl font-extrabold text-slate-900">$1,500</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>— 1-2 weeks</li>
              <li>— 1 concept, 2 revisions</li>
              <li>— Source files</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-slate-900 px-4 py-2 text-center text-white font-medium">Start</a>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 bg-slate-900 p-6 text-white shadow-sm">
            <h3 className="text-lg font-semibold">Growth</h3>
            <p className="mt-2 text-sm text-slate-2 00">Brand + marketing page</p>
            <p className="mt-4 text-3xl font-extrabold">$3,800</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>— 2-4 weeks</li>
              <li>— 2 concepts, 3 revisions</li>
              <li>— Brand guidelines</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-white px-4 py-2 text-center text-slate-900 font-medium">Choose</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Partner</h3>
            <p className="mt-2 text-sm text-slate-600">Ongoing design subscription</p>
            <p className="mt-4 text-3xl font-extrabold text-slate-900">$2,200/mo</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>— Async Slack + Notion</li>
              <li>— Unlimited requests</li>
              <li>— Cancel anytime</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-slate-900 px-4 py-2 text-center text-white font-medium">Apply</a>
          </div>
        </div>
      </div>
    </section>
  )
}
