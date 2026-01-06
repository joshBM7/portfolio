
import React from 'react'
import { motion } from 'framer-motion'
import {Download, Github, Award, Clock, Coffee} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()

  const stats = [
    { icon: Award, label: 'Projets Complétés', value: '10+' },
    { icon: Clock, label: 'Heures de Code', value: '800+' },
    { icon: Coffee, label: 'Cafés Bus', value: '∞' }
  ]

  return (
    <div className="min-h-screen py-20 px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          {t('about.title')}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                {t('about.description')}
              </p>
              <p>
                Avec une solide formation en ingénierie et une passion pour l'innovation, 
                je transforme les idées complexes en solutions élégantes et fonctionnelles.
              </p>
              <p>
                Mon approche combine rigueur technique et créativité pour livrer des 
                expériences utilisateur exceptionnelles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href="/cv_josh.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>{t('about.downloadCV')}</span>
              </motion.a>

              <motion.a
                href="https://github.com/joshBM7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Github size={20} />
                <span>{t('about.viewProfile')}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
