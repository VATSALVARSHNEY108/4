import React from 'react';

export default function MeasureTheoreticProbability() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Measure-Theoretic Probability</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Measure Theory</span> provides the rigorous mathematical foundation for probability. Rather than relying on intuition about coins and dice, it treats probabilities as 'measures' (like area or volume) assigned to sets in a sample space.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            While basic AI engineering rarely requires manual measure theory proofs, advanced theoretical AI (like proving the convergence of Stochastic Gradient Descent or understanding advanced Reinforcement Learning theorems) requires this rigorous framing.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Kolmogorov's Axioms</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <ul className="list-decimal pl-5 space-y-4 text-sm text-[var(--text-secondary)]">
            <li><strong>Non-negativity:</strong> The probability of any event is a real number greater than or equal to 0. <code>P(E) ≥ 0</code></li>
            <li><strong>Unitarity:</strong> The probability that at least one of the elementary events in the entire sample space will occur is 1. <code>P(Ω) = 1</code></li>
            <li><strong>Additivity:</strong> For mutually exclusive events, the probability of their union is the sum of their individual probabilities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
