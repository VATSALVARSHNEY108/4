import React from 'react';

export default function StatisticalDecisionTheory() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Statistical Decision Theory</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Statistical Decision Theory</span> provides a mathematical framework for making decisions in the presence of uncertainty.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Machine Learning is essentially automated decision theory. The theory introduces the concept of a Loss Function, which quantifies the penalty for making an incorrect decision. The goal of an AI is to find a decision rule that minimizes the expected loss (Risk).
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Core Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">State of Nature</h3>
            <p className="text-sm text-[var(--text-secondary)]">The true underlying reality which we cannot observe directly (e.g., whether an email is actually spam or not).</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Decision Rule</h3>
            <p className="text-sm text-[var(--text-secondary)]">The function (our trained ML model) that maps observations (the email text) to an action (moving it to the spam folder).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
