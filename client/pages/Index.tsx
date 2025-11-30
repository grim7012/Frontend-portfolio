import { useEffect, useState } from "react";
import { FiSend, FiMail, FiLinkedin, FiGithub, FiCode, FiDatabase, FiBarChart2, FiCpu, FiShield, FiAward, FiBook, FiBriefcase } from "react-icons/fi";
import Hyperspeed from "./Hyperspeed";
import DecryptedText from './DecryptedText';
import FlowingMenu from './FlowingMenu';


const MinimalNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <span 
          className="text-white text-lg font-light tracking-wide transition-all duration-1000 hover:tracking-widest"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          Harshita Chelani
        </span>

        <div className="flex items-center gap-6">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-400 hover:text-cyan-300 transition-all duration-500 text-sm font-light hover:glow-cyan-text"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5 text-gray-400">
          <a href="https://linkedin.com/in/harshita-chelani-8a92a2272/" className="hover:text-cyan-300 transition-all duration-700 transform hover:scale-110 hover:glow-cyan">
            <FiLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/grim7012" className="hover:text-cyan-300 transition-all duration-700 transform hover:scale-110 hover:glow-cyan">
            <FiGithub className="text-xl" />
          </a>
          <a href="mailto:harshch002@gmail.com" className="hover:text-cyan-300 transition-all duration-700 transform hover:scale-110 hover:glow-cyan">
            <FiMail className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-5 mt-10 bg-black relative overflow-hidden">
      <div 
        className={`w-full h-[calc(110vh-10px)] rounded-[40px] bg-gradient-to-br from-cyan-900/20 to-purple-900/20 shadow-2xl border border-cyan-500/30 overflow-hidden relative transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          boxShadow: '0 0 50px rgba(6, 182, 212, 0.3), 0 0 100px rgba(147, 51, 234, 0.2)'
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/Harshita.png" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Enhanced overlay for better text readability */}
          </div>

        {/* Main Content Area */}
        <div className="relative z-10 w-full h-full flex flex-col">
          
          {/* Top Section - Empty space for background image */}
          <div className="flex-1" />

          {/* Bottom Right Corner Text */}
          <div className="absolute bottom-20 right-16 text-right space-y-4">
            <div className="mb-6">
              <DecryptedText 
                text="Hello,"
                speed={80}
                maxIterations={25}
                animateOn="view"
                className="text-5xl font-bold text-white mb-4 tracking-wider"
                encryptedClassName="text-5xl font-bold text-white mb-4 tracking-wider"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(147, 51, 234, 0.6)'
                }}
              />
            </div>
            
            <DecryptedText 
                text="I'm Harshita"
                speed={80}
                maxIterations={25}
                animateOn="view"
                className="text-5xl font-bold text-white mb-4 tracking-wider"
                encryptedClassName="text-5xl font-bold text-white mb-4 tracking-wider"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(147, 51, 234, 0.6)'
                }}
              />
            
            <div className="space-y-3">
              
            </div>
          </div>
        </div>

        {/* Neon Accents */}
        <div className="absolute bottom-10 left-10 w-2 h-24 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full blur-sm opacity-60" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full blur-sm opacity-50" />
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    { name: "React.js", level: 90, icon: FiCode, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 85, icon: FiCode, color: "from-blue-400 to-cyan-500" },
    { name: "Python", level: 88, icon: FiCpu, color: "from-yellow-400 to-orange-500" },
    { name: "Data Analysis", level: 92, icon: FiBarChart2, color: "from-green-400 to-cyan-500" },
    { name: "SQL", level: 89, icon: FiDatabase, color: "from-purple-400 to-pink-500" },
    { name: "Power BI", level: 87, icon: FiBarChart2, color: "from-orange-400 to-red-500" }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-5 relative">
      <div className="w-full h-[calc(100vh-10px)] rounded-[40px] bg-black overflow-hidden relative border border-cyan-500/30">
        {/* Hyperspeed on the right */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 600,
              roadWidth: 40,
              islandWidth: 2,
              lanesPerRoad: 20,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}
          />
        </div>

        {/* Professional Summary on the left */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex items-center pl-14">
          <div className="max-w-2xl space-y-8">
            {/* Section Title */}
            <div>
              <h2 
                className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
                }}
              >
                PROFESSIONAL SUMMARY
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full glow-cyan" />
            </div>

            {/* Summary Text */}
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                Full-stack developer and data analyst with expertise in React, TypeScript, Python, 
                and data visualization tools. Passionate about creating immersive web 
                experiences and data-driven solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} glow-cyan`} />
                    <span className="text-cyan-300 text-sm" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated CTA Button */}
            <button className="relative mt-8 group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Button content */}
              <div className="relative px-8 py-4 bg-black rounded-2xl leading-none flex items-center gap-3">
                <span 
                  className="text-cyan-300 font-bold tracking-wider group-hover:text-cyan-200 transition-colors duration-300"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  START WORKING TOGETHER
                </span>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </button>
          </div>
        </div>

        {/* Neon Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
    </section>
  );
};

// Experience Section Component with Cyberpunk Theme
const ProjectsSection = () => {
  const projects = [
    
    {
      name: "Taxing Solutions Platform",
      description: "React frontend for finance website with real-time tax calculations",
      skills: ["React", "JavaScript", "Tailwind", "API Integration"],
      image: "/taxing.png",
      link: "https://taxingsolutions.in/",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Enchanya Candles",
      description: "Landing page for a Lucknow based handmade candle business with e-commerce features",
      skills: ["React.js", "Three.js", "Tailwind", "Framer Motion"],
      image: "/Enchanya.png",
      link: "https://drive.google.com/file/d/1BWxCVeSPQvOIw_RiyfN121Iv8U9Awl0o/view?usp=sharing",
      gradient: "from-white to-yellow-300"
    },
    {
      name: "Lie-to-Survive Game",
      description: "A real-time multiplayer social deduction game where players must give hints, spot the liar, and survive!",
      skills: ["React", "Node.js", "Socket.io", "Game Development"],
      image: "/Survive.png",
      link: "https://lie-to-survive-game.vercel.app/",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Bank Marketing Analysis",
      description: "Power BI dashboard with SQL preprocessing for banking campaign optimization",
      skills: ["Power BI", "SQL", "Data Analysis", "Dashboard"],
      image: "/dashboard.png",
      link: "https://github.com/grim7012/Bank-Marketing-Campaign-PowerBI",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "QAutobot (Axtria)",
      description: "Saas-based intelligent automation platform for data quality and analytics in pharma",
      skills: ["React", "TypeScript", "Python", "Data Automation"],
      image: "/QAutobot.jpeg",
      link: "#",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-5">
      <div className="w-full h-[calc(100vh-10px)] rounded-[40px] bg-gradient-to-br from-cyan-900/10 to-purple-900/10 shadow-2xl border border-cyan-500/30 overflow-hidden relative backdrop-blur-sm">
        <div className="w-full h-full flex">
          {/* Fixed Left Section - Vertical Title */}
          <div className="w-1/4 h-full flex items-center justify-center relative">
            <div 
              className="absolute transform -rotate-90 origin-center"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              <h2 
                className="text-7xl font-bold bg-gradient-to-b from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  textShadow: '0 0 40px rgba(6, 182, 212, 0.7), 0 0 80px rgba(147, 51, 234, 0.5)',
                  lineHeight: '0.9',
                  rotate: '-90deg'
                }}
              >
                MAJOR PROJECTS
              </h2>
            </div>
            
            {/* Neon Accent Line */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full blur-sm" />
          </div>

          {/* Scrollable Right Section */}
          <div className="w-3/4 h-full overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-2 gap-6 p-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-black/60 rounded-2xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 hover:shadow-glow-cyan"
                  style={{
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)'
                  }}
                >
                  {/* Project Image */}
<div className="h-48 relative overflow-hidden">
  <img 
    src={project.image} 
    alt={project.name}
    className="w-full h-full object-cover"
  />
  {/* Gradient Overlay */}
  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 flex items-center justify-center`}>
    <div className="text-white text-center">
      <FiCode className="w-16 h-16 mx-auto mb-4 opacity-70" />
      <span className="text-sm font-mono opacity-90">{project.name}</span>
    </div>
  </div>
</div>
                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Name */}
                    <h3 
                      className="text-xl font-bold text-white mb-3 tracking-wide"
                      style={{ fontFamily: "'Orbitron', monospace" }}
                    >
                      {project.name}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed font-light"
                       style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                      {project.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Project Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-all duration-300 group/link"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                      >
                        <span className="text-sm tracking-wider">VIEW PROJECT</span>
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse group-hover/link:scale-150 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                  </div>
              ))}
            </div>
          </div>
        </div>
     
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

       </div>

      <style >{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(6, 182, 212, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(6, 182, 212, 0.6), rgba(147, 51, 234, 0.6));
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(6, 182, 212, 0.8), rgba(147, 51, 234, 0.8));
        }
        
        .hover\\:shadow-glow-cyan:hover {
          box-shadow: 0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.2);
        }
      `}</style>
    </section>
  );
};// Update other sections similarly with cyberpunk theme...

const SkillsRealSection = () => {
  const frontendSkills = [
    { 
      link: '#', 
      text: 'React.js', 
      image: 'https://picsum.photos/600/400?random=1',
      description: 'Modern React with Hooks & Context'
    },
    { 
      link: '#', 
      text: 'TypeScript', 
      image: 'https://picsum.photos/600/400?random=2',
      description: 'Type-safe JavaScript development'
    },
    { 
      link: '#', 
      text: 'Next.js', 
      image: 'https://picsum.photos/600/400?random=3',
      description: 'Full-stack React framework'
    },
    { 
      link: '#', 
      text: 'Tailwind CSS', 
      image: 'https://picsum.photos/600/400?random=4',
      description: 'Utility-first CSS framework'
    },
    { 
      link: '#', 
      text: 'Three.js', 
      image: 'https://picsum.photos/600/400?random=5',
      description: '3D graphics and animations'
    }
  ];

  const dataScienceSkills = [
    { 
      link: '#', 
      text: 'Python', 
      image: 'https://picsum.photos/600/400?random=6',
      description: 'Data analysis & machine learning'
    },
    { 
      link: '#', 
      text: 'Power BI', 
      image: 'https://picsum.photos/600/400?random=7',
      description: 'Interactive data visualization'
    },
    { 
      link: '#', 
      text: 'SQL', 
      image: 'https://picsum.photos/600/400?random=8',
      description: 'Database management & queries'
    },
    { 
      link: '#', 
      text: 'Data Analysis', 
      image: 'https://picsum.photos/600/400?random=9',
      description: 'Statistical analysis & insights'
    },
    { 
      link: '#', 
      text: 'Machine Learning', 
      image: 'https://picsum.photos/600/400?random=10',
      description: 'Predictive models & algorithms'
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-5 bg-black">
      <div className="w-full h-[calc(100vh-10px)] rounded-[40px] bg-gradient-to-br from-cyan-900/10 to-purple-900/10 shadow-2xl border border-cyan-500/30 overflow-hidden relative backdrop-blur-sm">
        
        {/* Section Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
          <h2 
            className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center"
            style={{
              fontFamily: "'Orbitron', monospace",
              textShadow: '0 0 30px rgba(6, 182, 212, 0.7), 0 0 60px rgba(147, 51, 234, 0.5)'
            }}
          >
            SKILLS
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mt-4 glow-cyan" />
        </div>

        {/* Main Content Grid */}
        <div className="w-full h-full flex">
          
          {/* Frontend Skills - Left Side */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
            <div className="text-center mb-8 mt-32">
              <h3 
                className="text-3xl font-bold text-cyan-300 mb-4 tracking-wider"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                FRONTEND DEVELOPMENT
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                Creating immersive cyberpunk experiences with modern web technologies
              </p>
            </div>
            
            <div style={{ height: '500px', width: '90%', position: 'relative' }}>
              <FlowingMenu items={frontendSkills} />
            </div>

            {/* Neon Border Accent */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full blur-sm opacity-60" />
          </div>

          {/* Data Science Skills - Right Side */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
            <div className="text-center mb-8 mt-32">
              <h3 
                className="text-3xl font-bold text-purple-300 mb-4 tracking-wider"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                DATA SCIENCE
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                Transforming raw data into actionable insights and predictive solutions
              </p>
            </div>
            
            <div style={{ height: '500px', width: '90%', position: 'relative' }}>
              <FlowingMenu items={dataScienceSkills} />
            </div>
          </div>
        </div>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        </div>

      <style>{`
        .glow-cyan {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: FiMail,
      title: 'EMAIL',
      value: 'harshch002@gmail.com',
      link: 'mailto:harshch002@gmail.com',
    },
    {
      icon: FiLinkedin,
      title: 'LINKEDIN',
      value: 'harshita-chelani',
      link: 'https://linkedin.com/in/harshita-chelani-8a92a2272/',
    },
    {
      icon: FiGithub,
      title: 'GITHUB',
      value: 'grim7012',
      link: 'https://github.com/grim7012',
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8 bg-black">
      <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-br from-cyan-900/5 to-purple-900/5 border border-cyan-500/20 overflow-hidden backdrop-blur-sm">
        
        {/* Main Content */}
        <div className="w-full flex flex-col lg:flex-row">
          
          {/* Left Side - Photo & Contact Info */}
          <div className="w-full lg:w-2/5 p-12 flex flex-col items-center lg:items-start space-y-12">
            {/* Circular Photo */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/30">
                <img 
                  src="/Harshita.jpeg" // Replace with your photo path
                  alt="Harshita Chelani"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-pulse" />
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <h2 
                  className="text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  Harshita Chelani
                </h2>
                <p 
                  className="text-cyan-300 text-lg"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Full Stack Developer
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-cyan-500/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors duration-300">
                      <method.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <p 
                        className="text-cyan-300 text-sm font-medium tracking-wide"
                        style={{ fontFamily: "'Orbitron', monospace" }}
                      >
                        {method.title}
                      </p>
                      <p 
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                      >
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span 
                  className="text-green-400 text-sm"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-3/5 p-12 lg:pl-0">
            <div className="max-w-2xl">
              <div className="mb-12">
                <h3 
                  className="text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  Let's Work Together
                </h3>
                <p 
                  className="text-gray-400 text-lg leading-relaxed"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Have a project in mind? I'd love to hear about it. 
                  Send me a message and let's create something amazing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label 
                      className="block text-cyan-300 text-sm tracking-wide"
                      style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-cyan-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-black/50 transition-all duration-300"
                      placeholder="Your name"
                      style={{ fontFamily: "'Share Tech Mono', monospace" }}
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label 
                      className="block text-cyan-300 text-sm tracking-wide"
                      style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-cyan-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-black/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                      style={{ fontFamily: "'Share Tech Mono', monospace" }}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label 
                    className="block text-cyan-300 text-sm tracking-wide"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-black/30 border border-cyan-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-black/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-500/10 border border-cyan-400/30 rounded-xl py-4 text-cyan-300 font-medium tracking-wide hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-3 group"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  SEND MESSAGE
                  <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Main Portfolio Component
export default function MinimalPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MinimalNav />
      
      <HeroSection />
      <SkillsSection />
      <ProjectsSection/>
      <SkillsRealSection/>
      <ContactSection />
      {/* <ProjectsSection />
      <EducationSection />
      <ContactSection /> */}
    </div>
  );
}

// Add this CSS for glow effects
const styles = `
  .glow-cyan {
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
  }
  
  .glow-cyan-text {
    text-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
  }
  
  .glow-purple {
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.6);
  }
  
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
`;

// Add the styles to the head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style")
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}