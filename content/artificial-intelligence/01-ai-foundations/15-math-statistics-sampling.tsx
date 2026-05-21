"use client"

import React from "react"

export default function Sampling() {
  return (
    <div className="px-12 py-24 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-4">Sampling Methods</h1>
      <p className="mb-4 text-[var(--text-secondary)]">
        Sampling is the process of selecting a subset of data points from a larger population to infer properties about the whole.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Common Techniques</h2>
      <ul className="list-disc ml-6 text-[var(--text-secondary)]">
        <li><strong>Simple Random Sampling</strong>: Every item has equal probability.</li>
        <li><strong>Stratified Sampling</strong>: Divide population into strata, sample each proportionally.</li>
        <li><strong>Cluster Sampling</strong>: Sample entire clusters (e.g., groups) randomly.</li>
        <li><strong>Systematic Sampling</strong>: Every k-th item is selected.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Sampling Matters in ML</h2>
      <p className="text-[var(--text-secondary)]">
        Proper sampling ensures training data represents the real-world distribution, reduces bias, and improves model generalization.
      </p>
    </div>
  );
}