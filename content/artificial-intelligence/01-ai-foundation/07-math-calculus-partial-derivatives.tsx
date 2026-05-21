import React from 'react';

export default function PartialDerivatives() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Calculus: Partial Derivatives</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            A <span className="text-[var(--accent)] font-medium">Partial Derivative</span> is the derivative of a function of multiple variables with respect to one of those variables, holding the others constant.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Since AI models like neural networks have millions of parameters (variables), we cannot take a simple 1D derivative. We must take partial derivatives of the Loss Function with respect to every single weight to form a <span className="text-[var(--accent)] font-medium">Gradient</span> vector.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Notation and The Gradient</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">∂f / ∂x</code>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            The curly '∂' denotes a partial derivative, distinguishing it from the straight 'd' of a total derivative.
          </p>
          <p className="text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-4">
            <strong>The Gradient ∇f</strong> is a vector containing all the partial derivatives of a function. It points in the direction of steepest ascent.
          </p>
        </div>
      </div>
    </div>
  );
}
