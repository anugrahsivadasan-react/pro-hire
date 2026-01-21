import React, { useState } from "react";
import jsPDF from "jspdf";

export default function PDFPreviewButton({ text, fileName, bgImage }) {
  const [showPreview, setShowPreview] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const marginTop = 65;
    const marginBottom = 25;
    const leftMargin = 20;
    const lineHeight = 8;

    let y = marginTop;

    const addBackground = () => {
      if (bgImage) {
        doc.addImage(bgImage, "PNG", 0, 0, 210, 297);
      }
    };

    addBackground();
    doc.setTextColor(0, 0, 0);

    const lines = text.split("\n");

    const checkPageBreak = () => {
      if (y + lineHeight > pageHeight - marginBottom) {
        doc.addPage();
        addBackground();
        y = marginTop;
      }
    };

    lines.forEach((rawLine) => {
      const line = rawLine.trim();

      if (!line) {
        y += 6;
        checkPageBreak();
        return;
      }

      // MAIN HEADINGS (CENTER + BOLD)
      if (
        line === "APPOINTMENT LETTER" ||
        line === "OFFER LETTER" ||
        line === "INCREMENT LETTER" ||
        line === "EMPLOYMENT AGREEMENT"
      ) {
        doc.setFont("Times-Bold");
        doc.setFontSize(16);
        doc.text(line, pageWidth / 2, y, { align: "center" });
        y += 14;
        checkPageBreak();
        return;
      }

      // SUB HEADINGS (LEFT + BOLD)
      const subHeadingPatterns = [
        /^Subject:/i,
        /^Dear/i,
        /^[0-9]+\./,
        /^EMPLOYMENT AGREEMENT/i,
        /^For /i,
        /^Authorized Signatory/i,
        /^Date:/i,
        /^Salary/i,
        /^Joining Date/i,
        /^Effective/i,
        /^Revised Salary/i,
        /^Best Regards/i,
        /^Warm Regards/i,
        /^Sincerely/i,
        /^Acknowledgement/i,
        /^HR/i,
        /^Ziya Academy/i,
        /^Slams/i
      ];

      const isSubHeading = subHeadingPatterns.some((pattern) =>
        pattern.test(line)
      );

      doc.setFont(isSubHeading ? "Times-Bold" : "Times-Roman");
      doc.setFontSize(isSubHeading ? 15 : 11);

      const splitText = doc.splitTextToSize(line, 170);

      splitText.forEach((txtLine) => {
        doc.text(txtLine, leftMargin, y, {
          maxWidth: 170,
          align: isSubHeading ? "left" : "justify",
        });
        y += lineHeight;
        checkPageBreak();
      });
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
      <div className="pl-6 pt-2">
        <button
          type="button"
          onClick={handlePreview}
          className="bg-cyan-600 text-white px-5 py-2 pl-6 rounded-lg hover:bg-cyan-700 transition w-[200px]"
        >
          Preview Letter
        </button>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
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

            <div className="flex-1 bg-gray-100">
              <iframe
                src={pdfUrl}
                title="PDF Preview"
                className="w-full h-full"
              />
            </div>

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
