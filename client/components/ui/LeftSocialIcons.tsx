// components/LeftSocialIcons.tsx
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      stiffness: 120,
    },
  }),
};

const LeftSocialIcons = () => {
  const icons = [
    {
      Icon: FaLinkedin,
      link: 'https://linkedin.com/in/your-profile',
      color: 'text-whimsical-rose-pink',
    },
    {
      Icon: FaGithub,
      link: 'https://github.com/your-username',
      color: 'text-whimsical-rose-pink',
    },
    {
      Icon: FaTwitter,
      link: 'https://twitter.com/your-handle',
      color: 'text-whimsical-rose-pink',
    },
    {
      Icon: FaInstagram,
      link: 'https://instagram.com/your-handle',
      color: 'text-whimsical-rose-pink',
    },
  ];

  return (
    <>
    <div className="hidden md:flex flex-col items-center gap-6 text-2xl ">

        <br /><br /><br /> <br />
      {icons.map(({ Icon, link, color }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.15 }}
          className={color}
        >
          <Icon />
        </motion.a>
      ))}
      <motion.div
        className="w-px h-24 bg-whimsical-rose-pink/30 mt-2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '6rem', opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />
    </div>
    </>
  );
};

export default LeftSocialIcons;
