import React from 'react';

export default function ChainRule() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Calculus: The Chain Rule</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The <span className="text-[var(--accent)] font-medium">Chain Rule</span> is a formula to compute the derivative of a composite function. When you have a function inside another function, the chain rule helps you unwrap the layers to find the overall rate of change.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In AI, the Chain Rule is the mathematical engine behind <span className="text-[var(--accent)] font-medium">Backpropagation</span>, the algorithm used to calculate gradients and train deep neural networks by passing errors backward through layers.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Chain Rule Formula</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <p className="text-sm text-[var(--text-tertiary)] mb-2">For a composite function y = f(g(x)):</p>
          <code className="text-2xl font-mono block mb-4">dy/dx = (dy/du) × (du/dx)</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            Where <code>u = g(x)</code>. You multiply the derivative of the outer function by the derivative of the inner function.
          </p>
        </div>
      </div>
    </div>
  );
}
