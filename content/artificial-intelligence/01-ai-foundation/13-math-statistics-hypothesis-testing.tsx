import React from 'react';

export default function HypothesisTesting() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Statistics: Hypothesis Testing</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Hypothesis Testing</span> is a statistical method used to make decisions using data. It involves evaluating two mutually exclusive statements about a population to determine which statement is best supported by the sample data.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In AI, hypothesis testing is frequently used in A/B testing of models (e.g., determining if a new recommendation algorithm significantly outperforms the old one).
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Key Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Null Hypothesis (H0)</h3>
            <p className="text-sm text-[var(--text-secondary)]">The default assumption that there is no relationship or no difference. We try to find evidence against it.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Alternative Hypothesis (H1)</h3>
            <p className="text-sm text-[var(--text-secondary)]">The statement we are trying to prove (e.g., "The new model is more accurate").</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">P-Value</h3>
            <p className="text-sm text-[var(--text-secondary)]">The probability of obtaining the observed results (or more extreme) assuming H0 is true. A low p-value (typically &lt; 0.05) leads to rejecting H0.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Statistical Significance</h3>
            <p className="text-sm text-[var(--text-secondary)]">When the p-value is below our chosen threshold (alpha), we call the result statistically significant.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
