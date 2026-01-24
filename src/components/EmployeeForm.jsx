import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

export default function EmployeeForm({ data, setData, onSubmit }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/submit-employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      toast.success(result.message);
      onSubmit();
    } catch (err) {
      console.error(err);
      toast.error("Error submitting form");
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-xl mx-auto mb-20 
      h-auto sm:h-[600px] px-4 sm:px-0"
    >
      <div
        className="h-full bg-white/90 backdrop-blur-xl border border-[#faa302]
        rounded-xl shadow-md p-5 sm:p-8 md:p-10
        flex flex-col justify-between transition-all duration-300 hover:shadow-3xl"
      >
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            Employee Details
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Enter employee information to generate official letters
          </p>
        </div>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {[
            { label: "Full Name", name: "name", type: "text", placeholder: "" },
            { label: "Designation", name: "designation", type: "text", placeholder: "" },
            { label: "Salary", name: "salary", type: "text", placeholder: "" },
            { label: "Department", name: "department", type: "text", placeholder: "" },
            { label: "Joining Date", name: "joiningDate", type: "date", placeholder: "" },
            { label: "Email Address", name: "email", type: "email", placeholder: "" },
            { label: "Address", name: "address", type: "text", placeholder: "" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={data[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-gray-300
                px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-700
                focus:outline-none focus:ring-2 focus:ring-[#107594]
                focus:border-transparent transition"
              />
            </div>
          ))}

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mb-2 sm:mb-4">
            <button
              type="submit"
              className="mt-6 sm:mt-8 w-full bg-[#faa302] text-white
              py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base
              hover:from-[#0d5a6a] hover:to-[#5ba0b5]
              transition-all duration-300 shadow-lg h-11 sm:h-12"
            >
              Generate Letters
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </motion.section>
  );
}
