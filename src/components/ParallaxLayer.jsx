import { useEffect, useState } from "react"

/**
 * ParallaxLayer
 * Adds a translateY transform based on window scroll for a subtle parallax effect.
 * Usage: absolutely position inside a relatively positioned section.
 */
export default function ParallaxLayer({ speed = 0.2, className = "", style = {}, children }) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0
      // Use rAF to avoid jank
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(y * speed))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  const mergedStyle = {
    transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
    willChange: "transform",
    ...style,
  }

  return (
    <div className={className} style={mergedStyle}>
      {children}
    </div>
  )
}
