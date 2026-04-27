import { useState, useEffect } from 'react'

export function useCounter(initial: number = 247) {
  const [count, setCount] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.65) {
        setCount((c) => c + Math.floor(Math.random() * 2) + 1)
      }
    }, 9000)
    return () => clearInterval(interval)
  }, [])

  return count
}
