import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Latest from the blog</h2>
          <p className="mt-3 text-slate-600">News, tips and updates.</p>
        </div>
        {loading ? (
          <p className="mt-10 text-center text-slate-600">Loading...</p>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.excerpt}</p>
                <div className="mt-3 text-sm text-slate-500">{p.tags?.join(', ')}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
