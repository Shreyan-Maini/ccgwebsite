import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

        {/* Floating Logo */}
        <div className="absolute top-20 md:top-24 flex justify-center w-full animate-fade-in-up">
          <img
            src="/CCG%20Logo.png"
            alt="Colt Consulting Group Logo"
            className="w-48 md:w-64 lg:w-72 h-auto"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-48 md:mt-56 lg:mt-64">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Empowering</span>
              <br />
              <span className="text-gray-900">Tomorrow's Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help underrepresented businesses thrive while educating the next generation about the world of business
              through hands-on consulting experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent mx-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We empower the next generation of business leaders by blending education with real-world consulting,
              helping students grow while making professional support accessible to local and underrepresented businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Community Impact",
                description:
                  "We offer no-cost consulting to small and underrepresented businesses, giving them access to tailored strategies that boost visibility and growth.",
              },
              {
                icon: BookOpen,
                title: "Youth Education",
                description:
                  "Our student consultants gain experience in data analysis, marketing, and strategy while building teamwork and leadership skills on real client projects.",
              },
              {
                icon: Target,
                title: "Strategic Solutions",
                description:
                  "Each project focuses on solving specific business challenges—whether it’s optimizing operations, launching a new product, or increasing digital engagement.",
              },
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                description:
                  "We foster long-term relationships with clients and help students understand how lasting business value is created through consistent, strategic effort.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-slide-up border-0 shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <item.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "14+", label: "Businesses Helped" },
              { number: "50+", label: "Students Trained" },
              { number: "20+", label: "Projects Completed" },
            ].map((stat, index) => (
              <div key={index} className="animate-slide-up">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a business looking for support or a student eager to learn, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Work With Us
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
