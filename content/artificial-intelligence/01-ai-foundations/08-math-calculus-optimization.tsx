"use client";

import React, { useState } from 'react';

export default function Optimization() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [learningRate, setLearningRate] = useState<number>(0.15);
  const [iterations, setIterations] = useState<number>(1);

  const stepsList = [
    { id: 1, name: "The Landscape (Loss Function)", desc: "Start with a curve representing our error. We want to find the lowest point (minimum error)." },
    { id: 2, name: "Random Initialization", desc: "Drop a ball at a random starting position on the curve." },
    { id: 3, name: "Calculate Gradient", desc: "Find the slope (derivative) at the ball's current position." },
    { id: 4, name: "Take a Step (Gradient Descent)", desc: "Move a small amount in the opposite direction of the slope." },
  ];

  // Math setup for f(x) = x^2
  const startX = -8;
  let currentX = startX;
  
  // Calculate position after N iterations using Gradient Descent
  // x_new = x - lr * f'(x)
  // for f(x) = x^2, f'(x) = 2x
  for (let i = 0; i < iterations && activeStep >= 4; i++) {
    currentX = currentX - learningRate * (2 * currentX);
  }

  // To show the current state clearly if we are on step 2 or 3 (before stepping)
  if (activeStep < 4) {
    currentX = startX;
  }

  const currentY = currentX * currentX;
  const currentSlope = 2 * currentX;

  // Canvas mapping
  const width = 600;
  const height = 400;
  const cx = width / 2;
  const cy = height - 50;
  const scaleX = 30;
  const scaleY = 4;

  const toCanvasX = (x: number) => cx + x * scaleX;
  const toCanvasY = (y: number) => cy - y * scaleY;

  // Generate curve path
  const curvePoints = [];
  for (let i = -10; i <= 10; i += 0.5) {
    curvePoints.push(`${toCanvasX(i)},${toCanvasY(i * i)}`);
  }
  const curvePath = "M " + curvePoints.join(" L ");

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Calculus: Optimization</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Optimization is the ultimate goal of machine learning. Once we define a <strong className="text-[var(--text-primary)]">Loss Function</strong> (a mathematical way to measure how "wrong" our model is), we need a reliable way to reach the absolute minimum of that function.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We achieve this using <span className="font-semibold text-[var(--accent)]">Gradient Descent</span>. By repeatedly calculating the derivative and stepping downhill, the algorithm automatically guides itself to the bottom of the valley without needing to see the whole landscape at once.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The Update Rule</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold flex items-center gap-4">
              <div>θ<sub className="text-sm">new</sub> = θ<sub className="text-sm">old</sub> - α · ∇J(θ)</div>
            </div>
            <table className="w-full text-left text-sm border-collapse mt-4">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-2 pr-4 font-semibold">Variable</th>
                  <th className="py-2 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">θ (Theta)</td>
                  <td className="py-2 text-[var(--text-secondary)]">The parameters/weights of the model we are optimizing.</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">α (Alpha)</td>
                  <td className="py-2 text-[var(--text-secondary)]">The Learning Rate (step size). Too big and it diverges; too small and it's slow.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">∇J(θ)</td>
                  <td className="py-2 text-[var(--text-secondary)]">The Gradient (derivative) of the Loss Function at the current position.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 → Interactive Visualization */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Interactive Gradient Descent</h2>
          </div>
          
          <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden min-h-[500px]">
            {/* Left Control Panel */}
            <div className="w-full md:w-64 border-r border-[var(--border)] bg-[var(--bg-tertiary)] p-5 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">Controls</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setActiveStep(prev => Math.max(1, prev - 1))} className="py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Prev</button>
                  <button onClick={() => setActiveStep(prev => Math.min(stepsList.length, prev + 1))} className="py-2 px-3 bg-[var(--accent)] text-white rounded-lg text-sm hover:opacity-90 transition-opacity">Next</button>
                  <button onClick={() => {setActiveStep(1); setIterations(1); setLearningRate(0.15);}} className="col-span-2 py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Reset</button>
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
                  <line x1={cx} y1={0} x2={cx} y2={height} stroke="var(--border)" strokeWidth="2" />
                  <line x1={0} y1={cy} x2={width} y2={cy} stroke="var(--border)" strokeWidth="2" />

                  {/* Curve (Loss Landscape) */}
                  {activeStep >= 1 && (
                    <path d={curvePath} fill="none" stroke="var(--text-tertiary)" strokeWidth="3" />
                  )}

                  {/* Tangent Line indicating slope */}
                  {activeStep >= 3 && (
                    <line 
                      x1={toCanvasX(currentX - 2)} y1={toCanvasY(currentY - currentSlope * 2)} 
                      x2={toCanvasX(currentX + 2)} y2={toCanvasY(currentY + currentSlope * 2)} 
                      stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" 
                    />
                  )}

                  {/* Ball */}
                  {activeStep >= 2 && (
                    <circle 
                      cx={toCanvasX(currentX)} cy={toCanvasY(currentY)} 
                      r="8" fill="var(--accent)" className="transition-all duration-300"
                    />
                  )}
                  
                  {/* Minimum target */}
                  {activeStep >= 1 && (
                    <circle cx={toCanvasX(0)} cy={toCanvasY(0)} r="4" fill="#10b981" />
                  )}

                </svg>

                {/* Overlays */}
                <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur p-3 rounded-lg border border-[var(--border)] text-sm font-mono space-y-1">
                  {activeStep >= 2 && <div>Current Error (y): {currentY.toFixed(2)}</div>}
                  {activeStep >= 3 && <div>Gradient (Slope): <span className="text-red-500 font-bold">{currentSlope.toFixed(2)}</span></div>}
                  {activeStep >= 4 && <div className="pt-2 mt-2 border-t border-[var(--border)] font-bold text-[var(--accent)]">Iteration: {iterations}</div>}
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
                  <span>Iterations: {iterations}</span>
                </label>
                <input 
                  type="range" min="1" max="20" value={iterations} 
                  onChange={e => {setIterations(Number(e.target.value)); setActiveStep(4);}} 
                  className="w-full" disabled={activeStep < 4}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Learning Rate (α): {learningRate.toFixed(2)}</span>
                </label>
                <input 
                  type="range" min="0.01" max="0.95" step="0.05" value={learningRate} 
                  onChange={e => {setLearningRate(Number(e.target.value)); setActiveStep(4);}} 
                  className="w-full" disabled={activeStep < 4}
                />
                <p className="text-xs text-[var(--text-tertiary)] italic mt-2">Try setting α to 0.95 and watch the ball "overshoot" the minimum and jump around wildly!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 → Failure Cases */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 5</span>
            <h2 className="text-3xl font-semibold font-serif">Optimization Pitfalls</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
              <h3 className="font-semibold text-[#e8640a] mb-2">Divergence (Learning Rate Too High)</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                If the step size (Learning Rate) is too large, the algorithm will step completely across the valley to a point even higher than where it started. It will bounce back and forth, climbing infinitely higher instead of finding the minimum.
              </p>
            </div>
            <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
              <h3 className="font-semibold text-[#e8640a] mb-2">Local Minima</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Gradient descent blindly steps downhill. If the landscape has multiple dips (like a mountain range), it will simply get stuck in the nearest valley (a local minimum), never realizing that a deeper valley (global minimum) exists over the next hill.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}