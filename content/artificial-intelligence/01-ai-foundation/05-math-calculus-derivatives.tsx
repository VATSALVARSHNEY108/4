import React from 'react';

export default function Derivatives() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Calculus: Derivatives</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            A <span className="text-[var(--accent)] font-medium">Derivative</span> measures how a function changes as its input changes. It gives us the instantaneous rate of change, or the slope of the function at a specific point.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In Machine Learning, derivatives are essential because they tell us which direction to adjust our parameters in order to minimize the error (loss) of our model.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Definition of a Derivative</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">f'(x) = lim(h→0) [f(x + h) - f(x)] / h</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            This formal definition represents the slope of the secant line between two points as the distance between them (h) approaches zero, turning it into a tangent line.
          </p>
        </div>
      </div>
    </div>
  );
}
