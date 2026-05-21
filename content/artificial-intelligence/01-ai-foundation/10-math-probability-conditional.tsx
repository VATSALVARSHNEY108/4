import React from 'react';

export default function ConditionalProbability() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Probability: Conditional</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Conditional Probability</span> is a measure of the probability of an event occurring, given that another event has already occurred.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            It is the cornerstone of sequential models. In Natural Language Processing, when an LLM like ChatGPT generates text, it is calculating the conditional probability of the next word given the sequence of all preceding words.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Formula</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">P(A|B) = P(A ∩ B) / P(B)</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>P(A|B)</strong> = Probability of A occurring, given B has occurred.<br />
            <strong>P(A ∩ B)</strong> = Probability of both A and B occurring together.<br />
            <strong>P(B)</strong> = Probability of B occurring.
          </p>
        </div>
      </div>
    </div>
  );
}
