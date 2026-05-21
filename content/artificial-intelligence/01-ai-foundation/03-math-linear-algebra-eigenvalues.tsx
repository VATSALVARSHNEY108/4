import React, { useState } from 'react';

export default function Eigenvalues() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Eigenvalues & Eigenvectors</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            An <span className="text-[var(--accent)] font-medium">Eigenvector</span> of a linear transformation (represented by a matrix) is a non-zero vector that changes at most by a scalar factor when that linear transformation is applied to it.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The corresponding <span className="text-[var(--accent)] font-medium">Eigenvalue</span> is the factor by which the eigenvector is scaled. They are crucial in Principal Component Analysis (PCA) for dimensionality reduction and understanding matrix properties.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">The Core Equation</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-2xl font-mono block mb-4">A v = λ v</code>
          <p className="text-sm text-[var(--text-secondary)]">
            <strong>A</strong> = Transformation Matrix<br />
            <strong>v</strong> = Eigenvector<br />
            <strong>λ</strong> (lambda) = Eigenvalue
          </p>
          <p className="mt-4 text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-4">
            Applying the matrix A to the vector v merely scales the vector by λ, without changing its direction.
          </p>
        </div>
      </div>
    </div>
  );
}
