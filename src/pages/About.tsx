import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Our Artist Gallery
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Your destination to explore and celebrate the world of art. Discover
            masterpieces, connect with artists, and be part of a thriving art
            community.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diverse Art Collection",
                description:
                  "Explore a wide range of art styles, from classical to contemporary, created by talented artists worldwide.",
                icon: "🎨",
              },
              {
                title: "Connect with Artists",
                description:
                  "Interact directly with artists, learn their stories, and gain insights into their creative process.",
                icon: "🤝",
              },
              {
                title: "Seamless Experience",
                description:
                  "Our user-friendly platform ensures a smooth and enjoyable browsing experience.",
                icon: "✨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Ready to Explore the World of Art?
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            Dive into our gallery and discover the beauty and creativity that
            art brings to life.
          </motion.p>
          <motion.button
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            Visit Gallery
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default About;
