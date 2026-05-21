import React from 'react';

export default function Sampling() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Statistics: Sampling</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Sampling</span> is the process of selecting a subset of data from a larger population to make inferences about the whole population.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In AI, sampling is crucial. Datasets are often too large to process all at once. Techniques like Mini-Batch Gradient Descent rely on drawing random samples (batches) from the training data to compute gradients efficiently. Poor sampling leads to biased models.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Common Sampling Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Simple Random Sampling</h3>
            <p className="text-sm text-[var(--text-secondary)]">Every item has an equal probability of being selected. Used in standard train/test splits.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Stratified Sampling</h3>
            <p className="text-sm text-[var(--text-secondary)]">The population is divided into subgroups (strata), and random samples are taken from each. Crucial for imbalanced datasets (e.g., fraud detection).</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Systematic Sampling</h3>
            <p className="text-sm text-[var(--text-secondary)]">Selecting every k-th element from a list. Less common in ML but used in specific signal processing tasks.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Bootstrapping</h3>
            <p className="text-sm text-[var(--text-secondary)]">Sampling with replacement. Fundamental to ensemble methods like Random Forests (bagging).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
