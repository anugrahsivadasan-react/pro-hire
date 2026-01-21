import { motion } from "framer-motion";
import LetterPreview from "../LetterPreview";
import PDFDownloadButton from "../PDFDownloadButton";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GeneratedLettersSection = ({ letters, selectedCompany, companyBackgrounds }) => {
  const items = [
    {
      title: "Appointment Letter",
      text: letters.appointment,
      fileName: "Appointment_Letter.pdf",
    },
    {
      title: "Offer Letter",
      text: letters.offer,
      fileName: "Offer_Letter.pdf",
    },
    {
      title: "Increment Letter",
      text: letters.increment,
      fileName: "Increment_Letter.pdf",
    },
  ];

  return (
    <section className="relative mt-32 py-28 bg-gradient-to-b from-[#050b18] via-[#0b1220] to-[#050b18] overflow-hidden">
  {/* Glow Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5b733,transparent_60%)]"></div>

  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative text-center mb-24 px-6"
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
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
  >
    {items.map((item, idx) => (
      <motion.div
        key={idx}
        variants={cardVariants}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative rounded-3xl bg-white shadow-[0_25px_70px_rgba(0,0,0,0.45)] overflow-hidden transition-all"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#0ea5b744] via-transparent to-[#faa30255]"></div>

        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="px-7 py-5 bg-gradient-to-r from-[#e49502] to-[#f2b94f] ">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              {item.title}
            </h3>
          </div>

          {/* Preview */}
          <div className="p-6 flex-1">
            <div className="h-[300px] overflow-hidden rounded-xl bg-white">
              
            </div>
          </div>

          {/* Action */}
          <div className="px-7 pb-7 pt-4 border-t flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PDFDownloadButton
                text={item.text}
                fileName={item.fileName}
                bgImage={companyBackgrounds[selectedCompany]}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>
    
  );
};

export default GeneratedLettersSection;
