import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    {/* Page Heading */}
   
    {/* Problem Statement */}
    <motion.div 
      className="max-w-4xl mb-8 bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ 
        y: -8, // Moves up on hover
        background: "linear-gradient(to right, #00a3cc, #ff6b81)", // Softer gradient
        borderColor: "#fbbf24" // Softer golden border
      }}
      whileTap={{ scale: 0.98 }} // Optional: Scale down on click
    >
      <h3 className="text-2xl font-bold text-gray-300 mb-4 p-4 hover:text-black">Problem Statement:</h3>
      <p className="text-lg text-gray-400 leading-relaxed p-4 hover:text-black">
        The problem we are addressing is the gradual destruction and loss of India's rich heritage and culture due to urbanization, neglect, and natural disasters. This not only erases valuable historical landmarks but also diminishes the cultural significance that connects us to our roots. Preserving and experiencing these cultural treasures has become an essential task for future generations.
      </p>
    </motion.div>

    {/* Our Solution */}
    <motion.div 
      className="max-w-4xl bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      whileHover={{ 
        y: -8, // Moves up on hover
        background: "linear-gradient(to right, #00a3cc, #ff6b81)", // Softer gradient
        borderColor: "#fbbf24" // Softer golden border
      }}
      whileTap={{ scale: 0.98 }} // Optional: Scale down on click
    >
      <h3 className="text-2xl font-bold text-gray-300 mb-4 p-4 hover:text-black">Our Solution:</h3>
      <p className="text-lg text-gray-400 leading-relaxed p-4 hover:text-black">
        Using Unreal Engine, we can digitally reconstruct heritage sites, breathing life back into the past. Additionally, integrating Virtual Reality (VR) technology allows for an immersive and realistic experience, enabling users to virtually explore and interact with these recreated environments. This solution ensures the preservation and accessibility of India's cultural heritage for generations to come.
      </p>
    </motion.div>
    <motion.h2 
      className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-600 mb-6 mt-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      >
      Products
    </motion.h2>

    <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-600 mb-6 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          >
          Features
      </motion.h2>


      {/* Features Section */}
      <div className="max-w-6xl mt-16">
      
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: VR */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Virtual Reality (VR)</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              VR immerses users in a 3D environment that feels real. It enhances training and learning experiences through realistic simulations.
            </p>
          </motion.div>

          {/* Feature 2: Unreal Engine */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Unreal Engine</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              Unreal Engine provides a powerful platform for creating high-quality, interactive 3D content for simulations, gaming, and VR experiences.
            </p>
          </motion.div>

          {/* Feature 3: Logitech Gear */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Logitech Gear</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              Logitech G293 gear enables users to interact with VR simulations in a more realistic and immersive way, enhancing the user experience.
            </p>
          </motion.div>

          {/* Feature 4: Odor Generation Sensor Using Arduino */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Odor Generation Sensor Using Arduino</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              The Arduino-powered odor generation sensor simulates various smells, enhancing the VR experience by adding another layer of immersion.
            </p>
          </motion.div>

          {/* Feature 5: AR */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Augmented Reality (AR)</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              AR overlays digital content onto the real world, enhancing user interaction by blending virtual elements with real-world views.
            </p>
          </motion.div>

          {/* Feature 6: Reality Capture */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Reality Capture</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              Reality Capture enables the 3D scanning and reconstruction of real-world objects and environments for use in VR simulations.
            </p>
          </motion.div>

          {/* Feature 7: Dummy Feature */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Dummy Feature 1</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              Description for dummy feature 1.
            </p>
          </motion.div>

          {/* Feature 8: Dummy Feature */}
          <motion.div
            className="bg-gray-800 border-4 border-gray-600 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
              background: "linear-gradient(to right, #00a3cc, #ff6b81)",
              borderColor: "#FBBF24",
            }}
          >
            <h4 className="text-lg font-semibold text-gray-300">Dummy Feature 2</h4>
            <p className="text-sm text-gray-400 leading-relaxed hover:text-black">
              Description for dummy feature 2.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
