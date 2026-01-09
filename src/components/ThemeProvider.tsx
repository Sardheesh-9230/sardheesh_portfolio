import { createContext, useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-500 ${theme === 'light'
        ? 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
        }`}>
        {children}

        {/* Theme Toggle Button - REMOVED PER USER REQUEST */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="fixed top-24 right-8 z-[9999]"
        >
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-md border-2 ${theme === 'light'
                ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white border-purple-300 shadow-purple-500/50 hover:shadow-purple-500/70'
                : 'bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 text-gray-900 border-yellow-300 shadow-yellow-500/50 hover:shadow-yellow-500/70'
              }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <Moon className="w-7 h-7" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <Sun className="w-7 h-7" strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div> */}

        {/* Theme Transition Overlay */}
        <AnimatePresence>
          {theme && (
            <motion.div
              key={theme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 pointer-events-none z-40"
              style={{
                background: theme === 'light'
                  ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, transparent 70%)'
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider