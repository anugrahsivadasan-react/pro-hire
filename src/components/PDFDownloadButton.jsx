import React from "react";
import jsPDF from "jspdf";

export default function PDFDownloadButton({ text, fileName, bgImage }) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    if (bgImage) {
      doc.addImage(bgImage, "JPEG", 0, 0, 210, 297, undefined, "FAST");
      doc.setTextColor(0, 0, 0);
    }
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      doc.text(line, 10, 10 + index * 10);
    });
    doc.save(fileName);
  };

  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
      onClick={downloadPDF}
    >
      Download {fileName}
    </button>
  );
}
