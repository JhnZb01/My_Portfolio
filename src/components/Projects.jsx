import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'
import groceryImg from './project-img/grocery.jpg'
import aiStoryImg from './project-img/ai-story.png'
import weatherImg from './project-img/wheather.jpg'
import socialMediaImg from './project-img/socialmedia.png'
import portfolioImg from './project-img/portfolio.jpg'
import restaurantImg from './project-img/restuarent.webp'
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Grocery Shop',
      description: 'A full-stack GroceryShop solution built with React, JS, and CSS. Features include user authentication, payment processing, and admin dashboard.',
      image: groceryImg,
      technologies: ['React', 'JS', 'ReactRouter', 'CSS'],
      category: 'fullstack',
      liveUrl: 'https://grocery-shop-puce.vercel.app/',
      githubUrl: 'https://github.com/JhnZb01/Grocery_Shop.git',
      featured: true
    },
    {
      id: 2,
      title: 'AI Story Generator',
      description: 'A modern AI Story Generator application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: aiStoryImg,
      technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
      category: 'frontend',
      liveUrl: 'https://ai-story-red-nu.vercel.app/',
      githubUrl: 'https://github.com/JhnZb01/AI-STORY.git',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: weatherImg,
      technologies: ['JavaScript', 'API', 'Chart.js', 'CSS3'],
      category: 'frontend',
      liveUrl: 'https://weather-app-nine-orcin-27.vercel.app/',
      githubUrl: 'https://github.com/JhnZb01/WeatherApp.git',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and engagement metrics.',
      image: socialMediaImg,
      technologies: ['HTML', 'React', 'Tailwindcss', 'Vite'],
      category: 'fullstack',
      liveUrl: 'https://social-media-dashboardd-iota.vercel.app/',
      githubUrl: 'https://github.com/JhnZb01/Social-Media-Dashboard.git',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and glassmorphism design.',
      image: portfolioImg,
      technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: 'https://github.com/JhnZb01/My_Portfolio.git',
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      description: 'Complete restaurant management system with table booking, menu management, and customer reviews.',
      image: restaurantImg,
      technologies: ['React', 'TailwindCSS', 'Shadcn/UI', 'React Hook Form + Zod'],
      category: 'fullstack',
      liveUrl: 'https://restaurant-booking-system-eight.vercel.app/',
      githubUrl: 'https://github.com/JhnZb01/Restaurant_Booking_System.git',
      featured: false
    }
  ]



  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

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
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Explore my latest projects and see how I bring ideas to life through
            innovative design and cutting-edge technology.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass hover:bg-primary-500/10 hover:text-primary-400'
                  }`}
              >
                <Filter size={16} />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      onClick={(e) => { if (project.liveUrl === '#') e.preventDefault(); }}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      onClick={(e) => { if (project.liveUrl === '#') e.preventDefault(); }}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center space-x-2"
                    >
                      <Eye size={16} />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 glass text-slate-200 py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 hover:bg-primary-500/10 hover:text-primary-400 flex items-center justify-center space-x-2"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/JhnZb01', '_blank')}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
