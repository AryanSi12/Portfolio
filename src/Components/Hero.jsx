import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-10 md:py-20 overflow-x-hidden"> 
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-0 w-full"> 
        
       
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
        
        >
          <motion.div
          animate={{ y: [0, -10, 0] }} // Opposite up and down motion
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
          className="w-64 h-72 sm:w-80 sm:h-96 md:w-[28rem] md:h-[32rem] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl border-blue-200 hover:border-blue-500 transition-all duration-500 ease-in-out">
            <img
              src="public/profile_image-3.jpg"
              alt="Aryan Singh"
              className="cursor-pointer border-2 border-neutral-700 rounded-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left md:mt-0"
          initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
        animate={{ y: [0, 10, 0] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-amatic-sc font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-pink-300 hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 transition-colors duration-300">
            Hi, I'm Aryan Singh
          </h1>

          <p className="font-mono mt-4 text-base sm:text-lg md:text-xl text-slate-300 transition-colors duration-300">
            I’m a passionate developer with expertise in both frontend and backend development.
            My experience spans building web applications, creating dynamic user interfaces, and ensuring seamless user experiences.
            <br />
            I also have strong problem-solving skills, which allow me to approach challenges with a clear and analytical mindset. Whether it's debugging complex code, optimizing performance, or finding innovative solutions to unique problems, I enjoy the process of breaking down issues and methodically working through them.
          </p>

          <a
            href="/Aryan_Resume.pdf"
            download="Aryan_Resume.pdf"
            className="inline-block mt-6 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-medium rounded-full shadow-md bg-gradient-to-r from-pink-100 via-pink-300 to-pink-100 hover:bg-gradient-to-l hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Click to Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
