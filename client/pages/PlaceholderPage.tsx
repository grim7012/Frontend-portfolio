import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-whimsical-base via-whimsical-soft-pink to-whimsical-light-blue">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl font-semibold text-whimsical-text-dark hover:text-whimsical-plum transition-colors">
            XYZ
          </Link>
          <div className="hidden md:flex space-x-8 font-body text-whimsical-text-medium">
            <Link to="/" className="hover:text-whimsical-plum transition-colors duration-300">Home</Link>
            <a href="#about" className="hover:text-whimsical-plum transition-colors duration-300">About</a>
            <a href="#work" className="hover:text-whimsical-plum transition-colors duration-300">Work</a>
            <a href="#skills" className="hover:text-whimsical-plum transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-whimsical-plum transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex items-center justify-center min-h-screen px-8">
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="font-heading text-5xl font-bold text-whimsical-text-dark">
            {title}
          </h1>
          <p className="font-body text-lg text-whimsical-text-medium leading-relaxed">
            {description}
          </p>
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-whimsical-lavender/30">
            <p className="font-body text-whimsical-text-medium mb-4">
              This page is coming soon! Continue prompting to add content here.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-whimsical-plum text-white px-8 py-3 rounded-full font-body font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-whimsical-lavender/30">
        <p className="font-body text-whimsical-text-medium">
          © 2024 XYZ. Designed with whimsy and care.
        </p>
      </footer>
    </div>
  );
}
