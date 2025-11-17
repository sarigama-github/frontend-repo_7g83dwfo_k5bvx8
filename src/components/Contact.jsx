import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks for reaching out — we will get back to you soon!')
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-slate-800">Contact us</h2>
          <p className="mt-2 text-slate-600">We'd love to hear from you.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-3">
            <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Full name" className="px-4 py-3 rounded-xl bg-slate-50 ring-1 ring-black/5" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-50 ring-1 ring-black/5" />
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required placeholder="Your message" rows="4" className="px-4 py-3 rounded-xl bg-slate-50 ring-1 ring-black/5" />
            <button disabled={loading} className="mt-2 inline-flex justify-center px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-60">{loading ? 'Sending...' : 'Send message'}</button>
            {status && <p className="text-slate-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
