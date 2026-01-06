import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Database} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Projects: React.FC = () => {
  const { t } = useLanguage()

  const featuredProjects = [
    {
      title: 'StockPrice Prediction',
      description: 'Application d\'intelligence artificielle pour la prédiction des cours boursiers utilisant des modèles de deep learning et l\'analyse de séries temporelles.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
      githubUrl: 'https://github.com/joshBM7',
      demoUrl: '#',
      icon: Database,
      year: '2025'
    },
    {
      title: 'Weather Prediction',
      description: 'Système de prévision météorologique basé sur le machine learning, intégrant des données historiques et des paramètres atmosphériques en temps réel.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['Python', 'Machine Learning', 'API REST', 'Matplotlib'],
      githubUrl: 'https://github.com/joshBM7',
      year: '2024'
    },
    {
      title: 'Application Desktop Intelligence Artificielle-Tkinter Python',
      description: 'Dans un contexte où l\'analyse de données et l\'intelligence artificielle sont devenues essentielles pour la prise de décision, notre projet vise à développer une application interactive permettant d\'explorer et d\'appliquer différents modèles statistiques et algorithmes d\'apprentissage automatique. Cette application, développée en Python avec une interface graphique Tkinter, offre une plateforme pour l\'analyse de données et la prédiction statistique.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      technologies: ['Python', 'Tkinter', 'Machine Learning', ],
      githubUrl: 'https://github.com/joshBM7',
      icon: Smartphone,
      year: '2024'
    },
    {
      title: 'Détection de Fraudes Financières avec Graphes de Connaissances',
      description: 'Système de détection de fraudes financières utilisant des graphes de connaissances et des algorithmes d\'intelligence artificielle pour analyser les transactions suspectes.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      technologies: ['Python', 'Neo4j', 'Machine Learning', 'Graph Databases'],
      githubUrl: 'https://github.com/joshBM7',
      icon: Database,
      year: '2024'
    },
    {
      title: 'Web Weather Application',
      description: 'Application web de prévision météorologique utilisant le big data pour analyser et prédire les conditions météorologiques avec précision.',
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg',
      technologies: ['React', 'Node.js', 'Big Data', 'API REST', 'JavaScript'],
      icon: Code,
      year: '2024'
    },
    {
      title: 'Face Recognition System',
      description: 'Système de reconnaissance faciale développé avec Python utilisant PyTorch, OpenCV et TensorFlow pour l\'identification et la vérification des visages.',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow', 'Computer Vision'],
      icon: Smartphone,
      year: '2024'
    }
  ]

  const otherProjects = [
    {
      title: 'Système de Réservation de Salles',
      description: 'Plateforme de réservation en ligne avec gestion en temps réel',
      technologies: ['Django', 'React', 'MySQL']
    },
    {
      title: 'DARCLICK',
      description: 'Plateforme immobilière avec assistant conversationnel',
      technologies: ['Laravel', 'Vue.js', 'AI']
    },
    {
      title: 'Gestion Bancaire',
      description: 'Application de gestion des transactions bancaires',
      technologies: ['C++', 'SQLite']
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
          {t('projects.title')}
        </motion.h2>

        {/* Projets phares */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Séparateur */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"
        />

        {/* Autres projets */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold text-center mb-8 text-white"
        >
          {t('projects.other')}
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
