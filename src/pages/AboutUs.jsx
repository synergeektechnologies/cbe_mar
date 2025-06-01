import { Heart, Users, Trophy, Target, Award, Globe } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Supporting cancer patients and their families with empathy and care",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of runners and supporters united for a cause",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Delivering a world-class marathon experience for all participants",
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Every step taken contributes to cancer awareness and research funding",
    },
  ]

  const milestones = [
    { year: "2010", event: "First Coimbatore Marathon", participants: "500+" },
    { year: "2015", event: "Reached 5,000 participants", participants: "5,000+" },
    { year: "2020", event: "Virtual marathon during pandemic", participants: "3,500+" },
    { year: "2024", event: "Largest marathon to date", participants: "10,000+" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-800 to-rose-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Discover the story behind Coimbatore's premier marathon event and our commitment to fighting cancer through
            community action
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                What began as a small community run in 2010 has evolved into Tamil Nadu's largest marathon outside
                Chennai. The Coimbatore Marathon was born from a simple yet powerful idea: harness the collective energy
                of runners to make a meaningful impact in the fight against cancer.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've grown from 500 participants to over 10,000 runners, but our core mission remains
                unchanged. Every registration, every step, and every finish line crossed contributes to cancer awareness
                and supports the vital work of the Coimbatore Cancer Foundation.
              </p>
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-rose-500">
                <p className=" font-semibold italic">
                  "Running is not just about personal achievement; it's about running together toward a world without
                  cancer."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-rose-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Years Strong</h3>
                  <p className="text-gray-600">Building community, one race at a time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from race organization to community outreach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-800 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <Award className="w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">₹50L+</div>
                      <div className="text-red-100">Funds Raised</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">45K+</div>
                      <div className="text-red-100">Lives Touched</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100+</div>
                      <div className="text-red-100">Volunteers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15</div>
                      <div className="text-red-100">Years Strong</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Making a Real Difference</h2>
              <p className="text-lg text-gray-700 mb-6">
                Through our partnership with the Coimbatore Cancer Foundation, every rupee raised goes directly toward
                cancer research, patient support programs, and awareness initiatives that save lives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Free cancer screening programs for underserved communities</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Financial assistance for cancer patients and families</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Research funding for innovative cancer treatments</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Educational workshops and awareness campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to create India's most impactful marathon
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-rose-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.participants} participants</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated volunteers and professionals working year-round to make the marathon a success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Organizing Committee</h3>
              <p className="text-gray-600">
                Passionate volunteers coordinating every aspect of the marathon experience
              </p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Team</h3>
              <p className="text-gray-600">Healthcare professionals ensuring participant safety throughout the event</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Staff</h3>
              <p className="text-gray-600">Dedicated team members making every runner's journey memorable and smooth</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs
