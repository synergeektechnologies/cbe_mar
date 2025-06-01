"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import cbe_cancer_logo from "../assets/images/cancer-foundation-logo.png"
import coimbatore_runners_logo from "../assets/images/coimbatore-runners-logo.png"
import showspace_logo from "../assets/images/showspace-logo.png"

const Partners = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-rose-800 to-rose-800 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6"
          >
            Our Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto text-blue-100"
          >
            Meet the amazing organizations and sponsors who make the Coimbatore Marathon possible
          </motion.p>
        </div>
      </motion.section>

      {/* Partners Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Title Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Title Sponsors</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "Showspace",
                  description: "Leading event management company supporting the marathon with logistics and organization.",
                  logo: showspace_logo,
                },
                {
                  name: "Coimbatore Cancer Foundation",
                  description: "Our primary beneficiary organization working tirelessly in cancer awareness and patient support.",
                  logo: cbe_cancer_logo,
                },
                {
                  name: "Coimbatore Runners",
                  description: "Local running community that helps organize and promote the marathon throughout the year.",
                  logo: coimbatore_runners_logo,
                },
              ].map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 h-32 rounded-xl mb-6 flex items-center justify-center"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} Logo`}
                      className="max-h-20 w-auto"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{sponsor.name}</h3>
                  <p className="text-gray-600">{sponsor.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Official Sponsors */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Official Sponsors</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-20 rounded-lg mb-3 flex items-center justify-center">
                    <img
                      src={`/placeholder.svg?height=60&width=120&text=Sponsor+${index + 1}`}
                      alt={`Sponsor ${index + 1}`}
                      className="max-h-12 w-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Sponsor {index + 1}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> */}

          {/* Community Partners */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Community Partners</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 h-24 rounded-lg mb-4 flex items-center justify-center"
                  >
                    <img
                      src={`/placeholder.svg?height=80&width=150&text=Partner+${index + 1}`}
                      alt={`Partner ${index + 1}`}
                      className="max-h-16 w-auto"
                    />
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Partner {index + 1}</h4>
                  <p className="text-sm text-gray-600">Supporting local community initiatives</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> */}

          {/* Become a Partner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-rose-600 to-rose-800 rounded-3xl p-12 text-white text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-4xl font-bold mb-6"
            >
              Become a Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
            >
              Join us in supporting cancer awareness and promoting health and fitness in our community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/contact-us"}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Partners
