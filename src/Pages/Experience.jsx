import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-bold text-gray-100 mb-6"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Our Experience
        </span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 leading-relaxed max-w-4xl"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We have been working at the incubation center at Sri Sai Ram Engineering College for the past 1 and a half years, exploring technologies like Gaming, VR, AR, Logitech Gear, and Leap Sensor.
      </motion.p>

      <motion.div
        className="mt-8 space-y-6 max-w-4xl"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Project 1 */}
        <motion.div
          className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            y: -8, // Moves up on hover
            background: "linear-gradient(to right, #00a3cc, #ff6b81)", // Softer gradient on hover
            borderColor: "#fbbf24", // Softer golden border
            color : "#000000"
          }}
        >
          <p className="text-lg text-gray-400 leading-relaxed hover:text-black">
            <strong>Project 1:</strong> For the company named Lux and Decibels, we created an environment in Unreal Engine and connected it to Logitech G293 gear. This allows users to train themselves driving from easy conditions to tough terrains.
          </p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            y: -8, // Moves up on hover
            background: "linear-gradient(to right, #00a3cc, #ff6b81)", // Softer gradient on hover
            borderColor: "#fbbf24",        
            color:  "#000000"

          }}
        >
          <p className="text-lg text-gray-400 leading-relaxed hover:text-black">
            <strong>Project 2:</strong> For an automobile company, we developed a virtual assembly environment for Common Rail in VR. The environment was created in Unreal Engine, with the Common Rail model designed in Blender. Assembly instructions and user interactions were enabled through VR integration.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
