"use client";

import React, { useState } from "react";

/**
 * Lesson 16 – Information Theory
 * Demonstrates entropy of a binary source and lets the learner experiment with the
 * probability distribution via an interactive slider.
 */
export default function Lesson() {
  const [p, setP] = useState<number>(0.5);

  // Helper to compute binary entropy in bits
  const entropy = (prob: number) => {
    if (prob <= 0 || prob >= 1) return 0;
    return -prob * Math.log2(prob) - (1 - prob) * Math.log2(1 - prob);
  };

  const bits = entropy(p).toFixed(3);

  return (
    <section className="prose prose-lg mx-auto py-12 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
        16 – Information Theory
      </h1>

      {/* Theory */}
      <div className="space-y-6">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Information theory studies how to quantify *information*. For a binary source
          that emits a "0" with probability <code>1‑p</code> and a "1" with
          probability <code>p</code>, the average amount of information per symbol is
          measured by the **binary entropy**:
        </p>
        <pre className="bg-[var(--bg-secondary)] p-4 rounded-xl overflow-x-auto text-sm">
          H(p) = -p·log₂(p) – (1‑p)·log₂(1‑p)
        </pre>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Entropy reaches its maximum of 1 bit when the distribution is perfectly
          balanced (<code>p = 0.5</code>) and collapses to 0 bits when the outcome is
          certain (<code>p = 0</code> or <code>p = 1</code>). This simple formula
          underpins compression, communication limits, and many machine‑learning
          concepts such as cross‑entropy loss.
        </p>
      </div>

      {/* Interactive Visualization */}
      <section className="mt-12 p-6 border border-[var(--border)] rounded-xl bg-[var(--bg-secondary)]">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">
          Explore Entropy
        </h2>
        <div className="flex items-center space-x-4 mb-4">
          <label className="text-sm font-medium text-[var(--text-tertiary)]" htmlFor="probSlider">
            Probability of "1"
          </label>
          <input
            id="probSlider"
            type="range"
            min="0"
            max="100"
            value={Math.round(p * 100)}
            onChange={(e) => setP(Number(e.target.value) / 100)}
            className="w-64"
          />
          <span className="text-sm text-[var(--text-primary)] font-mono w-12 text-right">
            {p.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-medium text-[var(--text-tertiary)]">Entropy:</span>
          <span className="text-lg font-bold text-[var(--accent)]">{bits} bits</span>
        </div>
      </section>

      {/* Real‑World Connections */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          Why It Matters
        </h2>
        <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2">
          <li>Data compression – entropy gives the theoretical lower bound on how many bits are needed.</li>
          <li>Communication channels – Shannon’s noisy‑channel theorem is expressed in bits per symbol.</li>
          <li>Machine learning – cross‑entropy loss used for classification originates from this definition.</li>
        </ul>
      </section>
    </section>
  );
}