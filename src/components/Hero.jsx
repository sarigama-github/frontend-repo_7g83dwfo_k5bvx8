import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 backdrop-blur text-sky-700 text-sm font-medium shadow-sm">
            New • Minimal fintech starter
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-slate-800 leading-tight">
            Build your pastel-perfect SaaS faster
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600">
            Authentication, blog, and contact form ready out of the box. Soft, modern, and delightful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#signup" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition">
              Get Started
            </a>
            <a href="#blog" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur text-slate-800 font-semibold hover:bg-white transition">
              Read the Blog
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80"></div>
    </section>
  )
}
