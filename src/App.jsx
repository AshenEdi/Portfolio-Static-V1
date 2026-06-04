import { useState, useEffect } from 'react';
import profileImage from './assets/hero.png';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, drag-and-drop boards, and team features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather application with forecasts, interactive maps, and severe weather alerts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    link: '#',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media engagement, audience insights, and content performance.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects, skills, and professional experience with modern design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    description: 'Secure banking application with transaction history, bill payments, and budget tracking features.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    tags: ['React Native', 'Node.js', 'JWT'],
    link: '#',
  },
];

// Experience data
const experiences = [
  {
    id: 1,
    company: 'Tech Solutions Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing microservices architecture.',
  },
  {
    id: 2,
    company: 'Digital Agency Co.',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Built responsive websites and web applications for various clients using modern JavaScript frameworks.',
  },
  {
    id: 3,
    company: 'Startup Hub',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Developed user interfaces and interactive features for SaaS products, collaborating with design and backend teams.',
  },
];

// Education & Certifications data
const education = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    year: '2018',
    type: 'education',
  },
  {
    id: 2,
    degree: 'Bachelor of Software Engineering',
    school: 'UC Berkeley',
    year: '2016',
    type: 'education',
  },
  {
    id: 3,
    degree: 'AWS Solutions Architect Professional',
    school: 'Amazon Web Services',
    year: '2023',
    type: 'certification',
  },
  {
    id: 4,
    degree: 'Google Cloud Professional Developer',
    school: 'Google',
    year: '2022',
    type: 'certification',
  },
  {
    id: 5,
    degree: 'Meta Front-End Developer Certificate',
    school: 'Meta',
    year: '2021',
    type: 'certification',
  },
];

// Skills data
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js',
  'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
  'GraphQL', 'REST APIs', 'Git', 'Tailwind CSS', 'Next.js'
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Portfolio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === item
                      ? 'text-blue-500'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              {/* Theme Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
            {/* Mobile theme toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'bg-yellow-500 text-gray-900' 
                    : 'bg-gray-800 text-white'
                }`}
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-200/50'} blur-3xl`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${darkMode ? 'bg-purple-900/20' : 'bg-purple-200/50'} blur-3xl`}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <p className={`text-lg mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Hello, I'm</p>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                John Doe
              </h1>
              <p className={`text-xl sm:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl mx-auto lg:mx-0`}>
                Full Stack Developer specializing in building exceptional digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    darkMode 
                      ? 'border-2 border-white text-white hover:bg-white hover:text-gray-900' 
                      : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className={`w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-white'} shadow-2xl`}>
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>5+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
            <div className={`w-20 h-1 mx-auto rounded-full bg-blue-500`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate Full Stack Developer with over 6 years of experience in building web applications. 
                I love creating elegant solutions to complex problems and am constantly learning new technologies.
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-8 rounded-2xl`}>
              <div className="text-center">
                <p className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>6+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Years Experience</p>
              </div>
              <div className="text-center">
                <p className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>50+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Projects Completed</p>
              </div>
              <div className="text-center">
                <p className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>30+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Happy Clients</p>
              </div>
              <div className="text-center">
                <p className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>5+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
            <div className={`w-20 h-1 mx-auto rounded-full bg-blue-500`}></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-white hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</p>
                  </div>
                  <span className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Projects</h2>
            <div className={`w-20 h-1 mx-auto rounded-full bg-blue-500`}></div>
            <p className={`mt-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Here are some of the projects I've worked on, showcasing my skills and experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education & Certifications</h2>
            <div className={`w-20 h-1 mx-auto rounded-full bg-blue-500`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
              <div className="space-y-6">
                {education.filter(e => e.type === 'education').map((item) => (
                  <div
                    key={item.id}
                    className={`p-6 rounded-xl ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.degree}
                        </h4>
                        <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.school}</p>
                      </div>
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-green-100 text-green-700'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
              <div className="space-y-6">
                {education.filter(e => e.type === 'certification').map((item) => (
                  <div
                    key={item.id}
                    className={`p-6 rounded-xl ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.degree}
                        </h4>
                        <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.school}</p>
                      </div>
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
            <div className={`w-20 h-1 mx-auto rounded-full bg-blue-500`}></div>
            <p className={`mt-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Have a project in mind? Let's work together to create something amazing
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                <svg className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-xl font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 John Doe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
