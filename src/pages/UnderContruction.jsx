import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function UnderConstruction() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="flex-grow flex items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-4xl w-full text-center">
          {/* Construction Icon */}
          <div className="mb-8 md:mb-12 flex justify-center" data-aos="zoom-in">
            <div className="relative">
              <svg
                className="w-32 h-32 md:w-48 md:h-48 text-blue-600 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              {/* Animated circles */}
              <div className="absolute -inset-4 border-4 border-blue-200 rounded-full animate-ping opacity-20"></div>
              <div className="absolute -inset-8 border-2 border-blue-100 rounded-full animate-pulse opacity-10"></div>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Under Construction
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            This website is currently under development. Please check back soon.
          </p>

          {/* Back to Home Button */}
       
        </div>
      </main>
    </div>
  );
}

export default UnderConstruction;
