"use client"

import { useEffect, useRef, useState } from "react"

type AnimationType = "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right"

interface UseScrollAnimationOptions {
  threshold?: number
  delay?: number
  animation?: AnimationType
}

export function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  animation = "fade-in-up",
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, delay])

  const className = isVisible ? `animate-${animation}` : "opacity-0"

  return { ref, className, isVisible }
}
