import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadCV from "../components/UploadCV";
import EmployeeForm from "../components/EmployeeForm";
import LetterPreview from "../components/LetterPreview";
import PDFDownloadButton from "../components/PDFDownloadButton";
import {
  generateAppointmentLetter,
  generateOfferLetter,
  generateIncrementLetter,
} from "../templates/appointmentLetter";
import bgImage from "../assets/bg.png";
import { parseCV } from "../utils/cvParser";

const Home = () => {
  const [cvText, setCvText] = useState("");

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

  const updateLetters = () => {
    setLetters({
      appointment: generateAppointmentLetter(employee),
      offer: generateOfferLetter(employee),
      increment: generateIncrementLetter(employee),
    });
  };

  // ✅ CV Parser Handler
  const handleCVParsed = (text) => {
    setCvText(text);

    const parsed = parseCV(text);

    setEmployee((prev) => ({
      ...prev,
      name: parsed.name || prev.name,
      designation: parsed.designation || prev.designation,
      email: parsed.email || prev.email,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto flex-1 p-6">
        {/* Upload CV */}
        <UploadCV onCVParsed={handleCVParsed} />

        {/* Employee Form */}
        <EmployeeForm data={employee} setData={setEmployee} />

        {/* Preview Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={updateLetters}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Preview Letters
          </button>
        </div>

        {/* Appointment Letter */}
        <LetterPreview
          title="Appointment Letter"
          text={letters.appointment}
          bgImage={bgImage}
        />
        <PDFDownloadButton
          text={letters.appointment}
          fileName="Appointment_Letter.pdf"
          bgImage={bgImage}
        />

        {/* Offer Letter */}
        <LetterPreview
          title="Offer Letter"
          text={letters.offer}
          bgImage={bgImage}
        />
        <PDFDownloadButton
          text={letters.offer}
          fileName="Offer_Letter.pdf"
          bgImage={bgImage}
        />

        {/* Increment Letter */}
        <LetterPreview
          title="Increment Letter"
          text={letters.increment}
          bgImage={bgImage}
        />
        <PDFDownloadButton
          text={letters.increment}
          fileName="Increment_Letter.pdf"
          bgImage={bgImage}
        />

        {/* Email Button */}
        {employee.email && (
          <div className="mt-4">
            <a
              href={`mailto:${employee.email}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Email to Employee
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;