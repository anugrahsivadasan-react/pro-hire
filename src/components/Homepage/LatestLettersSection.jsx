 import { motion } from "framer-motion";
import React from "react";
import { FaFileAlt, FaArrowUp, FaPercentage, FaBullhorn } from "react-icons/fa";

const letterCards = [
  {
    title: "Appointment",
    icon: <FaFileAlt className="text-[#faa302] text-2xl" />,
    bg: "bg-[#faa302]/20 border-2 border-[#faa302]/70",
    steps: [
      "Review appointment details",
      "Confirm start date",
      "Generate appointment letter",
    ],
  },
  {
    title: "Promotion",
    icon: <FaArrowUp className="text-[#faa302] text-2xl" />,
    bg: "bg-[#faa302]/20 border-2 border-[#faa302]/70",
    steps: [
      "Analyze performance",
      "Determine new role",
      "Issue promotion letter",
    ],
  },
  {
    title: "Increment",
    icon: <FaPercentage className="text-[#faa302] text-2xl" />,
    bg: "bg-[#faa302]/20 border-2 border-[#faa302]/70",
    steps: [
      "Evaluate current salary",
      "Set increment percentage",
      "Generate increment letter",
    ],
  },
  {
    title: "Offer",
    icon: <FaBullhorn className="text-[#faa302] text-2xl" />,
    bg: "bg-[#faa302]/20 border-2 border-[#faa302]/70",
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

<section className="relative py-16 px-6 w-full mt-2 mx-auto bg-gradient-to-b from-[#ffffff] via-[#555579] to-bg-gray-900">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,transparent_60%)] pointer-events-none"></div>


    <motion.div
      className="relative text-center "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      
      <h2 className="text-5xl font-extrabold text-center mt-[40px] text-gray-900 mb-20">
        Latest <span className="text-[#faa302]"> Generated Letters</span>
      </h2>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
      >
        {letterCards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`rounded-xl shadow-md p-6 max-w-[500px] ${card.bg} flex flex-col justify-between`}
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
          href="/letter-history"
          className="inline-block bg-[#faa302] mt-24 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-transparent border border-[#faa302] transition  cursor-not-allowed opacity-70"
        >
          View All
        </a>
      </div>
    </motion.div>


    </section>
  );
}