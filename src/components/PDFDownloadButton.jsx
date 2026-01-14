import React, { useState } from "react";
import jsPDF from "jspdf";

export default function PDFPreviewButton({ text, fileName, bgImage }) {
  const [showPreview, setShowPreview] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const generatePDF = () => {
    const doc = new jsPDF();

    if (bgImage) {
      doc.addImage(bgImage, "PNG", 0, 0, 210, 297);

      doc.setFillColor(255, 255, 255);
      doc.setGState(new doc.GState({ opacity: 0.85 }));
      doc.rect(0, 0, 210, 297, "F");
      doc.setGState(new doc.GState({ opacity: 1 }));
    }

    doc.setTextColor(0, 0, 0);

    const pageWidth = doc.internal.pageSize.getWidth();
    const lines = text.split("\n");
    let y = 35;

    lines.forEach((rawLine) => {
      const line = rawLine.trim();

      if (!line) {
        y += 6;
        return;
      }

      if (
        line === "Appointment Letter" ||
        line === "Offer Letter" ||
        line === "INCREMENT LETTER"
      ) {
        doc.setFont("Times-Bold");
        doc.setFontSize(16);
        doc.text(line, pageWidth / 2, y, { align: "center" });
        y += 16;
        return;
      }

      const bold =
        line.startsWith("Dear") ||
        line.startsWith("Department:") ||
        line.startsWith("Salary:") ||
        line.startsWith("Offered Salary:") ||
        line.startsWith("Joining date:") ||
        line.startsWith("Start Date:") ||
        line.startsWith("Your revised salary") ||
        line.startsWith("Effective from") ||
        line === "Best regards," ||
        line === "Warm Regards," ||
        line === "HR Team" ||
        line === "HR Department" ||
        line === "Finance Department" ||
        line === "Ziya Academy LLP";

      doc.setFont(bold ? "Times-Bold" : "Times-Roman");
      doc.setFontSize(11);
      doc.text(line, 20, y, { maxWidth: 170 });
      y += 8;
    });

    return doc;
  };

  const handlePreview = () => {
    const doc = generatePDF();
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
    setShowPreview(true);
  };

  const handleDownload = () => {
    const doc = generatePDF();
    doc.save(fileName);
  };

  const handleSendMail = () => {
    alert("Send mail functionality will be integrated here.");
  };

  return (
    <>
      {/* Preview Button */}
      <div className="pl-6 pt-2 ">
      <button
        type="button"
        onClick={handlePreview}
        className="bg-cyan-600 text-white px-5 py-2 pl-6 rounded-lg hover:bg-cyan-700 transition w-[200px]"
      >
        Preview Letter
      </button>
      </div>

      {/* Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">
                Letter Preview — {fileName}
              </h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 bg-gray-100">
              <iframe
                src={pdfUrl}
                title="PDF Preview"
                className="w-full h-full"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t">
              <button
                onClick={handleSendMail}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Send via Email
              </button>
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Download {fileName}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
