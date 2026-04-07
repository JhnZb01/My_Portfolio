import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud, Smartphone, Zap } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'TailwindCSS', level: 88, color: 'from-teal-400 to-teal-600' },
        { name: 'Sass/SCSS', level: 80, color: 'from-pink-400 to-pink-600' },
        { name: 'Next.js', level: 82, color: 'from-gray-400 to-gray-600' }
      ]
    },
    design: {
      icon: Palette,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Adobe XD', level: 80, color: 'from-pink-400 to-pink-600' },
        { name: 'Sketch', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Photoshop', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'Illustrator', level: 65, color: 'from-orange-400 to-orange-600' },
        { name: 'Principle', level: 60, color: 'from-green-400 to-green-600' }
      ]
    },
    tools: {
      icon: Zap,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Vite', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Firebase', level: 85, color: 'from-yellow-400 to-orange-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Bootstrap', level: 80, color: 'from-purple-500 to-purple-700' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-400 to-teal-600' }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold font-display mb-6"
          >
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical skills and expertise across 
            various technologies and tools in modern web development.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon
            return (
              <motion.button
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                  activeCategory === key
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'glass hover:bg-primary-500/10 hover:text-primary-400'
                }`}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-200">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-slate-300">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-200">Responsive Design</h3>
            <p className="text-slate-300">Creating mobile-first, responsive designs that work seamlessly across all devices.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-200">Performance Optimization</h3>
            <p className="text-slate-300">Optimizing applications for speed, efficiency, and excellent user experience.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cloud size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-200">Modern Deployment</h3>
            <p className="text-slate-300">Deploying applications using modern cloud platforms and CI/CD pipelines.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
