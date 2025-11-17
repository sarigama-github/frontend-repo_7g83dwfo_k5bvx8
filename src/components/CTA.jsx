export default function CTA() {
  return (
    <section id="signup" className="py-16">
      <div className="max-w-xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-br from-sky-100 via-rose-100 to-emerald-100 p-8 ring-1 ring-black/5">
          <h3 className="text-2xl font-bold text-slate-800">Create your account</h3>
          <p className="mt-2 text-slate-700">Start with a simple sign up. No cards required.</p>
          <SignupForm />
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setMsg(`Welcome, ${data.name}! Account created.`)
      setName(''); setEmail(''); setPassword('')
    } catch (err) {
      setMsg('Could not sign up. Try a different email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3">
      <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Full name" className="px-4 py-3 rounded-xl bg-white/90 ring-1 ring-black/5" />
      <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/90 ring-1 ring-black/5" />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder="Password" className="px-4 py-3 rounded-xl bg-white/90 ring-1 ring-black/5" />
      <button disabled={loading} className="mt-2 inline-flex justify-center px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 disabled:opacity-60">{loading ? 'Creating...' : 'Create account'}</button>
      {msg && <p className="text-slate-700">{msg}</p>}
    </form>
  )
}
