import React from 'react';

export default function SpectralTheorem() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Spectral Theorem Proofs</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The <span className="text-[var(--accent)] font-medium">Spectral Theorem</span> is a foundational result in linear algebra stating that certain matrices can be diagonalized by orthogonal matrices.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            For AI and Machine Learning, the spectral theorem guarantees that symmetric matrices (like Covariance matrices in PCA or Hessian matrices in optimization) have real eigenvalues and orthogonal eigenvectors, simplifying complex computations.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Key Implications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Real Eigenvalues</h3>
            <p className="text-sm text-[var(--text-secondary)]">If A is a real symmetric matrix, all its eigenvalues are real numbers. This prevents complex-number arithmetic during optimization.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Orthogonal Eigenvectors</h3>
            <p className="text-sm text-[var(--text-secondary)]">Eigenvectors corresponding to distinct eigenvalues are orthogonal, creating a perfect new basis for transforming data (as seen in PCA).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
