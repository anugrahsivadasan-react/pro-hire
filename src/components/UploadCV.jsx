import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


export default function UploadCV({ onCVParsed }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

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
        const pageText = textContent.items.map((item) => item.str).join(" ");
        fullText += pageText + "\n";
      }

      // ✅ CORRECT PLACE FOR CONSOLE LOG
      console.log("Extracted CV text:", fullText);

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
    <div id="upload" className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Upload Employee CV (PDF)</h2>

      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      {file && (
        <div className="mt-2">
          <p>
            <strong>Uploaded:</strong> {file.name}
          </p>
          <button
            className="text-red-500 hover:underline mt-2"
            onClick={removeFile}
          >
            Remove / Change CV
          </button>
        </div>
      )}

      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Check ATS Score (AI/ML)
        </button>
      </div>
    </div>
  );
}
