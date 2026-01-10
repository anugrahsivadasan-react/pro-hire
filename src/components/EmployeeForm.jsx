import React from "react";

export default function EmployeeForm({ data, setData, onSubmit }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full max-w-xl h-[600px]">
      <div className="h-full bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-10 flex flex-col justify-between">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Employee Details
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter employee information to generate official letters
          </p>
        </div>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {[
            { label: "Full Name", name: "name", type: "text", placeholder: "" },
            { label: "Designation", name: "designation", type: "text", placeholder: "" },
            { label: "Salary", name: "salary", type: "text", placeholder: "" },
            { label: "Department", name: "department", type: "text", placeholder: "" },
            { label: "Joining Date", name: "joiningDate", type: "" },
            { label: "Email Address", name: "email", type: "email", placeholder: "" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={data[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                transition"
              />
            </div>
          ))}

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="mt-8 w-full bg-green-500 text-white py-3 rounded-xl font-semibold
          hover:bg-green-600 transition shadow-md h-12"
            >
              Generate Letters
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
