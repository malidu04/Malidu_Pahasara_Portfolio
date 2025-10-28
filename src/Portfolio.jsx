import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone, Award, Flame } from 'lucide-react';
import anime from "animejs";
import profileImage from './malidu_pahasara.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const animationRefs = useRef(new Map());

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
      title: "AI-Based Personality Prediction Platform for Recruitment",
      description: "AI-powered platform that predicts personality traits using quizzes and historical feedback; built using ANN, RNN, and LSTM models.",
      tech: ["React.js", "Node.js", "MongoDB", "ANN", "RNN", "LSTM"],
      image: "https://images.saymedia-content.com/.image/t_share/MTkyNzEyNTUzMjQ2NTY1NTc2/the-validity-of-the-mbti-personality-test.jpg",
      github: "https://github.com/NethishaWeerakoon/Research_028.git",
    },
    {
      title: "AI Image Gallery Web Application",
      description: "Interactive gallery that categorizes images using TensorFlow.js, featuring search, filters, and tagging.",
      tech: ["React.js", "Node.js", "TensorFlow.js", "MongoDB"],
      image: "https://static.vecteezy.com/system/resources/previews/039/062/877/non_2x/ai-generated-face-of-artificial-intelligence-futuristic-modern-illustration-innovative-technologies-generative-ai-photo.jpg",
      github: "https://github.com/malidu04/AI-Image-Tagging-Gallery-MERN-ML-.git",
    },
    {
      title: "Knowledge Base Internal Wiki for Small Teams",
      description: "Internal wiki system allowing small teams to document and share knowledge with structured pages, search, and role-based access controls.",
      tech: ["React.js", "Node.js", "MongoDB", "WYSIWYG Editor", "Access Control"],
      image: "https://bloomfire.com/wp-content/uploads/2023/09/Wiki-Blocks-scaled-1.webp",
      github: "https://github.com/malidu04/Knowledge-Base-Internal-Wiki-for-Small-Teams",
      demo: ""
    },
    {
      title: "Vehicle Service Management System",
      description: "MERN application managing vehicle service bookings, histories, and authorization via RESTful APIs.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_car-service-checklist.jpg",
      github: "https://github.com/malidu04/Hotel_Management.git",
    },
    {
      title: "Hotel Management System",
      description: "MERN-based system for hotel operations including bookings, room inventory, and customer records.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "https://th.bing.com/th/id/R.0fcb9bdf78752a9d5f6abb9c933969d4?rik=ChulV6PGkNQ4HQ&riu=http%3a%2f%2fwww.vassallogroupmalta.com%2fwp-content%2fuploads%2f2017%2f10%2fBlog-4-Duties-To-be-Expected-from-Room-Service-PART-1-002.jpg&ehk=eBbSjAZSt6XxlwCniNqzvsatJzTnhvvFoyF7edIwbLw%3d&risl=&pid=ImgRaw&r=0",
      github: "https://github.com/malidu04/Hotel_Management.git",
    },
    {
      title: "Developer Productivity Tracker",
      description: "Dashboard built with React, Tailwind CSS, and Recharts.js for visualizing coding sessions, goals, and productivity metrics.",
      tech: ["React.js", "Tailwind CSS", "Recharts.js"],
      image: "https://th.bing.com/th/id/R.d5949bfde18c709b3736166fd44c45a7?rik=kuzlZmFyKMWmIA&riu=http%3a%2f%2fdevtrack.devskill.com%2fimages%2flogo%2fdevTrack.png&ehk=8T5xwTUr%2bQgwNWAPxPBhalhW0QV5qBjlypqWNar%2bePE%3d&risl=&pid=ImgRaw&r=0",
      github: "https://github.com/malidu04/Developer-Productivity-Tracker.git",
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

  
  // Initialize animation elements
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
    });
  }, []);

  // Hero Section Animation - Only runs once
  useEffect(() => {
    const heroAnimation = anime.timeline({
      autoplay: true,
      easing: 'easeOutCubic',
    });

    heroAnimation
      .add({
        targets: '.profile-image',
        scale: [0.8, 1],
        opacity: [0, 1],
        rotate: [5, 0],
        duration: 1200,
        easing: 'easeOutElastic(1, .6)'
      })
      .add({
        targets: '.hero-name span',
        opacity: [0, 1],
        translateY: [40, 0],
        delay: anime.stagger(60),
        duration: 800,
        easing: 'easeOutCubic'
      }, '-=800')
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
      }, '-=400')
      .add({
        targets: '.hero-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
      }, '-=400')
      .add({
        targets: '.hero-buttons button',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        duration: 600,
      }, '-=400')
      .add({
        targets: '.social-icons a',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 600,
      }, '-=400');

    // Continuous subtle floating animation for profile image
    anime({
      targets: '.profile-image',
      translateY: [-8, 8],
      duration: 4000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  }, []);

  // Improved scroll-triggered animations with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateEducationSection = () => {
  // Create timeline for coordinated animations
  const educationTimeline = anime.timeline({
    easing: 'easeOutCubic'
  });

  educationTimeline
    // Title animation
    .add({
      targets: '#education .section-title',
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 800
    })
    // Subtitle animation
    .add({
      targets: '#education p',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600
    }, '-=400')
    // First timeline item
    .add({
      targets: '#education .timeline-item:nth-child(1)',
      opacity: [0, 1],
      translateX: [-80, 0],
      duration: 900,
      easing: 'easeOutCubic'
    }, '-=200')
    // First timeline dot
    .add({
      targets: '#education .timeline-item:nth-child(1) > div:first-child > div',
      scale: [0, 1],
      rotate: [0, 360],
      duration: 600,
      easing: 'easeOutElastic(1, .8)'
    }, '-=600')
    // First item content
    .add({
      targets: '#education .timeline-item:nth-child(1) h3, #education .timeline-item:nth-child(1) h4',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      duration: 500
    }, '-=400')
    .add({
      targets: '#education .timeline-item:nth-child(1) p',
      opacity: [0, 1],
      translateY: [15, 0],
      delay: anime.stagger(80),
      duration: 400
    }, '-=300')
    // Second timeline item
    .add({
      targets: '#education .timeline-item:nth-child(2)',
      opacity: [0, 1],
      translateX: [-80, 0],
      duration: 900,
      easing: 'easeOutCubic'
    }, '-=200')
    // Second timeline dot
    .add({
      targets: '#education .timeline-item:nth-child(2) > div:first-child > div',
      scale: [0, 1],
      rotate: [0, 360],
      duration: 600,
      easing: 'easeOutElastic(1, .8)'
    }, '-=600')
    // Second item content
    .add({
      targets: '#education .timeline-item:nth-child(2) h3, #education .timeline-item:nth-child(2) h4',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      duration: 500
    }, '-=400')
    .add({
      targets: '#education .timeline-item:nth-child(2) p',
      opacity: [0, 1],
      translateY: [15, 0],
      delay: anime.stagger(80),
      duration: 400
    }, '-=300');
};

