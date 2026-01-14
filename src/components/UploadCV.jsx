import React, { useState, useEffect } from "react";

export default function UploadCV({ onCVParsed }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <section className="relative w-full max-w-xl h-[600px] overflow-hidden">
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
            border-gray-300 hover:border-[#107594] hover:bg-cyan-50"
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

          {loading && (
            <p className="text-center text-sm text-blue-500 mt-3">
              Parsing CV...
            </p>
          )}

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
          className="mt-4 w-full bg-[#107594] text-white py-3 rounded-xl font-semibold
          hover:bg-cyan-600 transition shadow-md"
        >
          Check ATS Score (AI/ML)
        </button>
      </div>
    </section>
  );
}
