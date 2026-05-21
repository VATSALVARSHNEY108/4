export const metadata = { title: "Mathematical Foundations Overview" };

"use client";
import React from "react";

export default function MathFoundationsOverview() {
  return (
    <section className="px-12 py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--accent)" }}>Mathematical Foundations Overview</h1>
      <p className="mb-4">
        Before diving into artificial intelligence, a solid grasp of several mathematical concepts is essential. This lesson gives a concise refresher on the topics you will encounter throughout the AI Foundations curriculum.
      </p>
      <ul className="list-disc ml-8 space-y-2">
        <li><strong>Linear Algebra</strong>: Vectors, matrices, eigenvalues, and matrix decompositions.</li>
        <li><strong>Calculus</strong>: Derivatives, gradients, and optimization fundamentals.</li>
        <li><strong>Probability & Statistics</strong>: Random variables, distributions, expectation, hypothesis testing, and information theory.</li>
        <li><strong>Discrete Mathematics</strong>: Sets, combinatorics, and basic graph theory (used later in algorithms).</li>
      </ul>
      <p className="mt-6">
        Each subsequent lesson will delve deeper into these subjects, often providing interactive visualizations to cement intuition.
      </p>
    </section>
  );
}