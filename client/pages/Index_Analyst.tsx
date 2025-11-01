import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiChevronRight, FiBarChart2, FiDatabase, FiTrendingUp, FiPieChart } from 'react-icons/fi';
import { FadeInWhenVisible } from '@/components/ui/FadeInWhenVisible';
import NavbarMobile from '@/components/ui/MobileNavbar';

// Interactive Scrolling Graph Component
const InteractiveScrollingGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateGraph = (progress: number) => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Dynamic data points based on scroll progress
      const dataPoints = [
        { x: 50, y: 120 + Math.sin(progress * 0.1) * 40 },
        { x: 150, y: 80 + Math.cos(progress * 0.15) * 30 },
        { x: 250, y: 150 + Math.sin(progress * 0.2) * 50 },
        { x: 350, y: 100 + Math.cos(progress * 0.1) * 60 },
        { x: 450, y: 180 + Math.sin(progress * 0.25) * 40 }
      ];

      // Draw line
      ctx.strokeStyle = '#ff6b6b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
      for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(dataPoints[i].x, dataPoints[i].y);
      }
      ctx.stroke();

      // Draw points
      dataPoints.forEach(point => {
        ctx.fillStyle = '#2d4a8a';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw axes
      ctx.strokeStyle = '#2d4a8a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, 30);
      ctx.lineTo(30, height - 30);
      ctx.lineTo(width - 30, height - 30);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = '#2d4a8a';
      ctx.font = '12px system-ui';
      ctx.fillText('Performance', 10, 20);
      ctx.fillText('Time', width - 40, height - 10);
    };

    updateGraph(scrollProgress);
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
    <div className="w-full h-64 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 border-2 border-[#ff6b6b]/20 shadow-lg">
      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

// Profile Photo Component
const ProfilePhoto = () => {
  return (
    <div className="relative">
      <div className="w-80 h-80 bg-gradient-to-br from-[#ff6b6b] to-[#ff6b6b]/70 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
        {/* Replace with your actual image */}
        <img 
          src="/profile-photo.jpg" // Path to your image in public folder
          alt="Profile Photo"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Fallback content if image doesn't exist */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ff6b6b] to-[#ff6b6b]/70">
          <div className="text-white text-center">
            <FiDatabase className="text-6xl mb-4 opacity-90" />
            <p className="text-lg font-semibold">Data Scientist</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#2d4a8a] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
        <FiTrendingUp className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#ff6b6b] rounded-2xl -rotate-12 flex items-center justify-center shadow-lg">
        <FiBarChart2 className="text-white text-lg" />
      </div>
    </div>
  );
};
const SkillBar = ({ name, level, icon }: { name: string; level: number; icon: React.ReactNode }) => {
  return (
    <div className="mb-6 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#ff6b6b]/20 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-[#ff6b6b]/20 text-[#ff6b6b] rounded-xl">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-[#2d4a8a] text-lg">{name}</span>
            <span className="text-sm font-semibold text-[#ff6b6b] bg-[#ff6b6b]/10 px-2 py-1 rounded-full">{level}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-[#ff6b6b]/10">
            <div 
              className="h-full bg-gradient-to-r from-[#ff6b6b] to-[#ff6b6b]/80 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, link }: { title: string; description: string; tags: string[]; link: string }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#ff6b6b]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b6b] to-[#ff6b6b]/80 rounded-2xl mb-6 flex items-center justify-center shadow-md">
        <FiPieChart className="text-white text-xl" />
      </div>
      <h4 className="text-xl font-bold text-[#2d4a8a] mb-3">
        {title}
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm rounded-full font-semibold border border-[#ff6b6b]/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <a 
        href={link} 
        className="inline-flex items-center text-[#2d4a8a] font-bold hover:text-[#ff6b6b] transition-colors group"
      >
        View Analysis
        <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-[#ff6b6b]/10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ff6b6b]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl text-[#2d4a8a]">
              Harshita Chelani
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-[#2d4a8a] hover:text-[#ff6b6b] font-semibold transition-colors py-2 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6b6b] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a 
  href="/resume-harshita-chelani.pdf"
  download="Harshita_Chelani_Resume.pdf"
  className="bg-[#ff6b6b] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#ff6b6b]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
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
        <section className="min-h-screen flex items-center pt-20 pb-16 pl-10 pr-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 mx-auto lg:mx-0">
                <FadeInWhenVisible>
                  <h1 className="text-5xl md:text-6xl font-bold text-[#2d4a8a] leading-tight">
                    <br></br>Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ff6b6b]/80 bg-clip-text text-transparent">
                      Harshita
                    </span>
                  </h1>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible>
                  <p className="text-xl text-gray-800 leading-relaxed font-medium">
                    I transform complex data into compelling stories and actionable insights 
                    through advanced analytics, machine learning, and creative visualization.
                  </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible>
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
    <button 
  onClick={() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
  className="bg-[#ff6b6b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ff6b6b]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
>
  View My Projects
  <FiChevronRight className="text-lg" />
</button>
    {/* Download Resume Button */}
    <a 
      href="/HarshitaCV1.pdf" 
      download="HarshitaCV1.pdf"
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
                  <ProfilePhoto />
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* About Section with Interactive Graph */}
        <FadeInWhenVisible>
          <section id="about" className="py-24 bg-gradient-to-br from-white to-blue-50/50">
            <div className="max-w-7xl mx-auto px-6 pl-10 pr-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-[#2d4a8a]">About Me</h2>
                  <div className="space-y-4 text-gray-800 leading-relaxed text-lg">
                    <p>
                      I'm a passionate data scientist with over 3 years of experience turning 
                      complex datasets into meaningful insights. My expertise spans machine learning, 
                      statistical analysis, and data visualization.
                    </p>
                    <p>
                      I believe data should tell stories that drive decisions. Whether it's predicting 
                      trends, uncovering patterns, or building intelligent systems, I love the challenge 
                      of making data understandable and actionable.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/harshita-chelani-8a92a2272/" className="p-4 bg-[#2d4a8a] text-white rounded-xl hover:bg-[#2d4a8a]/90 transition-colors shadow-lg">
                      <FiLinkedin className="text-xl" />
                    </a>
                    <a href="https://github.com/grim7012" className="p-4 bg-[#2d4a8a] text-white rounded-xl hover:bg-[#2d4a8a]/90 transition-colors shadow-lg">
                      <FiGithub className="text-xl" />
                    </a>
                    <a href="mailto:harshch002@gmail.com" className="p-4 bg-[#ff6b6b] text-white rounded-xl hover:bg-[#ff6b6b]/90 transition-colors shadow-lg">
                      <FiMail className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Interactive Graph */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2d4a8a] text-center">Interactive Data Journey</h3>
                  <InteractiveScrollingGraph />
                  <p className="text-gray-600 text-center text-sm">
                    Scroll up and down to see the graph transform with your journey
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Skills Section */}
        <FadeInWhenVisible>
          <section id="skills" className="py-24 bg-gradient-to-br from-[#ff6b6b]/5 to-white">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-[#2d4a8a]">Skills & Expertise</h2>
                  <p className="text-gray-700 text-lg">
                    Technical skills that power my data-driven solutions
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <SkillBar name="Python & Data Analysis" level={95} icon={<FiTrendingUp />} />
                    <SkillBar name="Machine Learning" level={88} icon={<FiBarChart2 />} />
                    <SkillBar name="Data Visualization" level={92} icon={<FiPieChart />} />
                  </div>
                  <div className="space-y-4">
                    <SkillBar name="Statistical Modeling" level={85} icon={<FiDatabase />} />
                    <SkillBar name="SQL & Databases" level={90} icon={<FiDatabase />} />
                    <SkillBar name="Business Intelligence" level={87} icon={<FiTrendingUp />} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Projects Section */}
        <FadeInWhenVisible>
          <section id="projects" className="py-24 bg-gradient-to-br from-white to-blue-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-[#2d4a8a]">Featured Projects</h2>
                  <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Real-world data science projects that demonstrate analytical thinking and technical expertise
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard 
                    title="Crop Recommendation System"
                    description="Machine learning model to recommend optimal crops based on soil, weather, and environmental factors"
                    tags={['Python', 'ML', 'Forecasting']}
                    link="/projects/sales-analytics"
                  />
                  <ProjectCard 
                    title="Bank Marketing Campaign Analysis"
                    description="Power BI dashboard analyzing bank marketing campaign effectiveness and customer segmentation"
                    tags={['Power BI', 'Data Visualization', 'DAX']}
                    link="https://github.com/grim7012/Bank-Marketing-Campaign-PowerBI.git"
                  />
                  <ProjectCard 
                    title="Product Review and Analysis"
                    description="Product review using beautiful soup and scrapping data from e-commerce websites to analyze customer sentiment"
                    tags={['Python', 'Web Scraping', 'Sentiment Analysis']}
                    link="/projects/sentiment-analysis"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Contact Section */}
        <FadeInWhenVisible>
          <section id="contact" className="py-24 bg-gradient-to-br from-[#ff6b6b]/5 to-white">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#2d4a8a]">Let's Work Together</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                  Ready to transform your data into actionable insights? 
                  I'm available for freelance projects and full-time opportunities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:harshch002@gmail.com" 
                  className="bg-[#ff6b6b] text-white px-10 py-5 rounded-xl font-semibold hover:bg-[#ff6b6b]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg text-lg"
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

              {/* Mini Interactive Graph */}
              <div className="max-w-md mx-auto">
                <InteractiveScrollingGraph />
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#ff6b6b]/20 py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#2d4a8a] font-semibold text-lg mb-6 md:mb-0">
              © 2025 Harshita Chelani
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/harshita-chelani-8a92a2272/" className="text-[#2d4a8a] hover:text-[#ff6b6b] transition-colors p-3 bg-white rounded-xl shadow-sm border border-[#ff6b6b]/10">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/grim7012" className="text-[#2d4a8a] hover:text-[#ff6b6b] transition-colors p-3 bg-white rounded-xl shadow-sm border border-[#ff6b6b]/10">
                <FiGithub className="text-xl" />
              </a>
              <a href="mailto:harshch002@gmail.com" className="text-[#2d4a8a] hover:text-[#ff6b6b] transition-colors p-3 bg-white rounded-xl shadow-sm border border-[#ff6b6b]/10">
                <FiMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}