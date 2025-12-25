import React from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ExternalLink, Figma, Github } from 'lucide-react';

const PortfolioUI = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-8 z-20 relative">
        <button className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
          <div className="p-2 rounded-full bg-white/80 shadow-sm group-hover:shadow-md transition-shadow">
            <ArrowLeft size={18} strokeWidth={2.5} className="text-slate-700" />
          </div>
          <span className="text-slate-700 font-medium hidden md:inline">BACK</span>
        </button>
        
        <div className="text-center">
          <div className="text-slate-500 text-xs tracking-widest">CASE STUDY</div>
          <div className="text-slate-800 font-medium">Momentum App</div>
        </div>
        
        <button className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
          <span className="text-slate-700 font-medium hidden md:inline">NEXT</span>
          <div className="p-2 rounded-full bg-white/80 shadow-sm group-hover:shadow-md transition-shadow">
            <ArrowRight size={18} strokeWidth={2.5} className="text-slate-700" />
          </div>
        </button>
      </nav>

      {/* Hero Section with Heading */}
      <div className="relative h-[55vh] md:h-[60vh] flex items-end justify-center overflow-hidden pb-0">
        {/* Background Overlay */}
        <div className="absolute inset-0">
          <img src="/uicover.png" alt="" 
          className="absolute inset-0 w-full h-[140%] object-cover object-[center_40%]"/>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Main Heading */}
        <div className="relative z-10 text-center px-4 mb-0">
          <h1 className="font-serif text-slate-900 leading-[0.85] mb-2">
            <span className="block text-[15vw] md:text-[10rem] lg:text-[12rem] tracking-tight text-slate-900 opacity-0">Momentum</span>
            <span className="block text-[4vw] md:text-[2.5rem] lg:text-[3rem] font-mono font-light text-slate-700 mt-2 mb-10">
              Focus • Productivity • Flow
            </span>
          </h1>
        </div>
      </div>

      <div className="relative w-full py-20">
        {/* Background image */}
        <img
          src="/bgcover.png"
          alt="Momentum App UI Design"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* LEFT: Meta */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <p className="text-xl uppercase tracking-widest text-slate-600">
                  Project
                </p>
                <p className="mt-1 text-lg text-slate-800">
                  Momentum
                </p>
              </div>

              <div>
                <p className="text-xl uppercase tracking-widest text-slate-600">
                  Role
                </p>
                <p className="mt-1 text-lg text-slate-800">
                  Product Designer
                </p>
              </div>

              <div>
                <p className="text-xl uppercase tracking-widest text-slate-600">
                  Tools
                </p>
                <p className="mt-1 text-lg text-slate-800">
                  Figma, FigJam
                </p>
              </div>

              <div>
                <p className="text-xl uppercase tracking-widest text-slate-600">
                  Timeline
                </p>
                <p className="mt-1 text-lg text-slate-800">
                  1 Day Design Sprint
                </p>
              </div>
            </div>

            {/* RIGHT: Description */}
            <div className="md:col-span-4">
              <p className="
                max-w-3xl
                text-slate-800
                text-lg md:text-2xl
                leading-relaxed md:leading-[1.6]
                tracking-wide
                font-sans font-regular
              ">
                The Momentum app is a focus-first productivity tool designed to help users
                make steady progress without pressure. Rather than relying on rigid goals
                or constant reminders, Momentum encourages intentional work sessions and
                quietly tracks time in the background.
                <br /><br />
                This case study explores the UI/UX design process from early problem framing
                to high-fidelity prototyping, highlighting key decisions that shaped a calm,
                distraction-free experience aimed at supporting deep focus and sustained flow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UI Image Section */}
      <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 mt-0 md:py-16">
        {/* BIG HEADING (behind image) */}
        <h1
          className="
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            text-center
            text-[128px]
            md:text-[128px]
            font-light
            tracking-wide
            text-[#C76B8A]
            pointer-events-none
            select-none
            z-30
            whitespace-nowrap
          "
          style={{ fontFamily: "'Island Moments', cursive" }}
        >
          Quiet, Progress
        </h1>

        {/* Image container */}
        <div className="relative max-w-4xl mx-auto mt-8 z-20">
          <div className="relative rounded-2xl shadow-2xl shadow-pink-200/50 overflow-hidden border border-pink-100">
            <img 
              src="/portfolio.png" 
              alt="Momentum App UI Design" 
              className="w-full h-5/6 object-cover"
            />
          </div>
        </div>

        {/* Icons Section - Updated with larger custom images */}
        <div className="max-w-4xl mx-auto mt-24 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {/* Item 1 - Custom Image Icon */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-100 flex items-center justify-center p-4 shadow-sm">
                {/* Replace with your custom image */}
                <img 
                  src="/icons/focus-icon.png" 
                  alt="Focus Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-base md:text-lg tracking-wide text-slate-800 font-medium">
                Quiet Focus
              </p>
            </div>

            {/* Item 2 - Custom Image Icon */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-100 flex items-center justify-center p-4 shadow-sm">
                <img 
                  src="/icons/time-icon.png" 
                  alt="Time Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-base md:text-lg tracking-wide text-slate-800 font-medium">
                Time Aware
              </p>
            </div>

            {/* Item 3 - Custom Image Icon */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-100 flex items-center justify-center p-4 shadow-sm">
                <img 
                  src="/icons/distraction-free-icon.png" 
                  alt="Distraction Free Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-base md:text-lg tracking-wide text-slate-800 font-medium">
                Distraction Free
              </p>
            </div>

            {/* Item 4 - Custom Image Icon */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-100 flex items-center justify-center p-4 shadow-sm">
                <img 
                  src="/icons/progress-icon.png" 
                  alt="Progress Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-base md:text-lg tracking-wide text-slate-800 font-medium">
                Gentle Progress
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Full Background Image with Centered Paragraph */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden ">
        {/* Background Image */}
        <img
          src="/newbgcover.png" 
          alt="Background Section"
          className="absolute inset-0 w-full object-cover z-0"
        />
        
        
        {/* Centered Paragraph */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8 text-start">
           <p className="
                max-w-3xl
                text-slate-800
                text-lg md:text-2xl
                leading-relaxed md:leading-[1.6]
                tracking-wide
                font-sans font-regular
              ">
              <br />
              Earlier in July this year, I tried to fix my life with productivity apps. I planned meticulously everything, color-coded to-do lists, habit trackers, streaks, reminders set down to the minute. On the surface, everything looked organised. But underneath, something always felt off.
              <br /><br />
              The apps promised focus, but they felt loud. Every missed task felt like failure. Every broken streak felt personal. I found myself spending more time managing productivity than actually doing the work tweaking systems, chasing perfect routines, restarting again and again.
              <br /><br />  
              I assumed I was doing something wrong. So I searched — forums, Reddit threads, late-night blog posts and realised I wasn’t alone. Others were also overwhelmed by tools that pushed intensity over intention, speed over steadiness. People wanted calm progress, not constant pressure.
              <br /><br />
              Momentum began quietly there — not as a solution to a problem, but as a question:
              What if productivity felt gentle? What if progress didn’t have to shout to matter?    
              <br />
              <br />
              <p className='text-slate-700 text-4xl'>So, what’s the real problem?</p>
              <br />
                Today, productivity feels loud, rushed, and exhausting.
We’re surrounded by tools that push us to do more, faster, every single day — as if slowing down means failing. Instead of helping us focus, many apps quietly add pressure, guilt, and comparison to our lives.

And when you listen closely, this is what people are actually saying:
</p>
              
        </div>
        </div>

      {/* Project Details */}
      <div className="relative bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-800 font-semibold mb-3">My Role</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  User Research
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Prototyping
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-800 font-semibold mb-3">Tools Used</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Figma size={16} className="text-slate-500" />
                  Figma
                </li>
                <li className="flex items-center gap-2">
                  <Github size={16} className="text-slate-500" />
                  GitHub
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-400 to-pink-500"></div>
                  Adobe Suite
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-800 font-semibold mb-3">Timeline</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Research: 2 weeks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Design: 4 weeks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Testing: 3 weeks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-600 text-sm">
              © 2024 Momentum Case Study. All designs and concepts are protected.
            </div>
            
            <div className="flex items-center gap-6">
              <button className="text-slate-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">
                View Prototype
              </button>
              <button className="text-slate-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">
                Download Case Study
              </button>
              <button className="text-slate-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium">
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors duration-300 group">
              <span className="text-xs font-medium">SCROLL FOR DETAILS</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioUI;