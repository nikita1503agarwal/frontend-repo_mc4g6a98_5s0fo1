import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Portfolio from "./components/Portfolio"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import GlobalParallax from "./components/GlobalParallax"

function App() {
  return (
    <div className="bg-white text-slate-900 relative">
      <GlobalParallax />
      <Navbar />
      <Hero />
      <Portfolio />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
