import { useLenis } from './hooks/useLenis'
import NoiseOverlay from './components/NoiseOverlay'
import GradientBlob from './components/GradientBlob'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useLenis()

  return (
    <>
      {/* Atmospheric layers */}
      <NoiseOverlay />
      <GradientBlob color="#D4A84308" size={600} x="60%" y="-10%" speed={20} />
      <GradientBlob color="#1a1a4a10" size={400} x="-5%" y="70%" speed={16} />

      {/* Skip link for keyboard navigation */}
      <a href="#about" className="skip-link">Skip to content</a>

      {/* Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
