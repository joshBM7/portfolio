import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-slate-800 dark:bg-slate-700 hover:bg-cyan-500 dark:hover:bg-cyan-500 transition-colors duration-300 text-gray-300 hover:text-white shadow-lg border border-slate-600 dark:border-slate-500"
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      {isDark ? (
        <Sun size={24} className="text-current" />
      ) : (
        <Moon size={24} className="text-current" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;