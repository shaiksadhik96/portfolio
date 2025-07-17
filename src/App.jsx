import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg border-b border-cyan-400/20">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Portfolio</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none border border-cyan-400/30 rounded px-2 py-1" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <span className="block text-xl">✕</span> : 
              <span className="block text-xl">☰</span>
            }
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400">Home</a>
            <a href="#about" className="font-medium hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400">About</a>
            <a href="#skills" className="font-medium hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400">Skills</a>
            <a href="#projects" className="font-medium hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400">Projects</a>
            <a href="#contact" className="font-medium hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-6 py-4 shadow-lg border-t border-cyan-400/20">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="py-2 hover:text-cyan-400 transition-colors font-medium border-l-4 border-transparent hover:border-cyan-400 pl-2" onClick={toggleMenu}>Home</a>
              <a href="#about" className="py-2 hover:text-cyan-400 transition-colors font-medium border-l-4 border-transparent hover:border-cyan-400 pl-2" onClick={toggleMenu}>About</a>
              <a href="#skills" className="py-2 hover:text-cyan-400 transition-colors font-medium border-l-4 border-transparent hover:border-cyan-400 pl-2" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="py-2 hover:text-cyan-400 transition-colors font-medium border-l-4 border-transparent hover:border-cyan-400 pl-2" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="py-2 hover:text-cyan-400 transition-colors font-medium border-l-4 border-transparent hover:border-cyan-400 pl-2" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-cyan-400/20">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Shaik Sadhik</h1>
              <div className="w-16 h-1 bg-cyan-400 mb-6"></div>
              <h2 className="text-xl md:text-2xl mb-6 text-cyan-100">B.Tech CSE - Cybersecurity Student</h2>
              <p className="text-lg mb-8 text-gray-300">Aspiring Cybersecurity Professional with strong fundamentals in web development and database management.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors inline-flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  Contact Me <span className="ml-2 text-lg">→</span>
                </a>
                <a href="#projects" className="border-2 border-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors text-center">View Projects</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="bg-gray-800 rounded-full w-64 h-64 flex items-center justify-center overflow-hidden border-4 border-cyan-400/30 shadow-2xl relative z-10">
                <img
                  src="profile.jpg"
                  alt="Shaik Sadhik"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
              <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-700/50 rounded-2xl shadow-xl p-8 border border-cyan-400/20">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="bg-gray-700 p-6 rounded-xl border border-cyan-400/20">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Education</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-white">B.Tech in CSE - Cybersecurity</h4>
                    <p className="text-gray-300">Sreenidhi Institute of Science and Technology</p>
                    <p className="text-gray-300">3rd Year (Current)</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a third-year B.Tech student specializing in CSE-Cybersecurity at Sreenidhi Institute of Science and Technology. My academic focus combines strong technical foundations with specialized knowledge in cybersecurity principles and practices.
                </p>
                <p className="text-lg text-gray-300 mb-2 leading-relaxed">
                  I'm passionate about developing secure applications and systems. My education has equipped me with skills in web development, database management, and network security. I continuously work on projects that challenge me to implement security best practices while creating functional applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-white">Skills & Technologies</h2>
              <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Frontend */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-400/20 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-400/10 text-cyan-400 p-3 rounded-xl mr-4 text-2xl font-bold">&lt;/&gt;</div>
                <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  JavaScript / React.js
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Bootstrap
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Responsive Design
                </li>
              </ul>
            </div>
            
            {/* Backend */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-400/20 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-400/10 text-cyan-400 p-3 rounded-xl mr-4 text-2xl font-bold">⚙️</div>
                <h3 className="text-xl font-semibold text-white">Backend Development</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  PHP
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  RESTful APIs
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Server Management
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Authentication Systems
                </li>
              </ul>
            </div>
            
            {/* Database */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-400/20 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-400/10 text-cyan-400 p-3 rounded-xl mr-4 text-2xl font-bold">🗄️</div>
                <h3 className="text-xl font-semibold text-white">Database</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  MySQL
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Database Design
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  SQL Queries
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  Data Modeling
                </li>
              </ul>
            </div>
            
            {/* Cybersecurity */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-400/20 transform hover:-translate-y-1 transition-transform md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-400/10 text-cyan-400 p-3 rounded-xl mr-4 text-2xl font-bold">🛡️</div>
                <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Network Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Vulnerability Assessment
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Security Principles
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Secure Coding Practices
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Authentication & Authorization
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Web Security
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Encryption Techniques
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Security Testing
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Threat Modeling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-white">Projects</h2>
              <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-gray-700 rounded-2xl shadow-xl overflow-hidden border border-cyan-400/20 hover:shadow-2xl transition-shadow">
              <div className="h-56 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-6xl">🛡️</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-white">Secure Authentication System</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A multi-factor authentication system with password policies, account lockout mechanisms, and secure session management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gray-700 rounded-2xl shadow-xl overflow-hidden border border-cyan-400/20 hover:shadow-2xl transition-shadow">
              <div className="h-56 bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                <div className="text-white text-6xl">🗄️</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-white">Student Management Portal</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A web-based portal for managing student information, courses, and academic performance with role-based access control.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-700 rounded-2xl shadow-xl overflow-hidden border border-cyan-400/20 hover:shadow-2xl transition-shadow">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <div className="text-white text-6xl">&lt;/&gt;</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-white">E-Commerce Frontend</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A responsive e-commerce website interface with product listings, cart functionality, and user authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                  <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
              <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-800 text-gray-300 rounded-2xl shadow-2xl overflow-hidden border border-cyan-400/20">
            <div className="md:flex">
              <div className="md:w-2/5 p-8 bg-gradient-to-br from-gray-800 to-gray-700 text-white">
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-3 rounded-lg mr-4 text-xl">📱</div>
                    <div>
                      <p className="text-cyan-300 text-sm mb-1">Phone</p>
                      <span className="font-medium">+91 961896164</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-3 rounded-lg mr-4 text-xl">✉️</div>
                    <div>
                      <p className="text-cyan-300 text-sm mb-1">Email</p>
                      <span className="font-medium">sadhikshaik9618@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-3 rounded-lg mr-4 text-xl">💼</div>
                    <div>
                      <p className="text-cyan-300 text-sm mb-1">LinkedIn</p>
                      <span className="font-medium">linkedin.com/in/shaiksadhik</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-3 rounded-lg mr-4 text-xl">🔗</div>
                    <div>
                      <p className="text-cyan-300 text-sm mb-1">GitHub</p>
                      <span className="font-medium">https://github.com/shaiksadhik96</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-cyan-400/10 text-white p-3 rounded-lg hover:bg-cyan-400/20 transition-colors w-12 h-12 flex items-center justify-center font-bold border border-cyan-400/30">
                      in
                    </a>
                    <a href="#" className="bg-cyan-400/10 text-white p-3 rounded-lg hover:bg-cyan-400/20 transition-colors w-12 h-12 flex items-center justify-center border border-cyan-400/30">
                      GH
                    </a>
                    <a href="#" className="bg-cyan-400/10 text-white p-3 rounded-lg hover:bg-cyan-400/20 transition-colors w-12 h-12 flex items-center justify-center border border-cyan-400/30">
                      ✉️
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form>
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 font-medium" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 font-medium" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 font-medium" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors w-full shadow-lg shadow-cyan-500/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Shaik Sadhik</h2>
              <p className="text-gray-500">B.Tech CSE - Cybersecurity Student</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors text-xl p-2 border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:border-cyan-400">
                in
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-xl p-2 border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:border-cyan-400">
                GH
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-xl p-2 border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:border-cyan-400">
                ✉️
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Shaik Sadhik. All rights reserved.</p>
            <nav className="flex space-x-6 mt-4 md:mt-0">
              <a href="#home" className="text-gray-500 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-500 hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-500 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-500 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}