import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react'

const Hero = ({ onSectionChange }) => {
  const [currentText, setCurrentText] = useState('')
  const fullText = 'Front-End Developer (React, JavaScript, TailwindCSS)'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentText, fullText, isTyping])

  useEffect(() => {
    if (currentText === fullText) {
      const timer = setTimeout(() => {
        setIsTyping(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentText, fullText])

  const scrollToProjects = () => {
    onSectionChange('projects')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-primary-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-accent-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile Image Section - Centered Above Name */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            {/* Animated Background Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-6px] border border-dashed border-primary-500/40 rounded-full"
            ></motion.div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-tr from-primary-500 to-accent-500 shadow-xl shadow-primary-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                <img
                  src="/portfolio.png"
                  alt="Jahan Zaib"
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-8 backdrop-blur-md"
          >
            <span className="text-xl inline-block origin-bottom-right hover:animate-ping">👋</span>
            <span className="text-sm font-medium text-slate-300 uppercase tracking-widest hidden sm:inline-block">Hello, I am</span>
            <span className="text-sm font-medium text-slate-300 uppercase tracking-widest sm:hidden">Hello</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span className="gradient-text drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">JAHAN ZAIB</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="font-medium">
              {currentText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Passionate front-end developer crafting beautiful, responsive, and user-friendly web experiences.
            Specializing in building exceptional digital experiences with modern web technologies.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSectionChange('projects')}
            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>View My Work</span>
            <ChevronDown size={20} />
          </motion.button>


          <a
            href="/MyResume.pdf"
            download="JahanZaib-Resume.pdf"
            style={{ textDecoration: "none" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/JhnZb01', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/zjahan', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/zb_jhno3432?s=21', label: 'Twitter' },
              { icon: Mail, href: 'mailto:zjahan087@gmail.com', label: 'Email' }
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-primary-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:border-primary-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={() => onSectionChange('projects')}
              whileHover={{ scale: 1.1 }}
              className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <ChevronDown size={24} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero
