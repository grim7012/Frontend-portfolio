import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiChevronRight, FiCode, FiLayout, FiSmartphone, FiZap, FiBox } from 'react-icons/fi';
import { FadeInWhenVisible } from '@/components/ui/FadeInWhenVisible';
import NavbarMobile from '@/components/ui/MobileNavbar';

// Interactive UI Elements Canvas
const InteractiveUICanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawUIElements = (progress: number) => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);

      // Draw browser window
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(50, 30, width - 100, height - 60);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 30, width - 100, height - 60);

      // Browser header
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(50, 30, width - 100, 30);
      
      // Browser buttons
      ctx.fillStyle = '#ff6b6b';
      ctx.beginPath();
      ctx.arc(70, 45, 6, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(90, 45, 6, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(110, 45, 6, 0, 2 * Math.PI);
      ctx.fill();

      // Draw responsive devices
      const phoneX = 80 + Math.sin(progress * 0.1) * 10;
      const tabletX = 250 + Math.cos(progress * 0.15) * 15;
      const desktopX = 450 + Math.sin(progress * 0.2) * 20;

      // Mobile phone
      ctx.fillStyle = '#2d4a8a';
      ctx.fillRect(phoneX, 80, 60, 120);
      ctx.strokeStyle = '#1e3a8a';
      ctx.lineWidth = 2;
      ctx.strokeRect(phoneX, 80, 60, 120);
      
      // Phone screen
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(phoneX + 5, 85, 50, 110);
      
      // App icons on phone
      ctx.fillStyle = '#667eea';
      ctx.fillRect(phoneX + 15, 100, 10, 10);
      ctx.fillRect(phoneX + 35, 100, 10, 10);
      ctx.fillRect(phoneX + 15, 120, 10, 10);
      ctx.fillRect(phoneX + 35, 120, 10, 10);

      // Tablet
      ctx.fillStyle = '#4c51bf';
      ctx.fillRect(tabletX, 70, 100, 140);
      ctx.strokeStyle = '#2d4a8a';
      ctx.strokeRect(tabletX, 70, 100, 140);
      
      // Tablet screen
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(tabletX + 5, 75, 90, 130);
      
      // Tablet content
      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(tabletX + 15, 90, 70, 20);
      ctx.fillRect(tabletX + 15, 120, 30, 60);
      ctx.fillRect(tabletX + 55, 120, 30, 60);

      // Desktop layout
      ctx.fillStyle = '#374151';
      ctx.fillRect(desktopX, 100, 180, 100);
      
      // Desktop screen content
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(desktopX + 5, 105, 170, 90);
      
      // Code editor-like content
      ctx.fillStyle = '#667eea';
      ctx.font = '10px monospace';
      ctx.fillText('function Component() {', desktopX + 15, 125);
      ctx.fillText('  return <div>Hello</div>;', desktopX + 15, 140);
      ctx.fillText('}', desktopX + 15, 155);
      
      ctx.fillStyle = '#ff6b6b';
      ctx.fillText('export default Component;', desktopX + 15, 170);

      // Floating UI elements
      const floatingElements = [
        { x: 100 + Math.sin(progress * 0.25) * 20, y: 180, size: 8, color: '#667eea' },
        { x: 300 + Math.cos(progress * 0.3) * 25, y: 160, size: 6, color: '#ff6b6b' },
        { x: 200 + Math.sin(progress * 0.2) * 15, y: 190, size: 10, color: '#10b981' },
      ];

      floatingElements.forEach(element => {
        ctx.fillStyle = element.color;
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Connection lines between devices
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      
      ctx.beginPath();
      ctx.moveTo(phoneX + 60, 140);
      ctx.lineTo(tabletX, 140);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(tabletX + 100, 140);
      ctx.lineTo(desktopX, 150);
      ctx.stroke();
      
      ctx.setLineDash([]);
    };

    drawUIElements(scrollProgress);
  }, [scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-64 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 border-2 border-[#667eea]/20 shadow-lg">
      <canvas
        ref={canvasRef}
        width={600}
        height={250}
        className="w-full h-full"
      />
    </div>
  );
};

// Component Architecture Canvas
const ComponentArchitectureCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawArchitecture = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);

      // Draw component tree structure
      const components = [
        { name: 'App', x: width/2, y: 40, width: 120, height: 40, color: '#667eea' },
        { name: 'Header', x: width/4, y: 100, width: 100, height: 35, color: '#ff6b6b' },
        { name: 'Main', x: width/2, y: 100, width: 100, height: 35, color: '#10b981' },
        { name: 'Sidebar', x: 3*width/4, y: 100, width: 100, height: 35, color: '#f59e0b' },
        { name: 'Nav', x: width/4 - 60, y: 160, width: 80, height: 30, color: '#8b5cf6' },
        { name: 'Content', x: width/2, y: 160, width: 80, height: 30, color: '#ec4899' },
        { name: 'Widget', x: 3*width/4 + 60, y: 160, width: 80, height: 30, color: '#06b6d4' },
      ];

      // Draw connections first
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(components[0].x + components[0].width/2, components[0].y + components[0].height);
      ctx.lineTo(components[1].x + components[1].width/2, components[1].y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(components[0].x + components[0].width/2, components[0].y + components[0].height);
      ctx.lineTo(components[2].x + components[2].width/2, components[2].y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(components[0].x + components[0].width/2, components[0].y + components[0].height);
      ctx.lineTo(components[3].x + components[3].width/2, components[3].y);
      ctx.stroke();

      // Child connections
      ctx.beginPath();
      ctx.moveTo(components[1].x + components[1].width/2, components[1].y + components[1].height);
      ctx.lineTo(components[4].x + components[4].width/2, components[4].y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(components[2].x + components[2].width/2, components[2].y + components[2].height);
      ctx.lineTo(components[5].x + components[5].width/2, components[5].y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(components[3].x + components[3].width/2, components[3].y + components[3].height);
      ctx.lineTo(components[6].x + components[6].width/2, components[6].y);
      ctx.stroke();

      // Draw components
      components.forEach(comp => {
        // Component box
        ctx.fillStyle = comp.color + '20';
        ctx.fillRect(comp.x - comp.width/2, comp.y, comp.width, comp.height);
        ctx.strokeStyle = comp.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(comp.x - comp.width/2, comp.y, comp.width, comp.height);
        
        // Component name
        ctx.fillStyle = comp.color;
        ctx.font = 'bold 10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(comp.name, comp.x, comp.y + comp.height/2 + 3);
      });

      // Draw React logo influence
      const centerX = width/2;
      const centerY = height - 30;
      
      ctx.strokeStyle = '#61dafb';
      ctx.lineWidth = 3;
      
      // React-like orbits
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 25, 15, Math.PI/4, 0, 2 * Math.PI);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 25, 15, -Math.PI/4, 0, 2 * Math.PI);
      ctx.stroke();
      
      // Center dot
      ctx.fillStyle = '#61dafb';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
      ctx.fill();
    };

    drawArchitecture();
  }, []);

  return (
    <div className="w-full h-64 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-4 border-2 border-[#8b5cf6]/20 shadow-lg">
      <canvas
        ref={canvasRef}
        width={600}
        height={250}
        className="w-full h-full"
      />
    </div>
  );
};

// Profile Photo Component for Frontend Developer
const FrontendProfilePhoto = () => {
  return (
    <div className="relative">
      <div className="w-80 h-80 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
        <img 
          src="/Harshita.jpeg"
          alt="Frontend Developer"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
          <div className="text-white text-center">
            <FiCode className="text-6xl mb-4 opacity-90" />
            <p className="text-lg font-semibold">Frontend Engineer</p>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#2d4a8a] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
        <FiZap className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#ff6b6b] rounded-2xl -rotate-12 flex items-center justify-center shadow-lg">
        <FiLayout className="text-white text-lg" />
      </div>
    </div>
  );
};

// Tech Stack Component
const TechStack = () => {
  const techStack = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800', icon: '📘' },
    { name: 'Next.js', level: 88, color: 'from-gray-800 to-gray-600', icon: '▲' },
    { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-cyan-500', icon: '🎨' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600', icon: '🟢' },
    { name: 'Framer Motion', level: 85, color: 'from-purple-500 to-pink-500', icon: '✨' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {techStack.map((tech) => (
        <div key={tech.name} className="text-center group">
          <div className="relative mb-3">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl`}>
                {tech.icon}
              </div>
            </div>
          </div>
          <span className="font-semibold text-gray-800">{tech.name}</span>
          <div className="text-sm text-gray-600 mt-1">{tech.level}%</div>
        </div>
      ))}
    </div>
  );
};

// Project Card for Frontend Projects
const FrontendProjectCard = ({ title, description, tags, demoLink, codeLink }: { 
  title: string; 
  description: string; 
  tags: string[]; 
  demoLink: string;
  codeLink: string;
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#ff6b6b]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl mb-6 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
        <FiLayout className="text-white text-xl" />
      </div>
      <h4 className="text-xl font-bold text-[#2d4a8a] mb-3 group-hover:text-[#667eea] transition-colors">
        {title}
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] text-sm rounded-full font-semibold border border-[#667eea]/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a 
          href={demoLink} 
          className="flex-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-center py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a 
          href={codeLink} 
          className="flex-1 border-2 border-[#2d4a8a] text-[#2d4a8a] text-center py-2 rounded-xl font-semibold hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default function FrontendPortfolio() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ff6b6b]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Frontend Developer
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-[#2d4a8a] hover:text-[#667eea] font-semibold transition-colors py-2 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a 
                href="/frontend-resume.pdf"
                download="Frontend_Developer_Resume.pdf"
                className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <FiDownload className="text-sm" />
                Resume
              </a>
            </div>

            <NavbarMobile />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-screen flex items-center pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <FadeInWhenVisible>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 text-[#667eea] px-6 py-3 rounded-full text-lg font-semibold border border-[#667eea]/30 shadow-sm">
                    <div className="w-3 h-3 bg-[#667eea] rounded-full animate-pulse"></div>
                    Frontend Engineer & UI Specialist
                  </div>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible>
                  <h1 className="text-5xl md:text-6xl font-bold text-[#2d4a8a] leading-tight">
                    Crafting{' '}
                    <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                      Digital Experiences
                    </span>
                  </h1>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible>
                  <p className="text-xl text-gray-800 leading-relaxed font-medium">
                    I create beautiful, responsive, and high-performance web applications 
                    using modern technologies like React, TypeScript, and Next.js. 
                    Passionate about user experience and cutting-edge frontend development.
                  </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                      onClick={scrollToProjects}
                      className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                    >
                      View My Projects
                      <FiChevronRight className="text-lg" />
                    </button>
                    <a 
                      href="/frontend-resume.pdf"
                      download="Frontend_Developer_Resume.pdf"
                      className="border-2 border-[#2d4a8a] text-[#2d4a8a] px-8 py-4 rounded-xl font-semibold hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300 flex items-center justify-center gap-2 bg-white/80"
                    >
                      <FiDownload className="text-lg" />
                      Download Resume
                    </a>
                  </div>
                </FadeInWhenVisible>
              </div>

              {/* Right Content - Profile Photo */}
              <FadeInWhenVisible>
                <div className="flex justify-center lg:justify-end">
                  <FrontendProfilePhoto />
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* About Section */}
        <FadeInWhenVisible>
          <section id="about" className="py-24 bg-gradient-to-br from-white to-purple-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-[#2d4a8a]">Creative Frontend Developer</h2>
                  <div className="space-y-4 text-gray-800 leading-relaxed text-lg">
                    <p>
                      With expertise in modern JavaScript frameworks and a keen eye for design, 
                      I specialize in building interactive web applications that provide 
                      exceptional user experiences across all devices.
                    </p>
                    <p>
                      I believe in writing clean, maintainable code and creating interfaces 
                      that are not only beautiful but also intuitive and accessible to all users.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" className="p-4 bg-[#2d4a8a] text-white rounded-xl hover:bg-[#2d4a8a]/90 transition-colors shadow-lg">
                      <FiLinkedin className="text-xl" />
                    </a>
                    <a href="https://github.com" className="p-4 bg-[#2d4a8a] text-white rounded-xl hover:bg-[#2d4a8a]/90 transition-colors shadow-lg">
                      <FiGithub className="text-xl" />
                    </a>
                    <a href="mailto:frontend@example.com" className="p-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl hover:shadow-lg transition-colors shadow-lg">
                      <FiMail className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Interactive UI Canvas */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2d4a8a] text-center">Responsive Design Canvas</h3>
                  <InteractiveUICanvas />
                  <p className="text-gray-600 text-center text-sm">
                    Multi-device UI elements that respond to your scroll
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Skills Section */}
        <FadeInWhenVisible>
          <section id="skills" className="py-24 bg-gradient-to-br from-[#667eea]/5 to-white">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-[#2d4a8a]">Tech Stack & Skills</h2>
                  <p className="text-gray-700 text-lg">
                    Modern technologies I use to build amazing web experiences
                  </p>
                </div>
                
                <TechStack />
                
                {/* Component Architecture */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2d4a8a]">Component Architecture</h3>
                  <ComponentArchitectureCanvas />
                  <p className="text-gray-600 text-sm">
                    Clean, reusable component structure for scalable applications
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Projects Section */}
        <FadeInWhenVisible>
          <section id="projects" className="py-24 bg-gradient-to-br from-white to-purple-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-[#2d4a8a]">Featured Projects</h2>
                  <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Showcasing modern web applications with cutting-edge technologies
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FrontendProjectCard 
                    title="E-Commerce Platform"
                    description="Modern e-commerce platform with React, TypeScript, and Stripe integration"
                    tags={['React', 'TypeScript', 'Stripe', 'Tailwind']}
                    demoLink="https://demo.example.com"
                    codeLink="https://github.com/example/ecommerce"
                  />
                  <FrontendProjectCard 
                    title="Task Management App"
                    description="Collaborative task management application with real-time updates"
                    tags={['Next.js', 'Socket.io', 'MongoDB', 'Framer']}
                    demoLink="https://demo.example.com"
                    codeLink="https://github.com/example/taskapp"
                  />
                  <FrontendProjectCard 
                    title="Weather Dashboard"
                    description="Beautiful weather dashboard with interactive maps and charts"
                    tags={['Vue.js', 'D3.js', 'API', 'Chart.js']}
                    demoLink="https://demo.example.com"
                    codeLink="https://github.com/example/weather"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Contact Section */}
        <FadeInWhenVisible>
          <section id="contact" className="py-24 bg-gradient-to-br from-[#667eea]/5 to-white">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#2d4a8a]">Let's Build Something Amazing</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                  Ready to bring your ideas to life with stunning frontend solutions?
                  Let's create something extraordinary together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:harshch002@gmail.com" 
                  className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-10 py-5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg text-lg"
                >
                  <FiMail className="text-xl" />
                  Get In Touch
                </a>
                <a 
                  href="https://www.linkedin.com/in/harshita-chelani-8a92a2272/" 
                  className="border-2 border-[#2d4a8a] text-[#2d4a8a] px-10 py-5 rounded-xl font-semibold hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300 flex items-center justify-center gap-3 bg-white text-lg"
                >
                  <FiLinkedin className="text-xl" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#667eea]/20 py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#2d4a8a] font-semibold text-lg mb-6 md:mb-0">
              © 2025 Harshita Chelani
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/harshita-chelani-8a92a2272/" className="text-[#2d4a8a] hover:text-[#667eea] transition-colors p-3 bg-white rounded-xl shadow-sm border border-[#667eea]/10">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/7012" className="text-[#2d4a8a] hover:text-[#667eea] transition-colors p-3 bg-white rounded-xl shadow-sm border border-[#667eea]/10">
                <FiGithub className="text-xl" />
              </a>
              <a href="mailto:harshch002@gmail.com" className="text-[#2d4a8a] hover:text-[#667eea] transition-colors p-3 bg-white rounded-xl shadow-sm border border-[#667eea]/10">
                <FiMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}