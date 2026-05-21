import React from 'react';

export default function RegressionAnalysis() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Statistics: Regression Analysis</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Regression Analysis</span> is a set of statistical processes for estimating the relationships between a dependent variable and one or more independent variables.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Linear Regression is often considered the "Hello World" of Machine Learning. It predicts a continuous numerical output by fitting a line (or hyperplane) through the data points that minimizes the squared distances to the points.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Simple Linear Regression Formula</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">y = mx + b</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>y</strong> = Dependent variable (prediction)<br />
            <strong>x</strong> = Independent variable (feature)<br />
            <strong>m</strong> = Slope (weight)<br />
            <strong>b</strong> = Y-intercept (bias)
          </p>
        </div>
      </div>
    </div>
  );
}
