"use client";

import React, { useState } from 'react';

export default function Derivatives() {
  const [xVal, setXVal] = useState<number>(2);
  const [dx, setDx] = useState<number>(2);
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsList = [
    { id: 1, name: "The Function", desc: "Start with a non-linear function curve (e.g., f(x) = x²)." },
    { id: 2, name: "Two Points (Secant)", desc: "Pick a point x, and another point a distance Δx away. Draw a line between them." },
    { id: 3, name: "Taking the Limit", desc: "Shrink Δx towards zero. Watch the secant line become a tangent line." },
    { id: 4, name: "The Derivative", desc: "The slope of that exact tangent line is the derivative at x." },
  ];

  // Math Setup
  const f = (x: number) => 0.5 * x * x; // f(x) = 0.5 * x^2 for visual scaling
  const fPrime = (x: number) => x;

  const y1 = f(xVal);
  const y2 = f(xVal + dx);
  const secantSlope = dx !== 0 ? (y2 - y1) / dx : fPrime(xVal);
  
  // Canvas mapping
  const width = 600;
  const height = 400;
  const cx = 50; // left padding
  const cy = height - 50; // bottom padding
  const scaleX = 50;
  const scaleY = 20;

  const toCanvasX = (x: number) => cx + x * scaleX;
  const toCanvasY = (y: number) => cy - y * scaleY;

  // Generate curve path
  const curvePoints = [];
  for (let i = 0; i <= 10; i += 0.2) {
    curvePoints.push(`${toCanvasX(i)},${toCanvasY(f(i))}`);
  }
  const curvePath = "M " + curvePoints.join(" L ");

  // Secant/Tangent line drawing (extrapolate to edges)
  const lineStartX = 0;
  const lineStartY = y1 - secantSlope * (xVal - 0);
  const lineEndX = 10;
  const lineEndY = y1 + secantSlope * (10 - xVal);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Calculus: Derivatives</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A <span className="font-semibold text-[var(--accent)]">derivative</span> measures the instantaneous rate of change of a function. If you are driving a car, your position over time is the function, and your exact speed at any given second is the derivative.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In Machine Learning, derivatives are the absolute core of optimization. They tell the model which direction to adjust its internal parameters to minimize errors (Gradient Descent).
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
            <div className="text-xl mb-4 font-bold flex items-center">
              <span>f'(x) = lim(Δx → 0)</span>
              <div className="inline-flex flex-col text-center mx-3 text-lg">
                <span className="border-b-2 border-current pb-1">f(x + Δx) - f(x)</span>
                <span className="pt-1">Δx</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">The limit of the secant line's slope as the two points get infinitely close together.</p>
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
              Think of a mountain slope. If you connect your current position to a point 1 mile away, you get the average steepness (Secant). But if you place a straight wooden plank right under your feet, the angle of that plank is the exact steepness where you are standing (Derivative/Tangent).
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
                  <button onClick={() => {
                    setActiveStep(prev => Math.min(stepsList.length, prev + 1));
                    if (activeStep === 2) setDx(0);
                  }} className="py-2 px-3 bg-[var(--accent)] text-white rounded-lg text-sm hover:opacity-90 transition-opacity">Next</button>
                  <button onClick={() => {setActiveStep(1); setDx(2); setXVal(2);}} className="col-span-2 py-2 px-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm hover:border-[var(--accent)] transition-colors">Reset</button>
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
                  
                  {/* Axes */}
                  <line x1={cx} y1={0} x2={cx} y2={height} stroke="var(--border)" strokeWidth="2" />
                  <line x1={0} y1={cy} x2={width} y2={cy} stroke="var(--border)" strokeWidth="2" />

                  {/* Curve */}
                  {activeStep >= 1 && (
                    <path d={curvePath} fill="none" stroke="var(--text-tertiary)" strokeWidth="3" />
                  )}

                  {/* Secant/Tangent Line */}
                  {activeStep >= 2 && (
                    <line 
                      x1={toCanvasX(lineStartX)} y1={toCanvasY(lineStartY)} 
                      x2={toCanvasX(lineEndX)} y2={toCanvasY(lineEndY)} 
                      stroke={dx === 0 ? "var(--accent)" : "#3b82f6"} strokeWidth="2" strokeDasharray={dx === 0 ? "none" : "6 4"} 
                    />
                  )}

                  {/* Point 1 (x) */}
                  {activeStep >= 2 && (
                    <>
                      <line x1={toCanvasX(xVal)} y1={cy} x2={toCanvasX(xVal)} y2={toCanvasY(y1)} stroke="var(--text-tertiary)" strokeDasharray="2 2" />
                      <circle cx={toCanvasX(xVal)} cy={toCanvasY(y1)} r="5" fill={dx === 0 ? "var(--accent)" : "#3b82f6"} />
                      <text x={toCanvasX(xVal)} y={cy + 20} textAnchor="middle" fill="var(--text-primary)" fontSize="12">x</text>
                    </>
                  )}

                  {/* Point 2 (x + dx) */}
                  {activeStep >= 2 && dx !== 0 && (
                    <>
                      <line x1={toCanvasX(xVal + dx)} y1={cy} x2={toCanvasX(xVal + dx)} y2={toCanvasY(y2)} stroke="var(--text-tertiary)" strokeDasharray="2 2" />
                      <circle cx={toCanvasX(xVal + dx)} cy={toCanvasY(y2)} r="5" fill="#3b82f6" />
                      <text x={toCanvasX(xVal + dx)} y={cy + 20} textAnchor="middle" fill="var(--text-primary)" fontSize="12">x+Δx</text>
                    </>
                  )}
                </svg>

                {/* Overlays */}
                <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur p-3 rounded-lg border border-[var(--border)] text-sm font-mono space-y-1">
                  <div>x: {xVal.toFixed(1)}</div>
                  {activeStep >= 2 && (
                    <>
                      <div>Δx: <span className={dx === 0 ? 'text-[var(--accent)] font-bold' : ''}>{dx.toFixed(2)}</span></div>
                      <div>Slope: <span className="font-bold text-blue-500">{secantSlope.toFixed(2)}</span></div>
                    </>
                  )}
                  {dx === 0 && (
                    <div className="pt-2 mt-2 border-t border-[var(--border)] font-bold text-[var(--accent)]">
                      Instantaneous Tangent Reached!
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
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Current Point (x): {xVal}</span>
                </label>
                <input type="range" min="1" max="8" step="0.5" value={xVal} onChange={e => {setXVal(Number(e.target.value)); setActiveStep(Math.max(activeStep, 2));}} className="w-full" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Step Size (Δx): {dx}</span>
                </label>
                <input type="range" min="0" max="4" step="0.1" value={dx} onChange={e => {setDx(Number(e.target.value)); setActiveStep(e.target.value === "0" ? 4 : 2);}} className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 → Failure Cases */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Edge Cases & Failures</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <h3 className="font-semibold text-[#e8640a] mb-2">Non-Differentiable Points</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              If a function has a sharp corner (like the absolute value function |x| at x=0), the slope jumps instantly from negative to positive. At that exact corner, you cannot place a single flat plank, meaning the derivative is undefined. This happens often with the ReLU activation function in Neural Networks.
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
              <h3 className="font-semibold mb-2">Gradient Descent</h3>
              <p className="text-sm text-[var(--text-secondary)]">Derivatives tell algorithms exactly which direction to move to minimize loss (find the bottom of the valley). Positive derivative means step left; negative means step right.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Physics Engine Simulation</h3>
              <p className="text-sm text-[var(--text-secondary)]">If you know an object's position, the first derivative gives velocity, and the second derivative gives acceleration, allowing engines to simulate realistic gravity and momentum.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}