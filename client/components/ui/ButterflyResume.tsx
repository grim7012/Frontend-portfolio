// components/ButterflyResume.tsx
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import HarshitaCV1 from './HarshitaCV1.pdf'; // Adjust the path as necessary

const ButterflyResume = () => {
  return (
    <div className="flex flex-col items-center gap-4 z-50">
      <motion.a
        href="/HarshitaCV1.pdf"
        download
        whileHover={{ y: -6, rotate: [0, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        className="text-[2rem] opacity-70 text-whimsical-lavender hover:opacity-100 hover:drop-shadow-lg "
      >
        <span role="img" aria-label="butterfly">
          🦋
        </span>
      </motion.a>

      <motion.div
        className="w-px h-20 bg-whimsical-lavender/60 mt-2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '5rem', opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />
    </div>
  );
};

export default ButterflyResume;