import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const ref = useRef();

  const y = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      id: 1,
      title: "QuizMaster – Quiz Web Application",
      description: "Built a secure full-stack quiz application with 5+ subjects and 50+ dynamic questions with real-time scoring and performance analytics.",
      technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
      githubUrl: "http://localhost/quiztask/index.php",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Travel Bucket List – Web Application",
      description: "Developed a full-stack application to manage travel destinations with image upload, notes, and visited status tracking.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://travelbucket12.netlify.app/",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Movie Review Site – Frontend",
      description: "Built a movie site with a sleek, responsive React front-end featuring interactive animations.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://moviesite-bysadhik.vercel.app/",
      image: "https://uicookies.com/wp-content/uploads/2020/07/Jupiter-3.jpg",
      category: "Frontend"
    },
    {
      id: 4,
      title: "USB Port Control Tool",
      description: "Developed a secure, responsive frontend for a USB port control tool with cybersecurity features.",
      technologies: ["HTML", "CSS", "Bootstrap", "Python"],
      githubUrl: "https://usbphysicalsecurity-bysadhik.netlify.app/index.html",
      image: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Reqkqf1qILOYmckRT5y1B9pL-hZuBWl1FbXTrWnoiGw=",
      category: "Cybersecurity"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio website with modern UI/UX and animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://sadhik-portfolio.netlify.app/",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Authentication System",
      description: "Secure authentication system with multi-factor authentication and encryption.",
      technologies: ["React", "Node.js", "JWT", "MongoDB"],
      githubUrl: "#",
      image: "https://media.istockphoto.com/id/2151954310/photo/shield-security-network-technology-wire-frame-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=dXCjIveEjelzAWqLkt3Hu6LXYhBSyH5vJAcCXhr06k8=",
      category: "Full Stack"
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen overflow-x-hidden">
      {/* Clean Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>

        {/* Subtle floating shapes */}
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 60 + 30;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-orange-100/40"
              style={{
                width: size,
                height: size,
                left: Math.random() * 100 + 'vw',
                top: Math.random() * 100 + 'vh',
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Minimal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl"
        style={{ y, opacity }}
        ref={ref}
      >
        <motion.div
          className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg border border-orange-200"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="px-6 py-3 flex justify-between items-center">
            <motion.h1
              className="text-xl font-bold text-orange-600"
              whileHover={{ scale: 1.05 }}
            >
              Shaik Sadhik
            </motion.h1>

            <button
              className="md:hidden focus:outline-none border border-orange-300 rounded-lg px-3 py-2 hover:bg-orange-50 transition-all"
              onClick={toggleMenu}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ?
                  <span className="block text-lg text-orange-600">×</span> :
                  <span className="block text-lg text-orange-600">☰</span>
                }
              </motion.div>
            </button>

            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === item.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'hover:bg-orange-100 text-gray-700'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg m-3 p-4 shadow-lg border border-orange-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${activeSection === item.id
                        ? 'bg-orange-500 text-white'
                        : 'hover:bg-orange-100 text-gray-700'
                        }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative"
      >
        {/* Popup - Top between Nav and Photo */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-green-200/80 backdrop-blur-md px-6 py-2 rounded-lg shadow-lg border border-green-300 text-green-900 font-semibold tracking-wide"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌟 Welcome to my <span className="text-green-700">Portfolio</span>
          </motion.span>
        </motion.div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center max-w-6xl">
          {/* Left Side (Profile Image) */}
          <motion.div
            className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow Behind Image */}
              <motion.div
                className="absolute -inset-4 bg-orange-200/30 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Profile Image */}
              <div className="bg-red w-84 h-84 flex items-center justify-center overflow-hidden border-2 border-orange-300 shadow-lg relative z-10 rounded-xl">
                <img
                  src="profile3.png"
                  alt="Shaik Sadhik"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side (Details) */}
          <motion.div
            className="lg:w-1/2 lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-200">
              <motion.h1
                className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Cybersecurity Specialist &
                <span className="text-orange-600"> Full Stack Developer</span>
              </motion.h1>

              <motion.div
                className="w-16 h-1 bg-orange-500 rounded mb-4"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />

              <motion.h2
                className="text-lg mb-4 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Building secure, scalable digital solutions
              </motion.h2>

              <motion.p
                className="text-base mb-6 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Passionate Full Stack Web Developer with expertise in creating
                responsive web applications, developing REST APIs, and implementing
                cybersecurity measures.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.a
                  href="#contact"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all inline-flex items-center justify-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-all text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-orange-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800">About Me</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-bold mb-3 text-orange-600">Education</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800">B.Tech in CSE - Cybersecurity</h4>
                    <p className="text-gray-600 text-sm">Sreenidhi Institute of Science and Technology</p>
                    <p className="text-gray-600 text-sm">2022 - 2026 (Expected)</p>
                    <p className="text-orange-600 font-medium text-sm">GPA: 8.94/10</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Python Programming - IIT Madras</li>
                      <li>• Java (Basic) - HackerRank</li>
                      <li>• Introduction to Cyber Security - Cisco</li>
                      <li>• VAPT - Supraja Technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  I'm a cybersecurity-focused Computer Science student with expertise in full-stack development,
                  secure application design, and vulnerability assessment. My passion lies in creating robust,
                  secure digital solutions that withstand modern cyber threats.
                </p>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  With hands-on experience in technologies like React, Node.js, Python, and various security tools,
                  I bridge the gap between development and security.
                </p>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-600 mb-2">Cybersecurity Intern at Supraja Technologies</h4>
                  <p className="text-gray-700 text-sm">
                    Worked on cybersecurity projects, developing a secure frontend for a USB port control tool and
                    actively participating in team discussions to deliver high-quality results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-xl font-bold">{`{}`}</div>
                <h3 className="text-lg font-semibold text-gray-800">Programming</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>C</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Java</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Python</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>JavaScript</li>
              </ul>
            </motion.div>

            {/* Frontend */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-xl font-bold">&lt;/&gt;</div>
                <h3 className="text-lg font-semibold text-gray-800">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>HTML5, CSS3, JS</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>React.js</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Bootstrap, Tailwind</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Responsive Design</li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-xl">⚙</div>
                <h3 className="text-lg font-semibold text-gray-800">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Node.js, Express</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>PHP</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>RESTful APIs</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Authentication</li>
              </ul>
            </motion.div>

            {/* Database */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-xl">🗄</div>
                <h3 className="text-lg font-semibold text-gray-800">Database</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>MySQL</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>MongoDB</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Database Design</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>SQL Queries</li>
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-xl">🛠</div>
                <h3 className="text-lg font-semibold text-gray-800">Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Git & GitHub</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Postman</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Netlify, Vercel</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>MongoDB Compass</li>
              </ul>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-xl">🛡</div>
                <h3 className="text-lg font-semibold text-gray-800">Cybersecurity</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Network Security</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Vulnerability Assessment</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Penetration Testing</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Secure Coding</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Featured Projects</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-orange-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="h-40 overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      className="text-orange-500 hover:text-orange-700 text-sm font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84c.85.01 1.71.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
                      </svg>
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demoUrl || "#"}
                      className="text-orange-500 hover:text-orange-700 text-sm font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-orange-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Get In Touch</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded"></div>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-orange-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:flex">
              {/* Contact Info */}
              <div className="lg:w-2/5 p-6 bg-orange-50/50">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 text-lg">📱</div>
                    <div>
                      <p className="text-orange-600 text-sm font-medium">Phone</p>
                      <span className="text-gray-700 font-medium">+91 9618961646</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 text-lg">✉</div>
                    <div>
                      <p className="text-orange-600 text-sm font-medium">Email</p>
                      <span className="text-gray-700 font-medium">sadhikshaik9618@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 text-lg">💼</div>
                    <div>
                      <p className="text-orange-600 text-sm font-medium">LinkedIn</p>
                      <span className="text-gray-700 font-medium text-sm">linkedin.com/in/sadhik-shaik-1878b8312</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 text-lg">🔗</div>
                    <div>
                      <p className="text-orange-600 text-sm font-medium">GitHub</p>
                      <span className="text-gray-700 font-medium">github.com/shaiksadhik96</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4 text-gray-800">Connect With Me</h4>
                  <div className="flex space-x-3">
                    <motion.a
                      href="#"
                      className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors w-10 h-10 flex items-center justify-center font-bold"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      in
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors w-10 h-10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors w-10 h-10 flex items-center justify-center text-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      @
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Name</label>
                    <motion.input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 text-gray-800"
                      placeholder="Your name"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
                    <motion.input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 text-gray-800"
                      placeholder="Your email"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
                    <motion.textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 bg-white border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 text-gray-800 resize-none"
                      placeholder="Your message"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors w-full shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-100/50 text-gray-700 py-8 border-t border-orange-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0 text-center lg:text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Shaik Sadhik</h2>
              <p className="text-gray-600">Cybersecurity Specialist & Full Stack Developer</p>
            </div>
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-orange-200 mt-6 pt-6 text-center">
            <p className="text-gray-600">© 2025 Shaik Sadhik. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg z-40"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Subtle floating elements */}
      <motion.div
        className="fixed top-1/2 left-6 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="bg-white/70 p-2 rounded-lg shadow-md text-xl">🚀</div>
      </motion.div>

      <motion.div
        className="fixed top-1/3 right-6 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="bg-white/70 p-2 rounded-lg shadow-md text-xl">💡</div>
      </motion.div>
    </div>
  );
}