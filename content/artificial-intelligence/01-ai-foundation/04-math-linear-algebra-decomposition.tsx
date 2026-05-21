import React from 'react';

export default function MatrixDecomposition() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Matrix Decomposition</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            In linear algebra, <span className="text-[var(--accent)] font-medium">Matrix Decomposition</span> or Matrix Factorization is the factorization of a matrix into a product of matrices.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            There are many different matrix decompositions; each finds use among a particular class of problems. In AI, Singular Value Decomposition (SVD) and Eigendecomposition are widely used for dimensionality reduction (PCA), data compression, and recommendation systems.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Singular Value Decomposition (SVD)</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">A = U Σ Vᵀ</code>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            <strong>A</strong> = Original Matrix (m × n)<br />
            <strong>U</strong> = Orthogonal Matrix of Left Singular Vectors (m × m)<br />
            <strong>Σ</strong> = Diagonal Matrix of Singular Values (m × n)<br />
            <strong>Vᵀ</strong> = Orthogonal Matrix of Right Singular Vectors (n × n)
          </p>
        </div>
      </div>
    </div>
  );
}
