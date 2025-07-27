import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const executiveBoard = [
    {
      name: "Shreyan Maini",
      role: "President",
      image: "/shreyan-maini.jpg",
      bio: "",
      linkedin: "#",
      email: "mainishreyan@gmail.com",
    },
    {
      name: "Aarya Bhosale",
      role: "President",
      image: "/aarya-bhosale.png",
      linkedin: "#",
      email: "aaryabhosale16@gmail.com",
    },
    {
      name: "Sanika Atmakur",
      role: "Director of Public Relations",
      image: "/sanika-atmakur.png",
      linkedin: "#",
      email: "a.sanika08@gmail.com",
    },
    {
      name: "Ian Bae",
      role: "Director of Projects",
      image: "/ian-bae.png",
      linkedin: "#",
      email: "ibae07@gmail.comg",
    },
  ]

  const consultants = [
    { name: "Jacob Liu", specialization: "Project Manager" },
    { name: "Eva Soni", specialization: "Project Manager" },
    { name: "Aadhav Pillai", specialization: "Project Manager" },
    { name: "Advik Tatavarthi", specialization: "Project Manager" },
    { name: "Riya Athalye", specialization: "Consultant" },
    { name: "Shalini Srinivas", specialization: "Consultant" },
    { name: "Vyshnavi Kommisetti", specialization: "Consultant" },
    { name: "Niyati Donthireddy", specialization: "Consultant" },
    { name: "Ridhi Maruneni", specialization: "Consultant" },
    { name: "Krish Gupta", specialization: "Consultant" },
    { name: "Adanya Karanwal", specialization: "Consultant" },
    { name: "Aditya Sheelvanth", specialization: "Consultant" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Meet Our Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate students and young professionals dedicated to making a difference in the business world through
              innovative consulting and education.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Executive Board</h2>
            <p className="text-lg text-gray-600">
              Our leadership team driving the vision and strategy of Colts Consulting Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                    <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-200">{member.role}</Badge>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href={member.linkedin} className="text-gray-400 hover:text-red-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-red-600 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Current 25-26' Consultants</h2>
            <p className="text-lg text-gray-600">
              Talented students gaining real-world experience while delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultants.map((consultant, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-slide-up">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all">
                    <span className="text-red-700 font-bold text-lg">
                      {consultant.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{consultant.name}</h3>
                  <p className="text-red-600 text-sm font-medium">{consultant.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl opacity-90 mb-8">
              Ready to gain real-world business experience while making a positive impact? We're always looking for
              passionate students to join our mission.
            </p>
            <Link href="/contact">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Role Descriptions */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
    <div className="animate-slide-up">
      <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Team Roles Overview</h2>

      <div className="space-y-8 text-gray-700 text-md leading-relaxed">
        <div>
          <h3 className="text-2xl font-semibold text-red-600 mb-2">PR Director</h3>
          <p>
            Oversees outreach, branding, and visibility. Manages social media, recruitment materials, and events, and
            maintains the website and organizational continuity during fall expansion.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-red-600 mb-2">Projects Director</h3>
          <p>
            Supports project managers by setting timelines, reviewing presentations, ensuring quality, and coaching
            teams. Tracks project progress and maintains documentation.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-red-600 mb-2">Project Managers</h3>
          <p>
            Lead projects end-to-end—source clients, define problems, assign consultant tasks, and manage timelines.
            Present midpoint and final solutions with their team to clients and CCG members.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    
  )
}
