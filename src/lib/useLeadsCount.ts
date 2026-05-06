import { useState, useEffect } from 'react'

export function useLeadsCount(): number | null {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch('/api/leads-count')
        if (!res.ok) return
        const data = await res.json()
        if (typeof data.count === 'number') setCount(data.count)
      } catch {
        // silently fail — counter is non-critical
      }
    }

    fetchCount()
    const id = setInterval(fetchCount, 60_000)
    return () => clearInterval(id)
  }, [])

  return count
}
