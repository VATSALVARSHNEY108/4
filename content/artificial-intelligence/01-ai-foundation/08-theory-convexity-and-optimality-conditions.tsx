import React from 'react';

export default function ConvexityOptimality() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Convexity and Optimality</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            In optimization, a <span className="text-[var(--accent)] font-medium">Convex Function</span> is one where a line segment connecting any two points on the graph lies entirely above or on the graph itself. It looks like a bowl.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Convexity guarantees that any local minimum is also a global minimum. Linear regression and SVMs have convex loss functions, making them easy to optimize. Deep neural networks, however, are highly non-convex, leading to the challenge of getting stuck in local minima.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Conditions for Optimality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">First-Order Condition</h3>
            <code className="text-sm font-mono text-[var(--accent)] block mb-2">∇f(x*) = 0</code>
            <p className="text-sm text-[var(--text-secondary)]">At the minimum point, the gradient (slope) must be exactly zero. This is a stationary point.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Second-Order Condition</h3>
            <code className="text-sm font-mono text-[var(--accent)] block mb-2">∇²f(x*) ≻ 0</code>
            <p className="text-sm text-[var(--text-secondary)]">The Hessian matrix (second derivatives) must be positive definite. This proves the stationary point is a minimum, not a maximum or saddle point.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
