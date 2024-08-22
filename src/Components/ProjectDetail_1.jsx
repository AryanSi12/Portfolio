import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail_1 = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h1
            className="cursor-pointer text-4xl md:text-6xl font-amatic-sc font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-pink-300 hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Blogging Platform Project
          </motion.h1>
          <motion.p
            className="font-mono text-base md:text-xl text-slate-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A comprehensive blogging platform built with React, Redux, Appwrite, and Tailwind CSS, using component-based design and production-grade techniques.
          </motion.p>
        </div>

        <div className="md:flex md:items-start mt-32">
          <motion.div
            className="md:w-1/2"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="public/project1.png"
              alt="Blogging Platform"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 md:ml-12 mt-8 md:mt-0"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-amatic-sc font-bold text-slate-200 mb-4">
              Project Overview
            </h2>
            <p className="font-mono text-base md:text-lg text-slate-300">
              This platform allows users to create, edit, and delete posts, as well as interact with posts by liking or disliking them. It features real-time search functionality, user authentication, and a responsive design.
            </p>
            <p className="font-mono text-base md:text-lg text-slate-300 mt-4">
              The application is built using React for the frontend, Redux for state management, Appwrite as the backend service, and Tailwind CSS for styling. It follows a modular, component-based design approach, ensuring scalability and maintainability.
            </p>

            <h2 className="text-2xl md:text-3xl font-amatic-sc font-bold text-slate-200 mt-8 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside font-mono text-base md:text-lg text-slate-300">
              <li>CRUD operations for posts</li>
              <li>User authentication and authorization</li>
              <li>Real-time search suggestions</li>
              <li>Responsive design for mobile and desktop</li>
              <li>Like/Dislike functionality for user interaction</li>
            </ul>

            <div className="mt-8 flex flex-col md:flex-row">
              <a
                href="https://nimble-dodol-1cc05f.netlify.app/"
                className="inline-block px-6 py-3 mb-4 md:mb-0 md:mr-4 text-base md:text-lg font-medium rounded-full shadow-md bg-gradient-to-r from-pink-100 via-pink-300 to-pink-100 hover:bg-gradient-to-l hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                View Project Demo
              </a>
              <a
                href="https://github.com/AryanSi12/Blog_WEBAPP"
                className="inline-block px-6 py-3 text-base md:text-lg font-medium rounded-full shadow-md bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 hover:bg-gradient-to-l hover:from-pink-100 hover:via-pink-300 hover:to-pink-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                View GitHub Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail_1;
