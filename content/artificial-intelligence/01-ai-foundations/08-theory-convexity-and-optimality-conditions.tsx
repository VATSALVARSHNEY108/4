import React from 'react';

export default function ConvexityTheory() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory / Concept Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Convexity & Optimality</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              When training machine learning models, we use gradient descent to find the minimum of our loss function. However, the shape of that mathematical landscape completely dictates whether gradient descent will succeed.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A landscape can either be <span className="font-semibold text-[var(--accent)]">Convex</span> (shaped like a perfect bowl) or <strong className="text-[var(--text-primary)]">Non-Convex</strong> (shaped like a rugged mountain range with many peaks and valleys). Understanding convexity is the key to knowing whether an algorithm guarantees finding the absolute best solution.
            </p>
          </div>
        </section>

        {/* Section 2 → Key Characteristics */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Properties of Convex Functions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Single Global Minimum", desc: "A convex function only has one valley. Every local minimum is guaranteed to be the global minimum." },
              { title: "The Line Segment Test", desc: "If you pick any two points on a convex curve and draw a straight line between them, the line will always lie strictly above the curve." },
              { title: "Second Derivative (Hessian)", desc: "For a 1D function, the second derivative is always positive (f''(x) > 0), meaning the curve is always bending upwards." },
              { title: "Optimization Guarantee", desc: "Gradient descent is mathematically guaranteed to find the global minimum of a convex function, regardless of where it starts." }
            ].map((char, idx) => (
              <div key={idx} className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors">
                <h3 className="text-xl font-semibold mb-2">{char.title}</h3>
                <p className="text-[var(--text-secondary)]">{char.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 → Formula or Rules */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Optimality Conditions</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-lg mb-4 font-bold text-[var(--text-secondary)]">How do we mathematically prove we are at the minimum?</div>
            
            <div className="space-y-4">
              <div>
                <div className="font-bold">First-Order Necessary Condition (FOC):</div>
                <div className="text-[var(--text-secondary)]">∇f(x*) = 0</div>
                <div className="text-sm text-[var(--text-secondary)] pt-1">The gradient (slope) must be exactly zero. The ground must be perfectly flat. This could be a minimum, a maximum, or a saddle point.</div>
              </div>
              <div className="border-t border-[var(--border)] pt-4">
                <div className="font-bold">Second-Order Sufficient Condition (SOC):</div>
                <div className="text-[var(--text-secondary)]">∇²f(x*) ≻ 0  (The Hessian matrix is Positive Definite)</div>
                <div className="text-sm text-[var(--text-secondary)] pt-1">The curvature must be pointing upwards in all directions. If both FOC and SOC are met, you are definitively at a strict local minimum.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 → Visual Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Convex vs Non-Convex</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Convex Diagram */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center">
              <svg width="250" height="150" viewBox="0 0 250 150">
                {/* Curve */}
                <path d="M 20 20 Q 125 200 230 20" fill="none" stroke="var(--text-primary)" strokeWidth="3" />
                {/* Line segment test */}
                <line x1="50" y1="75" x2="200" y2="75" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="50" cy="75" r="4" fill="var(--accent)" />
                <circle cx="200" cy="75" r="4" fill="var(--accent)" />
                <text x="125" y="65" textAnchor="middle" fill="var(--accent)" fontSize="12">Line is above curve</text>
              </svg>
              <h3 className="font-bold mt-4">Convex</h3>
              <p className="text-sm text-[var(--text-secondary)] text-center mt-2">Only one minimum. Easy to optimize. (e.g., Linear Regression, SVMs)</p>
            </div>

            {/* Non-Convex Diagram */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center">
              <svg width="250" height="150" viewBox="0 0 250 150">
                {/* Curve */}
                <path d="M 20 20 Q 70 200 125 100 T 230 20" fill="none" stroke="var(--text-primary)" strokeWidth="3" />
                {/* Line segment test */}
                <line x1="60" y1="125" x2="160" y2="75" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="60" cy="125" r="4" fill="#ef4444" />
                <circle cx="160" cy="75" r="4" fill="#ef4444" />
                <text x="110" y="60" textAnchor="middle" fill="#ef4444" fontSize="12">Line crosses curve</text>
              </svg>
              <h3 className="font-bold mt-4">Non-Convex</h3>
              <p className="text-sm text-[var(--text-secondary)] text-center mt-2">Multiple valleys (local minima). Very hard to optimize globally. (e.g., Deep Neural Networks)</p>
            </div>

          </div>
        </section>

        {/* Section 5 → Important Notes / Common Mistakes */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 5</span>
            <h2 className="text-3xl font-semibold font-serif">Important Notes</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8640a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <div>
                <h3 className="font-semibold text-[#e8640a] mb-1">Deep Learning is Non-Convex</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Almost all modern deep neural networks result in highly non-convex loss landscapes. Mathematically, gradient descent has no guarantee of finding the global minimum. However, empirical research shows that in incredibly high dimensions (millions of parameters), most local minima are actually "good enough", and the real danger is getting stuck in saddle points, not local minima.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}