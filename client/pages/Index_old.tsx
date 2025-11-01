import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SparkleImage from '@/components/ui/SparkleImage';
import LeftSocialIcons from '@/components/ui/LeftSocialIcons';
import { FiDownload } from 'react-icons/fi';
import ButterflyResume from '@/components/ui/ButterflyResume';
import { FadeInWhenVisible } from '@/components/ui/FadeInWhenVisible';
import NavbarMobile from '@/components/ui/MobileNavbar';


const FloatingButterfly = ({ delay = 0 }: { delay?: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      const moveButterfly = () => {
        setPosition({
          x: Math.random() * window.innerWidth * 0.8,
          y: Math.random() * window.innerHeight * 0.6,
        });
      };
      
      moveButterfly();
      const interval = setInterval(moveButterfly, 8000 + Math.random() * 4000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="fixed pointer-events-none z-10 opacity-20 transition-all duration-[8000ms] ease-in-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="text-whimsical-lavender text-2xl animate-pulse">🦋</div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-whimsical-base via-whimsical-soft-pink to-whimsical-light-blue relative overflow-hidden">
      {/* Floating Butterflies */}
      <FloatingButterfly delay={0} />
      <FloatingButterfly delay={3000} />
      <FloatingButterfly delay={6000} />
      
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-b border-whimsical-lavender/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="font-heading text-2xl font-bold text-whimsical-text-dark">
              Harshita Chelani
            </div>
            <div className="hidden md:flex space-x-8 font-body text-whimsical-text-medium font-medium">
              <a href="#about" className="hover:text-whimsical-plum transition-colors duration-300 py-2">About</a>
              <Link to="/work" className="hover:text-whimsical-plum transition-colors duration-300 py-2">Work</Link>
              <a href="#skills" className="hover:text-whimsical-plum transition-colors duration-300 py-2">Skills</a>
              <Link to="/contact" className="hover:text-whimsical-plum transition-colors duration-300 py-2">Contact</Link>
            </div>
            {/* Mobile menu button */}
            {/* <div className="md:hidden">
              <button className="text-whimsical-text-dark hover:text-whimsical-plum transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div> */}
            <NavbarMobile />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-8 pt-10 pb-10">
          <div className="text-center space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-y-12 sm:gap-x-48 min-h-screen px-4 ">

      <LeftSocialIcons/>

      {/* Center Animated Image + Decorations */}
      <div className="relative inline-block">
        {/* Circular Image with Decorative Frame */}
            <div className="relative inline-block">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 w-96 h-96 rounded-full border-2 border-whimsical-lavender/20 -translate-x-8 -translate-y-8"></div>

              {/* Inner decorative ring with dashed pattern */}
              <div className="absolute inset-0 w-[22rem] h-[22rem] rounded-full border border-dashed border-whimsical-plum/30 -translate-x-4 -translate-y-4"></div>

              {/* Decorative arcs */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-8 border-t-2 border-whimsical-rose-pink/40 rounded-t-full"></div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-10 border-b-2 border-whimsical-lavender/40 rounded-b-full"></div>
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-8 h-16 border-l-2 border-whimsical-soft-pink/40 rounded-l-full"></div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-20 border-r-2 border-whimsical-plum/40 rounded-r-full"></div>
              </div>

              {/* Geometric accent shapes */}
              <div className="absolute -top-8 -left-8 w-6 h-6 bg-whimsical-rose-pink/60 rotate-45 rounded-sm"></div>
              <div className="absolute -top-6 -right-10 w-4 h-4 bg-whimsical-lavender/60 rounded-full"></div>
              <div className="absolute -bottom-10 -left-6 w-5 h-5 bg-whimsical-soft-pink/60 rotate-12"></div>
              <div className="absolute -bottom-6 -right-8 w-8 h-8 bg-whimsical-plum/40 rotate-45 rounded-sm"></div>

              {/* Floating botanical elements */}
              <div className="absolute top-8 -left-16 text-whimsical-rose-pink/60 text-2xl rotate-12">🌸</div>
              <div className="absolute top-12 -right-14 text-whimsical-lavender/60 text-xl -rotate-12">✨</div>
              <div className="absolute bottom-16 -left-12 text-whimsical-soft-pink/60 text-lg rotate-45">✨</div>
              <div className="absolute bottom-8 -right-16 text-whimsical-plum/60 text-2xl -rotate-12">🌸</div>

              {/* Main image with enhanced styling */}
              <div className="relative z-10">
                <SparkleImage/>

                {/* Subtle inner glow */}
                <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-whimsical-soft-pink/10 via-transparent to-whimsical-lavender/10 z-10"></div>
              </div>

              {/* Original blur elements - enhanced */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-whimsical-rose-pink rounded-full opacity-30 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-whimsical-lavender rounded-full opacity-25 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-4 -right-6 w-12 h-12 bg-whimsical-soft-pink rounded-full opacity-40 blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-whimsical-light-blue rounded-full opacity-35 blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>

      </div>

      <ButterflyResume/>

    </div>
            {/* Primary Details */}
            <div className="space-y-6">
              <div className="space-y-3">
                <FadeInWhenVisible>
                <p className="font-body text-whimsical-text-medium text-xl">Hello, I'm</p>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible>
                <h1 className="font-heading text-7xl md:text-8xl font-bold text-whimsical-text-dark leading-tight">
                  Harshita Chelani
                </h1>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <h2 className="font-heading text-3xl md:text-4xl text-whimsical-plum font-medium">
                  Web Developer & Data Analyst
                </h2>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible>
              <p className="font-body text-xl text-whimsical-text-medium leading-relaxed max-w-2xl mx-auto">
                Creating beautiful, functional web experiences and transforming data into meaningful insights.
                I blend creativity with analytical thinking to build digital solutions that make a difference.
              </p>
              </FadeInWhenVisible>
              
              {/* Action Buttons */}
              <FadeInWhenVisible>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                
                <button className="bg-whimsical-plum text-white px-10 py-4 rounded-full font-body font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105 text-lg">
                  View My Work
                </button>
                <button className="border-2 border-whimsical-plum text-whimsical-plum px-10 py-4 rounded-full font-body font-medium hover:bg-whimsical-plum hover:text-white transition-all duration-300 text-lg">
                  Download Resume
                </button>
              </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>

        {/* About Section */}
        <FadeInWhenVisible>
        <section id="about" className="max-w-4xl mx-auto px-8 py-24">
          <div className="text-center space-y-8">
            <h3 className="font-heading text-4xl font-semibold text-whimsical-text-dark">About Me</h3>
            <p className="font-body text-lg text-whimsical-text-medium leading-relaxed max-w-3xl mx-auto">
              I'm a passionate web developer and data analyst who loves bringing ideas to life through code and data. 
              With a keen eye for design and a strong analytical mindset, I create digital experiences that are both 
              beautiful and meaningful. When I'm not coding, you'll find me exploring new technologies or diving deep 
              into data patterns that tell compelling stories.
            </p>
          </div>
        </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto px-8 py-24">
          <div className="text-center space-y-16">
            <h3 className="font-heading text-4xl font-semibold text-whimsical-text-dark">Skills & Expertise</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Web Development */}
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-whimsical-lavender/30">
                <h4 className="font-heading text-2xl font-semibold text-whimsical-text-dark mb-6">Web Development</h4>
                <div className="space-y-4">
                  {['React & TypeScript', 'Node.js & Express', 'HTML/CSS & Tailwind', 'Database Design'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-whimsical-plum rounded-full"></div>
                      <span className="font-body text-whimsical-text-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Analysis */}
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-whimsical-lavender/30">
                <h4 className="font-heading text-2xl font-semibold text-whimsical-text-dark mb-6">Data Analysis</h4>
                <div className="space-y-4">
                  {['Python & R', 'SQL & Databases', 'Data Visualization', 'Statistical Analysis'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-whimsical-rose-pink rounded-full"></div>
                      <span className="font-body text-whimsical-text-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-8 py-24">
          <div className="text-center space-y-8">
            <h3 className="font-heading text-4xl font-semibold text-whimsical-text-dark">Let's Connect</h3>
            <p className="font-body text-lg text-whimsical-text-medium leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Let's create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@xyz.com" 
                className="bg-whimsical-plum text-white px-8 py-3 rounded-full font-body font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com" 
                className="border-2 border-whimsical-plum text-whimsical-plum px-8 py-3 rounded-full font-body font-medium hover:bg-whimsical-plum hover:text-white transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
        </FadeInWhenVisible>
      </main>


      {/* Footer */}
      <footer className="text-center py-8 border-t border-whimsical-lavender/30">
        <p className="font-body text-whimsical-text-medium">
          © 2025 Harshita Chelani. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
