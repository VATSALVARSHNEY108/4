"use client";

import React, { useState } from "react";

export default function PythonOOP() {
  const [code, setCode] = useState(`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

print(Dog('Buddy').speak())`);
  const [output, setOutput] = useState("");

  const runCode = () => {
    // Simple simulated execution: shows static output for the starter code
    if (code.includes("Dog('Buddy').speak()")) {
      setOutput("Woof!");
    } else {
      setOutput("(simulation) Code executed.");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Section 1 – Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Python Object‑Oriented Programming</h1>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Object‑oriented programming (OOP) lets you model real‑world concepts as classes with state (attributes) and behavior (methods). Python makes OOP approachable with simple syntax.
            </p>
          </div>
        </section>

        {/* Section 2 – Interactive Example */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Try It Yourself</h2>
          </div>
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6">
            <textarea
              className="w-full h-48 font-mono text-[var(--text-primary)] bg-[var(--bg-secondary)] p-4 rounded"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            <button
              className={"mt-4 px-4 py-2 bg-[var(--accent)] text-[var(--bg-primary)] rounded hover:bg-[var(--accent-bg)] transition-colors"}
              onClick={runCode}
            >Run Code (simulated)</button>
            <pre className="mt-4 p-4 bg-[var(--bg-secondary)] rounded font-mono text-[var(--text-primary)]">
{`Output: ${output}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}