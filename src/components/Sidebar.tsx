
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Home, User, GraduationCap, Code, Briefcase, Mail, Languages, Menu, X} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const { language, toggleLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home', icon: Home, label: t('home') },
    { id: 'about', icon: User, label: t('about') },
    { id: 'education', icon: GraduationCap, label: t('education') },
    { id: 'skills', icon: Code, label: t('skills') },
    { id: 'projects', icon: Briefcase, label: t('projects') },
    { id: 'contact', icon: Mail, label: t('contact') }
  ]

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Fermer le menu mobile après sélection
  }

  return (
    <>
      {/* Bouton hamburger pour mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-slate-800 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-cyan-400" />
        ) : (
          <Menu size={24} className="text-cyan-400" />
        )}
      </motion.button>

      {/* Overlay pour mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ 
          x: 0,
          // Sur mobile, la sidebar n'apparaît que si le menu est ouvert
        }}
        className={`
          fixed left-0 top-0 h-full w-80 bg-slate-800 shadow-2xl z-50 flex flex-col
          lg:translate-x-0 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          transition-transform duration-300 ease-in-out
        `}
      >
        {/* Header avec nom */}
        <div className="p-8 border-b border-slate-700">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-cyan-400"
          >
            Josh
          </motion.h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                    }`}
                  >
                    <Icon size={20} className="text-current" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.li>
              )
            })}
          </ul>
        </nav>

        {/* Contrôles de langue */}
        <div className="p-6 border-t border-slate-700">
          <div className="flex justify-center">
            {/* Bouton de changement de langue */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="p-3 rounded-full bg-slate-700 hover:bg-cyan-500 transition-colors duration-300 text-gray-300 hover:text-white flex items-center space-x-1"
              title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              <Languages size={16} className="text-current" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </motion.button>
          </div>
          
          {/* Indicateurs visuels */}
          <div className="mt-4 text-center">
            <div className="text-xs text-gray-400">
              <div>Langue: {language === 'fr' ? 'Français' : 'English'}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