const animateProjectsSection = () => {
  // Title with bounce
  anime({
    targets: '#projects .section-title',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 1000,
    easing: 'easeOutElastic(1, .8)'
  });

  // Subtitle fade-in
  anime({
    targets: '#projects p',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: 400,
    easing: 'easeOutCubic'
  });

  // Pop-up animation from different directions
  const directions = [
    { x: -100, y: -100 }, { x: 0, y: -150 }, { x: 100, y: -100 },
    { x: -100, y: 100 }, { x: 0, y: 150 }, { x: 100, y: 100 }
  ];

  document.querySelectorAll('#projects .project-card').forEach((card, index) => {
    const direction = directions[index % directions.length];
    
    anime({
      targets: card,
      opacity: [0, 1],
      translateX: [direction.x, 0],
      translateY: [direction.y, 0],
      rotate: [anime.random(-15, 15), 0],
      scale: [0.3, 1],
      delay: index * 200 + 600,
      duration: 1000,
      easing: 'easeOutElastic(1, .6)'
    });
  });

  // Content fade-in after cards
  anime({
    targets: '#projects .project-card > div > *',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(80, { start: 1200 }),
    duration: 600,
    easing: 'easeOutCubic'
  });
};
const animateFooterSection = () => {
  // Main footer content slide-up
  anime({
    targets: 'footer > div > div:first-child',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutCubic'
  });

  // Social icons staggered bounce
  anime({
    targets: 'footer a',
    opacity: [0, 1],
    scale: [0, 1.2, 1],
    rotate: [180, 0],
    delay: anime.stagger(200, { start: 500 }),
    duration: 800,
    easing: 'easeOutElastic(1, .8)'
  });

  // Copyright text fade-in with glow
  anime({
    targets: 'footer > div > div:last-child',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: 1000,
    easing: 'easeOutCubic',
    begin: function() {
      // Add continuous subtle pulse to copyright
      anime({
        targets: 'footer > div > div:last-child p',
        opacity: [0.8, 1],
        duration: 2000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
      });
    }
  });
};

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          // Only animate if not already animated
          if (!animationRefs.current.get(sectionId)) {
            switch (sectionId) {
              case 'about':
                animateAboutSection();
                break;
              case 'skills':
                animateSkillsSection();
                break;
              case 'education':
                animateEducationSection();
                break;
              case 'projects':
                animateProjectsSection();
                break;
              case 'contact':
                animateContactSection();
                break;
            }
            animationRefs.current.set(sectionId, true);
          }
        }
      });
    }, observerOptions);

    const sections = [aboutRef, skillsRef, educationRef, projectsRef, contactRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const animateAboutSection = () => {
    anime({
      targets: '#about .section-title',
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 800,
      easing: 'easeOutCubic'
    });

    anime({
      targets: '#about p',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200),
      duration: 800,
      easing: 'easeOutCubic'
    });
  };

  const animateSkillsSection = () => {
    anime({
      targets: '#skills .section-title',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .6)'
    });

    anime({
      targets: '#skills .skill-card',
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.9, 1],
      delay: anime.stagger(100, { grid: [3, 2], from: 'first' }),
      duration: 600,
      easing: 'easeOutCubic'
    });
  };

  const animateContactSection = () => {
  // Title animation with bounce
  anime({
    targets: '#contact .section-title',
    opacity: [0, 1],
    scale: [0.8, 1],
    translateY: [-30, 0],
    duration: 1000,
    easing: 'easeOutElastic(1, .8)'
  });

  // Subtitle fade-in
  anime({
    targets: '#contact p',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: 400,
    easing: 'easeOutCubic'
  });

  // Floating wave animation for contact cards
  anime({
    targets: '#contact .contact-card',
    opacity: [0, 1],
    translateY: [100, 0],
    scale: [0.8, 1],
    delay: anime.stagger(300, { start: 600 }),
    duration: 1000,
    easing: 'easeOutElastic(1, .6)',
    complete: function() {
      // Continuous floating animation
      anime({
        targets: '#contact .contact-card',
        translateY: [-10, 10],
        duration: 3000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: anime.stagger(200)
      });
    }
  });

  // Icon bounce animation
  anime({
    targets: '#contact .contact-card svg',
    scale: [0, 1.2, 1],
    rotate: [180, 0],
    delay: anime.stagger(200, { start: 1000 }),
    duration: 800,
    easing: 'easeOutElastic(1, .8)'
  });

  // Text content fade-in
  anime({
    targets: '#contact .contact-card h3, #contact .contact-card p',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(100, { start: 1200 }),
    duration: 600,
    easing: 'easeOutCubic'
  });

  // Button animation
  anime({
    targets: '#contact a',
    opacity: [0, 1],
    scale: [0.8, 1],
    translateY: [30, 0],
    delay: 1600,
    duration: 800,
    easing: 'easeOutElastic(1, .8)'
  });
};

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
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
  }, [hasScrolled]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode
      ? 'bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950'
      : 'bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    cardBg: isDarkMode ? 'bg-emerald-900/20' : 'bg-white/80',
    border: isDarkMode ? 'border-emerald-800' : 'border-emerald-200',
    hoverBorder: isDarkMode ? 'hover:border-emerald-400' : 'hover:border-emerald-600',
    navBg: isDarkMode ? 'bg-emerald-950/90' : 'bg-white/90',
    textSecondary: isDarkMode ? 'text-white-200' : 'text-black-700',
    textMuted: isDarkMode ? 'text-emerald-300' : 'text-emerald-600',
    accent: isDarkMode ? 'text-emerald-400' : 'text-emerald-600',
    accentBg: isDarkMode ? 'bg-emerald-900/30' : 'bg-emerald-100/50',
    accentBorder: isDarkMode ? 'border-emerald-400/30' : 'border-emerald-600/30'
  };

  const nameLetters = "Malidu Pahasara".split('');

  return (
    <div className={`min-h-screen overflow-hidden relative font-sans antialiased transition-colors duration-500 ${themeClasses.text}`}>
      {/* Subtle Animated Background */}
      <div className={`fixed inset-0 ${themeClasses.background} transition-colors duration-500 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                isDarkMode
                  ? 'bg-gradient-to-br from-emerald-500/20 via-green-600/10 to-transparent'
                  : 'bg-gradient-to-br from-emerald-400/10 via-green-500/5 to-transparent'
              } blur-2xl animate-float`}
              style={{
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                left: `${20 + i * 20}%`,
                top: `${10 + i * 25}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse Highlight */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-150 ease-out mix-blend-plus-lighter"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)'
            : 'radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, rgba(5, 150, 105, 0) 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 ${themeClasses.navBg} backdrop-blur-md border-b ${themeClasses.border} transition-all duration-500 ${
        hasScrolled ? 'py-3' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold ${themeClasses.accent} tracking-tight transition-all duration-300 ${
              hasScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              Malidu Pahasara
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      isDarkMode ? 'hover:text-emerald-400' : 'hover:text-emerald-600'
                    } ${
                      activeSection === item.toLowerCase()
                        ? themeClasses.accent
                        : themeClasses.textSecondary
                    }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'} rounded-full`}></div>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'hover:bg-emerald-400/10 text-emerald-400'
                    : 'hover:bg-emerald-600/10 text-emerald-600'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto z-10">
          <div className="mb-8 relative">
            <div className="relative group w-80 h-80 mx-auto">
              <img
                src={profileImage}
                alt="Malidu Pahasara"
                className={`profile-image w-80 h-80 rounded-full object-cover border-[6px] ${
                  isDarkMode ? 'border-emerald-900' : 'border-emerald-100'
                } shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110`}
              />

              {/* Green gradient glow */}
              <div
                className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 blur-[60px] opacity-0 group-hover:opacity-70 transition-opacity duration-700`}
              ></div>

              {/* Theme accent aura */}
              <div
                className={`absolute inset-0 rounded-full ${
                  isDarkMode ? 'bg-emerald-700/30' : 'bg-emerald-400/20'
                } blur-[40px] opacity-0 group-hover:opacity-80 transition-opacity duration-700`}
              ></div>
            </div>
          </div>

          <h1 className="hero-name text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {nameLetters.map((letter, index) => (
              <span key={index} className="inline-block" style={{ opacity: 0 }}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          <h2 className="hero-title text-3xl md:text-4xl mb-6 font-medium text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)] animate-pulse">
            Software Engineer
          </h2>

          <p className="hero-description text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balck-200">
            Passionate Software Engineer with a BSc (Hons) in Information Technology, specializing in full-stack development. Skilled in designing and building scalable, user-focused web applications using modern technologies like React, Node.js, and MongoDB.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              style={{ opacity: 0 }}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              style={{ opacity: 0 }}
            >
              Contact Me
            </button>
          </div>

          <div className="social-icons flex justify-center space-x-6">
            {[
              { href: "https://github.com/malidu04", icon: <Github className="w-6 h-6" /> },
              { href: "https://www.linkedin.com/in/malidu-pahasara-89611527b", icon: <Linkedin className="w-6 h-6" /> },
              { href: "mailto:Malidupahasara48@gmail.com", icon: <Mail className="w-6 h-6" /> }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-all duration-300 transform hover:scale-110`}
                style={{ opacity: 0 }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${themeClasses.textMuted} animate-bounce`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-6 relative z-10">
  <div className="max-w-7xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className={`section-title text-3xl font-bold mb-4 ${themeClasses.accent}`} style={{ opacity: 0 }}>
        Technical Skills
      </h2>
      <p className={`max-w-2xl mx-auto ${themeClasses.textMuted}`}>
        A collection of technologies and methodologies I've worked with
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(skills).map(([category, skillList]) => (
        <div
          key={category}
          className={`skill-card group p-6 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}
          style={{ opacity: 0 }}
        >
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-full ${themeClasses.accentBg} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
              {category.includes('Programming') && <Code className={`w-6 h-6 ${themeClasses.accent}`} />}
              {category.includes('Frontend') && <Globe className={`w-6 h-6 ${themeClasses.accent}`} />}
              {category.includes('Backend') && <Smartphone className={`w-6 h-6 ${themeClasses.accent}`} />}
              {category.includes('Databases') && <Database className={`w-6 h-6 ${themeClasses.accent}`} />}
              {category.includes('Tools') && <Award className={`w-6 h-6 ${themeClasses.accent}`} />}
              {!category.includes('Programming') && !category.includes('Frontend') && !category.includes('Backend') && !category.includes('Databases') && !category.includes('Tools') && <Flame className={`w-6 h-6 ${themeClasses.accent}`} />}
            </div>
            <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors duration-300">
              {category}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {skillList.map((skill) => (
              <div
                key={skill}
                className={`relative p-3 rounded-lg border ${themeClasses.accentBorder} ${themeClasses.accentBg} transition-all duration-300 hover:bg-emerald-400/20 hover:border-emerald-400/50 group/item`}
              >
                <span className={`text-sm font-medium ${themeClasses.textSecondary} group-hover/item:text-emerald-300 transition-colors duration-300`}>
                  {skill}
                </span>
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 to-green-500/0 group-hover/item:from-emerald-400/10 group-hover/item:to-green-500/10 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Education Section */}
      <section ref={educationRef} id="education" className="py-20 px-6 relative z-10">
  <div className="max-w-4xl mx-auto">
    <div className="mb-12">
      <h2
        className={`section-title text-3xl font-bold mb-4 ${themeClasses.accent}`}
        style={{ opacity: 0 }}
      >
        Education
      </h2>
      <p className={`${themeClasses.textMuted}`}>
        My academic journey and achievements
      </p>
    </div>

    <div className="space-y-8">
      {/* University Education */}
      <div
        className={`timeline-item relative pl-8 border-l-2 ${themeClasses.accentBorder}`}
        style={{ opacity: 0 }}
      >
        <div
          className={`absolute left-0 w-4 h-4 rounded-full ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center -translate-x-1/2`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
            }`}
          ></div>
        </div>

        <div className="mb-4 ml-6">
          <h3 className="text-xl font-semibold mb-1">
            Bachelor of Science (Hons) in Information Technology
          </h3>
          <h4 className={`${themeClasses.accent} mb-2`}>
            Sri Lanka Institute of Information Technology (SLIIT), Malabe
          </h4>
          <div
            className={`text-sm ${themeClasses.textMuted} ${themeClasses.accentBg} px-3 py-1 rounded-full inline-block`}
          >
            May 2021 – September 2025
          </div>
        </div>

        <div className="space-y-2 ml-6">
          <div
            className={`flex items-start ${themeClasses.textSecondary}`}
          >
            <div
              className={`w-1.5 h-1.5 mt-2 rounded-full ${
                isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
              } mr-3 flex-shrink-0`}
            ></div>
            <p className="text-sm">
              GPA: <span className="font-medium">2.67</span>
            </p>
          </div>
          <div
            className={`flex items-start ${themeClasses.textSecondary}`}
          >
            <div
              className={`w-1.5 h-1.5 mt-2 rounded-full ${
                isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
              } mr-3 flex-shrink-0`}
            ></div>
            <p className="text-sm">
              Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming,
              Database Management Systems, Software Engineering, Web Development, Computer Networks
            </p>
          </div>
          <div
            className={`flex items-start ${themeClasses.textSecondary}`}
          >
            <div
              className={`w-1.5 h-1.5 mt-2 rounded-full ${
                isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
              } mr-3 flex-shrink-0`}
            ></div>
            <p className="text-sm">
              Completed all semesters with strong academic performance
            </p>
          </div>
          <div
            className={`flex items-start ${themeClasses.textSecondary}`}
          >
            <div
              className={`w-1.5 h-1.5 mt-2 rounded-full ${
                isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
              } mr-3 flex-shrink-0`}
            ></div>
            <p className="text-sm">
              Actively participated in coding competitions and technical workshops
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Level Education */}
      <div
        className={`timeline-item relative pl-8 border-l-2 ${themeClasses.accentBorder}`}
        style={{ opacity: 0 }}
      >
        <div
          className={`absolute left-0 w-4 h-4 rounded-full ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center -translate-x-1/2`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
            }`}
          ></div>
        </div>

        <div className="mb-4 ml-6">
          <h3 className="text-xl font-semibold mb-1">
            GCE Advanced Level – Mathematics Stream
          </h3>
          <h4 className={`${themeClasses.accent} mb-2`}>
            St. John’s College, Nugegoda
          </h4>
          <div
            className={`text-sm ${themeClasses.textMuted} ${themeClasses.accentBg} px-3 py-1 rounded-full inline-block`}
          >
            Completed
          </div>
        </div>

        <div className="space-y-2 ml-6">
          <div
            className={`flex items-start ${themeClasses.textSecondary}`}
          >
            <div
              className={`w-1.5 h-1.5 mt-2 rounded-full ${
                isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'
              } mr-3 flex-shrink-0`}
            ></div>
            <p className="text-sm">
              Subjects: Mathematics, Physics, Chemistry – 3C Passes
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className={`section-title text-3xl font-bold mb-4 ${themeClasses.accent}`} style={{ opacity: 0 }}>
              Featured Projects
            </h2>
            <p className={`max-w-2xl mx-auto ${themeClasses.textMuted}`}>
              A selection of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card group rounded-xl overflow-hidden border ${themeClasses.border} ${themeClasses.cardBg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]`}
                style={{ opacity: 0 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h3>
                  <p className={`${themeClasses.textSecondary} mb-3 text-sm leading-relaxed line-clamp-3`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
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
      <section ref={contactRef} id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className={`section-title text-3xl font-bold mb-4 ${themeClasses.accent}`} style={{ opacity: 0 }}>
              Get In Touch
            </h2>
            <p className={`max-w-2xl mx-auto ${themeClasses.textMuted}`}>
              I'm currently looking for new opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className={`contact-card p-6 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] text-center`} style={{ opacity: 0 }}>
              <Mail className={`w-8 h-8 mx-auto mb-4 ${themeClasses.accent}`} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className={themeClasses.textMuted}>Malidupahasara48@gmail.com</p>
            </div>

            <div className={`contact-card p-6 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] text-center`} style={{ opacity: 0 }}>
              <Phone className={`w-8 h-8 mx-auto mb-4 ${themeClasses.accent}`} />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className={themeClasses.textMuted}>076-961-3158</p>
            </div>

            <div className={`contact-card p-6 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] text-center`} style={{ opacity: 0 }}>
              <MapPin className={`w-8 h-8 mx-auto mb-4 ${themeClasses.accent}`} />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className={themeClasses.textMuted}>Pannipitiya, Sri Lanka</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:Malidupahasara48@gmail.com"
              className={`inline-block px-8 py-3 rounded-lg font-medium ${themeClasses.accent} ${themeClasses.accentBg} border ${themeClasses.accentBorder} hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105`}
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${themeClasses.border} ${themeClasses.cardBg} backdrop-blur-sm relative z-10`}>
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
              <a href="https://github.com/malidu04" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300 transform hover:scale-110`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/malidu-pahasara-89611527b" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300 transform hover:scale-110`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Malidupahasara48@gmail.com" className={`${themeClasses.textMuted} hover:${themeClasses.accent} transition-colors duration-300 transform hover:scale-110`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className={`mt-6 pt-6 border-t ${themeClasses.border} text-center`}>
            <p className={`text-sm ${themeClasses.textMuted}`}>
              © {new Date().getFullYear()} Malidu Pahasara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;