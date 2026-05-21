import React from 'react';

export default function MathFoundationsOverview() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Mathematical Foundations Overview</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Modern Artificial Intelligence is fundamentally applied mathematics. To deeply understand how models like Neural Networks, Transformers, and Support Vector Machines work, one must master the four pillars of AI mathematics.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            These pillars are <span className="text-[var(--accent)] font-medium">Linear Algebra, Calculus, Probability, and Statistics</span>. Together, they form the language used to define algorithms, calculate loss, and optimize parameters.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Four Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2 text-[var(--accent)]">1. Linear Algebra</h3>
            <p className="text-sm text-[var(--text-secondary)]">The mathematics of data representation. Handles vectors, matrices, and tensors used to store weights, biases, and inputs in multi-dimensional spaces.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2 text-[var(--accent)]">2. Calculus</h3>
            <p className="text-sm text-[var(--text-secondary)]">The mathematics of optimization. Focuses on derivatives and gradients to minimize loss functions through algorithms like Gradient Descent.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2 text-[var(--accent)]">3. Probability</h3>
            <p className="text-sm text-[var(--text-secondary)]">The mathematics of uncertainty. Used for reasoning in environments with incomplete information, forming the basis of Bayesian models.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2 text-[var(--accent)]">4. Statistics</h3>
            <p className="text-sm text-[var(--text-secondary)]">The mathematics of drawing conclusions from data. Essential for dataset sampling, hypothesis testing, and analyzing model accuracy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
