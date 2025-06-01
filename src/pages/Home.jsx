import { motion } from "framer-motion";
import cancer_logo from "../assets/images/cancer-foundation-logo.png";
import marathon_start_2018 from "../assets/images/marathon-start-2018.png";
import night_marathon_start from "../assets/images/night-marathon-start.png";
import lets_ko_display from "../assets/images/lets-ko-display.png";
import congratulations_post from "../assets/images/congratulations-post.png";
import coimbatore_marathon_logo from "../assets/images/coimbatore-marathon-logo.png";
import cancer_foundation_event from "../assets/images/cancer-foundation-event.png";
import coimbatore_runners_community from "../assets/images/coimbatore-runners-community.png";
import marathon_crowd_image from "../assets/images/marathon-crowd.png";
import journey_image from "../assets/images/journey-stats-chart.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sectionFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={marathon_crowd_image}
            alt="Massive Marathon Crowd"
            className="object-cover opacity-90 w-full h-full absolute inset-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <motion.div
          className="relative z-20 container mx-auto h-full flex flex-col justify-center px-6 md:px-12"
          initial="hidden"
          animate="visible"
          variants={sectionFadeIn}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Thank you for your support and participation!
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mt-4 max-w-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            See you on 21st December 2025!
          </motion.h2>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-rose-600 text-white font-bold rounded-md hover:bg-rose-700 transition-colors text-lg shadow-lg"
            >
              Register for 2025
            </a>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-orange-500 z-10 rounded-t-[100%] md:rounded-t-[50%]"></div>
      </section>

      {/* Participation Stats */}
      <motion.section
        className="py-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "18,500+", label: "Participants in 2024" },
              { value: "12", label: "Years of Impact" },
              { value: "₹50L+", label: "Raised for Cancer" },
              { value: "500+", label: "Volunteers" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemFadeIn}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <div className="text-4xl font-bold text-rose-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Passion and Purpose Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            PASSION AND PURPOSE!
          </motion.h2>
          <motion.p
            className="max-w-4xl mx-auto text-lg text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The Coimbatore Marathon is the largest sporting event in Coimbatore and
            the biggest in Tamil Nadu outside of Chennai. Scheduled annually in
            December, the Coimbatore Marathon provides participants with a unique
            global experience. It unites individuals passionate about running and
            fitness while supporting and raising awareness about cancer.
          </motion.p>

          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img
              src={journey_image}
              alt="The Journey - Marathon Statistics, Start Line 2018, and Team Photo"
              width={1200}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Our Journey",
                content:
                  "From 8,243 participants in 2013 to over 18,500 in 2024, our marathon has grown exponentially while maintaining its core mission of supporting cancer awareness and community health.",
              },
              {
                title: "The Starting Line",
                content:
                  "Every marathon begins with anticipation and excitement at the starting line. Hundreds of participants gather, ready to embark on their personal journey of endurance and achievement.",
              },
              {
                title: "Community Spirit",
                content:
                  "Our marathon brings together people from all walks of life, creating lasting friendships and a strong community bond that extends far beyond race day.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemFadeIn}
                transition={{ delay: idx * 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-rose-600">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Journey Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            OUR REMARKABLE GROWTH
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">12 Years of Excellence</h3>
                  <div className="space-y-4">
                    {[
                      { year: "2013", text: "First Marathon", stats: "8,243 participants" },
                      { year: "2018", text: "Milestone Year", stats: "14,984 participants" },
                      { year: "2024", text: "Record Breaking", stats: "18,500+ participants" },
                    ].map((entry, idx) => (
                      <motion.div
                        key={idx}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.2, duration: 0.5 }}
                      >
                        <span className="font-medium">
                          {entry.year} - {entry.text}
                        </span>
                        <span className="text-rose-600 font-bold">{entry.stats}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.p
                    className="mt-6 text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Each year brings new challenges and achievements, but our commitment to cancer awareness and
                    community health remains unwavering.
                  </motion.p>
                </div>
                <motion.div
                  className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold mb-4">Impact Highlights</h4>
                  <ul className="space-y-3">
                    {[
                      "₹50+ Lakhs raised for cancer research",
                      "25,000+ lives touched through awareness",
                      "500+ dedicated volunteers annually",
                      "12 years of community building",
                    ].map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.2, duration: 0.5 }}
                      >
                        <div className="w-3 h-3 bg-rose-500 rounded-full mr-3"></div>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Marathon Experience Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            THE MARATHON EXPERIENCE
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Where It All Begins</h3>
              <p className="text-lg mb-6">
                Every marathon journey starts with that first step across the starting line. Whether it's the early
                morning energy of our day events or the unique atmosphere of our night runs, each Coimbatore Marathon
                creates unforgettable memories.
              </p>
              <p className="text-lg">
                From seasoned athletes to first-time runners, our marathon welcomes everyone to be part of this
                incredible community experience that combines fitness, fun, and philanthropy.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <img
                src={marathon_start_2018}
                alt="Marathon Start Line 2018"
                width={600}
                height={200}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <img
                src={night_marathon_start}
                alt="Night Marathon Start"
                width={600}
                height={200}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Massive Participation Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src={marathon_crowd_image}
                alt="Massive Marathon Crowd"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">THOUSANDS UNITED FOR A CAUSE</h2>
              <p className="text-lg mb-6">
                The Coimbatore Marathon brings together thousands of participants from all walks of life, creating a sea
                of energy and determination. Our event has become one of the largest community gatherings in the region.
              </p>
              <p className="text-lg">
                Each year, the streets of Coimbatore transform into a vibrant celebration of human spirit and
                resilience, with participants supporting each other and pushing their limits for a greater purpose.
              </p>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <a
                  href="/register"
                  className="inline-block px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition-colors"
                >
                  Join the Movement
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cancer Foundation Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src={cancer_logo}
                alt="Coimbatore Cancer Foundation"
                width={400}
                height={200}
                className="mb-6"
              />
              <h2 className="text-3xl font-bold mb-6">Supporting Cancer Awareness</h2>
              <p className="text-lg mb-6">
                The Coimbatore Marathon proudly supports the Coimbatore Cancer Foundation in their mission of adding
                value to life. Through our annual marathon, we raise awareness and funds for cancer prevention,
                treatment, and support services.
              </p>
              <p className="text-lg">
                Every step you take in our marathon contributes to a larger cause - helping those affected by cancer and
                supporting research for better treatment options.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src={cancer_foundation_event}
                alt="Cancer Foundation Event"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ONE COMMUNITY, COUNTLESS SMILES
          </motion.h2>
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src={coimbatore_runners_community}
              alt="Coimbatore Runners Community - One Community, Countless sMiles"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              The Coimbatore Runners community brings together fitness enthusiasts from all walks of life. Our motto
              "One Community, Countless sMiles" reflects the joy and camaraderie that defines our running family. From
              dedicated volunteers in their pink vests to enthusiastic participants, everyone plays a vital role in
              making the Coimbatore Marathon a celebration of health, fitness, and community spirit.
            </p>

            <div className="mt-8">
              <a
                href="/register"
                className="inline-block px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition-colors mr-4"
              >
                Join Our Community
              </a>
              <a
                href="/about-us"
                className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Let's KO Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">LET'S KO CANCER TOGETHER</h2>
              <p className="text-lg mb-6">
                Our partnership with various organizations and the "Let's KO" initiative represents our commitment to
                fighting cancer through community action. Every marathon participant becomes part of this larger
                movement.
              </p>
              <p className="text-lg">
                Through awareness campaigns, fundraising efforts, and community engagement, we're working together to
                knock out cancer and support those affected by this disease.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src={lets_ko_display}
                alt="Let's KO Cancer Display"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Registration CTA */}
      <motion.section
        className="py-16 px-4 bg-rose-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            BE PART OF SOMETHING BIGGER
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join thousands of runners in the Coimbatore Marathon 2025. Whether you're a seasoned athlete or a
            first-time runner, this is your opportunity to challenge yourself and support a noble cause.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-md hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
