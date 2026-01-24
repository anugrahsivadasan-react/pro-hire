 import { motion } from "framer-motion";
import React from "react";
import { FaFileAlt, FaArrowUp, FaPercentage, FaBullhorn } from "react-icons/fa";

const letterCards = [
  {
    title: "Appointment",
    icon: <FaFileAlt className="text-[#107594] text-2xl" />,
    bg: "bg-blue-50",
    steps: [
      "Review appointment details",
      "Confirm start date",
      "Generate appointment letter",
    ],
  },
  {
    title: "Promotion",
    icon: <FaArrowUp className="text-green-600 text-2xl" />,
    bg: "bg-green-50",
    steps: [
      "Analyze performance",
      "Determine new role",
      "Issue promotion letter",
    ],
  },
  {
    title: "Increment",
    icon: <FaPercentage className="text-yellow-600 text-2xl" />,
    bg: "bg-yellow-50",
    steps: [
      "Evaluate current salary",
      "Set increment percentage",
      "Generate increment letter",
    ],
  },
  {
    title: "Offer",
    icon: <FaBullhorn className="text-pink-600 text-2xl" />,
    bg: "bg-pink-50",
    steps: [
      "Verify job requirements",
      "Review compensation package",
      "Draft offer letter",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // each card animates one after another
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 }, // start off-screen to the right
  visible: { opacity: 1, x: 0 },  // slide into place
};

export default function LatestLettersSection() {
  return (
    <motion.section
      className="py-16 px-6 max-w-7xl mt-2 mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-20">
        Latest <span className="text-[#faa302]"> Generated Letters</span>
      </h2>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {letterCards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`rounded-xl shadow-md p-6 ${card.bg} flex flex-col justify-between`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              {card.icon}
            </div>
            <ul className="text-gray-700 text-sm space-y-2">
              {card.steps.map((step, i) => (
                <li key={i}>• {step}</li>
              ))}
            </ul>
            <button className="mt-14 text-[#faa302] font-semibold hover:underline  cursor-not-allowed opacity-70 ">
              View Details
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <a
          className="inline-block bg-[#faa302] mt-24 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#0d5a6a] transition  cursor-not-allowed opacity-70"
        >
          View All
        </a>
      </div>
    </motion.section>
  );
}