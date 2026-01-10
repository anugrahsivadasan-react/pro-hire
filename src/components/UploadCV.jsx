import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function UploadCV({ onCVParsed }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedCV");
    const savedText = localStorage.getItem("cvText");
    if (savedFile && savedText) {
      setFile(JSON.parse(savedFile));
      setText(savedText);
      onCVParsed(savedText);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    <section className="relative w-full max-w-xl h-[600px] overflow-hidden">
      {/* Parallax Icons */}
      {[
        { icon: "📄", top: "10%", left: "10%", speed: 0.2 },
        { icon: "🤖", top: "25%", right: "12%", speed: 0.3 },
        { icon: "📊", bottom: "20%", left: "15%", speed: 0.25 },
        { icon: "🧠", bottom: "12%", right: "18%", speed: 0.35 },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute text-6xl opacity-10"
          style={{
            ...item,
            transform: `translateY(${scrollY * item.speed}px)`,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Upload Card */}
      <div className="relative z-10 h-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Upload Employee CV
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Upload a PDF resume to analyze ATS compatibility
          </p>

          <label
            htmlFor="cv-upload"
            className="flex flex-col items-center justify-center gap-4 p-10 border-2 border-dashed rounded-2xl cursor-pointer transition
            border-gray-300 hover:border-green-500 hover:bg-green-50"
          >
            <div className="text-5xl">📄</div>
            <p className="text-gray-700 font-semibold">
              Click to upload or drag & drop
            </p>
            <p className="text-xs text-gray-400">PDF files only</p>

            <input
              id="cv-upload"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {file && (
            <div className="mt-5 flex items-center justify-between bg-gray-50 border rounded-xl p-4">
              <div>
                <p className="text-sm font-medium text-gray-700 truncate max-w-[220px]">
                  {file.name}
                </p>
                <p className="text-xs text-green-600">
                  PDF uploaded successfully
                </p>
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
          className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl font-semibold
          hover:bg-green-600 transition shadow-md"
        >
          Check ATS Score (AI/ML)
        </button>
      </div>
    </section>
  );
}
