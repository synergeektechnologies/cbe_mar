"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import Header from "../components/Header"
import Footer from "../components/Footer"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "When is the Coimbatore Marathon 2025?",
      answer: "The Coimbatore Marathon 2025 is scheduled for December 21st, 2025.",
    },
    {
      question: "What are the different race categories?",
      answer:
        "We offer multiple categories including Full Marathon (42.2km), Half Marathon (21.1km), 10K Run, 5K Run, and Fun Walk. There are also special categories for different age groups.",
    },
    {
      question: "How do I register for the marathon?",
      answer:
        "Registration is available online through our official website. Early bird registrations typically open 6 months before the event date.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "Registration fees vary by category and registration period. Early bird rates are available with discounts. Please check our registration page for current pricing.",
    },
    {
      question: "Is there an age limit for participation?",
      answer:
        "Participants must be at least 18 years old for the full marathon and 16 years old for the half marathon. Younger participants can join the 5K and Fun Walk categories with parental consent.",
    },
    {
      question: "What does the registration fee include?",
      answer:
        "The registration fee includes race bib, timing chip, official race t-shirt, finisher medal, refreshments during and after the race, and medical support.",
    },
    {
      question: "Are there any medical requirements?",
      answer:
        "We recommend all participants to undergo a medical check-up before participating. Medical certificates may be required for certain age groups.",
    },
    {
      question: "What is the route for the marathon?",
      answer:
        "The marathon route covers scenic areas of Coimbatore, starting and ending at a central location. Detailed route maps will be provided closer to the event date.",
    },
    {
      question: "Will there be water stations along the route?",
      answer:
        "Yes, water and refreshment stations are placed at regular intervals along all race routes to ensure participant hydration and energy.",
    },
    {
      question: "How does the marathon support cancer awareness?",
      answer:
        "A portion of all registration fees goes directly to the Coimbatore Cancer Foundation. We also organize awareness campaigns and activities during the event.",
    },
    {
      question: "Can I transfer my registration to someone else?",
      answer:
        "Registration transfers are allowed up to 30 days before the event date with a nominal processing fee. Please contact our support team for assistance.",
    },
    {
      question: "What happens if the event is cancelled due to weather?",
      answer:
        "In case of severe weather conditions, the event may be postponed or cancelled. Participants will be notified in advance and refund policies will apply.",
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto text-rose-100"
          >
            Find answers to common questions about the Coimbatore Marathon
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/contact-us"}
              className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQ
