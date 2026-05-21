"use client";

import React, { useState } from "react";

/**
 * Lesson 12 – Expectation of a Discrete Random Variable
 * Interactive table to define outcomes, assign probabilities, and compute the expectation.
 * Styled with high‑contrast theme using CSS variables and Tailwind 4 utilities.
 */
export default function ProbabilityExpectation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [variable, setVariable] = useState<string>('X');
  const [outcomes, setOutcomes] = useState<number[]>([1, 2, 3, 4]);
  const [probs, setProbs] = useState<number[]>([0.1, 0.2, 0.4, 0.3]);

  const steps = [
    { id: 1, name: 'Define Variable', desc: 'Choose a discrete random variable and list its possible outcomes.' },
    { id: 2, name: 'Assign Probabilities', desc: 'Provide a probability mass function that sums to 1.' },
    { id: 3, name: 'Calculate Expectation', desc: 'Compute E[X] = Σ x·P(x) using the table.' },
  ];

  // Normalise probabilities to ensure they sum to 1
  const normalize = (arr: number[]) => {
    const total = arr.reduce((a, b) => a + b, 0);
    return total > 0 ? arr.map(v => v / total) : arr;
  };

  const handleProbChange = (index: number, value: number) => {
    const newProbs = [...probs];
    newProbs[index] = value;
    setProbs(normalize(newProbs));
  };

  const expectation = outcomes.reduce((sum, v, i) => sum + v * probs[i], 0);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Theory */}
        <section className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            Expectation of a Discrete Random Variable
          </h1>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The <strong className="text-[var(--accent)]">expected value</strong> is the weighted average of all
            possible outcomes, where each outcome is weighted by its probability. It captures the “center of mass”
            of the distribution and is foundational for statistics and machine learning.
          </p>
        </section>

        {/* Interactive Table */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-semibold font-serif">Interactive Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border)]">
            {/* Outcomes */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--text-tertiary)]">Outcomes (x)</h3>
              {outcomes.map((v, i) => (
                <input
                  key={i}
                  type="number"
                  value={v}
                  onChange={e => {
                    const newVals = [...outcomes];
                    newVals[i] = Number(e.target.value);
                    setOutcomes(newVals);
                  }}
                  className="w-full p-2 border border-[var(--border)] rounded bg-[var(--bg-primary)] text-[var(--text-primary)]"
                />
              ))}
            </div>
            {/* Probabilities */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--text-tertiary)]">Probabilities P(x)</h3>
              {probs.map((p, i) => (
                <input
                  key={i}
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={p}
                  onChange={e => handleProbChange(i, Number(e.target.value))}
                  className="w-full p-2 border border-[var(--border)] rounded bg-[var(--bg-primary)] text-[var(--text-primary)]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-semibold font-serif">Result</h2>
          <div className="text-center text-2xl font-bold text-[var(--accent)]">
            E[{variable}] = {expectation.toFixed(3)}
          </div>
        </section>

        {/* Navigation */}
        <section className="space-y-6 animate-fade-in">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              className="py-2 px-4 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
            >Prev</button>
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
              className="py-2 px-4 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >Next</button>
          </div>
          <p className="text-center text-[var(--text-secondary)] mt-2">
            {steps.find(s => s.id === activeStep)?.desc}
          </p>
        </section>
      </main>
    </div>
  );
}