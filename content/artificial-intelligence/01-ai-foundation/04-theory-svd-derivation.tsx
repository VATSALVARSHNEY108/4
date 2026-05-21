import React from 'react';

export default function SVDDerivation() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">SVD Derivation</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The <span className="text-[var(--accent)] font-medium">Singular Value Decomposition (SVD)</span> generalizes the eigendecomposition of a square normal matrix to any m × n matrix.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Deriving SVD relies heavily on the Spectral Theorem applied to the symmetric matrices AᵀA and AAᵀ. SVD is the mathematical backbone behind Latent Semantic Analysis in NLP and modern recommendation engines.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Derivation Logic</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <ul className="list-decimal pl-5 space-y-4 text-sm text-[var(--text-secondary)]">
            <li>Construct the symmetric matrix <code>AᵀA</code>.</li>
            <li>By the Spectral Theorem, <code>AᵀA</code> has non-negative real eigenvalues and orthogonal eigenvectors <code>v_i</code>.</li>
            <li>The singular values <code>σ_i</code> are the square roots of the eigenvalues of <code>AᵀA</code>.</li>
            <li>Construct <code>u_i = (A v_i) / σ_i</code>, which forms an orthogonal basis for the column space.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
