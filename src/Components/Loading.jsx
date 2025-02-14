import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        {/* Football Image Rotating */}
        <motion.img
          src="./football.png"
          alt="Football"
          className="absolute w-[ h-[]"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Circular Border Animation */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeDasharray="251.2" // Full circle (2 * π * r)
            strokeDashoffset="0"
            animate={{
              rotate: [0, 360], // Full rotation
              strokeDashoffset: [0, 251.2], // Shrinking effect
            }}
            transition={{ duration: 10, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
