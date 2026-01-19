import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadCV from "../components/UploadCV";
import EmployeeForm from "../components/EmployeeForm";
import LetterPreview from "../components/LetterPreview";
import PDFDownloadButton from "../components/PDFDownloadButton";
import banner from "../assets/banner.jpg";
import { companyTemplates } from "../templates/companyTemplates";
import Slams from "../assets/slamslogo.jpeg";
import ziyaaaaBg from "../assets/logoHR.png";
import { motion, useScroll, useTransform } from "framer-motion";
import LatestLettersSection from "../components/Homepage/LatestLettersSection";

const Home = () => {
  const [cvText, setCvText] = useState("");
  const [user, setUser] = useState(null);

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

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Banner Section */}
      <motion.div
        className="relative h-[700px] bg-cover bg-center overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>

        {/* Hero Content */}
        <section className="relative ml-[100px] flex flex-col items-start justify-center md:px-20 py-40 space-y-6 w-full md:w-1/2 z-10">
          <h2 className="text-4xl md:text-7xl font-[900] text-white drop-shadow-sm">
            Welcome to Pro-Hire{" "}
            <span className="text-[#107594]">
              {user?.name || "Ziya Academy"}
            </span>
            !
          </h2>

          <p className="text-xl md:text-2xl text-black font-medium">
            Generate professional letters in seconds, not hours!!!
          </p>

          <button className="bg-[#107594] hover:bg-[#71AEC1] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-md transition-all duration-300">
            Generate letters
          </button>
        </section>
      </motion.div>

      {/* Workflow Heading */}
      <div className="flex-col justify-center text-center mt-10">
        <h1 className="text-[50px] text-gray-800 font-[800]">
          One Seamless Workflow
        </h1>
        <p className="text-[20px] font-[500] text-[#4D4D4D]">
          Generate Offers, Appointments, and promotion letters in a streamlined,
          efficient process.
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
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Your 3-Step Workflow
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600 font-medium">
          {[
            { number: "1", label: "Upload CV ->" },
            { number: "2", label: "Fill Employee Details ->" },
            { number: "3", label: "Generate Letters" },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#107594] text-white flex items-center justify-center font-bold">
                {step.number}
              </div>
              <span>{step.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upload CV + Employee Form */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-4 items-start">
        {/* Upload CV */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 self-stretch"
        >
          <UploadCV onCVParsed={handleCVParsed} />
        </motion.div>

        {/* Employee Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 self-stretch"
        >
          <div className="mb-4">
            <label className="font-semibold">Select Company</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full border p-2 rounded-lg mt-1"
            >
              <option value="Ziya">Ziya Academy</option>
              <option value="Slams">Slams Edu Tech</option>
            </select>
          </div>

          <EmployeeForm
            data={employee}
            setData={setEmployee}
            onSubmit={updateLetters}
          />
        </motion.div>
      </div>

      {/* Latest Letters Section */}
      <motion.div className="bg-orange-50 mt-24" variants={itemVariants}>
        <LatestLettersSection />
      </motion.div>

      {/* Letters Preview + Download */}
      <LetterPreview
        title="Appointment Letter"
        text={letters.appointment}
        bgImage={companyBackgrounds[selectedCompany]}
      />
      <PDFDownloadButton
        text={letters.appointment}
        fileName="Appointment_Letter.pdf"
        bgImage={companyBackgrounds[selectedCompany]}
      />

      <LetterPreview
        title="Offer Letter"
        text={letters.offer}
        bgImage={companyBackgrounds[selectedCompany]}
      />
      <PDFDownloadButton
        text={letters.offer}
        fileName="Offer_Letter.pdf"
        bgImage={companyBackgrounds[selectedCompany]}
      />

      <LetterPreview
        title="Increment Letter"
        text={letters.increment}
        bgImage={companyBackgrounds[selectedCompany]}
      />
      <PDFDownloadButton
        text={letters.increment}
        fileName="Increment_Letter.pdf"
        bgImage={companyBackgrounds[selectedCompany]}
      />

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
