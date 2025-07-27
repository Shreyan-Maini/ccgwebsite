import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const currentProjects = [
    {
      title: "Market Analysis for EV Batteries",
      client: "Bricks Capital Management",
      description:
        "Analyzing and condensing market research papers for Bricks Capital Management ability to apply to their EV clients .",
      status: "In Progress",
      team: 6,
      duration: "3 months",
      progress: 65,
      tags: ["Digital Strategy", "Marketing", "Operations"],
    },
    {
      title: "Fundraisers, Community Outreach, and Marketing",
      client: "Troy Parks and Recreation",
      description:
        "Partnered with local government to create and implement marketing strategies, fundraisers, and community outreach programs.",
      status: "In Progress",
      team: 4,
      duration: "4 months",
      progress: 25,
      tags: ["Strategy", "Fundraising", "Nonprofit"],
    },
    {
      title: "Menu Recreation and Marketing Strategy",
      client: "Golden Chicken",
      description:
        "Creating a new menu and marketing strategy for a local restaurant to increase customer engagement and sales.",
      status: "In Progress",
      team: 5,
      duration: "2 months",
      progress: 80,
      tags: ["Financial Planning", "Growth Strategy", "Small Business"],
    },
  ]

  const pastProjects = [
    {
      title: "Indian Fashion Week",
      client: "Sahar Creations",
      description: "Successfully launched online store, created a fashion line from recycling old clothes for Indian Fashion Week, featured on local news.",
      completedDate: "December 2023",
      team: 8,
      duration: "5 months",
      results: "200% sales increase",
      tags: ["E-commerce", "Digital Marketing", "Strategy"],
    },
    {
      title: "Simple Awareness Campaign",
      client: "Right Food Choice",
      description:
        "Increased awareness of the company through reels, ads, and posts",
      completedDate: "October 2023",
      team: 6,
      duration: "3 months",
      results: "35% faster service",
      tags: ["Operations", "Technology", "Customer Experience"],
    },
    {
      title: "Tournament Marketing Strategy",
      client: "Crincindo",
      description: "Developed market expansion strategy for sports facility by running a tournament, increasing brand visibility and customer engagement.",
      completedDate: "September 2023",
      team: 7,
      duration: "4 months",
      results: "2 new locations opened",
      tags: ["Market Research", "Expansion", "Retail"],
    },
    {
      title: "Merch Redesign",
      client: "Frozen Sunshine",
      description: "Rebranded smoothie shop with new merchandise design and pricing",
      completedDate: "August 2023",
      team: 5,
      duration: "6 weeks",
      results: "$500K funding secured",
      tags: ["Business Planning", "Startups", "Funding"],
    },
    {
      title: "Fun Facts, Posts, and More",
      client: "Stage Nature Center",
      description: "Created a local social media camapaign with fun facts, SNC updates, volunteering opportunities, and more",
      completedDate: "July 2023",
      team: 4,
      duration: "8 weeks",
      results: "45% efficiency improvement",
      tags: ["Healthcare", "Management", "Technology"],
    },
    {
      title: "Yoga Studio Reorganization",
      client: "Practice Yoga Studio",
      description:
        "Created fitness clothing using CustomInk, and ran social media campaigns and flyers to promote the new clothing line",
      completedDate: "June 2023",
      team: 6,
      duration: "10 weeks",
      results: "20% cost reduction",
      tags: ["Manufacturing", "Process Improvement", "Cost Optimization"],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world consulting projects that create meaningful impact for businesses while providing invaluable
              learning experiences for our team.
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Current Projects</h2>
            <p className="text-lg text-gray-600">Active engagements where our team is currently making a difference</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      className={`${
                        project.status === "In Progress"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors cursor-pointer" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Past Projects</h2>
            <p className="text-lg text-gray-600">Successful engagements that demonstrate our impact and expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-slide-up">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our team can help your business achieve its goals through strategic consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start a Project
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
