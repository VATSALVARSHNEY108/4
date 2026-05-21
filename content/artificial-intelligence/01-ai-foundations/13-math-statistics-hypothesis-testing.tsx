"use client";

import React from "react";

export default function HypothesisTesting() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Section 1 – Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Hypothesis Testing</h1>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Hypothesis testing provides a formal framework for deciding between two competing explanations for a data‑generating process. It is the cornerstone of statistical inference in science and engineering.
            </p>
          </div>
        </section>

        {/* Section 2 – Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Key Formula</h2>
          </div>
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <pre className="whitespace-pre-wrap">
{`\\[\\text{Test Statistic} = \\frac{\\hat{\\theta} - \\theta_0}{\\text{SE}(\\hat{\\theta})}\\]`}
            </pre>
          </div>
        </section>

        {/* Section 3 – Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Explanation</h2>
          </div>
          <p className="text-base mt-4 text-[var(--text-secondary)]">
            {`Where \\hat{\\theta} is the estimator, \\theta_0 the null hypothesis value, and \\text{SE} its standard error. The resulting statistic is compared against a reference distribution (e.g., normal or t) to compute a p‑value.`}
          </p>
        </section>
      </main>
    </div>
  );
}