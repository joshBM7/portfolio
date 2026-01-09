
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const logWindowSize = () => {
      console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`)
    }
    logWindowSize()
    window.addEventListener('resize', logWindowSize)
    return () => window.removeEventListener('resize', logWindowSize)
  }, [])

    const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />
      case 'about':
        return <About />
      case 'education':
        return <Education />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home setActiveSection={setActiveSection} />
    }
  }

  return (
    <LanguageProvider>
        <div className="min-h-screen bg-slate-900 text-white z-10">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} isSidebarOpen={isSidebarOpen} />

          {/* Bouton toggle sidebar pour desktop */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:block hidden fixed top-4 left-4 z-40 p-3 bg-slate-800 rounded-lg shadow-lg hover:bg-cyan-500 transition-colors duration-300"
            title={isSidebarOpen ? 'Masquer la sidebar' : 'Afficher la sidebar'}
          >
            <Menu size={20} className="text-cyan-400" />
          </button>

          {/* Contenu principal avec marge responsive */}
          <div className={`${isSidebarOpen ? 'lg:ml-80' : 'lg:ml-0'} ml-0 lg:pl-16`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen"
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <ScrollToTop />
        </div>
      </LanguageProvider>
  )
}

export default App
