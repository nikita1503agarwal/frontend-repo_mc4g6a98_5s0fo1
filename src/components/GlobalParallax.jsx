import ParallaxLayer from "./ParallaxLayer"

export default function GlobalParallax() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Layer 1: soft gradient image top-left */}
      <ParallaxLayer
        speed={0.1}
        className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
          filter: "saturate(1.2)",
        }}
      />

      {/* Layer 2: abstract texture center-right */}
      <ParallaxLayer
        speed={0.18}
        className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full opacity-30 blur-2xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Layer 3: bottom glow */}
      <ParallaxLayer
        speed={0.24}
        className="absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "color-dodge",
        }}
      />
    </div>
  )
}
