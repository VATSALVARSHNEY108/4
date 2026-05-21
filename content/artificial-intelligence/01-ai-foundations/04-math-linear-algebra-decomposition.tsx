"use client";

import React, { useState } from 'react';

export default function Decomposition() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [matrixScale, setMatrixScale] = useState<number>(1);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const stepsList = [
    { id: 1, name: "Original Space", desc: "Start with a 2D grid and a circle." },
    { id: 2, name: "Right Rotation (V^T)", desc: "Rotate the space to align with the matrix's input singular vectors." },
    { id: 3, name: "Scaling (Σ)", desc: "Stretch the space along the new axes by the singular values." },
    { id: 4, name: "Left Rotation (U)", desc: "Rotate the space again to its final orientation." },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Matrix Decomposition (SVD)</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Singular Value Decomposition (SVD) is the most fundamental matrix decomposition in linear algebra. It proves that <span className="font-semibold text-[var(--accent)]">any</span> linear transformation, no matter how complex, can be broken down into three simple geometric steps: a rotation, a scaling, and another rotation.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This concept is the backbone of Principal Component Analysis (PCA), data compression, and recommendation systems (like Netflix's algorithm).
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The SVD Equation</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold">
              A = U Σ V^T
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
                  <td className="py-2 text-[var(--text-secondary)]">Any m × n matrix (the full transformation).</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">U</td>
                  <td className="py-2 text-[var(--text-secondary)]">Orthogonal matrix containing left singular vectors (final rotation).</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">Σ (Sigma)</td>
                  <td className="py-2 text-[var(--text-secondary)]">Diagonal matrix of singular values (the scaling).</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">V^T</td>
                  <td className="py-2 text-[var(--text-secondary)]">Transpose of an orthogonal matrix containing right singular vectors (initial rotation).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 → Visual Intuition */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Visual Intuition</h2>
          </div>
          
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 flex items-center gap-6">
            <div className="flex-1 text-[var(--text-secondary)]">
              Imagine you have a picture printed on a piece of elastic rubber. SVD says that no matter how you stretch, skew, or pull that rubber (the matrix A), you can achieve the exact same final shape by first rotating the rubber (V^T), then stretching it horizontally and vertically (Σ), and finally rotating it again (U).
            </div>
          </div>
        </section>

        {/* Section 4 → Interactive Visualization */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Interactive Visualization</h2>
          </div>
          
          <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden min-h-[450px]">
            {/* Left Control Panel */}
            <div className="w-full md:w-64 border-r border-[var(--border)] bg-[var(--bg-tertiary)] p-5 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">Controls</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setActiveStep(prev => Math.max(1, prev - 1))} className="py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Prev</button>
                  <button onClick={() => setActiveStep(prev => Math.min(stepsList.length, prev + 1))} className="py-2 px-3 bg-[var(--accent)] text-white rounded-lg text-sm hover:opacity-90 transition-opacity">Next</button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">Step Tracker</h3>
                <div className="space-y-2">
                  {stepsList.map(step => (
                    <div 
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`cursor-pointer border-l-4 pl-3 py-1 transition-colors ${activeStep === step.id ? 'border-[var(--accent)] bg-[var(--accent-bg)] rounded-r' : 'border-transparent text-[var(--text-tertiary)]'}`}
                    >
                      <div className={`text-sm font-semibold ${activeStep === step.id ? 'text-[var(--accent)]' : ''}`}>{step.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Canvas */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
              <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl w-full max-w-md aspect-square relative flex items-center justify-center overflow-hidden">
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `
                      ${activeStep >= 4 ? `rotate(${rotationAngle}deg)` : ''}
                      ${activeStep >= 3 ? `scale(${matrixScale}, ${1/matrixScale})` : ''}
                      ${activeStep >= 2 ? `rotate(-45deg)` : ''}
                    `
                  }}
                >
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-[var(--accent)] bg-[var(--accent-bg)] opacity-80" />
                  <div className="absolute w-40 h-1 bg-[var(--text-primary)]" />
                  <div className="absolute h-40 w-1 bg-[var(--text-primary)]" />
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3 w-full max-w-md">
                {stepsList.find(s => s.id === activeStep)?.desc}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 → Parameter Effects */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 5</span>
            <h2 className="text-3xl font-semibold font-serif">Parameter Effects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Singular Value Ratio (Stretch): {matrixScale.toFixed(1)}</span>
                </label>
                <input type="range" min="0.5" max="3" step="0.1" value={matrixScale} onChange={e => {setMatrixScale(Number(e.target.value)); setActiveStep(3);}} className="w-full" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Final Rotation Angle (U): {rotationAngle}°</span>
                </label>
                <input type="range" min="-180" max="180" value={rotationAngle} onChange={e => {setRotationAngle(Number(e.target.value)); setActiveStep(4);}} className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 → Failure Cases */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Edge Cases & Limitations</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <h3 className="font-semibold text-[#e8640a] mb-2">Zero Singular Values</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              If a singular value in Σ is perfectly zero, the transformation completely flattens space along that dimension (destroying information). The matrix is "singular" and cannot be inverted.
            </p>
          </div>
        </section>

        {/* Section 7 → Real-World Applications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 7</span>
            <h2 className="text-3xl font-semibold font-serif">Real-World Applications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Image Compression</h3>
              <p className="text-sm text-[var(--text-secondary)]">By running SVD on an image matrix and throwing away the small singular values (and their vectors), we can reconstruct a highly accurate approximation of the image using a fraction of the memory.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Recommendation Systems</h3>
              <p className="text-sm text-[var(--text-secondary)]">SVD is famously used in algorithms like the Netflix Prize winner to factorize the "User-Movie" rating matrix into latent user preferences and latent movie features.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}