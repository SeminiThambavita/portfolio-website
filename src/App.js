import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Cloud, Award, MapPin, Calendar, Server, Palette, Smartphone } from 'lucide-react';

// Theme context for dark/light mode
const ThemeContext = React.createContext();

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-md') : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Semini Kaushalya Thambavita</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-200 hover:text-blue-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-gray-300' : 'text-gray-700'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${isDark ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  const { isDark } = React.useContext(ThemeContext);
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Aspiring Full-Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500/30' : 'bg-blue-400/30'}`}></div>
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Semini Thambavita</span> 👩‍💻
          </h1>
          
          <div className="h-12 mb-6">
            <div className="text-xl sm:text-2xl font-medium text-blue-500 dark:text-blue-400 transition-all duration-500">
              {roles[textIndex]}
            </div>
          </div>
          
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Third year undergraduate following BSc (Hons) in Information Technology and Management @ University of Moratuwa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Download className="mr-2" size={20} />
              Download CV
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-200"
            >
              <Code className="mr-2" size={20} />
              View Projects
            </button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className={`mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative -mt-8">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
                <img 
                  src="/profile picoriginal.jpg" 
                  alt="Semini Kaushalya Thambavita" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                Available for Internships
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a dedicated undergraduate following BSc (Hons) Information Technology and Management degree at the University of Moratuwa, 
              Sri Lanka. With a strong foundation in full-stack development, I'm passionate about creating innovative software 
              solutions that address real-world challenges.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              My expertise spans across modern web technologies including React.js, Node.js, Spring Boot, and cloud platforms like AWS and Azure. 
              I have hands-on experience in both frontend and backend development, with a particular interest in building scalable applications 
              and integrating AI services. I'm committed to continuous learning and staying updated with the latest technologies.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Based in Sri Lanka, I'm actively seeking internship opportunities to apply my technical skills in a professional 
              environment and contribute to meaningful projects that drive digital transformation in Sri Lanka's tech industry.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className={`flex items-center p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <MapPin size={20} className="text-blue-500 mr-3" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Panadura, Sri Lanka</span>
              </div>
              <div className={`flex items-center p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <Calendar size={20} className="text-blue-500 mr-3" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Available for Internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const Skills = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "C"],
      icon: <Code className="text-blue-500" />
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "Tailwind CSS", "Bootstrap"],
      icon: <Palette className="text-green-500" />
    },
    {
      title: "Mobile Development",
      skills: ["React Native"],
      icon: <Smartphone className="text-indigo-500" />
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot"],
      icon: <Server className="text-purple-500" />
    },
    {
      title: "Database",
      skills: ["Firebase", "MongoDB", "MySQL"],
      icon: <Database className="text-orange-500" />
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Azure", "Git"],
      icon: <Cloud className="text-cyan-500" />
    },
    {
      title: "Concepts",
      skills: ["OOP", "Data Structures & Algorithms", "SOLID Principles", "SDLC", "System Design"],
      icon: <Award className="text-red-500" />
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Technical Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} shadow-md`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-100'}`}>
                  {category.icon}
                </div>
                <h3 className={`text-lg font-semibold ml-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${isDark ? 'bg-blue-900/40 text-blue-300 hover:bg-blue-800' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  const projects = [
    {
      name: "Yamu – Centralized Travel Application",
      description: "A full-stack web platform designed to unify travel booking in Sri Lanka by integrating accommodation, transport, and tour guide reservations within a single interface. The system leverages Microsoft Azure AI services to provide speech-to-text, language translation, image recognition, and personalized recommendations for travelers. Real-time booking management, notifications, and chat functionality connect travelers with local service providers, promoting sustainable tourism.",
      techStack: ["React.js", "Spring Boot", "RESTful APIs", "MySQL", "Tailwind CSS", "Microsoft Azure AI", "Web Sockets"],
      image: "🌍",
      contribution: "Developed the itinerary builder (both frontend and backend) and integrated Azure speech-to-text functionality"
    },
    {
      name: "TenantFlow – Apartment Maintenance Facilitation Application",
      description: "A centralized web-based application designed to streamline the reporting, tracking, resolution, and payment of maintenance-related issues in residential apartment complexes in Sri Lanka. Features include AI-powered incident categorization, secure payment processing, real-time notifications, and comprehensive reporting system. (Ongoing Project)",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "OpenAI GPT API", "PayHere", "Socket.io"],
      image: "/apartment.png",
      contribution: "Full-stack development with focus on user interface, payment integration, and real-time communication features"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Featured Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${isDark ? 'bg-gray-900 shadow-xl' : 'bg-gray-50 shadow-lg'}`}>
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>{project.name}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                {project.contribution && (
                  <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <p className={`text-sm font-medium ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>My Contribution:</p>
                    <p className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>{project.contribution}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-2 py-1 rounded text-xs font-medium ${isDark ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className={`flex items-center font-medium transition-colors duration-200 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    <Github className="mr-2" size={18} />
                    View Code
                  </button>
                  <button className={`flex items-center font-medium transition-colors duration-200 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  const experiences = [
    {
      company: "GSK Partners",
      position: "Trainee Associate (Level I)",
      period: "2022",
      location: "301 Galle Rd, Dehiwala – Mount Lavinia",
      description: "US-based Accounting and Tax Firm - Gained valuable experience in professional work environment and business operations."
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Professional Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-gray-800 shadow-lg' : 'bg-gray-50 shadow-md'}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>{exp.company}</h3>
                  <p className="text-blue-500 font-medium">{exp.position}</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.location}</p>
                </div>
                <span className={`text-sm mt-2 md:mt-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</span>
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section Component
const Certifications = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  const certifications = [
    { name: "Sololearn Java Beginner", issuer: "Sololearn", icon: "☕" },
    { name: "Sololearn Java Intermediate", issuer: "Sololearn", icon: "☕" },
    { name: "HackerRank Problem Solving", issuer: "HackerRank", icon: "💻" },
    { name: "Introduction to Google's Generative AI", issuer: "Google", icon: "🤖" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", icon: "☁️" },
    { name: "Postman API Badge", issuer: "Postman", icon: "📮" },
    { name: "Azure AZ-900 Fundamentals", issuer: "Microsoft", icon: "⚡" }
  ];

  return (
    <section id="certifications" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Certifications & Achievements</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-gray-700 hover:bg-gray-650' : 'bg-white hover:bg-gray-50'} shadow-md`}
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>{cert.name}</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className={`rounded-xl p-8 shadow-lg ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-gray-50'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Let's Connect!</h3>
              <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always open to discussing new opportunities, internships, interesting projects, or just having a chat about technology.
              </p>
              <div className="space-y-4">
                <a href="mailto:thambavitasemini2002@gmail.com" className={`flex items-center transition-colors duration-200 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
                  <Mail className="mr-3" size={20} />
                  thambavitasemini2002@gmail.com
                </a>
                <a href="tel:+94752339505" className={`flex items-center transition-colors duration-200 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
                  <MapPin className="mr-3" size={20} />
                  +94 752339505
                </a>
                <a href="http://linkedin.com/in/semini-kaushalya-thambavita-128b42237" target="_blank" rel="noopener noreferrer" className={`flex items-center transition-colors duration-200 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
                  <Linkedin className="mr-3" size={20} />
                  LinkedIn Profile
                </a>
                <a href="https://github.com/SeminiThambavita" target="_blank" rel="noopener noreferrer" className={`flex items-center transition-colors duration-200 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
                  <Github className="mr-3" size={20} />
                  GitHub Profile
                </a>
                <div className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <MapPin className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>No.12/2, Udahamulla, Panadura, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white border border-gray-300'}`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white border border-gray-300'}`}
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white border border-gray-300'}`}
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-800 text-gray-300'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>
          © {new Date().getFullYear()} Semini Kaushalya Thambavita. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
        
        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          .animate-float {
            animation: float linear infinite;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;