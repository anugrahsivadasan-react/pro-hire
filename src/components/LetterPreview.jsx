import React from "react";

export default function LetterPreview({ title, text, bgImage }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div
        className="relative border p-6 rounded"
        style={{
          minHeight: "200px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      >
        <pre className="relative z-10 whitespace-pre-wrap">{text}</pre>
      </div>
    </div>
  );
}
