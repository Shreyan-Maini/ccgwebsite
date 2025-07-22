import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const currentProjects = [
    {
      title: "Local Restaurant Chain Digital Transformation",
      client: "Mama's Kitchen",
      description:
        "Implementing comprehensive digital strategy including online ordering, social media presence, and customer loyalty program.",
      status: "In Progress",
      team: 6,
      duration: "3 months",
      progress: 65,
      tags: ["Digital Strategy", "Marketing", "Operations"],
    },
    {
      title: "Nonprofit Fundraising Strategy",
      client: "Community Youth Center",
      description:
        "Developing sustainable fundraising strategies and grant application processes to increase annual revenue by 40%.",
      status: "Planning",
      team: 4,
      duration: "4 months",
      progress: 25,
      tags: ["Strategy", "Fundraising", "Nonprofit"],
    },
    {
      title: "Small Business Financial Planning",
      client: "Green Thumb Landscaping",
      description:
        "Creating comprehensive financial planning system and growth strategy for expanding landscaping business.",
      status: "In Progress",
      team: 5,
      duration: "2 months",
      progress: 80,
      tags: ["Financial Planning", "Growth Strategy", "Small Business"],
    },
  ]

  const pastProjects = [
    {
      title: "E-commerce Platform Launch",
      client: "Artisan Crafts Co.",
      description: "Successfully launched online store resulting in 200% increase in sales within first quarter.",
      completedDate: "December 2023",
      team: 8,
      duration: "5 months",
      results: "200% sales increase",
      tags: ["E-commerce", "Digital Marketing", "Strategy"],
    },
    {
      title: "Restaurant Operations Optimization",
      client: "Corner Bistro",
      description:
        "Streamlined operations and implemented new POS system, reducing wait times by 35% and increasing customer satisfaction.",
      completedDate: "October 2023",
      team: 6,
      duration: "3 months",
      results: "35% faster service",
      tags: ["Operations", "Technology", "Customer Experience"],
    },
    {
      title: "Retail Store Market Expansion",
      client: "Urban Threads Boutique",
      description: "Developed market expansion strategy leading to successful opening of two new locations.",
      completedDate: "September 2023",
      team: 7,
      duration: "4 months",
      results: "2 new locations opened",
      tags: ["Market Research", "Expansion", "Retail"],
    },
    {
      title: "Tech Startup Business Plan",
      client: "EduTech Solutions",
      description: "Created comprehensive business plan and pitch deck, helping secure $500K in seed funding.",
      completedDate: "August 2023",
      team: 5,
      duration: "6 weeks",
      results: "$500K funding secured",
      tags: ["Business Planning", "Startups", "Funding"],
    },
    {
      title: "Healthcare Practice Management",
      client: "Wellness Family Clinic",
      description: "Implemented patient management system and optimized scheduling, improving efficiency by 45%.",
      completedDate: "July 2023",
      team: 4,
      duration: "8 weeks",
      results: "45% efficiency improvement",
      tags: ["Healthcare", "Management", "Technology"],
    },
    {
      title: "Manufacturing Process Improvement",
      client: "Precision Parts Inc.",
      description:
        "Analyzed and optimized manufacturing processes, reducing production costs by 20% while maintaining quality.",
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

      {/* Project Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Impact</h2>
            <p className="text-xl opacity-90">Measurable results from our consulting engagements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Projects Completed" },
              { number: "13%", label: "Client Traffic Increase" },
              { number: "95%", label: "Business Acumen Growth" },
            ].map((stat, index) => (
              <div key={index} className="animate-slide-up">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
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
