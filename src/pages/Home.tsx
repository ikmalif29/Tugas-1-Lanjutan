import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Discover Incredible Artists
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Explore a world of creativity and passion through our curated gallery.
          </motion.p>
          <motion.button
            className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Start Exploring
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            About Our Platform
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            We bring together artists and art enthusiasts to celebrate creativity and innovation. Our platform is designed to inspire and connect.
          </motion.p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Artist Spotlights
              </motion.h3>
              <p className="text-gray-600">
                Discover the stories behind the art and meet the creative minds shaping the future.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Global Reach
              </motion.h3>
              <p className="text-gray-600">
                Connect with artists and art lovers from around the globe.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Inspire Creativity
              </motion.h3>
              <p className="text-gray-600">
                Dive into a collection of awe-inspiring artworks and ignite your imagination.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join Us Today
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Be part of a thriving community that celebrates art in all its forms. Sign up now and start your journey.
        </motion.p>
        <motion.button
          className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default Home;