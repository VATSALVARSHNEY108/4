import React from 'react';

export default function InnerProductSpaces() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory / Concept Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Inner Product Spaces</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              An <span className="font-semibold text-[var(--accent)]">Inner Product Space</span> is a mathematical structure that builds upon a vector space by adding an operation called an inner product. This operation allows us to rigorously define geometric concepts like length (norm), angle, and orthogonality (perpendicularity) in spaces of any dimension, even infinite dimensions.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In machine learning, we often work with high-dimensional feature vectors. Inner product spaces provide the mathematical justification for measuring how "similar" two data points are, forming the foundation of algorithms like Support Vector Machines (SVMs) and kernel methods.
            </p>
          </div>
        </section>

        {/* Section 2 → Key Characteristics */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Axioms of Inner Products</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Symmetry (or Conjugate Symmetry)", desc: "The inner product of x and y is equal to the inner product of y and x (or its complex conjugate). Order doesn't matter in real spaces." },
              { title: "Linearity in the First Argument", desc: "Allows algebraic expansion: ⟨ax + y, z⟩ = a⟨x, z⟩ + ⟨y, z⟩." },
              { title: "Positive-Definiteness", desc: "The inner product of any vector with itself is always non-negative: ⟨x, x⟩ ≥ 0, and is exactly zero only if the vector is the zero vector." },
              { title: "Induced Norm", desc: "Every inner product naturally defines a length (norm) for the vectors: ||x|| = √⟨x, x⟩." }
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
            <h2 className="text-3xl font-semibold font-serif">Cauchy-Schwarz Inequality</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold">
              |⟨x, y⟩| ≤ ||x|| ||y||
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-2 pr-4 font-semibold">Variable</th>
                  <th className="py-2 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">⟨x, y⟩</td>
                  <td className="py-2 text-[var(--text-secondary)]">The inner product of vectors x and y.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">||x||</td>
                  <td className="py-2 text-[var(--text-secondary)]">The norm (length) of vector x induced by the inner product.</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-4">
              This fundamental inequality guarantees that we can always define an angle θ between two vectors using cos(θ) = ⟨x,y⟩ / (||x|| ||y||), since the ratio will always fall between -1 and 1.
            </div>
          </div>
        </section>

        {/* Section 4 → Visual Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Orthogonality Intuition</h2>
          </div>
          
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
            <svg width="300" height="250" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              {/* Plane */}
              <polygon points="50,200 250,200 200,100 0,100" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" opacity="0.8" />
              
              {/* Vector x in plane */}
              <line x1="125" y1="150" x2="225" y2="150" stroke="var(--text-secondary)" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="210" y="140" fill="var(--text-secondary)" fontWeight="bold">y</text>
              
              {/* Orthogonal Vector z */}
              <line x1="125" y1="150" x2="125" y2="30" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow-accent)" />
              <text x="140" y="50" fill="var(--accent)" fontWeight="bold">x</text>

              {/* Right angle symbol */}
              <polyline points="125,140 135,140 135,150" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" />

              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 1.5 L 5 3 L 0 4.5 z" fill="var(--text-secondary)" />
                </marker>
                <marker id="arrow-accent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 1.5 L 5 3 L 0 4.5 z" fill="var(--accent)" />
                </marker>
              </defs>
            </svg>
            <p className="mt-6 text-sm text-[var(--text-secondary)] text-center max-w-lg">
              If the inner product ⟨x, y⟩ = 0, the vectors are <strong className="text-[var(--text-primary)]">orthogonal</strong>. This means they are completely independent and share no directional components, perfectly generalizing the idea of a 90-degree angle to any dimension.
            </p>
          </div>
        </section>

        {/* Section 5 → Real-World Applications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 5</span>
            <h2 className="text-3xl font-semibold font-serif">Real-World Applications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Kernel Methods (SVMs)</h3>
              <p className="text-sm text-[var(--text-secondary)]">Support Vector Machines use the "Kernel Trick" to implicitly compute inner products in infinite-dimensional spaces, allowing them to draw complex decision boundaries without ever calculating the coordinates.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Quantum Mechanics</h3>
              <p className="text-sm text-[var(--text-secondary)]">The state space of a quantum system is modeled as a complex inner product space (Hilbert space). The inner product determines the probability amplitude of transitioning between states.</p>
            </div>
          </div>
        </section>

        {/* Section 6 → Important Notes / Common Mistakes */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Important Notes</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8640a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <div>
                <h3 className="font-semibold text-[#e8640a] mb-1">Dot Product vs Inner Product</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  The "Dot Product" is just one specific example of an inner product (specifically in standard Euclidean space). You can define entirely different inner products (e.g., using integrals for spaces of functions) that still obey the same geometric rules!
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}