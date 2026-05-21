import React from 'react';

export default function BayesTheorem() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Probability: Bayes' Theorem</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Bayes' Theorem</span> describes the probability of an event, based on prior knowledge of conditions that might be related to the event.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            It allows AI models to update their beliefs as new evidence is introduced. This forms the foundation of Bayesian Inference, Naive Bayes classifiers, and many reinforcement learning strategies.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Formula</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">P(A|B) = [P(B|A) × P(A)] / P(B)</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>P(A|B)</strong> = Posterior probability (updated belief)<br />
            <strong>P(B|A)</strong> = Likelihood (probability of evidence given the belief)<br />
            <strong>P(A)</strong> = Prior probability (initial belief)<br />
            <strong>P(B)</strong> = Marginal probability (total probability of evidence)
          </p>
        </div>
      </div>
    </div>
  );
}
