import React from 'react';

export default function SVDTheory() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory / Concept Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">SVD Theory & Derivation</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              While the Spectral Theorem only applies to symmetric, square matrices, the <span className="font-semibold text-[var(--accent)]">Singular Value Decomposition (SVD)</span> is a generalization that applies to <strong className="text-[var(--text-primary)]">any</strong> m × n matrix.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The derivation of SVD relies on a clever trick: even if a matrix A is not symmetric or square, the matrices (A^T)A and A(A^T) <strong className="text-[var(--text-primary)]">are always symmetric and positive semi-definite</strong>. Because they are symmetric, we can apply the Spectral Theorem to them to find our singular vectors.
            </p>
          </div>
        </section>

        {/* Section 2 → Key Characteristics */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The Core Connections</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Right Singular Vectors (V)", desc: "The columns of V are the orthogonal eigenvectors of the matrix (A^T)A. They live in the input space of A." },
              { title: "Left Singular Vectors (U)", desc: "The columns of U are the orthogonal eigenvectors of the matrix A(A^T). They live in the output space of A." },
              { title: "Singular Values (σ)", desc: "The singular values are the square roots of the non-zero eigenvalues of (A^T)A (or A(A^T), since they share the same non-zero eigenvalues)." },
              { title: "Eckart-Young Theorem", desc: "SVD provides the mathematically optimal low-rank approximation of a matrix. Keeping only the top k singular values gives the closest possible rank-k matrix." }
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
            <h2 className="text-3xl font-semibold font-serif">Derivation Logic</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-lg mb-4 font-bold text-[var(--text-secondary)]">If A = U Σ V^T, then:</div>
            
            <div className="space-y-4">
              <div>
                <div className="font-bold">(A^T) A = (U Σ V^T)^T (U Σ V^T)</div>
                <div className="font-bold pl-8">= (V Σ^T U^T) (U Σ V^T)</div>
                <div className="font-bold pl-8 text-[var(--accent)]">= V (Σ^T Σ) V^T</div>
              </div>
              <div className="text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-2">
                Notice that U^T U = I because U is orthogonal. The result is exactly the eigendecomposition of (A^T)A. 
                Thus, V contains the eigenvectors of (A^T)A, and the square of the singular values are the eigenvalues.
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 → Visual Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Dimensionality Reduction</h2>
          </div>
          
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
            <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              {/* Full Matrix A */}
              <rect x="20" y="50" width="80" height="100" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" />
              <text x="60" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="14" fontWeight="bold">A (m×n)</text>
              
              <text x="120" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="18" fontWeight="bold">=</text>

              {/* U_k Matrix */}
              <rect x="140" y="50" width="40" height="100" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="2" />
              <text x="160" y="105" textAnchor="middle" fill="var(--accent)" fontSize="14" fontWeight="bold">U_k</text>

              {/* Sigma_k Matrix */}
              <rect x="190" y="50" width="40" height="40" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="2" />
              <text x="210" y="75" textAnchor="middle" fill="var(--text-secondary)" fontSize="14" fontWeight="bold">Σ_k</text>

              {/* V_k^T Matrix */}
              <rect x="240" y="50" width="100" height="40" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" />
              <text x="290" y="75" textAnchor="middle" fill="var(--text-primary)" fontSize="14" fontWeight="bold">V_k^T</text>

              <path d="M 140 160 L 340 160" stroke="var(--text-tertiary)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="240" y="180" textAnchor="middle" fill="var(--text-tertiary)" fontSize="12">Truncated SVD (rank k)</text>
            </svg>
            <p className="mt-6 text-sm text-[var(--text-secondary)] text-center max-w-lg">
              By keeping only the top k singular values and discarding the rest, we create a smaller, compressed version of the matrix that retains the most important variance.
            </p>
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
                <h3 className="font-semibold text-[#e8640a] mb-1">Singular Values vs Eigenvalues</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Singular values are ALWAYS non-negative real numbers, even if the original matrix has negative or complex eigenvalues. This makes them an incredibly stable metric for measuring the "magnitude" of a transformation in different directions.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}