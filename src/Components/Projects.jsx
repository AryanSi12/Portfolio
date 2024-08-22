import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'End to End Blogging Platform',
      description: 'Developed a fully functional blogging website with modern React techniques and best practices. Utilized Redux for state management and integrated production-grade hooks such as React Hook Form for handling form validation and submission, and forwardRef for managing component refs.',
      image: 'public/project1.jpeg',
      technologies: ['React', 'Redux', 'Tailwind', 'Appwrite', 'React Hook Form'],
    },
    {
      id: 2,
      title: 'Fruits and Vegetables Classification Model',
      description: 'Built an image classification model using CNN. Model identifies the features of an image and hence classifies which fruit or vegetable it is. Used TensorFlow framework and matplotlib and numpy libraries for visual representation of accuracy scores.',
      image: 'public/project2.jpg',
      technologies: ['Python', 'CNN', 'Numpy', 'Pandas'],
    },
    {
      id: 3,
      title: 'Task Management Application',
      description: 'A task management tool built with React and Redux, allowing users to efficiently create, edit, and manage tasks. The app features task categorization, priority setting, and real-time search, all powered by Redux for reliable state management.',
      image: 'public/project_3.jpeg',
      technologies: ['React', 'Redux', 'Appwrite', 'Tailwind'],
    },
  ];

  return (
    <section className="py-20">
      <motion.div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-amatic-sc font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-pink-300 hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 transition-colors duration-300 text-center mb-20"
        >
          My Projects
        </motion.h2>
        <motion.div className="flex flex-col items-center gap-12 md:gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/Project${project.id}`);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        className="relative w-full md:w-96 h-72 cursor-pointer border-2 border-neutral-700 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} bg-black bg-opacity-60 rounded-lg`}
        >
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Show Project
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        className="text-center md:text-left md:max-w-md"
      >
        <h3 className="cursor-pointer font-amatic-sc font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-l mb-2 from-blue-100 via-blue-300 to-blue-300">
          {project.title}
        </h3>
        <p className="text-gray-100 font-mono mb-4">
          {isExpanded ? project.description : `${project.description.substring(0, 100)}...`}
        </p>
        <button
          className="text-blue-300 hover:underline focus:outline-none font-semibold"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
        <div className="mt-4 flex flex-wrap gap-3">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
