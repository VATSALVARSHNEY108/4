import React, { useState } from 'react';

export default function Vectors() {
  const [vector, setVector] = useState({ x: 4, y: 3 });
  const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y).toFixed(2);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Linear Algebra: Vectors</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            In computer science and machine learning, a <span className="text-[var(--accent)] font-medium">vector</span> is essentially a list of numbers representing a point in space. It possesses both direction and magnitude.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Vectors are the fundamental data structures of AI. Whether it is an image, a sentence, or user behavior, AI models convert all inputs into vectors to perform mathematical operations.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Magnitude Formula</h2>
        <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-[8px] p-6 max-w-2xl mb-16">
          <code className="text-xl font-mono block mb-4">||v|| = √(x² + y²)</code>
          <p className="text-sm text-[var(--text-secondary)]">
            The magnitude (length) of a 2D vector is calculated using the Pythagorean theorem.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 4 & 5</div>
        <h2 className="text-2xl font-bold mb-6">Interactive Vector Visualization</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-[10px] border border-[var(--border)]">
              <h4 className="font-bold mb-4">Parameters</h4>
              <div className="mb-4">
                <label className="block text-sm text-[var(--text-secondary)] mb-2">X Component: {vector.x}</label>
                <input 
                  type="range" min="-10" max="10" value={vector.x}
                  onChange={(e) => setVector({ ...vector, x: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-[var(--text-secondary)] mb-2">Y Component: {vector.y}</label>
                <input 
                  type="range" min="-10" max="10" value={vector.y}
                  onChange={(e) => setVector({ ...vector, y: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-sm font-medium">Magnitude: <span className="text-[var(--accent)] font-mono">{magnitude}</span></p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[400px] bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] relative overflow-hidden flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="-12 -12 24 24" className="absolute top-0 left-0">
              <g stroke="var(--border)" strokeWidth="0.1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <line x1={-12} y1={i - 12} x2={12} y2={i - 12} />
                    <line x1={i - 12} y1={-12} x2={i - 12} y2={12} />
                  </React.Fragment>
                ))}
              </g>
              <line x1="-12" y1="0" x2="12" y2="0" stroke="var(--text-tertiary)" strokeWidth="0.2" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="var(--text-tertiary)" strokeWidth="0.2" />
              
              <line 
                x1="0" y1="0" 
                x2={vector.x} y2={-vector.y} 
                stroke="var(--accent)" 
                strokeWidth="0.4"
                markerEnd="url(#arrowhead)"
                className="transition-all duration-300 ease-out"
              />
              
              <defs>
                <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
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
