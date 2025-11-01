import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Header */}
      <header className="bg-transparent px-12 py-4 fixed top-0 w-full z-50">
        <div className="flex justify-end items-center relative">
          {/* Animated Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {/* Bar 1 */}
              <span
                className={`block w-6 h-0.5 bg-whimsical-text-dark transition-transform duration-300 ease-in-out
                  ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              {/* Bar 2 */}
              <span
                className={`block w-6 h-0.5 bg-whimsical-text-dark transition-opacity duration-300 ease-in-out
                  ${isOpen ? 'opacity-0' : 'opacity-100'} my-1`}
              />
              {/* Bar 3 */}
              <span
                className={`block w-6 h-0.5 bg-whimsical-text-dark transition-transform duration-300 ease-in-out
                  ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-40 bg-transparent text-white z-100 shadow-lg flex flex-col justify-start items-start p-0"
    >
      {/* Close Button (if applicable) */}
      {/* <button ...>X</button> */}

      {/* Navigation Links */}
      <nav className="flex flex-col gap-0 text-lg mt-0 w-full">
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-whimsical-text-dark bg-whimsical-lavender w-40 py-5 px-5 transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-whimsical-text-dark bg-whimsical-lavender w-40 py-5 px-5 transition-colors"
        >
          About
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-whimsical-text-dark bg-whimsical-lavender w-40 py-5 px-5 transition-colors"
        >
          Contact
        </a>
      </nav>
    </motion.aside>
  )}
</AnimatePresence>
    </>
  );
};

export default Navbar;
