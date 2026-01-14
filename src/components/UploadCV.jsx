import React, { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { motion, useInView } from "framer-motion";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function UploadCV({ onCVParsed }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedCV");
    const savedText = localStorage.getItem("cvText");
    if (savedFile && savedText) {
      setFile(JSON.parse(savedFile));
      setText(savedText);
      onCVParsed(savedText);
    }
  }, []);

  const handleFileChange = async (e) => {
    const f = e.target.files[0];
    if (!f) return;

    setFile(f);
    localStorage.setItem("uploadedCV", JSON.stringify({ name: f.name }));

    const reader = new FileReader();
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map((item) => item.str).join(" ") + "\n";
      }

      setText(fullText);
      localStorage.setItem("cvText", fullText);
      onCVParsed(fullText);
    };

    reader.readAsArrayBuffer(f);
  };

  const removeFile = () => {
    setFile(null);
    setText("");
    localStorage.removeItem("uploadedCV");
    localStorage.removeItem("cvText");
    onCVParsed("");
  };

  return (
    <section className="relative w-full max-w-4xl  mx-auto px-4 py-10">
      {/* Upload Card with scroll-triggered animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-xl  rounded-3xl shadow-2xl border border-gray-200 p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-3xl"
      >
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3 text-center">
            Upload Employee CV
          </h2>
          <p className="text-base text-gray-600 mb-8 text-center">
            Upload a PDF resume to analyze ATS compatibility using AI
          </p>

          <label
            htmlFor="cv-upload"
            className="flex flex-col items-center justify-center gap-4 p-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300
            border-gray-300 hover:border-[#107594] hover:bg-cyan-50"
          >
            <div className="text-6xl">📄</div>
            <p className="text-gray-700 font-semibold text-lg">
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

        <button
          className="mt-6 w-full bg-gradient-to-r from-[#107594] to-[#71AEC1] text-white py-3 rounded-xl font-semibold
          hover:from-[#0d5a6a] hover:to-[#5ba0b5] transition-all duration-300 shadow-lg"
        >
          Check ATS Score (AI/ML)
        </button>
      </motion.div>
    </section>
  );
}