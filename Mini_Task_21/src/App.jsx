import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">
          <Header />
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
