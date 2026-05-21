import React from 'react';

export default function Optimization() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Calculus: Optimization</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Optimization</span> is the problem of finding the best solution from all feasible solutions. In calculus, this means finding the minimum or maximum values of a function.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Training an AI model is purely an optimization problem. We construct a Loss Function that measures how wrong the model is, and use optimization algorithms (like Gradient Descent) to find the parameters that minimize this loss.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Gradient Descent Update Rule</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">θ = θ - α ∇J(θ)</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>θ (theta)</strong> = Current parameters<br />
            <strong>α (alpha)</strong> = Learning rate (step size)<br />
            <strong>∇J(θ)</strong> = Gradient of the Loss function
          </p>
        </div>
      </div>
    </div>
  );
}
