import React from 'react';

export default function SpectralTheorem() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory / Concept Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">The Spectral Theorem</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The <span className="font-semibold text-[var(--accent)]">Spectral Theorem</span> is one of the most beautiful and profound results in linear algebra. It establishes conditions under which a linear operator or a matrix can be perfectly diagonalized using an orthonormal basis.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In simpler terms, it guarantees that for certain "nice" symmetric matrices (like covariance matrices in statistics), there exists a perfect coordinate system where the matrix's transformation is nothing more than stretching and squishing along mutually perpendicular axes. There is no rotation or shearing in this special basis.
            </p>
          </div>
        </section>

        {/* Section 2 → Key Characteristics */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Key Guarantees of the Theorem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Real Eigenvalues", desc: "If a matrix is real and symmetric (A = A^T), all of its eigenvalues are guaranteed to be real numbers (no complex or imaginary parts)." },
              { title: "Orthogonal Eigenvectors", desc: "Eigenvectors corresponding to different eigenvalues are completely orthogonal (perpendicular) to each other." },
              { title: "Full Basis Guarantee", desc: "There will always be enough eigenvectors to form a complete basis for the space. The matrix is never 'defective'." },
              { title: "Diagonalizability", desc: "The matrix can always be factored into A = QΛQ^T, where Q is an orthogonal matrix and Λ is a diagonal matrix of eigenvalues." }
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
            <h2 className="text-3xl font-semibold font-serif">Eigendecomposition Formula</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold">
              A = Q Λ Q^T
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
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">A</td>
                  <td className="py-2 text-[var(--text-secondary)]">A real, symmetric matrix (n × n).</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">Q</td>
                  <td className="py-2 text-[var(--text-secondary)]">An orthogonal matrix containing the eigenvectors of A as its columns. (Q^T = Q^-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">Λ (Lambda)</td>
                  <td className="py-2 text-[var(--text-secondary)]">A diagonal matrix containing the real eigenvalues of A.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 → Visual Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Geometric Interpretation</h2>
          </div>
          
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
            <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              
              {/* Step 1: Rotate to Eigenbasis (Q^T) */}
              <g transform="translate(60, 100)">
                <line x1="-40" y1="0" x2="40" y2="0" stroke="var(--text-tertiary)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="-40" x2="0" y2="40" stroke="var(--text-tertiary)" strokeWidth="1" strokeDasharray="2 2" />
                {/* Rotated axes */}
                <line x1="-30" y1="-30" x2="30" y2="30" stroke="var(--text-secondary)" strokeWidth="2" />
                <line x1="-30" y1="30" x2="30" y2="-30" stroke="var(--text-secondary)" strokeWidth="2" />
                <circle cx="0" cy="0" r="30" fill="none" stroke="var(--accent)" strokeWidth="2" />
                <text x="0" y="55" textAnchor="middle" fill="var(--text-primary)" fontSize="12">1. Rotate (Q^T)</text>
              </g>

              <path d="M 120 100 L 150 100" stroke="var(--border)" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 2: Scale along axes (Λ) */}
              <g transform="translate(200, 100)">
                <line x1="-30" y1="-30" x2="30" y2="30" stroke="var(--text-secondary)" strokeWidth="2" />
                <line x1="-30" y1="30" x2="30" y2="-30" stroke="var(--text-secondary)" strokeWidth="2" />
                {/* Ellipse stretching */}
                <ellipse cx="0" cy="0" rx="45" ry="15" transform="rotate(45)" fill="none" stroke="var(--accent)" strokeWidth="2" />
                <text x="0" y="55" textAnchor="middle" fill="var(--text-primary)" fontSize="12">2. Scale (Λ)</text>
              </g>

              <path d="M 250 100 L 280 100" stroke="var(--border)" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 3: Rotate back (Q) */}
              <g transform="translate(340, 100)">
                <line x1="-40" y1="0" x2="40" y2="0" stroke="var(--text-tertiary)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="-40" x2="0" y2="40" stroke="var(--text-tertiary)" strokeWidth="1" strokeDasharray="2 2" />
                {/* Rotated ellipse */}
                <ellipse cx="0" cy="0" rx="45" ry="15" transform="rotate(45)" fill="none" stroke="var(--accent)" strokeWidth="2" />
                <text x="0" y="55" textAnchor="middle" fill="var(--text-primary)" fontSize="12">3. Rotate Back (Q)</text>
              </g>

              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 1.5 L 5 3 L 0 4.5 z" fill="var(--border)" />
                </marker>
              </defs>
            </svg>
            <p className="mt-6 text-sm text-[var(--text-secondary)] text-center max-w-lg">
              The Spectral Theorem breaks down any symmetric transformation into three simple, rigid steps: Rotate to align with the eigenvectors, stretch along those axes, and rotate back.
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
              <h3 className="font-semibold mb-2">Covariance Matrices in ML</h3>
              <p className="text-sm text-[var(--text-secondary)]">Because covariance matrices measure variance between features, they are always symmetric. The Spectral Theorem guarantees we can always find perfectly independent (orthogonal) principal components (PCA).</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Hessian Optimization</h3>
              <p className="text-sm text-[var(--text-secondary)]">In deep learning, the Hessian matrix of second derivatives is symmetric. The Spectral Theorem allows us to analyze the curvature of the loss function landscape in orthogonal directions to find local minima or saddle points.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}