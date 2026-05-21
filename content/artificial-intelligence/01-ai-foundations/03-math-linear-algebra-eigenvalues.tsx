"use client";

import React, { useState } from 'react';

export default function Eigenvalues() {
  // Matrix A components: [a, b; c, d]
  const [a, setA] = useState<number>(2);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(3);

  // Vector v components
  const [vx, setVx] = useState<number>(1);
  const [vy, setVy] = useState<number>(1);

  // Active step for simulation
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsList = [
    { id: 1, name: "Initial State", desc: "Start with an input vector v (blue)." },
    { id: 2, name: "Linear Transformation", desc: "Apply Matrix A. Watch how the space warps." },
    { id: 3, name: "Output Vector", desc: "Observe the new vector Av (orange)." },
    { id: 4, name: "Eigen Analysis", desc: "Does the output vector point in the exact same direction as the input vector? If so, it's an eigenvector!" },
  ];

  // Calculations
  const transformedX = a * vx + b * vy;
  const transformedY = c * vx + d * vy;
  
  // Calculate if it's currently an eigenvector (parallel)
  // Cross product of 2D vectors: vx*ty - vy*tx == 0
  const crossProduct = vx * transformedY - vy * transformedX;
  const isEigen = Math.abs(crossProduct) < 0.01 && (vx !== 0 || vy !== 0);
  const eigenValue = isEigen ? (vx !== 0 ? transformedX / vx : transformedY / vy) : null;

  // Grid Scale settings
  const gridMax = 5;
  const width = 600;
  const height = 400;
  const cx = width / 2;
  const cy = height / 2;
  const scale = (height - 40) / (gridMax * 2);

  const toCanvasX = (x: number) => cx + x * scale;
  const toCanvasY = (y: number) => cy - y * scale;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Eigenvalues and Eigenvectors</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              When a matrix transforms a space (stretching and squishing it), most vectors get knocked off their original line. However, a few special vectors are only <span className="font-semibold text-[var(--accent)]">scaled</span> (stretched or shrunk), remaining on their original line.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              These special vectors are called <strong className="text-[var(--text-primary)]">Eigenvectors</strong>, and the factor by which they are stretched is their <strong className="text-[var(--text-primary)]">Eigenvalue</strong>. They reveal the fundamental axes of transformation of the matrix, which is crucial for dimensionality reduction techniques like PCA.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Mathematical Logic</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold">
              A v = λ v
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
                  <td className="py-2 text-[var(--text-secondary)]">The square transformation matrix.</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">v</td>
                  <td className="py-2 text-[var(--text-secondary)]">The eigenvector (a non-zero vector).</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">λ (Lambda)</td>
                  <td className="py-2 text-[var(--text-secondary)]">The eigenvalue (a scalar).</td>
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
              Imagine drawing a shape on a sheet of rubber, then stretching the sheet in various directions. Most lines drawn on the sheet will change their angle. But if you stretch it perfectly left-to-right, a horizontal line drawn on it will stay perfectly horizontal—it just gets longer. That line represents an eigenvector.
            </div>
          </div>
        </section>

        {/* Section 4 → Interactive Visualization */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Interactive Visualization</h2>
          </div>
          
          <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden min-h-[500px]">
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
            <div className="flex-1 p-6 flex flex-col">
              <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl flex-1 relative overflow-hidden flex items-center justify-center">
                <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="arrow-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#3b82f6" />
                    </marker>
                    <marker id="arrow-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f97316" />
                    </marker>
                  </defs>

                  {/* Grid */}
                  {Array.from({ length: gridMax * 2 + 1 }).map((_, idx) => {
                    const val = idx - gridMax;
                    const posX = cx + val * scale;
                    const posY = cy - val * scale;
                    return (
                      <React.Fragment key={idx}>
                        <line x1={posX} y1={0} x2={posX} y2={height} stroke="var(--border)" strokeWidth={val === 0 ? 2 : 1} />
                        <line x1={0} y1={posY} x2={width} y2={posY} stroke="var(--border)" strokeWidth={val === 0 ? 2 : 1} />
                      </React.Fragment>
                    );
                  })}

                  {/* Original Space Grid (Dashed) - Shown lightly during transformation */}
                  {activeStep === 2 && Array.from({ length: gridMax * 2 + 1 }).map((_, idx) => {
                    const val = idx - gridMax;
                    const posX = cx + val * scale;
                    const posY = cy - val * scale;
                    return (
                      <React.Fragment key={'orig'+idx}>
                        <line x1={posX} y1={0} x2={posX} y2={height} stroke="var(--text-tertiary)" strokeDasharray="4 4" strokeWidth="1" opacity="0.3" />
                        <line x1={0} y1={posY} x2={width} y2={posY} stroke="var(--text-tertiary)" strokeDasharray="4 4" strokeWidth="1" opacity="0.3" />
                      </React.Fragment>
                    );
                  })}

                  {/* Input Vector v */}
                  {activeStep >= 1 && (
                    <>
                      <line x1={cx} y1={cy} x2={toCanvasX(vx)} y2={toCanvasY(vy)} stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-v)" />
                      <text x={toCanvasX(vx) + 10} y={toCanvasY(vy) + 10} fill="#3b82f6" fontWeight="bold">v</text>
                    </>
                  )}

                  {/* Transformed Vector Av */}
                  {activeStep >= 3 && (
                    <>
                      <line x1={cx} y1={cy} x2={toCanvasX(transformedX)} y2={toCanvasY(transformedY)} stroke="#f97316" strokeWidth="4" markerEnd="url(#arrow-t)" />
                      <text x={toCanvasX(transformedX) + 10} y={toCanvasY(transformedY) - 10} fill="#f97316" fontWeight="bold">Av</text>
                    </>
                  )}

                  {/* Span Line (shows the line the vector is on) */}
                  {activeStep === 4 && (
                    <line 
                      x1={toCanvasX(-vx * gridMax)} y1={toCanvasY(-vy * gridMax)} 
                      x2={toCanvasX(vx * gridMax)} y2={toCanvasY(vy * gridMax)} 
                      stroke={isEigen ? "#10b981" : "var(--text-tertiary)"} strokeWidth="2" strokeDasharray="6 6" opacity="0.5" 
                    />
                  )}
                </svg>

                {/* Overlays */}
                <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur p-3 rounded-lg border border-[var(--border)] text-sm font-mono space-y-2 min-w-[200px]">
                  <div>Vector v: <span className="text-blue-500 font-bold">[{vx}, {vy}]</span></div>
                  {activeStep >= 3 && (
                    <div>Av: <span className="text-orange-500 font-bold">[{transformedX.toFixed(1)}, {transformedY.toFixed(1)}]</span></div>
                  )}
                  {activeStep === 4 && (
                    <div className={`pt-2 mt-2 border-t border-[var(--border)] font-bold ${isEigen ? 'text-green-500' : 'text-red-500'}`}>
                      {isEigen ? `Eigenvector! λ = ${eigenValue?.toFixed(1)}` : "Not an eigenvector"}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3">
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
              <h3 className="font-bold text-[var(--text-primary)] border-b border-[var(--border)] pb-2">Matrix A Components</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between"><span>Top Left (a): {a}</span></label>
                  <input type="range" min="-3" max="3" value={a} onChange={e => setA(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between"><span>Top Right (b): {b}</span></label>
                  <input type="range" min="-3" max="3" value={b} onChange={e => setB(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between"><span>Bot Left (c): {c}</span></label>
                  <input type="range" min="-3" max="3" value={c} onChange={e => setC(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between"><span>Bot Right (d): {d}</span></label>
                  <input type="range" min="-3" max="3" value={d} onChange={e => setD(Number(e.target.value))} className="w-full" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-[var(--text-primary)] border-b border-[var(--border)] pb-2">Input Vector v</h3>
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between"><span>X Component: {vx}</span></label>
                <input type="range" min="-3" max="3" value={vx} onChange={e => {setVx(Number(e.target.value)); setActiveStep(4);}} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between"><span>Y Component: {vy}</span></label>
                <input type="range" min="-3" max="3" value={vy} onChange={e => {setVy(Number(e.target.value)); setActiveStep(4);}} className="w-full" />
              </div>
              <p className="text-xs text-[var(--text-tertiary)] italic">Try adjusting vx and vy until the vector turns green (becomes an eigenvector).</p>
            </div>
          </div>
        </section>

        {/* Section 6 → Failure Cases */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Failure Cases</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <h3 className="font-semibold text-[#e8640a] mb-2">Complex Eigenvalues</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              If a matrix represents a pure rotation (e.g., a 90-degree rotation), NO real vector stays on its own line (except the zero vector). In this case, the matrix has no real eigenvalues. Its eigenvalues will be complex numbers, indicating an oscillatory/rotational behavior.
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
              <h3 className="font-semibold mb-2">Principal Component Analysis (PCA)</h3>
              <p className="text-sm text-[var(--text-secondary)]">In machine learning, we calculate the eigenvectors of the data's covariance matrix. The eigenvector with the largest eigenvalue points in the direction of maximum variance, allowing us to compress images and datasets.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Google's PageRank</h3>
              <p className="text-sm text-[var(--text-secondary)]">The original algorithm used to rank Google search results models the web as a massive matrix. The "importance" of every page is actually just the eigenvector associated with the eigenvalue 1 of this matrix.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}