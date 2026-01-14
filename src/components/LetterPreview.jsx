import React from "react";

export default function LetterPreview({ title, text, bgImage }) {
  return (
    <div className="relative mt-8">
      {/* Card */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl overflow-hidden transition hover:scale-[1.01]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b bg-gradient-to-r from-[#107594] to-cyan-500 text-white">
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
        </div>

        {/* Preview Area */}
        <div
          className="relative p-8 min-h-[280px] bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

          {/* Text */}
          <pre
            className="relative z-10 text-gray-800 whitespace-pre-wrap leading-relaxed font-serif text-sm md:text-base"
          >
            {text || "Your generated letter will appear here..."}
          </pre>
        </div>
      </div>

      {/* Floating badge */}
      {/* <div className="absolute -top-3 right-6 bg-[#107594] text-white text-xs px-3 py-1 rounded-full shadow-md">
        Live Preview
      </div> */}
    </div>
  );
}
