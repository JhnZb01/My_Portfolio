import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, FolderOpen, Award, User, Mail } from 'lucide-react'

const Navigation = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: User },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-500/30 shadow-lg shadow-primary-500/20">
              <img 
                src="./portfolio.png" 
                alt="JZ" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-bold text-xl gradient-text hidden sm:block">
              JAHAN ZAIB
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'text-slate-300 hover:text-primary-400 hover:bg-primary-500/5'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        className="md:hidden glass border-t border-white/20"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-slate-300 hover:text-primary-400 hover:bg-primary-500/5'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation
