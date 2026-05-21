"use client";

import React, { useState } from "react";

export default function PythonFunctional() {
  const [example, setExample] = useState(`# Functional style using map, filter, reduce
numbers = [1, 2, 3, 4, 5]
# Double each number
mapped = list(map(lambda x: x * 2, numbers))
# Keep even numbers only
filtered = list(filter(lambda x: x % 2 == 0, mapped))
# Sum them up
from functools import reduce
result = reduce(lambda acc, x: acc + x, filtered, 0)
print(result)  # Output: 12`);
  const [output, setOutput] = useState("");

  const runCode = () => {
    // Simulated execution: compute the result of the example above
    if (example.includes("print(result)")) {
      setOutput("12");
    // Simulated execution: parse known patterns
    if (code.includes("map")) {
      setOutput(`Squared: [1, 4, 9, 16, 25]\nEvens: [2, 4]\nSum: 15`);
    } else {
      setOutput("(simulation) Code executed.");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Python Functional Programming</h1>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
              Functional programming treats computation as the evaluation of mathematical functions and avoids mutable state. Python supports functional concepts through first‑class functions, higher‑order functions like <code>map</code>, <code>filter</code>, and <code>reduce</code>, and comprehensions.
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
              value={example}
              onChange={e => setExample(e.target.value)}
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