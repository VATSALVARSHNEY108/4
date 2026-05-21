import React from 'react';

export default function BayesianInferenceFoundations() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Bayesian Inference Foundations</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Bayesian Inference</span> is a method of statistical inference in which Bayes' theorem is used to update the probability for a hypothesis as more evidence or information becomes available.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Unlike frequentist statistics which treats probability strictly as long-run frequencies, Bayesian statistics treats probability as a degree of belief. In AI, this is powerful for modeling uncertainty in weights (Bayesian Neural Networks) and handling sparse data.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Bayesian Update</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">The Prior</h3>
            <p className="text-sm text-[var(--text-secondary)]">Your initial belief about a parameter before seeing any data. It acts as a regularizer, preventing extreme conclusions from small datasets.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">The Posterior</h3>
            <p className="text-sm text-[var(--text-secondary)]">Your updated belief after seeing the data. It is a compromise between your Prior and the Likelihood of the new evidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
