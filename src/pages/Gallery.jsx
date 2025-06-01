import Footer from "../components/Footer"
import Header from "../components/Header"
import marathon_crowd from "../assets/images/marathon-crowd.png"
import marathon_start_2018 from "../assets/images/marathon-start-2018.png"
import marathon_night_start from "../assets/images/night-marathon-start.png"
import volunteers_group from "../assets/images/volunteers-group.png"
import lets_ko_display from "../assets/images/lets-ko-display.png"
import cancer_foundation_event from "../assets/images/cancer-foundation-event.png"
import journey_chart from "../assets/images/journey-chart.png"
import group_photo from "../assets/images/group-photo.png"
import congratulations_post from "../assets/images/congratulations-post.png"

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Marathon Crowd",
      year: "2023",
      image: marathon_crowd,
      description: "Thousands of participants gathered for the Coimbatore Marathon",
    },
    {
      id: 2,
      title: "Marathon Start Line 2018",
      year: "2018",
      image: marathon_start_2018,
      description: "Hundreds of runners ready to begin their marathon journey",
    },
    {
      id: 3,
      title: "Night Marathon Start",
      year: "2023",
      image: marathon_night_start,
      description: "The unique atmosphere of our night marathon events",
    },
    {
      id: 4,
      title: "Volunteer Team",
      year: "2023",
      image: volunteers_group,
      description: "Our dedicated volunteers in their signature pink vests",
    },
    {
      id: 5,
      title: "Let's KO Cancer Display",
      year: "2023",
      image: lets_ko_display,
      description: "Our commitment to fighting cancer through community action",
    },
    {
      id: 6,
      title: "Cancer Foundation Event",
      year: "2023",
      image: cancer_foundation_event,
      description: "Supporting cancer awareness with our community partners",
    },
    {
      id: 7,
      title: "Marathon Statistics",
      year: "2024",
      image: journey_chart,
      description: "Our journey from 2013 to 2024 - growing stronger each year",
    },
    {
      id: 8,
      title: "Group Celebration",
      year: "2023",
      image: group_photo,
      description: "Celebrating together after another successful marathon",
    },
    {
      id: 9,
      title: "Congratulations Post",
      year: "2024",
      image: congratulations_post,
      description: "Thank you message to all our amazing participants",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-8">GALLERY</h1>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-4 py-2 bg-rose-600 text-white rounded-md">All Years</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group">
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.year}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center mb-8">
          <p className="text-lg text-gray-600 mb-6">
            Want to see more photos from our marathon events? Follow us on social media for the latest updates and
            behind-the-scenes moments.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition-colors">
              Follow on Facebook
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-rose-500 to-rose-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
