import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Work />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
