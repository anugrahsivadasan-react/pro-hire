import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import LetterPreview from "../LetterPreview";
import PDFDownloadButton from "../PDFDownloadButton";

const GeneratedLettersSection = ({ letters, selectedCompany, companyBackgrounds }) => {
  const [previewLetter, setPreviewLetter] = useState(null);

  useEffect(() => {
    document.body.style.overflow = previewLetter ? "hidden" : "auto";
  }, [previewLetter]);

  const items = [
    {
      title: "Appointment Letter",
      desc: "Generate official joining confirmation letters for new employees.",
      text: letters.appointment,
      fileName: "Appointment_Letter.pdf",
    },
    {
      title: "Offer Letter",
      desc: "Create professional offer letters with salary and role details.",
      text: letters.offer,
      fileName: "Offer_Letter.pdf",
    },
    {
      title: "Increment Letter",
      desc: "Send structured salary increment and promotion notifications.",
      text: letters.increment,
      fileName: "Increment_Letter.pdf",
    },
  ];

  return (
    <section className="relative mt-32 py-32 bg-gradient-to-b from-[#050b18] via-[#0b1220] to-[#050b18]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5b733,transparent_60%)] pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-28 px-6"
      >
        <h2 className="text-5xl font-extrabold text-white">
          Generated <span className="text-[#faa302]">Letters</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Instantly preview, customize and download professional employee documents
          powered by Pro-Hire automation.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="group relative rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden min-h-[260px]"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,#38bdf833,transparent_60%)]"></div>

            {/* Header */}
            <div className="relative px-8 py-6 bg-gradient-to-r from-[#e49502] via-[#f3b84e] to-[#facc6b]">
              <h3 className="text-xl font-semibold text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-white/90 mt-1">{item.desc}</p>
            </div>

            {/* Body */}
            <div className="relative px-8 py-8 flex flex-col gap-6">
              <div className="h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                Auto-generated with company branding
              </div>

              <div className="flex justify-start ">
                {/* <button
                  onClick={() => setPreviewLetter(item)}
                  className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-blue-500/40 transition"
                >
                  Preview
                </button> */}

                <div className="flex-1">
                  <PDFDownloadButton
                    text={item.text}
                    fileName={item.fileName}
                    bgImage={companyBackgrounds[selectedCompany]}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {previewLetter &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999999]"
            onClick={() => setPreviewLetter(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setPreviewLetter(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              <LetterPreview
                title={previewLetter.title}
                text={previewLetter.text}
                bgImage={companyBackgrounds[selectedCompany]}
              />
            </motion.div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default GeneratedLettersSection;
