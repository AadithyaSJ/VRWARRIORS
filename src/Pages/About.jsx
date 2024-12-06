import React from 'react';
import { motion } from 'framer-motion';
import aadhithya from '../assets/aadhithya.jpg';
import Lokesh from '../assets/Lokesh.jpg'
import DivyaShree from '../assets/BlenderGirl.jpg'

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger effect for children
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 mt-39">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold text-white-800"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        ABOUT{' '}
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          VR WARRIORS
        </span>
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        className="mt-4 text-lg text-white-800"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We are a passionate team of developers working on advanced VR simulations and training programs. Our goal is to create immersive experiences for military training using VR technology and motion tracking.
      </motion.p>

      {/* Animated Team Section */}
      <motion.div
        className="mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-2xl font-semibold text-white-800"
          variants={textVariants}
        >
          Meet the Team
        </motion.h3>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <motion.div
            className="flex flex-col items-center space-y-3 w-full"
            variants={imageVariants}
          >
            <motion.img
              src={aadhithya}
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="flex flex-col items-center"
              variants={textVariants}
            >
              <p className="mt-2 text-lg font-medium text-white-800">
                SELVA VIGNESH S M
              </p>
              <p className="text-sm text-white-800">
                Role: Unreal Engine Environment Artist
              </p>
              <p className="text-sm text-white-800">Skills: UE5, Blueprint</p>
              <p className="text-sm text-blue-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/selvavignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-3 w-full"
            variants={imageVariants}
          >
            <motion.img
              src={aadhithya}
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="flex flex-col items-center"
              variants={textVariants}
            >
              <p className="mt-2 text-lg font-medium text-white-800">
                AADITHYA S J
              </p>
              <p className="text-sm text-white-800">
                Role: Unreal Engine Environment Artist
              </p>
              <p className="text-sm text-white-800">Skills: UE5, Blueprint</p>
              <p className="text-sm text-blue-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/selvavignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-3 w-full"
            variants={imageVariants}
          >
            <motion.img
              src={Lokesh}
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="flex flex-col items-center"
              variants={textVariants}
            >
              <p className="mt-2 text-lg font-medium text-white-800">
                LOKESH C M
              </p>
              <p className="text-sm text-white-800">
                Role: Unreal Engine Environment Artist
              </p>
              <p className="text-sm text-white-800">Skills: UE5, Blueprint</p>
              <p className="text-sm text-blue-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/selvavignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-3 w-full"
            variants={imageVariants}
          >
            <motion.img
              src={aadhithya}
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="flex flex-col items-center"
              variants={textVariants}
            >
              <p className="mt-2 text-lg font-medium text-white-800">
                HARRIS RAJA
              </p>
              <p className="text-sm text-white-800">
                Role: Unreal Engine Environment Artist
              </p>
              <p className="text-sm text-white-800">Skills: UE5, Blueprint</p>
              <p className="text-sm text-blue-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/selvavignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-3 w-full"
            variants={imageVariants}
          >
            <motion.img
              src={DivyaShree}
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="flex flex-col items-center"
              variants={textVariants}
            >
              <p className="mt-2 text-lg font-medium text-white-800">
                DIVYA SHREE
              </p>
              <p className="text-sm text-white-800">
                Role: Unreal Engine Environment Artist
              </p>
              <p className="text-sm text-white-800">Skills: UE5, Blueprint</p>
              <p className="text-sm text-blue-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/selvavignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-3 w-full"
            variants={imageVariants}
          >
            <motion.img
              src={aadhithya}
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="flex flex-col items-center"
              variants={textVariants}
            >
              <p className="mt-2 text-lg font-medium text-white-800">
                SHREYA
              </p>
              <p className="text-sm text-white-800">
                Role: Unreal Engine Environment Artist
              </p>
              <p className="text-sm text-white-800">Skills: UE5, Blueprint</p>
              <p className="text-sm text-blue-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/selvavignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Repeat Team Members */}
          {/* Add more team members here using similar structure */}
        </div>
      </motion.div>

      <motion.div
        className="mt-8"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="text-lg text-gray-600">
          We are focused on using the latest VR technologies to enhance
          training effectiveness, safety, and realism for military personnel.
          Our team is dedicated to bringing the future of training to today’s
          military.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
