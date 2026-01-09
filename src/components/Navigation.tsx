import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, BarChart3, Mail, GraduationCap, Award } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'education', 'certifications', 'contact']
      let currentSection = 'home'
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.5s ease',
          background: scrolled 
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        <div className="nav-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nav-content flex items-center justify-between h-16">
            {/* Logo with Home Icon */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 cursor-pointer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              {/* Home Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
                }}
              >
                <Home 
                  className="w-5 h-5"
                  style={{
                    color: '#3b82f6',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </motion.div>
              
              {/* Name */}
              <h1 
                className="text-2xl font-bold"
                style={{ fontSize: '24px', fontWeight: '700' }}
              >
                <span 
                  className="gradient-animate bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 3s ease infinite'
                  }}
                >
                  Sardheesh
                </span>
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="nav-menu-desktop hidden md:flex">
              <div className="flex items-center space-x-6">
                {navItems.slice(1).map((item) => ( // Skip 'home' since it's now in the logo
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`nav-button relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'active text-blue-400 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    style={{
                      backdropFilter: activeSection === item.id ? 'blur(10px)' : 'none',
                      boxShadow: activeSection === item.id ? '0 4px 15px rgba(59, 130, 246, 0.2)' : 'none'
                    }}
                  >
                    <item.icon 
                      className="w-4 h-4" 
                      style={{
                        color: activeSection === item.id ? '#3b82f6' : 'currentColor'
                      }}
                    />
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="nav-menu-mobile md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{
          scaleX: scrolled ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}

export default Navigation