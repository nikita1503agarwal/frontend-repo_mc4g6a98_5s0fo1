import { useEffect, useMemo, useState } from "react"

/**
 * ParallaxLayer
 * Translates along Y based on window scroll for a parallax effect.
 * - Place inside relatively positioned parents when using as decorative absolute layers
 * - Can also wrap normal content (e.g., images) for gentle motion
 * - Respects prefers-reduced-motion by default
 */
export default function ParallaxLayer({
  speed = 0.2,
  className = "",
  style = {},
  children,
  respectReducedMotion = true,
}) {
  const [offset, setOffset] = useState(0)
  const prefersReducedMotion = useMemo(() =>
    typeof window !== "undefined" && "matchMedia" in window
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  [])

  useEffect(() => {
    if (respectReducedMotion && prefersReducedMotion) {
      setOffset(0)
      return
    }

    let raf = 0
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(y * speed))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed, respectReducedMotion, prefersReducedMotion])

  const mergedStyle = {
    transform: respectReducedMotion && prefersReducedMotion ? undefined : `translate3d(0, ${offset.toFixed(2)}px, 0)`,
    willChange: respectReducedMotion && prefersReducedMotion ? undefined : "transform",
    ...style,
  }

  return (
    <div className={className} style={mergedStyle} aria-hidden>
      {children}
    </div>
  )
}
