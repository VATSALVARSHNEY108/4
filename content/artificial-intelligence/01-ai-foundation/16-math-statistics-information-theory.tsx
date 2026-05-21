import React from 'react';

export default function InformationTheory() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Statistics: Information Theory</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Information Theory</span>, founded by Claude Shannon, quantifies the amount of information in a signal or distribution. It answers the question: "How surprised should I be by this outcome?"
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In AI, the concept of <span className="text-[var(--accent)] font-medium">Entropy</span> (measure of uncertainty) and <span className="text-[var(--accent)] font-medium">Cross-Entropy</span> are fundamental. Cross-Entropy is the standard loss function used to train almost every classification model, including Large Language Models.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Cross-Entropy Loss</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">H(p, q) = -Σ p(x) log(q(x))</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>p(x)</strong> = True distribution (actual labels)<br />
            <strong>q(x)</strong> = Predicted distribution (model output)<br />
          </p>
          <p className="text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-4 mt-4">
            Minimizing cross-entropy forces the predicted probability distribution to match the true distribution.
          </p>
        </div>
      </div>
    </div>
  );
}
