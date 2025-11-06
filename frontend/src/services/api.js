// Small helper around fetch to talk to your backend.
// During dev, vite proxy handles /api → http://localhost:5000
// For absolute URLs, we read VITE_API_BASE from .env
const BASE = import.meta.env.VITE_API_BASE || ''

export async function apiGet(path) {
  const url = path.startsWith('http') ? path : `${BASE}${path}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json ? res.json() : res.text()
}
