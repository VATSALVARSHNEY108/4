"use client";

import React, { useState } from 'react';

export default function ProbabilityDistributions() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [mean, setMean] = useState<number>(0);
  const [stdDev, setStdDev] = useState<number>(1);

  const stepsList = [
    { id: 1, name: "The Normal Distribution", desc: "Start with the standard 'Bell Curve' (Mean = 0, Std Dev = 1)." },
    { id: 2, name: "Shifting the Mean (μ)", desc: "Changing the mean shifts the entire distribution left or right without changing its shape." },
    { id: 3, name: "Changing Variance (σ)", desc: "Changing the standard deviation makes the curve wider/flatter (high variance) or narrower/taller (low variance)." },
    { id: 4, name: "Area Under Curve", desc: "No matter how you stretch or shift it, the total area under a probability curve is ALWAYS exactly 1." },
  ];

  // Canvas mapping
  const width = 600;
  const height = 400;
  const cx = width / 2;
  const cy = height - 50;
  
  // Normal Distribution PDF function
  const calculateNormalY = (x: number, m: number, s: number) => {
    const factor = 1 / (s * Math.sqrt(2 * Math.PI));
    const exponent = -0.5 * Math.pow((x - m) / s, 2);
    return factor * Math.exp(exponent);
  };

  // Generate curve path based on state
  const curvePoints = [];
  // Domain from -6 to 6
  for (let i = -6; i <= 6; i += 0.1) {
    const canvasX = cx + (i * 45); // scale X
    // Scale Y massively for visualization (PDF max for N(0,1) is ~0.4, scale up to ~300px)
    const canvasY = cy - (calculateNormalY(i, mean, stdDev) * 600); 
    curvePoints.push(`${canvasX},${canvasY}`);
  }
  
  const curvePath = "M " + curvePoints.join(" L ");
  // Close path to fill area
  const areaPath = curvePath + ` L ${cx + 6*45} ${cy} L ${cx - 6*45} ${cy} Z`;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Probability Distributions</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A <span className="font-semibold text-[var(--accent)]">Probability Distribution</span> is a mathematical function that describes the likelihood of different possible outcomes in an experiment.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In Machine Learning, we don't just predict a single number; we predict distributions. For example, a generative AI doesn't just output the "best" next word, it outputs a probability distribution over the entire vocabulary, and we sample from it. The <strong className="text-[var(--text-primary)]">Normal (Gaussian) Distribution</strong> is the most important continuous distribution in statistics.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The Gaussian PDF</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold flex items-center gap-4">
              <div>f(x) =</div>
              <div className="flex flex-col text-center"><span className="border-b-2 border-current pb-1">1</span><span className="pt-1">σ√(2π)</span></div>
              <div>e<sup className="text-sm">-(x - μ)² / (2σ²)</sup></div>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">The Probability Density Function for the Normal Distribution.</p>
          </div>
        </section>

        {/* Section 3 → Interactive Visualization */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Interactive Gaussian</h2>
          </div>
          
          <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden min-h-[500px]">
            {/* Left Control Panel */}
            <div className="w-full md:w-64 border-r border-[var(--border)] bg-[var(--bg-tertiary)] p-5 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">Controls</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setActiveStep(prev => Math.max(1, prev - 1))} className="py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Prev</button>
                  <button onClick={() => setActiveStep(prev => Math.min(stepsList.length, prev + 1))} className="py-2 px-3 bg-[var(--accent)] text-white rounded-lg text-sm hover:opacity-90 transition-opacity">Next</button>
                  <button onClick={() => {setActiveStep(1); setMean(0); setStdDev(1);}} className="col-span-2 py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Reset</button>
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
                  
                  {/* Axis */}
                  <line x1={cx} y1={0} x2={cx} y2={height} stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1={0} y1={cy} x2={width} y2={cy} stroke="var(--text-primary)" strokeWidth="2" />
                  
                  {/* Tick Marks */}
                  {Array.from({ length: 13 }).map((_, idx) => {
                    const val = idx - 6;
                    return (
                      <React.Fragment key={idx}>
                        <line x1={cx + val*45} y1={cy} x2={cx + val*45} y2={cy + 5} stroke="var(--text-primary)" strokeWidth="2" />
                        <text x={cx + val*45} y={cy + 20} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{val}</text>
                      </React.Fragment>
                    );
                  })}

                  {/* Filled Area */}
                  {activeStep >= 4 && (
                    <path d={areaPath} fill="var(--accent-bg)" opacity="0.5" className="transition-all duration-300" />
                  )}

                  {/* Curve */}
                  <path d={curvePath} fill="none" stroke="var(--accent)" strokeWidth="4" className="transition-all duration-300" />
                  
                  {/* Mean Indicator */}
                  {activeStep >= 2 && (
                    <>
                      <line x1={cx + mean*45} y1={cy} x2={cx + mean*45} y2={cy - (calculateNormalY(mean, mean, stdDev) * 600)} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" className="transition-all duration-300" />
                      <text x={cx + mean*45} y={cy - (calculateNormalY(mean, mean, stdDev) * 600) - 10} textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">μ</text>
                    </>
                  )}

                  {/* Std Dev Indicator (1 sigma range) */}
                  {activeStep >= 3 && (
                    <g className="transition-all duration-300">
                      <line 
                        x1={cx + (mean - stdDev)*45} y1={cy - (calculateNormalY(mean - stdDev, mean, stdDev) * 600)} 
                        x2={cx + (mean + stdDev)*45} y2={cy - (calculateNormalY(mean + stdDev, mean, stdDev) * 600)} 
                        stroke="#3b82f6" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)"
                      />
                      <text x={cx + mean*45} y={cy - (calculateNormalY(mean - stdDev, mean, stdDev) * 600) - 10} textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">± 1σ (68%)</text>
                    </g>
                  )}
                  
                  <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M 0 1.5 L 3 3 L 0 4.5 z" fill="#3b82f6" />
                    </marker>
                  </defs>

                </svg>

                {/* Overlays */}
                <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur p-3 rounded-lg border border-[var(--border)] text-sm font-mono space-y-1">
                  <div>Mean (μ): <span className="font-bold text-red-500">{mean.toFixed(1)}</span></div>
                  <div>Std Dev (σ): <span className="font-bold text-blue-500">{stdDev.toFixed(2)}</span></div>
                  {activeStep >= 4 && <div className="pt-2 mt-2 border-t border-[var(--border)] font-bold text-[var(--accent)]">Total Area: 1.000</div>}
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3">
                {stepsList.find(s => s.id === activeStep)?.desc}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 → Parameter Effects */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Parameter Effects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Mean (μ): {mean}</span>
                </label>
                <input 
                  type="range" min="-3" max="3" step="0.5" value={mean} 
                  onChange={e => {setMean(Number(e.target.value)); setActiveStep(Math.max(activeStep, 2));}} 
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Standard Deviation (σ): {stdDev}</span>
                </label>
                <input 
                  type="range" min="0.5" max="3" step="0.1" value={stdDev} 
                  onChange={e => {setStdDev(Number(e.target.value)); setActiveStep(Math.max(activeStep, 3));}} 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}