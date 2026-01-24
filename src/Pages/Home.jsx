import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadCV from "../components/UploadCV";
import EmployeeForm from "../components/EmployeeForm";
import banner from "../assets/banner.jpg";
import GeneratedLettersSection from "../components/Homepage/GeneratedLettersSection";
import PDFDownloadButton from "../components/PDFDownloadButton";
// import {
//   generateAppointmentLetter,

// } from "../templates/appointmentLetter";

// import incrementLetter from "../templates/incrementLetter";
// import offerLetter from "../templates/offerLetter";

import { companyTemplates } from "../templates/companyTemplates";
import Slams from "../assets/slamsbg.png";
import ziyaaaaBg from "../assets/ziyaBG.png";
import { motion, useScroll, useTransform } from "framer-motion";
import LatestLettersSection from "../components/Homepage/LatestLettersSection";
import LetterPreview from "../components/LetterPreview";




const Home = () => {
  const [user] = useState(null);
  


  

  // Animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

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

  // CV Parser Handler
  const handleCVParsed = (data) => {
    console.log("Parsed CV Data:", data);
    setEmployee((prev) => ({
      ...prev,
      name: data.name || prev.name,
      designation: data.designation || data.job_role || prev.designation,
      email: data.email || prev.email,
    }));
  };

 const scrollToTarget = () => {
  const target = document.getElementById("upload-cv-section");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};



  return (

    <div className="min-h-screen bg-gray-900 flex flex-col overflow-x-hidden ">

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Banner Section */}
      <motion.div
        className="relative h-[900px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          scale,
          opacity,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Smooth fade into white */}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 pointer-events-none"></div>


        {/* Hero Content */}
     <section className="relative ml-[100px] flex flex-col items-start justify-center md:px-20 py-40 space-y-6 w-full md:w-1/2 z-10">
  <h2 className="text-4xl md:text-7xl font-[900] text-white drop-shadow-sm">
    Welcome to Pro-Hire{" "}
    <span className="text-[#faa302]">{user?.name || "Ziya Academy"}</span>!
  </h2>

  <p className="text-xl md:text-2xl text-white font-medium">
    Generate professional letters in seconds, not hours!!!
  </p>

  <button
    onClick={scrollToTarget}
      className="bg-[#faa302] hover:bg-[#71AEC1] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-md transition-all duration-300"
  >
    Generate letters
  </button>
</section>
      </motion.div>

      {/* Workflow Heading */}

      <div className="flex-col justify-center text-center mt-20">
        <h1 className="text-[50px] text-white font-[800]">One Seamless Workflow</h1>
        <p className="text-[20px] font-[500] text-white ">
          Generate Offers, Appointments, and promotion letters in a streamlined, efficient process.
        </p>
      </div>

      {/* Step Indicator */}

     <motion.section
  className="py-16 px-4 text-center"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-[#faa302] mb-8">Your 3-Step Workflow</h2>
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
        <div className="w-8 h-8 rounded-full bg-[#faa302] text-white flex items-center justify-center font-bold">
          {step.number}

        </div>
        <span>{step.label}</span>
      </motion.div>
    ))}
  </div>
      </motion.section>

      {/* Upload CV + Employee Form */}
   <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-4 items-stretch">
  
  {/* Left Column */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full md:w-1/2 flex flex-col gap-4 h-full"
  >
    <UploadCV id="upload-cv-section"
    onCVParsed={handleCVParsed} />

  <div className="w-full">
  <label className="block text-sm font-semibold text-white mb-2">
    Select Company
  </label>

  <div className="relative">
    <select
      value={selectedCompany}
      onChange={(e) => setSelectedCompany(e.target.value)}
      className="w-full appearance-none bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-600 
                 focus:outline-none focus:ring-2 focus:ring-[#faa302] focus:border-[#faa302] transition duration-200"
    >
      <option value="Ziya">Ziya Academy</option>
      <option value="Slams">Slams Edu Tech</option>
    </select>

    {/* Custom dropdown arrow */}
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
</div>
  </motion.div>

  {/* Right Column */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="w-full md:w-1/2 flex h-full"
  >
    <EmployeeForm
      data={employee}
      setData={setEmployee}
      onSubmit={updateLetters}
    />
  </motion.div>

</div>



  

  






<GeneratedLettersSection
  letters={letters}
  selectedCompany={selectedCompany}
  companyBackgrounds={companyBackgrounds}
/>

{/* <LetterPreview title="Appointment Letter" text={letters.appointment} bgImage={companyBackgrounds[selectedCompany]} /> <PDFDownloadButton text={letters.appointment} fileName="Appointment_Letter.pdf" bgImage={companyBackgrounds[selectedCompany]} /> <LetterPreview title="Offer Letter" text={letters.offer} bgImage={companyBackgrounds[selectedCompany]} /> <PDFDownloadButton text={letters.offer} fileName="Offer_Letter.pdf" bgImage={companyBackgrounds[selectedCompany]} /> <LetterPreview title="Increment Letter" text={letters.increment} bgImage={companyBackgrounds[selectedCompany]} /> <PDFDownloadButton text={letters.increment} fileName="Increment_Letter.pdf" bgImage={companyBackgrounds[selectedCompany]} /> */}


<motion.div
    className="bg-white mt-24"
        variants={itemVariants}>  
<LatestLettersSection/>
  </motion.div>




      {/* Mail Button */}
      {employee.email && (
        <div className="mt-4 text-center">
          <a
            href={`mailto:${employee.email}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
