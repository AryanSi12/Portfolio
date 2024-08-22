import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-12 md:py-20 mt-8 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full px-4">
        
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          animate={{ y: [0, -10, 0] }} // Up and down motion
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} // Loop the motion
        >
          <h2 className="text-5xl md:text-7xl cursor-pointer font-amatic-sc font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-pink-300 hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 transition-colors duration-300">
            About Me
          </h2>
          <p className="font-mono mt-4 text-base md:text-xl text-slate-300 transition-colors duration-300">
            I am a fourth-year BTech CSE student at Graphic Era Hill University, Dehradun, currently maintaining a CGPA of 8.6. Throughout my studies, I have gained a keen interest in the field of Computer science due to which I always tend to learn about new technologies and skills.
            <br />
            I have strong problem-solving skills, which allow me to approach challenges with a clear and analytical mindset.<br />
            With a solid foundation in both frontend and backend development, I am passionate about leveraging my skills to build innovative solutions and tackle complex challenges. I am eager to apply my technical knowledge and soft skills in real-world scenarios to make a meaningful impact in the tech industry.
            <br />
            As I prepare to embark on my professional career, I am eager to apply my skills and knowledge to real-world problems, contributing to the tech industry in meaningful ways.
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
          animate={{ y: [0, 10, 0] }} // Opposite up and down motion
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }} // Loop the motion with a slight delay
        >
          <div className="w-[18rem] h-[22rem] md:w-[24rem] md:h-[28rem] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
            <img
              src="public/profile_image.jpg"
              alt="About Me"
              className="w-full h-full border-2 border-neutral-700 rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
