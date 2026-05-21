import React from 'react';

export default function VectorSpaces() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Vector Spaces and Fields</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            A <span className="text-[var(--accent)] font-medium">Vector Space</span> (or linear space) is a mathematical structure formed by a collection of elements called vectors, which may be added together and multiplied by numbers called scalars.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Scalars are elements of a <span className="text-[var(--accent)] font-medium">Field</span>, which is a set equipped with operations of addition, subtraction, multiplication, and division. In machine learning, the field is almost always the set of real numbers (ℝ).
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Key Axioms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">1. Commutativity of Addition</h3>
            <code className="text-sm font-mono text-[var(--accent)] block mb-2">u + v = v + u</code>
            <p className="text-sm text-[var(--text-secondary)]">The order in which vectors are added does not matter.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">2. Associativity of Addition</h3>
            <code className="text-sm font-mono text-[var(--accent)] block mb-2">(u + v) + w = u + (v + w)</code>
            <p className="text-sm text-[var(--text-secondary)]">The grouping of vector addition does not affect the sum.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">3. Additive Identity</h3>
            <code className="text-sm font-mono text-[var(--accent)] block mb-2">v + 0 = v</code>
            <p className="text-sm text-[var(--text-secondary)]">There exists a zero vector that does not change a vector when added.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">4. Scalar Multiplication Distributivity</h3>
            <code className="text-sm font-mono text-[var(--accent)] block mb-2">a(u + v) = au + av</code>
            <p className="text-sm text-[var(--text-secondary)]">Scaling a sum of vectors is the same as scaling them individually and then adding.</p>
          </div>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 6</div>
        <h2 className="text-2xl font-bold mb-6">Real-World Applications</h2>
        <div className="grid grid-cols-1 gap-4 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-4 flex gap-4">
            <div className="w-12 h-12 bg-[var(--accent-bg)] text-[var(--accent)] rounded-lg flex items-center justify-center font-bold">ML</div>
            <div>
              <h4 className="font-bold mb-1">Feature Spaces</h4>
              <p className="text-sm text-[var(--text-secondary)]">In machine learning, datasets are represented as points in high-dimensional vector spaces where each dimension represents a specific feature.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
