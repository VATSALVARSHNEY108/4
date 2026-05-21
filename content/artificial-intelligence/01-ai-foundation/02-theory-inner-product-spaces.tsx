import React from 'react';

export default function InnerProductSpaces() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Inner Product Spaces</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            An <span className="text-[var(--accent)] font-medium">Inner Product Space</span> is a vector space with an additional structure called an inner product. This operation associates each pair of vectors in the space with a scalar quantity known as the inner product of the vectors.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            This structure allows the rigorous introduction of intuitive geometrical notions such as the length of a vector or the angle between two vectors, generalizing the dot product to abstract vector spaces.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Axioms of Inner Product</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 mb-16 max-w-3xl">
          <p className="mb-4 text-sm text-[var(--text-secondary)]">For an operation <code>⟨u, v⟩</code> to be considered a valid inner product, it must satisfy three main properties:</p>
          <ul className="list-disc pl-5 space-y-4 text-sm text-[var(--text-secondary)]">
            <li>
              <strong>Symmetry:</strong> <code>⟨u, v⟩ = ⟨v, u⟩</code>
              <div className="text-[var(--text-tertiary)] mt-1">The order of vectors does not change the result (for real vector spaces).</div>
            </li>
            <li>
              <strong>Linearity in the first argument:</strong> <code>⟨au + bv, w⟩ = a⟨u, w⟩ + b⟨v, w⟩</code>
              <div className="text-[var(--text-tertiary)] mt-1">It distributes over addition and scalar multiplication.</div>
            </li>
            <li>
              <strong>Positive Definiteness:</strong> <code>⟨v, v⟩ ≥ 0</code>, and <code>⟨v, v⟩ = 0</code> if and only if <code>v = 0</code>
              <div className="text-[var(--text-tertiary)] mt-1">A vector's inner product with itself is always non-negative and is zero only for the zero vector.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
