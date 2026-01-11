import React, { useState } from "react";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Handle CV download
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/Amit-resume.pdf";
    link.download = "Amit-resume.pdf";
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle contact click
  const handleContactClick = () => {
    setShowContactPopup(true);
  };

  // Handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:amitguptaaa99@gmail.com";
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="flex gap-8 items-center">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === "home" ? "text-cyan-400" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === "projects" ? "text-cyan-400" : ""
                }`}
              >
                Projects
              </button>

              <button
                onClick={handleContactClick}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === "contact" ? "text-cyan-400" : ""
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === "about" ? "text-cyan-400" : ""
                }`}
              >
                About
              </button>

              <button
                onClick={handleCVDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                <Download size={18} />
                CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
            {/* Left Side - Name and Introduction */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Amit Kumar
              </h1>
              <p className="text-2xl text-gray-300 font-light">
                Mern Stack Developer
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Passionate about creating elegant solutions to complex problems.
                I specialize in building modern web applications with
                cutting-edge technologies. With a keen eye for design and a
                commitment to clean code, I transform ideas into exceptional
                digital experiences.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/AmitKumar-990"
                  className="p-3 bg-gray-900 rounded-full hover:bg-cyan-600 transition-colors border border-cyan-900/30"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amitgupta44/"
                  className="p-3 bg-gray-900 rounded-full hover:bg-cyan-600 transition-colors border border-cyan-900/30"
                >
                  <Linkedin size={24} />
                </a>
                {/* <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-cyan-600 transition-colors border border-cyan-900/30">
                  <Mail size={24} />
                </a> */}
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex justify-end md:justify-center md:ml-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/30">
                  <img
                    src="src/assets/Me.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen py-20 bg-gradient-to-b from-gray-950 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-all overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <ExternalLink size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-white">
                          Learning Management System (LMS)
                        </h3>
                        {/* <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">● Live</span> */}
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <span>📅</span> December 2025
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          Full Stack Web App
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  A full-stack Learning Management System (LMS) designed to
                  manage online courses, users, and payments. The platform
                  supports student enrollment, course purchasing, secure
                  authentication, and role-based access for admins and users. It
                  provides a smooth and responsive learning experience with
                  real-world production-level features.
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-400">🔧</span>
                    <span className="text-gray-300 font-semibold">
                      Technologies
                    </span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm border border-cyan-900/30">
                      React
                    </span>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-900/30">
                      Node.js
                    </span>
                    <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-sm border border-green-900/30">
                      Express.js
                    </span>
                    <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm border border-cyan-900/30">
                      MongoDB
                    </span>
                    <span className="px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-lg text-sm border border-yellow-900/30">
                      JWT Authentication
                    </span>
                    <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm border border-purple-900/30">
                      Stripe / Payment Gateway
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-cyan-900/30">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a> */}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            {/* <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-all overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <ExternalLink size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-white">Project Two</h3>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">In Progress</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <span>📅</span> October 2025
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Mobile App</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  A comprehensive description of your third project. Explain what problem it solves, the key features, and the impact it has made.
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-400">🔧</span>
                    <span className="text-gray-300 font-semibold">Technologies</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm border border-cyan-900/30">React Native</span>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-900/30">Firebase</span>
                    <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm border border-cyan-900/30">TypeScript</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-cyan-900/30">
                  <a href="#" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* Work Experience Section */}
          <div className="mt-20">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </h2>

            <div className="space-y-8">
              {/* Experience 1 */}
              Coming Soon
              {/* <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center text-3xl">
                        💼
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-white">Software Development Intern</h3>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Current</span>
                        </div>
                        <div className="text-2xl text-red-400 font-semibold mb-2">String AI India</div>
                        <div className="flex items-center gap-4 text-gray-400">
                          <span className="flex items-center gap-2">
                            📅 Jan 2026 - Present
                          </span>
                          <span className="flex items-center gap-2">
                            📍 Remote
                          </span>
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Internship</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Selected for a paid internship position focusing on full-stack development and system architecture.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-400">⊚</span>
                      <span className="text-gray-300 font-semibold">Key Responsibilities</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-gray-400">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Developing and maintaining web applications using modern frameworks</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Contributing to system architecture and technical design decisions</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Collaborating with cross-functional teams on product features</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Participating in code reviews and ensuring code quality standards</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-400">Technologies</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm border border-red-900/30">React.js</span>
                      <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm border border-red-900/30">Node.js</span>
                      <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm border border-red-900/30">REST APIs</span>
                      <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm border border-red-900/30">System Design</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-cyan-900/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">2026</div>
                      <div className="text-sm text-gray-400">Started</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">Remote</div>
                      <div className="text-sm text-gray-400">Work Mode</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">Full-Stack</div>
                      <div className="text-sm text-gray-400">Development</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">PPO</div>
                      <div className="text-sm text-gray-400">Opportunity</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated developer with a passion for creating innovative
                web solutions. My journey in tech started several years ago, and
                I've been continuously learning and growing ever since.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user
                experiences that are both beautiful and functional. When I'm not
                coding, you can find me exploring new technologies or
                contributing to open-source projects.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Skills</h3>
              {[
                "React & Next.js",
                "Node.js & Express",
                "Tailwind CSS",
                "MongoDB & PostgreSQL",
                "Git & GitHub",
                "REST APIs",
                "Responsive Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-4 border border-cyan-900/30 hover:border-cyan-500/50 transition-colors"
                >
                  <p className="text-gray-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      {showContactPopup && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactPopup(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </h3>

              <p className="text-gray-400">
                Feel free to reach out to me via email
              </p>

              <div
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-lg p-6 cursor-pointer hover:border-cyan-500 transition-all group"
              >
                <div className="flex items-center justify-center gap-3 text-cyan-400 group-hover:text-cyan-300">
                  <Mail size={24} />
                  <span className="text-lg font-semibold">
                    amitguptaaa99@gmail.com
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Click on the email to open Gmail
              </p>

              <button
                onClick={() => setShowContactPopup(false)}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-900/30 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>Designed and Build by Amit Kumar</p>
        </div>
      </footer>
    </div>
  );
}
