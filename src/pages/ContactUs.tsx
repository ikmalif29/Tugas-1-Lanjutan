import React from "react";
import foto from "../assets/foto2.jpg";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Profile Section */}
          <div className="relative group">
            <img
              src={foto}
              alt="Imals"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-xl font-bold">Imals Fao</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
              Contact Me
            </h1>
            <p className="mb-4 text-gray-300">
              Hi, I'm <span className="text-orange-400 font-semibold">Imals</span>. Below is a little about me:
            </p>
            <ul className="mb-6 space-y-2">
              <li>
                <span className="font-semibold text-orange-400">Name:</span>{" "}
                Imals Fao
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Cilacap : 29 September
                </span>{" "}
                [City], [Date]
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Faculty & Major:
                </span>{" "}
                Faculty of [Teknik], Major in [Teknik Industri]
              </li>
              <li>
                <span className="font-semibold text-orange-400">Hobby:</span>{" "}
                Mountain Climbing
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <a
                href="mailto:imals@example.com"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transform hover:scale-105 transition duration-300"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
