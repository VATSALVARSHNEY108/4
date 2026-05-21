"use client";

import React, { useState } from 'react';

export default function DotProducts() {
  // Vector A components
  const [ax, setAx] = useState<number>(5);
  const [ay, setAy] = useState<number>(0);
  // Vector B components
  const [bx, setBx] = useState<number>(3);
  const [by, setBy] = useState<number>(4);

  // Active step for simulation
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsList = [
    { id: 1, name: "Vector Initialization", desc: "Draw Vector A and Vector B from the origin." },
    { id: 2, name: "Geometric Analysis", desc: "Determine the magnitudes and the angle θ between them." },
    { id: 3, name: "Orthogonal Projection", desc: "Drop a perpendicular line from B's tip onto A's direction." },
    { id: 4, name: "Dot Product Result", desc: "Multiply projection length by A's magnitude." },
  ];

  // Math Calculations
  const dotProduct = ax * bx + ay * by;
  const magA = Math.sqrt(ax * ax + ay * ay);
  const magB = Math.sqrt(bx * bx + by * by);
  const cosTheta = magA * magB > 0 ? dotProduct / (magA * magB) : 0;
  const angleRad = Math.acos(Math.max(-1, Math.min(1, cosTheta)));
  const angleDeg = ((angleRad * 180) / Math.PI).toFixed(0);

  const magASquared = ax * ax + ay * ay;
  const projFactor = magASquared > 0 ? dotProduct / magASquared : 0;
  const projx = projFactor * ax;
  const projy = projFactor * ay;

  // Grid Scale settings
  const gridMax = 8;
  const width = 600;
  const height = 400;
  const cx = width / 2;
  const cy = height / 2;
  const scale = (height - 40) / (gridMax * 2); // padding

  const toCanvasX = (x: number) => cx + x * scale;
  const toCanvasY = (y: number) => cy - y * scale;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Linear Algebra: Dot Products</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The <span className="font-semibold text-[var(--accent)]">dot product</span> (or scalar product) is an algebraic operation that takes two equal-length sequences of numbers (usually coordinate vectors) and returns a single scalar value.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Geometrically, the dot product quantifies <span className="font-semibold text-[var(--accent)]">alignment</span>. If vectors point in similar directions, their dot product is positive. If they are exactly perpendicular, their dot product is zero. If they point in opposite directions, it is negative.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Mathematical Logic</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono">
              <div className="text-xl mb-4 font-bold">
                {`u · v = ||u|| ||v|| cos(θ)`}
              </div>
              <p className="text-sm text-[var(--text-secondary)]">Geometric definition: Product of magnitudes scaled by the cosine of the angle between them.</p>
            </div>
            
            <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono">
              <div className="text-xl mb-4 font-bold">
                {`u · v = Σ (u_i * v_i)`}
              </div>
              <p className="text-sm text-[var(--text-secondary)]">Algebraic definition: Sum of coordinate element-wise multiplications.</p>
            </div>
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
              Imagine vector A is a <strong className="text-[var(--text-primary)]">runway</strong>, and vector B is an <strong className="text-[var(--text-primary)]">airplane</strong> taking off. 
              If you shine a flashlight directly above the airplane, the shadow cast on the runway represents the projection of B onto A. 
              The dot product is the length of this runway shadow multiplied by the runway vector's length.
            </div>
            <div className="w-32 h-32 shrink-0 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center border-4 border-[var(--border)]">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="10" y1="50" x2="54" y2="50" />
                <line x1="10" y1="50" x2="40" y2="20" />
                <line x1="40" y1="20" x2="40" y2="50" strokeDasharray="4 4" strokeWidth="2" stroke="var(--text-tertiary)" />
              </svg>
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
                  <button onClick={() => setActiveStep(1)} className="col-span-2 py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Reset</button>
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
                    <marker id="arrow-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="var(--accent)" />
                    </marker>
                    <marker id="arrow-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="var(--text-secondary)" />
                    </marker>
                    <marker id="arrow-proj" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#10b981" />
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

                  {/* Vector A */}
                  <line x1={cx} y1={cy} x2={toCanvasX(ax)} y2={toCanvasY(ay)} stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow-a)" />
                  <text x={toCanvasX(ax) + 10} y={toCanvasY(ay) + 10} fill="var(--accent)" fontWeight="bold">A</text>

                  {/* Vector B */}
                  <line x1={cx} y1={cy} x2={toCanvasX(bx)} y2={toCanvasY(by)} stroke="var(--text-secondary)" strokeWidth="3" markerEnd="url(#arrow-b)" />
                  <text x={toCanvasX(bx) + 10} y={toCanvasY(by) - 10} fill="var(--text-secondary)" fontWeight="bold">B</text>

                  {/* Angle Arc */}
                  {activeStep >= 2 && magA > 0 && magB > 0 && (
                    <path
                      d={`M ${toCanvasX(ax * (1.5 / magA))} ${toCanvasY(ay * (1.5 / magA))} A ${1.5 * scale} ${1.5 * scale} 0 0 ${angleRad > Math.PI ? 1 : 0} ${toCanvasX(bx * (1.5 / magB))} ${toCanvasY(by * (1.5 / magB))}`}
                      fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4"
                    />
                  )}

                  {/* Projection */}
                  {activeStep >= 3 && (
                    <>
                      <line x1={toCanvasX(bx)} y1={toCanvasY(by)} x2={toCanvasX(projx)} y2={toCanvasY(projy)} stroke="#ef4444" strokeWidth="2" strokeDasharray="6 4" />
                      <line x1={cx} y1={cy} x2={toCanvasX(projx)} y2={toCanvasY(projy)} stroke="#10b981" strokeWidth="4" markerEnd="url(#arrow-proj)" />
                    </>
                  )}
                </svg>

                {/* Overlays */}
                <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur p-3 rounded-lg border border-[var(--border)] text-sm font-mono space-y-1">
                  <div>Vector A: <span className="text-[var(--accent)]">[{ax}, {ay}]</span></div>
                  <div>Vector B: <span className="text-[var(--text-secondary)]">[{bx}, {by}]</span></div>
                  {activeStep >= 2 && <div>Angle θ: {angleDeg}°</div>}
                  {activeStep >= 4 && <div className="pt-2 mt-2 border-t border-[var(--border)] font-bold">Dot Product: {dotProduct.toFixed(1)}</div>}
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
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Vector A X: {ax}</span>
                </label>
                <input type="range" min="-8" max="8" value={ax} onChange={e => setAx(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Vector A Y: {ay}</span>
                </label>
                <input type="range" min="-8" max="8" value={ay} onChange={e => setAy(Number(e.target.value))} className="w-full" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Vector B X: {bx}</span>
                </label>
                <input type="range" min="-8" max="8" value={bx} onChange={e => setBx(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Vector B Y: {by}</span>
                </label>
                <input type="range" min="-8" max="8" value={by} onChange={e => setBy(Number(e.target.value))} className="w-full" />
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
            <h3 className="font-semibold text-[#e8640a] mb-2">Orthogonal Cancellation</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              When Vectors A and B are exactly perpendicular (e.g. A = [5,0], B = [0,4]), their projection length is 0, yielding a dot product of exactly 0. In machine learning, this implies complete independence between two feature embeddings—they share no similarity.
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
              <h3 className="font-semibold mb-2">Self-Attention in Transformers</h3>
              <p className="text-sm text-[var(--text-secondary)]">Attention scores in models like GPT are computed by taking dot products between Query vectors and Key vectors. High dot products mean the words are highly relevant to each other.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Cosine Similarity & Search</h3>
              <p className="text-sm text-[var(--text-secondary)]">Vector databases (like Pinecone) use dot products (normalized) to find the "closest" semantic match to a user's search query by aligning embeddings.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}