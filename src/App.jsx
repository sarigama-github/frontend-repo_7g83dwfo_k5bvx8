import Hero from './components/Hero'
import Features from './components/Features'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-800">
      <Hero />
      <Features />
      <Blog />
      <CTA />
      <Contact />
      <footer className="py-10 text-center text-slate-500">© 2025 Pastel SaaS</footer>
    </div>
  )
}

export default App
