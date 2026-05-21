import React, { useState } from 'react';

export default function DotProducts() {
  const [v1, setV1] = useState({ x: 3, y: 0 });
  const [v2, setV2] = useState({ x: 2, y: 2 });
  
  const dotProduct = (v1.x * v2.x + v1.y * v2.y);
  
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Linear Algebra: Dot Products</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The <span className="text-[var(--accent)] font-medium">Dot Product</span> (or scalar product) is an algebraic operation that takes two equal-length sequences of numbers and returns a single number.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Geometrically, it relates to the angle between the two vectors. It tells us how much one vector "points in the same direction" as another. This is the core mathematical operation behind Neural Network weights and Attention mechanisms.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Mathematical Formulas</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6">
            <p className="text-sm text-[var(--text-tertiary)] mb-2">Algebraic Definition</p>
            <code className="text-xl font-mono block mb-4">a · b = Σ(aᵢ × bᵢ)</code>
            <p className="text-sm text-[var(--text-secondary)]">Multiply matching components and sum them up.</p>
          </div>
          <div className="flex-1 bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6">
            <p className="text-sm text-[var(--text-tertiary)] mb-2">Geometric Definition</p>
            <code className="text-xl font-mono block mb-4">a · b = ||a|| ||b|| cos(θ)</code>
            <p className="text-sm text-[var(--text-secondary)]">Depends on the magnitude of the vectors and the angle between them.</p>
          </div>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Sections 4 & 5</div>
        <h2 className="text-2xl font-bold mb-6">Interactive Dot Product Visualization</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-[10px] border border-[var(--border)]">
              <h4 className="font-bold mb-4">Vector A</h4>
              <div className="mb-2">
                <label className="block text-sm text-[var(--text-secondary)]">X: {v1.x}</label>
                <input type="range" min="-5" max="5" value={v1.x} onChange={(e) => setV1({ ...v1, x: parseInt(e.target.value) })} className="w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-[var(--text-secondary)]">Y: {v1.y}</label>
                <input type="range" min="-5" max="5" value={v1.y} onChange={(e) => setV1({ ...v1, y: parseInt(e.target.value) })} className="w-full" />
              </div>
              
              <h4 className="font-bold mb-4 mt-6">Vector B</h4>
              <div className="mb-2">
                <label className="block text-sm text-[var(--text-secondary)]">X: {v2.x}</label>
                <input type="range" min="-5" max="5" value={v2.x} onChange={(e) => setV2({ ...v2, x: parseInt(e.target.value) })} className="w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-[var(--text-secondary)]">Y: {v2.y}</label>
                <input type="range" min="-5" max="5" value={v2.y} onChange={(e) => setV2({ ...v2, y: parseInt(e.target.value) })} className="w-full" />
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border)]">
                <p className="text-lg font-medium">Dot Product = <span className="text-[var(--accent)] font-mono">{dotProduct}</span></p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  {dotProduct > 0 ? "Vectors point in similar directions (Acute angle)" : 
                   dotProduct < 0 ? "Vectors point in opposing directions (Obtuse angle)" : 
                   "Vectors are perpendicular (Orthogonal, 90 degrees)"}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[400px] bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] relative overflow-hidden flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="-6 -6 12 12" className="absolute top-0 left-0">
              <g stroke="var(--border)" strokeWidth="0.1">
                {Array.from({ length: 13 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <line x1={-6} y1={i - 6} x2={6} y2={i - 6} />
                    <line x1={i - 6} y1={-6} x2={i - 6} y2={6} />
                  </React.Fragment>
                ))}
              </g>
              <line x1="-6" y1="0" x2="6" y2="0" stroke="var(--text-tertiary)" strokeWidth="0.15" />
              <line x1="0" y1="-6" x2="0" y2="6" stroke="var(--text-tertiary)" strokeWidth="0.15" />
              
              <line x1="0" y1="0" x2={v1.x} y2={-v1.y} stroke="#ff5555" strokeWidth="0.2" markerEnd="url(#arrowA)" />
              <line x1="0" y1="0" x2={v2.x} y2={-v2.y} stroke="var(--accent)" strokeWidth="0.2" markerEnd="url(#arrowB)" />
              
              <defs>
                <marker id="arrowA" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                  <polygon points="0 0, 4 2, 0 4" fill="#ff5555" />
                </marker>
                <marker id="arrowB" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                  <polygon points="0 0, 4 2, 0 4" fill="var(--accent)" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
