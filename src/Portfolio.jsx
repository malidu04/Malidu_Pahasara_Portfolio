import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone, Award, Flame } from 'lucide-react';
import profileImage from './malidu_pahasara.png';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lavaBlobs, setLavaBlobs] = useState([]);

  const skills = {
    'Programming Languages': ['JavaScript', 'Java', 'Python', 'C++'],
    'Frontend Development': ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'Tailwind CSS'],
    'Backend Development': ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Tools & Platforms': ['Git', 'GitHub', 'Figma', 'VS Code', 'Heroku', 'Netlify'],
    'Other': ['Data Structures', 'Algorithms', 'Agile Methodologies']
  };

  const projects = [
    {
      title: 'AI Chatbot System',
      description: 'A real-time AI-powered chat application for internal communication, built using the MERN stack and integrated with an AI model for intelligent responses.',
      image: '/ai-chatbot.png',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI Model'],
      github: 'https://github.com/malidu04/ai-chatbot-system',
      demo: 'https://ai-chatbot-system.netlify.app'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce website with user authentication, product management, shopping cart functionality, and payment gateway integration.',
      image: '/ecommerce.png',
      tech: ['React', 'Spring Boot', 'MySQL', 'Stripe'],
      github: 'https://github.com/malidu04/e-commerce-platform',
      demo: ''
    },
    {
      title: 'Real Estate Management System',
      description: 'An application to manage properties, listings, and client inquiries for a real estate agency, featuring an intuitive dashboard and search filters.',
      image: '/real-estate.png',
      tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/malidu04/real-estate-system',
      demo: ''
    }
  ];

  const education = [
    {
      degree: 'B.Sc. (Hons) in Information Technology',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2022 - Present',
      achievements: [
        'Specializing in Software Engineering.',
        'Actively participated in hackathons and coding competitions.',
        'Maintained a GPA of 3.8+.'
      ]
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'ESOFT Metro Campus',
      period: '2021 - 2022',
      achievements: [
        'Completed a comprehensive diploma program covering foundational IT concepts and programming.',
        'Developed a final project using Java.'
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Corrected: Generate a larger number of lava blobs for a more dynamic effect
    const generateLavaBlobs = () => {
      const blobs = [];
      for (let i = 0; i < 15; i++) {
        blobs.push({
          id: i,
          size: Math.random() * 300 + 150,
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: Math.random() * 0.3 + 0.1,
          delay: Math.random() * 15,
          opacity: Math.random() * 0.08 + 0.02
        });
      }
      setLavaBlobs(blobs);
    };

    generateLavaBlobs();

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode
      ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
      : 'bg-gradient-to-br from-stone-50 via-gray-50 to-stone-50',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-white/90',
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    hoverBorder: isDarkMode ? 'hover:border-amber-400' : 'hover:border-amber-600',
    navBg: isDarkMode ? 'bg-gray-950/80' : 'bg-white/90',
    textSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-500' : 'text-gray-500',
    // Corrected: Updated accent colors for a more intense lava theme
    accent: isDarkMode ? 'text-orange-400' : 'text-amber-600',
    accentBg: isDarkMode ? 'bg-red-900/10' : 'bg-amber-600/10',
    accentBorder: isDarkMode ? 'border-orange-500/30' : 'border-amber-600/30'
  };

  return (
    <div className={`min-h-screen overflow-hidden relative font-sans antialiased transition-colors duration-500 ${themeClasses.text}`}>
      {/* Lava Background with more intense colors */}
      <div className={`fixed inset-0 ${themeClasses.background} transition-colors duration-500 overflow-hidden`}>
        {lavaBlobs.map(blob => (
          <div
            key={blob.id}
            className={`absolute rounded-full ${isDarkMode
              ? 'bg-gradient-to-br from-orange-600/20 via-red-800/10 to-transparent'
              : 'bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent'
              }`}
            style={{
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              opacity: blob.opacity,
              animation: `lavaFloat ${20 / blob.speed}s ease-in-out infinite`,
              animationDelay: `${blob.delay}s`
            }}
          />
        ))}
      </div>

      {/* Lava Mouse Highlight */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0) 70%)'
            : 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, rgba(245,158,11,0) 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes lavaFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(2%, -2%) scale(1.02); }
          50% { transform: translate(-2%, 2%) scale(1.04); }
          75% { transform: translate(2%, 2%) scale(1.02); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes subtleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 5px rgba(255, 100, 0, 0.2), 0 0 10px rgba(255, 100, 0, 0.1);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 15px rgba(255, 100, 0, 0.6), 0 0 20px rgba(255, 100, 0, 0.4);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-subtle-bounce {
          animation: subtleBounce 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .animate-delay-100 {
          animation-delay: 100ms;
        }

        .animate-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 ${themeClasses.navBg} backdrop-blur-md border-b ${themeClasses.border} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold ${themeClasses.accent} tracking-tight`}>
              Malidu Pahasara
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative text-sm font-medium transition-all duration-300 ${isDarkMode ? 'hover:text-orange-400' : 'hover:text-amber-600'
                      } ${activeSection === item.toLowerCase()
                        ? themeClasses.accent
                        : themeClasses.textSecondary
                      }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-red-700/50' : themeClasses.accentBg}`}></div>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode
                  ? 'hover:bg-orange-400/10 text-orange-400'
                  : 'hover:bg-amber-600/10 text-amber-600'
                  }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`text-center max-w-4xl mx-auto z-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8 relative animate-fade-in">
            <div className="relative group">
              <img
                src={profileImage}
                alt="Malidu Pahasara"
                className="w-100 h-100 mx-auto mb-6 rounded-full object-cover border-4 border-transparent group-hover:border-orange-400/30 transition-all duration-500"
              />
              {/* Lava-themed glow effect */}
              <div className={`absolute inset-0 w-40 h-40 mx-auto rounded-full ${isDarkMode ? 'bg-red-700/20' : themeClasses.accentBg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow`}></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in animate-delay-100">
            <span className={`${themeClasses.accent}`}>
              Malidu Pahasara
            </span>
          </h1>

          <h2 className={`text-2xl md:text-3xl ${themeClasses.textSecondary} mb-6 font-light animate-fade-in animate-delay-200`}>
            Software Engineering Student
          </h2>

          <p className={`text-lg ${themeClasses.textMuted} mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-300`}>
            Information Technology student with strong full-stack development skills, seeking opportunities to contribute to innovative software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animate-delay-400">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 ${themeClasses.accentBg} border ${themeClasses.accentBorder} rounded-lg font-medium ${themeClasses.accent} hover:bg-opacity-20 transition-all duration-300`}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border ${themeClasses.border} rounded-lg font-medium hover:${themeClasses.accentBg} transition-all duration-300`}
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in animate-delay-500">
            <a href="https://github.com/malidu04" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/malidu-pahasara-89611527b" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:Malidupahasara48@gmail.com" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce ${themeClasses.textMuted}`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>
      <section id="download-cv" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-4 ${themeClasses.accent}`}>
            Download My CV
          </h2>
          <p className={`${themeClasses.textMuted} mb-6`}>
            Get a copy of my latest curriculum vitae from Google Drive.
          </p>
          <a
            href=" https://drive.google.com/file/d/18UH0O85BWKyCTQz-nmYOiiMtb5hq-YDC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 font-medium rounded-lg ${themeClasses.accentBg} ${themeClasses.accentBorder} border hover:opacity-90 transition`}
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-16 pb-8 border-b ${themeClasses.border}`}>
            <h2 className={`text-3xl font-bold mb-4 ${themeClasses.accent}`}>
              About Me
            </h2>
            <div className="space-y-4">
              <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                I am an Information Technology student with a strong foundation in full-stack development, currently pursuing my Bachelor's degree at SLIIT. My passion lies in creating efficient, scalable software solutions that solve real-world problems.
              </p>
              <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                With experience in the MERN stack, Spring Boot, and modern development practices, I bring both technical expertise and creative problem-solving to every project. I'm particularly interested in the intersection of AI and web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${themeClasses.accent}`}>
              Technical Skills
            </h2>
            <p className={`max-w-2xl mx-auto ${themeClasses.textMuted}`}>
              A collection of technologies and methodologies I've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className={`p-6 rounded-xl border ${themeClasses.border} ${themeClasses.accentBg} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${themeClasses.accentBg} flex items-center justify-center mr-4 animate-pulse-glow`}>
                    {category.includes('Programming') && <Code className={`w-5 h-5 ${themeClasses.accent}`} />}
                    {category.includes('Frontend') && <Globe className={`w-5 h-5 ${themeClasses.accent}`} />}
                    {category.includes('Backend') && <Smartphone className={`w-5 h-5 ${themeClasses.accent}`} />}
                    {category.includes('Databases') && <Database className={`w-5 h-5 ${themeClasses.accent}`} />}
                    {category.includes('Tools') && <Award className={`w-5 h-5 ${themeClasses.accent}`} />}
                    {category.includes('Software') && <Flame className={`w-5 h-5 ${themeClasses.accent}`} />}
                    {category.includes('AI') && <Award className={`w-5 h-5 ${themeClasses.accent}`} />}
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full ${themeClasses.textSecondary} ${themeClasses.accentBg} border ${themeClasses.accentBorder}`}
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

      {/* Education Section */}
      <section id="education" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${themeClasses.accent}`}>
              Education
            </h2>
            <p className={`${themeClasses.textMuted}`}>
              My academic journey and achievements
            </p>
          </div>

          <div className="space-y-12">
            {/* Degree */}
            <div className={`relative pl-10 pb-10 border-l ${themeClasses.border}`}>
              <div
                className={`absolute left-0 w-6 h-6 rounded-full ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center -translate-x-1/2 animate-pulse-glow`}
              >
                <div className={`w-2 h-2 rounded-full ${themeClasses.accent}`}></div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  BSc (Hons) in Information Technology
                </h3>
                <h4 className={`${themeClasses.accent} mb-2`}>
                  Sri Lanka Institute of Information Technology (SLIIT)
                </h4>
                <div
                  className={`text-sm ${themeClasses.textMuted} ${themeClasses.accentBg} px-3 py-1 rounded-full inline-block`}
                >
                  July 2022 – September 2025
                </div>
              </div>

              <div className="space-y-3">
                <div className={`flex items-start ${themeClasses.textSecondary}`}>
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${themeClasses.accent} mr-3 flex-shrink-0`}
                  ></div>
                  <p>Specializing in Information Technology.</p>
                </div>
                <div className={`flex items-start ${themeClasses.textSecondary}`}>
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${themeClasses.accent} mr-3 flex-shrink-0`}
                  ></div>
                  <p>Expected to graduate in September 2025.</p>
                </div>
              </div>
            </div>

            {/* Advanced Level */}
            <div className={`relative pl-10 pb-10 border-l ${themeClasses.border}`}>
              <div
                className={`absolute left-0 w-6 h-6 rounded-full ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center -translate-x-1/2 animate-pulse-glow`}
              >
                <div className={`w-2 h-2 rounded-full ${themeClasses.accent}`}></div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  G.C.E. Advanced Level Examination
                </h3>
                <h4 className={`${themeClasses.accent} mb-2`}>
                  St. John’s College, Nugegoda
                </h4>
                <div
                  className={`text-sm ${themeClasses.textMuted} ${themeClasses.accentBg} px-3 py-1 rounded-full inline-block`}
                >
                  2019 – 2021
                </div>
              </div>

              <div className="space-y-3">
                <div className={`flex items-start ${themeClasses.textSecondary}`}>
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${themeClasses.accent} mr-3 flex-shrink-0`}
                  ></div>
                  <p>Followed [Your Subject Stream, e.g., Physical Science / Biological Science / Commerce / Arts].</p>
                </div>
                <div className={`flex items-start ${themeClasses.textSecondary}`}>
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${themeClasses.accent} mr-3 flex-shrink-0`}
                  ></div>
                  <p>Successfully completed the examination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${themeClasses.accent}`}>
              Featured Projects
            </h2>
            <p className={`max-w-2xl mx-auto ${themeClasses.textMuted}`}>
              A selection of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Based Personality Prediction Platform for Recruitment",
                description:
                  "AI-powered platform that predicts personality traits using quizzes and historical feedback; built using ANN, RNN, and LSTM models.",
                tech: ["React.js", "Node.js", "MongoDB", "ANN", "RNN", "LSTM"],
                image: "https://images.saymedia-content.com/.image/t_share/MTkyNzEyNTUzMjQ2NTY1NTc2/the-validity-of-the-mbti-personality-test.jpg",
                github: "https://github.com/NethishaWeerakoon/Research_028.git",

              },
              {
                title: "AI Image Gallery Web Application",
                description:
                  "Interactive gallery that categorizes images using TensorFlow.js, featuring search, filters, and tagging.",
                tech: ["React.js", "Node.js", "TensorFlow.js", "MongoDB"],
                image: "https://static.vecteezy.com/system/resources/previews/039/062/877/non_2x/ai-generated-face-of-artificial-intelligence-futuristic-modern-illustration-innovative-technologies-generative-ai-photo.jpg",
                github: "https://github.com/malidu04/AI-Image-Tagging-Gallery-MERN-ML-.git",

              },
              {
                title: "Knowledge Base Internal Wiki for Small Teams",
                description:
                  "Internal wiki system allowing small teams to document and share knowledge with structured pages, search, and role-based access controls.",
                tech: ["React.js", "Node.js", "MongoDB", "WYSIWYG Editor", "Access Control"],
                image: "https://bloomfire.com/wp-content/uploads/2023/09/Wiki-Blocks-scaled-1.webp",
                github: "https://github.com/malidu04/Knowledge-Base-Internal-Wiki-for-Small-Teams",
                demo: ""
              },
              {
                title: "Vehicle Service Management System",
                description:
                  "MERN application managing vehicle service bookings, histories, and authorization via RESTful APIs.",
                tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
                image: "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_car-service-checklist.jpg",
                github: "https://github.com/malidu04/Hotel_Management.git",

              },
              {
                title: "Hotel Management System",
                description:
                  "MERN-based system for hotel operations including bookings, room inventory, and customer records.",
                tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
                image: "https://th.bing.com/th/id/R.0fcb9bdf78752a9d5f6abb9c933969d4?rik=ChulV6PGkNQ4HQ&riu=http%3a%2f%2fwww.vassallogroupmalta.com%2fwp-content%2fuploads%2f2017%2f10%2fBlog-4-Duties-To-be-Expected-from-Room-Service-PART-1-002.jpg&ehk=eBbSjAZSt6XxlwCniNqzvsatJzTnhvvFoyF7edIwbLw%3d&risl=&pid=ImgRaw&r=0",
                github: "https://github.com/malidu04/Hotel_Management.git",

              },
              {
                title: "Developer Productivity Tracker",
                description:
                  "Dashboard built with React, Tailwind CSS, and Recharts.js for visualizing coding sessions, goals, and productivity metrics.",
                tech: ["React.js", "Tailwind CSS", "Recharts.js"],
                image: "https://th.bing.com/th/id/R.d5949bfde18c709b3736166fd44c45a7?rik=kuzlZmFyKMWmIA&riu=http%3a%2f%2fdevtrack.devskill.com%2fimages%2flogo%2fdevTrack.png&ehk=8T5xwTUr%2bQgwNWAPxPBhalhW0QV5qBjlypqWNar%2bePE%3d&risl=&pid=ImgRaw&r=0",
                github: "https://github.com/malidu04/Developer-Productivity-Tracker.git",

              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden border ${themeClasses.border} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className={`${themeClasses.textSecondary} mb-4 text-sm leading-relaxed`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded ${themeClasses.textSecondary} ${themeClasses.accentBg} border ${themeClasses.accentBorder}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm ${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center text-sm ${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${themeClasses.accent}`}>
              Get In Touch
            </h2>
            <p className={`max-w-2xl mx-auto ${themeClasses.textMuted}`}>
              I'm currently looking for new opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`p-6 rounded-xl border ${themeClasses.border} ${themeClasses.accentBg} transition-all duration-300 hover:shadow-lg text-center animate-pulse-glow`}>
              <Mail className={`w-8 h-8 mx-auto mb-4 ${themeClasses.accent}`} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className={themeClasses.textMuted}>Malidupahasara48@gmail.com</p>
            </div>

            <div className={`p-6 rounded-xl border ${themeClasses.border} ${themeClasses.accentBg} transition-all duration-300 hover:shadow-lg text-center animate-pulse-glow`}>
              <Phone className={`w-8 h-8 mx-auto mb-4 ${themeClasses.accent}`} />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className={themeClasses.textMuted}>076-961-3158</p>
            </div>

            <div className={`p-6 rounded-xl border ${themeClasses.border} ${themeClasses.accentBg} transition-all duration-300 hover:shadow-lg text-center animate-pulse-glow`}>
              <MapPin className={`w-8 h-8 mx-auto mb-4 ${themeClasses.accent}`} />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className={themeClasses.textMuted}>Pannipitiya, Sri Lanka</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:Malidupahasara48@gmail.com"
              className={`inline-block px-8 py-3 rounded-lg font-medium ${themeClasses.accent} ${themeClasses.accentBg} border ${themeClasses.accentBorder} hover:bg-opacity-20 transition-all duration-300`}
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${themeClasses.border} ${themeClasses.cardBg} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className={`text-xl font-bold ${themeClasses.accent}`}>
                Malidu Pahasara
              </div>
              <p className={`text-sm ${themeClasses.textMuted}`}>
                Software Engineering Student
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/malidu04" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/malidu-pahasara-89611527b" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Malidupahasara48@gmail.com" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t ${themeClasses.border} text-center">
            <p className={`text-sm ${themeClasses.textMuted}`}>
              © {new Date().getFullYear()} Malidu Pahasara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;