import React from 'react';
import { motion } from 'framer-motion';

function MySql() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }} // Up and down motion
      transition={{ duration: 1, repeat: Infinity, repeatType: 'loop',  delay:0.2}}
      className="w-24 h-24 border-2 border-neutral-700 rounded-2xl p-2"
    >
      <img 
        className="w-full h-full filter sepia-50 hue-rotate-180 rounded-2xl" 
        src="src/assets/project/programing.png" 
        alt="MySQL Icon" 
      />
    </motion.div>
  );
}

export default MySql;
