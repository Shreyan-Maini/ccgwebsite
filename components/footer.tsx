import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CCG</span>
              </div>
              <span className="font-bold text-xl gradient-text">Colts Consulting Group</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering underrepresented businesses and educating youth about the world of business
              through innovative consulting solutions.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>troycoltsconsultinggroup@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>248-891-3501</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Troy, MI</span>
              </div>
            </div>
          </div>

          <div className="md:col-start-4 md:col-span-1 md:justify-self-end">
            <h3 className="font-semibold text-gray-900 mb-4 text-right">Quick Links</h3>
            <ul className="space-y-2"> 
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-red-600 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-red-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Updated Bottom Section --- */}
        <div className="border-t mt-8 pt-8 text-center text-gray-600 space-y-2">
          <p>&copy; 2024 Colts Consulting Group. All rights reserved.</p>

          <p className="text-sm">
            Made by{" "}
            <a
              href="https://www.patadigitalservices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              PATA Digital Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
