
import React, { createContext, useContext, useState, useEffect } from 'react'

interface LanguageContextType {
  language: string
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    education: 'Formation',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    
    // Home
    'home.greeting': 'Salut, je suis',
    'home.title': 'Je suis étudiant en Data Science',
    'home.description': 'Étudiant en Data Science | Passionné d\'IA | Résolveur de problèmes créatif',
    'home.contactMe': 'Me contacter',
    'home.viewGithub': 'Voir GitHub',
    
    // About
    'about.title': 'À propos de moi',
    'about.description': 'Passionné par la data science et l\'intelligence artificielle, je développe des solutions innovantes en combinant analyse de données, machine learning et développement web. Mon parcours m\'a permis d\'acquérir une expertise technique solide et une approche analytique rigoureuse.',
    'about.downloadCV': 'Télécharger CV',
    'about.viewProfile': 'Voir le profil',
    
    // Education
    'education.title': 'Mon Parcours',
    'education.bac': 'Baccalauréat Scientifique',
    'education.prep': 'Classes Préparatoires',
    'education.engineer': 'École d\'Ingénieur',
    
    // Skills
    'skills.title': 'Mes Compétences',
    'skills.programming': 'Programmation',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Données & IA',
    'skills.tools': 'Outils & Environnements',
    'skills.languages': 'Langues',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.other': 'Autres Projets',
    
    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Home
    'home.greeting': 'Hi, I\'m',
    'home.title': 'I am a Data Science Student',
    'home.description': 'Data Science Student | AI Enthusiast | Creative Problem Solver',
    'home.contactMe': 'Contact Me',
    'home.viewGithub': 'View GitHub',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passionate about data science and artificial intelligence, I develop innovative solutions by combining data analysis, machine learning and web development. My journey has allowed me to acquire solid technical expertise and a rigorous analytical approach.',
    'about.downloadCV': 'Download CV',
    'about.viewProfile': 'View Profile',
    
    // Education
    'education.title': 'My Journey',
    'education.bac': 'Scientific Baccalaureate',
    'education.prep': 'Preparatory Classes',
    'education.engineer': 'Engineering School',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.programming': 'Programming',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Data & AI',
    'skills.tools': 'Tools & Environments',
    'skills.languages': 'Languages',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.other': 'Other Projects',
    
    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message'
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr')
  }

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key as keyof typeof translations.fr] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
