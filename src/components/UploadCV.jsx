
import React, { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { motion, useInView } from "framer-motion";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function UploadCV({ onCVParsed }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 🔁 Restore data after refresh
  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedFile");
    const savedCV = localStorage.getItem("parsedCV");

    if (savedFile) {
      setFile(JSON.parse(savedFile));
    }


    if (savedCV) {
      onCVParsed(JSON.parse(savedCV));
    }
  }, [onCVParsed]);


  const handleFileChange = async (e) => {
    const f = e.target.files[0];
    if (!f) return;

    setLoading(true);

    // Save file name only
    const fakeFile = { name: f.name };
    setFile(fakeFile);
    localStorage.setItem("uploadedFile", JSON.stringify(fakeFile));

    const formData = new FormData();
    formData.append("file", f);

    try {
      const res = await fetch("http://127.0.0.1:8000/parse-resume", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to parse PDF");

      const data = await res.json();

      const parsed = {
        name: data.name || "",
        designation: data.job_role || "",
        email: data.email || "",
        phone: data.phone || "",
      };

      // Save parsed data
      localStorage.setItem("parsedCV", JSON.stringify(parsed));
      onCVParsed(parsed);
    } catch (err) {
      console.error(err);
      alert("Error parsing CV. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    onCVParsed({});
    localStorage.removeItem("uploadedFile");
    localStorage.removeItem("parsedCV");
  };

  return (

    <section className="relative w-full max-w-7xl  mx-auto px-4 py-1">
      {/* Upload Card with scroll-triggered animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-900  rounded-xl shadow-lg border border-white p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-3xl"
      >

        <div>
          <h2 className="text-3xl font-extrabold text-white mb-3 text-center">
            Upload Employee CV
          </h2>
          <p className="text-base text-[#faa302] mb-8 text-center">
            Upload a PDF resume to analyze ATS compatibility using AI
          </p>

          <label
            htmlFor="cv-upload"
            className="flex flex-col items-center justify-center gap-4 p-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300
            border-gray-300 hover:border-[#faa302] hover:bg-gray-500 "
          >
            <div className="text-6xl">📄</div>
            <p className=" font-semibold text-lg text-white">
              Click to upload or drag & drop
            </p>
            <p className="text-sm text-gray-400">PDF files only</p>

            <input
              id="cv-upload"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {loading && (
            <p className="text-center text-sm text-blue-500 mt-3">
              Parsing CV...
            </p>
          )}

          {file && (
            <div className="mt-6 flex items-center justify-between bg-gray-100 border rounded-xl p-4 shadow-sm">
              <div>
                <p className="text-sm font-medium text-gray-700 truncate max-w-[220px]">
                  {file.name}
                </p>
                <p className="text-xs text-green-600">PDF uploaded successfully</p>
              </div>
              <button
                onClick={removeFile}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          )}
        </div>
<div className="relative group w-full">
  <button
    disabled
    className="mt-6 w-full  bg-[#faa302]  text-white py-3 rounded-xl font-semibold
    transition-all duration-300 shadow-lg cursor-not-allowed opacity-70"
  >
    Check ATS Score
  </button>

  {/* Tooltip */}
  <div
    className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
    transition-opacity duration-300 bg-black text-white text-sm px-3 py-1 rounded-lg shadow-md"
  >
    Feature currently not available
    <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-black rotate-45 -translate-x-1/2"></div>
  </div>
</div>


      </motion.div>
    </section>
  );
}