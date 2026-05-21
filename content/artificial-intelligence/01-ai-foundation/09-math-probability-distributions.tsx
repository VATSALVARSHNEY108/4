import React from 'react';

export default function ProbabilityDistributions() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Probability Distributions</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            A <span className="text-[var(--accent)] font-medium">Probability Distribution</span> is a mathematical function that provides the probabilities of occurrence of different possible outcomes in an experiment.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In AI, we often assume that our data is drawn from a specific probability distribution (like a Normal/Gaussian distribution). Understanding these distributions is key to generative models like VAEs and Diffusion models.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Normal (Gaussian) Distribution</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-xl font-mono block mb-4">f(x) = (1 / (σ√(2π))) * e^(-(x-μ)² / (2σ²))</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>μ (mu)</strong> = Mean (center of the curve)<br />
            <strong>σ (sigma)</strong> = Standard Deviation (width of the curve)<br />
          </p>
        </div>
      </div>
    </div>
  );
}
