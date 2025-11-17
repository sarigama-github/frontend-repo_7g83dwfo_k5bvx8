export default function Features() {
  const items = [
    {
      title: 'Simple auth',
      desc: 'Register and login with secure hashing. Token issued on success.',
    },
    {
      title: 'Blog engine',
      desc: 'Create and list posts with tags, cover and publish state.',
    },
    {
      title: 'Contact inbox',
      desc: 'Collect messages and track status in your database.',
    },
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/50 to-rose-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Pastel-light features</h2>
          <p className="mt-3 text-slate-600">Everything you need to launch a clean SaaS landing with the essentials.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-slate-800">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
