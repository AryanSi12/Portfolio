import React from 'react';
import { motion } from 'framer-motion';
const ContactMe = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-7xl text-center p-8 cursor-pointer font-amatic-sc font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-pink-300 hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 transition-colors duration-300">Contact Me</h2>
        <p className="text-xl text-gray-300 mb-8">
          Feel free to reach out to me via email.
        </p>
        <motion.div
        animate={{
            scale: [1, 2, 2, 1, 1],
            
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
        <a href="mailto:aryan23328@gmail.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="src/assets/project/icons8-gmail-100.png" 
            alt="Gmail Icon" 
            className="mx-auto w-16 h-16 hover:scale-110 transition-transform duration-300"
          />
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
