
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {Github, Mail, Linkedin} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Icônes des technologies pour l'effet neige
const TechIcon = ({ icon: Icon, x, delay, duration }: { icon: any, x: number, delay: number, duration: number }) => (
  <motion.div
    initial={{ y: -100, x, opacity: 0.3 }}
    animate={{ y: window.innerHeight + 100, opacity: 0.1 }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute text-cyan-400/20 pointer-events-none"
    style={{ left: `${x}%` }}
  >
    <Icon size={24} />
  </motion.div>
)

interface HomeProps {
  setActiveSection?: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const { t } = useLanguage()
  const [showCursor, setShowCursor] = useState(true)

  // Technologies pour l'effet neige
  const techIcons = [
    { name: 'React', component: () => <div className="text-2xl">⚛️</div> },
    { name: 'Django', component: () => <div className="text-2xl">🐍</div> },
    { name: 'Laravel', component: () => <div className="text-2xl">🔧</div> },
    { name: 'MySQL', component: () => <div className="text-2xl">🗄️</div> },
    { name: 'JavaScript', component: () => <div className="text-2xl">📜</div> },
    { name: 'C++', component: () => <div className="text-2xl">⚙️</div> },
    { name: 'HTML', component: () => <div className="text-2xl">🌐</div> },
    { name: 'CSS', component: () => <div className="text-2xl">🎨</div> },
    { name: 'PHP', component: () => <div className="text-2xl">🐘</div> },
    { name: 'Git', component: () => <div className="text-2xl">📚</div> }
  ]

  // Animation du curseur clignotant
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Génération des particules de neige
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number
    icon: any
    x: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        icon: techIcons[Math.floor(Math.random() * techIcons.length)].component,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4
      }))
      setSnowflakes(flakes)
    }

    generateSnowflakes()
    const interval = setInterval(generateSnowflakes, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Effet de neige technologique */}
      <div className="absolute inset-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <TechIcon
            key={flake.id}
            icon={flake.icon}
            x={flake.x}
            delay={flake.delay}
            duration={flake.duration}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="text-center z-10 px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          {t('home.greeting')} Josh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          {t('home.title')}
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
            |
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-xl text-gray-400 mb-12 leading-relaxed"
        >
          {t('home.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.button
            onClick={() => setActiveSection?.('contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-3"
          >
            <Mail size={20} />
            <span>{t('home.contactMe')}</span>
          </motion.button>

          <motion.a
            href="https://github.com/joshBM7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center space-x-3"
          >
            <Github size={20} />
            <span>{t('home.viewGithub')}</span>
          </motion.a>
        </motion.div>

        {/* Liens sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex justify-center space-x-6 mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.2, color: "#06b6d4" }}
            href="https://github.com/joshBM7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#06b6d4" }}
            href="https://www.linkedin.com/in/joshua-bayonne/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.button
            onClick={() => setActiveSection?.('contact')}
            whileHover={{ scale: 1.2, color: "#06b6d4" }}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail size={28} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
