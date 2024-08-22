import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail_3 = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h1
            className="cursor-pointer text-4xl md:text-6xl font-amatic-sc font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-purple-300 to-purple-300 hover:from-teal-100 hover:via-teal-300 hover:to-teal-100 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Task Management Application
          </motion.h1>
          <motion.p
            className="font-mono text-base md:text-xl text-slate-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A comprehensive task management application designed to help users organize and track their tasks efficiently with a user-friendly interface and robust feature set.
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
              src="project_3.jpeg"
              alt="Task Management Application"
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
              This Task Management application allows users to create, organize, and track their tasks with ease. It features task creation, categorization, and prioritization, ensuring that users can manage their workload efficiently. The application also includes deadlines, reminders, and progress tracking to enhance productivity.
            </p>
            <p className="font-mono text-base md:text-lg text-slate-300 mt-4">
              Built with a focus on simplicity and performance, this application utilizes React for the frontend, Node.js for the backend, and MongoDB for the database. It incorporates a modern design with intuitive navigation and responsive features.
            </p>

            <h2 className="text-2xl md:text-3xl font-amatic-sc font-bold text-slate-200 mt-8 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside font-mono text-base md:text-lg text-slate-300">
              <li>Task creation with titles, descriptions, and due dates</li>
              <li>Task categorization and prioritization</li>
              <li>Real-time updates and notifications for deadlines and reminders</li>
              <li>Progress tracking with visual indicators</li>
              <li>User authentication and secure login</li>
              <li>Responsive design for mobile and desktop access</li>
            </ul>

            <div className="mt-8">
              <a
                href="https://github.com/AryanSi12/TaskManager"
                className="inline-block px-6 py-3 mt-6 text-base md:text-lg font-medium rounded-full shadow-md bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 hover:bg-gradient-to-l hover:from-purple-100 hover:via-purple-300 hover:to-purple-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
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

export default ProjectDetail_3;
