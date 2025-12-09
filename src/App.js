import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Cloud, Award, MapPin, Calendar, Server, Palette, Smartphone, GraduationCap } from 'lucide-react';

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
            {['About', 'Education', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
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
            {['About', 'Education', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
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
  const roles = ["Aspiring QA Engineer", "Manual & API Testing Enthusiast", "Quality Advocate in Training"];

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
            Third-year undergraduate in BSc (Hons) Information Technology and Management @ University of Moratuwa, focusing on software quality assurance and testing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Semini-Thambavita-CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
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
              I'm an aspiring QA Engineer with strong manual testing fundamentals and growing expertise in API testing using Postman. I enjoy building reliable test coverage and improving product quality through structured test design and clear defect reporting.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I am strengthening automation skills with Selenium and TestNG basics, and I apply Agile testing practices to collaborate with teams. My approach blends curiosity with attention to detail to uncover issues early and advocate for user-centric quality.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Based in Panadura, Sri Lanka, I'm seeking a Quality Assurance internship to contribute to delivery-ready releases while expanding my expertise in modern testing tools and methodologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className={`flex items-center p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <MapPin size={20} className="text-blue-500 mr-3" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Panadura, Sri Lanka</span>
              </div>
              <div className={`flex items-center p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <Calendar size={20} className="text-blue-500 mr-3" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Available for QA Internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const Education = () => {
  const { isDark } = React.useContext(ThemeContext);

  const education = [
    {
      title: "B.Sc. (Hons.) in Information Technology and Management",
      place: "University of Moratuwa",
      period: "2023 - Present",
      details: [
        "Coursework across software engineering, project management, and information systems.",
        "Pursuing a QA-focused internship to apply academic learning in practice."
      ]
    },
    {
      title: "G.C.E. Advanced Level (English Medium)",
      place: "Visakha Vidyalaya, Colombo 04",
      period: "2019 - 2021",
      details: [
        "3 A's in G.C.E. A/L Examination.",
        "Island Rank: 33 | Colombo District Rank: 18."
      ]
    },
    {
      title: "G.C.E. Ordinary Level (English Medium)",
      place: "Leeds International School",
      period: "2010 - 2018",
      details: ["9 A's in G.C.E. O/L Examination."]
    }
  ];

  return (
    <section id="education" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-md'}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-xl font-semibold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <GraduationCap size={20} className="text-blue-500" />
                    {edu.title}
                  </h3>
                  <p className="text-blue-500 font-medium">{edu.place}</p>
                </div>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</span>
              </div>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                {edu.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
      title: "Testing & QA",
      skills: ["Manual Testing", "API Testing (Postman)", "Test Case Design", "Agile Testing", "Quality Assurance Practices", "Bug Reporting"],
      icon: <Award className="text-red-500" />
    },
    {
      title: "Automation & Tools",
      skills: ["Selenium (learning)", "TestNG basics", "Postman", "Git", "Jira", "Azure", "VS Code"],
      icon: <Cloud className="text-cyan-500" />
    },
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "TypeScript", "C", "HTML", "CSS"],
      icon: <Code className="text-blue-500" />
    },
    {
      title: "Web & Backend",
      skills: ["React.js", "Angular (learning)", "Node.js", "Express.js", "RESTful APIs", "Spring Boot"],
      icon: <Server className="text-purple-500" />
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Expo"],
      icon: <Smartphone className="text-indigo-500" />
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      icon: <Database className="text-orange-500" />
    },
    {
      title: "Soft Skills",
      skills: ["Analytical Thinking", "Attention to Detail", "Problem-Solving", "Communication", "Collaboration", "Adaptability", "Curiosity"],
      icon: <Palette className="text-green-500" />
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
      description: "Full-stack platform that unifies travel booking (accommodation, transport, tour guides) with real-time management and chat. Integrates Azure AI for speech-to-text, language translation, image recognition, and personalized traveler recommendations.",
      techStack: ["React.js", "Spring Boot", "RESTful APIs", "MySQL", "Tailwind CSS", "Microsoft Azure AI", "Web Sockets"],
      image: "/yamulook.png",
      contribution: "Built the itinerary builder with map integration and implemented Azure AI speech-to-text."
    },
    {
      name: "RouteRider – Public Transportation Companion",
      description: "Cross-platform mobile app to simplify public transport navigation with live schedules, route info, and personalized travel planning. Supports user authentication, favorites, advanced search, filtering, dark mode, and offline persistence.",
      techStack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Navigation", "Formik & Yup", "AsyncStorage", "React Native Paper", "DummyJSON API"],
      image: "🚌",
      contribution: "Led full mobile app development including UX flows, state management, and API integration."
    },
    {
      name: "TalentLink – Integrated ATS & LMS Platform",
      description: "Enterprise-level prototype combining applicant tracking and learning management to streamline talent acquisition and employee upskilling with responsive UI and robust validation.",
      techStack: ["Angular", "TypeScript", "Angular Material", "REST APIs", "Git"],
      image: "🧭",
      contribution: "Developed the home page and user registration module with responsive UI, form validation, and authentication."
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
                <div className="flex gap-4"></div>
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
      position: "Associate Trainee (Level 01)",
      period: "2022",
      location: "301 Galle Rd, Dehiwala – Mount Lavinia",
      bullets: [
        "Documented processes systematically for a US-based accounting and tax firm.",
        "Collaborated in a team environment to meet strict deadlines.",
        "Strengthened professional communication through client documentation and cross-functional coordination."
      ]
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
              <ul className="list-disc list-inside space-y-2">
                {exp.bullets.map((item, bulletIdx) => (
                  <li key={bulletIdx} className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {item}
                  </li>
                ))}
              </ul>
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
    { name: "CIMA Certificate Level", issuer: "Wisdom Business Academy, Colombo | 2019", icon: "📊" },
    { name: "Postman API Fundamentals Student Expert", issuer: "Postman | 2025", icon: "📮" },
    { name: "Introduction to Generative AI", issuer: "Google Cloud Skills Boost | Sep 2025 | ID: 18049125", icon: "🤖" },
    { name: "Introduction to Large Language Models", issuer: "Google Cloud Skills Boost | Sep 2025 | ID: 18513005", icon: "🤖" },
    { name: "Introduction to Programming Using Java", issuer: "Solo Learn | Sep 2025 | ID: CC-3OUNDALAI", icon: "☕" },
    { name: "ISTQB Certified Tester – Foundation Level", issuer: "In Progress | Exam Preparation", icon: "🎯" },
    { name: "SQL Course Certificate", issuer: "Solo Learn | Oct 2025", icon: "🗄️" }
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
        <Education />
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