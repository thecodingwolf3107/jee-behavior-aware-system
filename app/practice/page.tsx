"use client";

import { useState } from "react";

export default function Practice() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const question = {
    text: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correct: "cos(x)",
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Practice Mode 🎯</h1>

      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`p-3 rounded border ${
                selected === option
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>

        {submitted && (
          <p className="mt-4 font-semibold">
            {selected === question.correct
              ? "✅ Correct!"
              : "❌ Wrong!"}
          </p>
        )}
      </div>
    </main>
  );
}