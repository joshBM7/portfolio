
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {GraduationCap, School, Settings} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Education: React.FC = () => {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const educationSteps = [
    {
      icon: GraduationCap,
      title: t('education.bac'),
      institution: 'Lycée d\'Application Nelson Mandela',
      description: 'Baccalauréat obtenu avec une formation complète en sciences et technologies',
      mention: 'Diplôme obtenu',
      year: '2022'
    },
    {
      icon: School,
      title: t('education.prep'),
      institution: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
      description: 'Classes Préparatoires intégrées - Formation scientifique et technique préparant au cycle ingénieur',
      mention: 'Formation préparatoire',
      year: '2022-2024'
    },
    {
      icon: Settings,
      title: t('education.engineer'),
      institution: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
      description: 'Cycle Ingénieur en Génie Informatique avec spécialisation en Data Science et Intelligence Artificielle',
      mention: 'En cours - Spécialisation IA',
      year: '2024-2027'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          {t('education.title')}
        </motion.h2>

        <div className="relative" ref={ref}>
          {/* Ligne verticale */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-4 lg:left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"
          />

          <div className="space-y-12">
            {educationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.5 + 0.5, duration: 0.6 }}
                  className="relative flex items-start"
                >
                  {/* Icône avec animation progressive */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      delay: index * 0.5 + 0.8, 
                      duration: 0.8,
                      type: "spring", 
                      stiffness: 200,
                      damping: 15
                    }}
                    className="relative z-10 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg flex-shrink-0"
                  >
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </motion.div>

                  {/* Contenu */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.5 + 1, duration: 0.6 }}
                    className="ml-4 lg:ml-8 flex-1"
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2 lg:mb-0">
                          {step.title}
                        </h3>
                        <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full self-start">
                          {step.year}
                        </span>
                      </div>
                      
                      <h4 className="text-base lg:text-lg font-semibold text-white mb-3">
                        {step.institution}
                      </h4>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                        {step.description}
                      </p>
                      
                      <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {step.mention}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
