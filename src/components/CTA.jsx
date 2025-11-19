export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-violet-400/30 blur-3xl" />
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-fuchsia-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 md:p-12 shadow-xl backdrop-blur">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Tell me about your project</h2>
          <p className="mt-3 text-slate-600">Share a few details and I’ll reply with a short plan, timeline, and a fixed quote within 24 hours.</p>

          <form className="mt-8 grid gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <textarea placeholder="What do you need designed?" rows={4} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">Send inquiry</button>
          </form>

          <p className="mt-4 text-sm text-slate-500">Or email: hello@studionova.design</p>
        </div>
      </div>
    </section>
  )
}
