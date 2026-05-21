import React from 'react';

export default function MathematicalExpectation() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Probability: Expectation</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The <span className="text-[var(--accent)] font-medium">Expected Value</span> (or Expectation) is a generalization of the weighted average. It represents the mean value a random variable takes on over a large number of experiments.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In Reinforcement Learning, the core goal of an agent is to maximize its Expected Return (the sum of future rewards). We cannot know exact future rewards, so we optimize for the statistical expectation.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Formula</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <p className="text-sm text-[var(--text-tertiary)] mb-2">For a discrete random variable X:</p>
          <code className="text-2xl font-mono block mb-4">E[X] = Σ [x_i × P(x_i)]</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            Multiply each possible outcome by the probability of that outcome, and sum them all up.
          </p>
        </div>
      </div>
    </div>
  );
}
