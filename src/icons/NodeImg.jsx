import React from 'react';
import { motion } from 'framer-motion';

function NodeImg() {
  return (
    <motion.div
      className="w-24 h-24 border-2 border-neutral-700 rounded-2xl p-4"
      animate={{ y: [0,-10, 0] }} // Up and down motion
      transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay:0.2}}
    >
      <img 
        className="w-full h-full object-cover" 
        src="src/assets/project/icons8-node-js-48.png" 
        alt="Node.js Icon" 
      />
    </motion.div>
  );
}

export default NodeImg;
