
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Monitor, Server, Database, Wrench, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Skills: React.FC = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.programming'),
      color: 'from-indigo-500 to-purple-500',
      icon: Code,
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 }
      ]
    },
    {
      title: t('skills.frontend'),
      color: 'from-orange-500 to-red-500',
      icon: Monitor,
      skills: [
        { name: 'React', level: 85 },
        { name: 'React Native', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 }
      ]
    },
    {
      title: t('skills.backend'),
      color: 'from-green-500 to-blue-500',
      icon: Server,
      skills: [
        { name: '.NET', level: 65 },
        { name: 'PHP', level: 65 },
        { name: 'Django', level: 70 }
      ]
    },
    {
      title: t('skills.data'),
      color: 'from-blue-500 to-cyan-500',
      icon: Database,
      skills: [
        { name: 'SQL', level: 73 },
        { name: 'Big Data', level: 65 },
        { name: 'NoSQL', level: 70 },
        { name: 'Machine Learning', level: 67 },
        { name: 'Statistique', level: 70 }
      ]
    },
    {
      title: t('skills.tools'),
      color: 'from-purple-500 to-pink-500',
      icon: Wrench,
      skills: [
        { name: 'Excel', level: 77 },
        { name: 'Power BI', level: 73 },
        { name: 'Linux', level: 70 },
        { name: 'Git', level: 73 },
        { name: 'GitHub', level: 75 }
      ]
    },
    {
      title: t('skills.languages'),
      color: 'from-yellow-500 to-orange-500',
      icon: Globe,
      skills: [
        { name: 'Français', level: 85 },
        { name: 'Anglais', level: 60 },
        { name: 'Allemand', level: 5 }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
