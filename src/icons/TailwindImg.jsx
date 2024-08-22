import React from 'react';
import { motion } from 'framer-motion';

function TailwindImg() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }} // Up and down motion
      transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', delay:0.2 }}
    >
      <img 
        className="w-24 h-24 border-2 border-neutral-700 rounded-2xl p-4" 
        src="public/icons8-tailwind-css-48.png" 
        alt="Tailwind CSS Icon" 
      />
    </motion.div>
  );
}

export default TailwindImg;
