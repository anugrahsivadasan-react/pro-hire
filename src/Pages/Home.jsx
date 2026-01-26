import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadCV from "../components/UploadCV";
import EmployeeForm from "../components/EmployeeForm";
import banner from "../assets/banner.jpg";
import GeneratedLettersSection from "../components/Homepage/GeneratedLettersSection";
import PDFDownloadButton from "../components/PDFDownloadButton";
import { companyTemplates } from "../templates/companyTemplates";
import Slams from "../assets/slamsbg.png";
import ziyaaaaBg from "../assets/ziyaBG.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import LatestLettersSection from "../components/Homepage/LatestLettersSection";
import LetterPreview from "../components/LetterPreview";
import { useLocation } from "react-router-dom";



const Home = () => {
  const [user] = useState(null);

   const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const scrollToTarget = () => {
    const target = document.querySelector(".upload-cv-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animations
  const { scrollYProgress } = useScroll();
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
const scale = useSpring(rawScale, {
  stiffness: 60,
  damping: 20,
  mass: 0.2,
});

const rawOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
const opacity = useSpring(rawOpacity, {
  stiffness: 60,
  damping: 20,
  mass: 0.2,
});

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    salary: "",
    department: "",
    joiningDate: "",
    email: "",
    address:"",
  });

  const [letters, setLetters] = useState({
    appointment: "",
    offer: "",
    increment: "",
  });

  const [selectedCompany, setSelectedCompany] = useState("Ziya");

  const companyBackgrounds = {
    Ziya: ziyaaaaBg,
    Slams: Slams,
  };

  useEffect(() => {
    updateLetters();
  }, [
    selectedCompany,
    employee.name,
    employee.designation,
    employee.salary,
    employee.department,
    employee.joiningDate,
    employee.address
  ]);
  const updateLetters = () => {
    const templates = companyTemplates[selectedCompany];
    if (!templates) return;

    setLetters({
      appointment: templates.appointment(employee),
      offer: templates.offer(employee),
      increment: templates.increment(employee),
    });
  };

  const handleCVParsed = (data) => {
    console.log("Parsed CV Data:", data);
    setEmployee((prev) => ({
      ...prev,
      name: data.name || prev.name,
      designation: data.designation || data.job_role || prev.designation,
      email: data.email || prev.email,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Banner Section */}
    <motion.div
  className="relative h-[900px] w-full bg-cover bg-center overflow-hidden flex items-center"
  style={{
    backgroundImage: `url(${banner})`,
    scale,
    opacity,
    willChange: "transform",
    backfaceVisibility: "hidden",
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 pointer-events-none"></div>

  {/* Hero Content */}
<section className="relative z-10 max-w-3xl px-6 md:px-20 lg:px-32 space-y-8">    
    <motion.h2
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
        delay: 0.2,
      }}
      className="text-4xl md:text-7xl font-[900] font-poppins text-white drop-shadow-sm leading-tight"
    >
      Welcome to Pro-Hire-ziya{" "}
      <span className="text-[#faa302]">{user?.name || "Ziya Academy"}</span>!
    </motion.h2>

    <p className="text-xl md:text-2xl text-white font-dmsans font-medium leading-relaxed">
      Generate professional letters in seconds, not hours!!!
    </p>

    <button
 onClick={() => {
    document.getElementById("generate")?.scrollIntoView({
      behavior: "smooth",
    });
  }}      className="
        relative overflow-hidden ripple
        px-6 md:px-8 py-3 md:py-4
        rounded-xl
        text-base md:text-lg font-inter font-semibold
        text-white
        bg-[#faa302]/20
        backdrop-blur-md
        border border-[#faa302]/40
        shadow-[0_4px_20px_rgba(250,163,2,0.25)]
        transition-all duration-300
        active:scale-[0.96] active:shadow-[0_2px_10px_rgba(250,163,2,0.2)]
      "
    >
      {/* Animated Border */}
      <span
        className="
          absolute inset-0 rounded-xl
          border-2 border-transparent
          animate-borderGlow
          pointer-events-none
        "
      ></span>

      {/* Forward Shine */}
      <span
        className="
          absolute inset-0 rounded-xl
          bg-gradient-to-r from-white/20 to-transparent
          opacity-40
          mix-blend-overlay
          animate-shine
          pointer-events-none
        "
      ></span>

      {/* Reverse Shine */}
      <span
        className="
          absolute inset-0 rounded-xl
          bg-gradient-to-l from-white/10 to-transparent
          opacity-0
          mix-blend-overlay
          hover:opacity-40
          animate-reverseShine
          pointer-events-none
        "
      ></span>

      Generate letters
    </button>
  </section>
</motion.div>

      {/* Workflow Heading */}

      <motion.div 
       initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      className="flex-col justify-center text-center mt-20"
      id="view">


        <h1 className="text-[50px] text-white font-[800] font-poppins">
          One Seamless Workflow
        </h1>
        <p className="text-[20px] font-[500] text-white font-dmsans">
          Generate Offers, Appointments, and promotion letters in a streamlined,
          efficient process.
        </p>
      </motion.div>

      {/* Step Indicator */}
      <motion.section
        className="py-16 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#faa302] mb-8 mt-10 font-poppins">
          Your 3-Step Workflow
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white font-medium">
          {[
            { number: "1", label: "Upload CV ->" },
            { number: "2", label: "Fill Employee Details  ->" },
            { number: "3", label: "Generate Letters " },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#faa302] text-white flex items-center justify-center font-bold font-poppins">
                {step.number}
              </div>
              <span className="font-dmsans">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>


    {/* Upload CV + Employee Form */}
<div className="max-w-6xl mx-auto px-4">

  {/* Two Cards Side-by-Side */}
  <div className="flex flex-col md:flex-row gap-10 items-stretch">

    {/* Left Column */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2 flex flex-col gap-4"
    >
      <UploadCV id="upload-cv-section" onCVParsed={handleCVParsed} />
    </motion.div>

    {/* Right Column */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // SAME ANIMATION
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full md:w-1/2 flex"
    >
      <EmployeeForm
        data={employee}
        setData={setEmployee}
        onSubmit={updateLetters}
      />
    </motion.div>

  </div>

  {/* Full-Width Dropdown Below Both Cards */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mt-8 w-full"
  >
    <label className="block text-sm font-semibold text-white mb-2 font-dmsans">
      Select Company
    </label>

    <div className="relative">
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        className="w-full appearance-none bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-600 
        focus:outline-none focus:ring-2 focus:ring-[#faa302] focus:border-[#faa302] transition duration-200 font-dmsans"
      >
        <option value="Ziya">Ziya Academy</option>
        <option value="Slams">Slams Edu Tech</option>
      </select>

      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"

        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  </motion.div>

</div>

      {/* Generated Letters */}
      <div id="letter" className="mt">
      <GeneratedLettersSection
        letters={letters}
        selectedCompany={selectedCompany}
        companyBackgrounds={companyBackgrounds}
      />
      </div>

      {/* Latest Letters */}
        <LatestLettersSection />
      

      {/* Mail Button */}
      {employee.email && (
        <div className="mt-4 text-center">
          <a
            href={`mailto:${employee.email}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-inter"
          >
            Send Email to Employee
          </a>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;