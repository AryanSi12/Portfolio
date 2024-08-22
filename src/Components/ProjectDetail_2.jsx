import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail_2 = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h1
            className="cursor-pointer text-4xl md:text-6xl font-amatic-sc font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-300 hover:from-yellow-100 hover:via-yellow-300 hover:to-yellow-100 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Fruit and Vegetable Classification Project
          </motion.h1>
          <motion.p
            className="font-mono text-base md:text-xl text-slate-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A machine learning model developed to classify 36 different types of fruits and vegetables using a Convolutional Neural Network (CNN) algorithm.
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
              src="public/project2.jpg"
              alt="Fruit and Vegetable Classification"
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
              This project leverages a deep learning model, specifically a Convolutional Neural Network (CNN), to accurately classify images of 36 different fruits and vegetables. The model was trained on a diverse dataset containing thousands of images, ensuring high accuracy and robustness.
            </p>
            <p className="font-mono text-base md:text-lg text-slate-300 mt-4">
              The classification model was built using Python and TensorFlow, with a focus on optimizing the network architecture for better performance. The resulting model can be integrated into various applications, such as automated sorting systems in the food industry.
            </p>

            <h2 className="text-2xl md:text-3xl font-amatic-sc font-bold text-slate-200 mt-8 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside font-mono text-base md:text-lg text-slate-300">
              <li>High accuracy in classifying 36 different types of fruits and vegetables</li>
              <li>Optimized CNN architecture for better performance</li>
              <li>Comprehensive dataset with thousands of images</li>
              <li>Potential for integration into real-world applications</li>
              <li>Scalable model capable of handling large datasets</li>
            </ul>

            <div className="mt-8">
              <a
                href="https://github.com/AryanSi12/FruitsVegesClassificationModel"
                className="inline-block px-6 py-3 mt-6 text-base md:text-lg font-medium rounded-full shadow-md bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100 hover:bg-gradient-to-l hover:from-green-100 hover:via-green-300 hover:to-green-100 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
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

export default ProjectDetail_2;
