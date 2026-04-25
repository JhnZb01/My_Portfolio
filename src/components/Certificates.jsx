import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Download } from 'lucide-react'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Interactivity with JavaScript',
      issuer: 'Coursera',
      date: 'December 2023',
      description: 'Learn to create interactive web pages with JavaScript, including DOM manipulation, event handling, and dynamic content creation.',
      image: './certificate1/Interactive.jpg',
      credentialId: 'COURSERA-JS-INTERACT-2023',
      url: './certificate1/Interactive.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Styling with Responsive Design',
      issuer: 'Coursera',
      date: 'November 2023',
      description: 'Master responsive web design techniques, CSS frameworks, and mobile-first development principles.',
      image: './certificate2/Advance.jpg',
      credentialId: 'COURSERA-RESPONSIVE-2023',
      url: './certificate2/Advance.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Web Design for Everybody Capstone',
      issuer: 'Coursera',
      date: 'October 2023',
      description: 'Comprehensive capstone project demonstrating mastery of HTML, CSS, JavaScript, and responsive web design.',
      image: './certificate3/webdesign.png',
      credentialId: 'COURSERA-CAPSTONE-2023',
      url: './certificate3/webdesign.png',
      featured: false
    },
    {
      id: 4,
      title: 'Introduction to Front-End Development',
      issuer: 'Coursera',
      date: 'September 2023',
      description: 'Fundamental concepts of front-end development including HTML, CSS, and basic JavaScript programming.',
      image: './certificate4/frontend.jpg',
      credentialId: 'COURSERA-FRONTEND-INTRO-2023',
      url: './certificate4/frontend.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'HTML, CSS, and Javascript for Web Developers',
      issuer: 'Coursera',
      date: 'August 2023',
      description: 'Comprehensive course covering the three fundamental technologies of web development: HTML, CSS, and JavaScript.',
      image: './certificate5/html.jpg',
      credentialId: 'COURSERA-HTML-CSS-JS-2023',
      url: './certificate5/html.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Web Design for Everybody: Basics of Web Development & Coding Specialization',
      issuer: 'Coursera',
      date: 'July 2023',
      description: 'Complete specialization covering the fundamentals of web development and coding, from basic HTML to advanced responsive design.',
      image: './certificate6/web.jpg',
      credentialId: 'COURSERA-SPECIALIZATION-2023',
      url: './certificate6/web.jpg',
      featured: false
    }
  ]

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

  const stats = [
    { number: '6+', label: 'Certifications Earned' },
    { number: '100+', label: 'Hours of Learning' },
    { number: '5', label: 'Platforms Mastered' }
  ]
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
            <span className="gradient-text">Certifications & Achievements</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Professional certifications and achievements that demonstrate my commitment
            to continuous learning and expertise in modern web technologies.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {cert.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Award size={14} />
                    <span>Featured</span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </motion.a>

                  <motion.a
                    href={cert.url}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Download size={20} />
                  </motion.a>
                </div>
              </div>


              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-primary-400 transition-colors duration-300 flex-1">
                    {cert.title}
                  </h3>
                  <Award className="text-primary-400 ml-2 flex-shrink-0" size={20} />
                </div>

                <div className="flex items-center text-slate-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm font-medium">{cert.date}</span>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Credential ID:</span>
                    <span className="font-mono bg-slate-700 text-slate-200 px-2 py-1 rounded">
                      {cert.credentialId}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-300">
                    Issued by: <span className="text-primary-400 font-semibold">{cert.issuer}</span>
                  </div>
                </div>



                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </motion.a>


                  <motion.a
                    href={cert.url}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 glass text-slate-700 py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 hover:bg-primary-500/10 hover:text-primary-600 flex items-center justify-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center glass rounded-2xl p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates