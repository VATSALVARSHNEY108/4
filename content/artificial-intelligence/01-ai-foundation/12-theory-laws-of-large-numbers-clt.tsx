import React from 'react';

export default function LLNandCLT() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Laws of Large Numbers & CLT</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            These are two of the most important theorems in probability. They explain why massive datasets allow AI to function reliably despite underlying randomness.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The <span className="text-[var(--accent)] font-medium">Law of Large Numbers (LLN)</span> guarantees stable long-term results for the averages of some random events. The <span className="text-[var(--accent)] font-medium">Central Limit Theorem (CLT)</span> states that the sum of many independent random variables will tend to be normally distributed, regardless of the original distribution.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Why It Matters in AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">LLN in Machine Learning</h3>
            <p className="text-sm text-[var(--text-secondary)]">As our training dataset size grows to infinity, our empirical risk (training loss) converges to the true expected risk. More data equals more reliable models.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">CLT in Machine Learning</h3>
            <p className="text-sm text-[var(--text-secondary)]">Because of CLT, we can often safely assume that error residuals and gradient noise in deep networks are normally distributed, simplifying mathematical optimization.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
