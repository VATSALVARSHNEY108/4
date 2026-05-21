"use client";

import React, { useState } from 'react';

export default function PartialDerivatives() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeVariable, setActiveVariable] = useState<'x' | 'y'>('x');
  const [fixedValue, setFixedValue] = useState<number>(0);

  const stepsList = [
    { id: 1, name: "3D Surface", desc: "A function of two variables creates a 3D landscape: f(x,y)." },
    { id: 2, name: "Slice the Landscape", desc: "Hold one variable constant (freeze it). This takes a 2D slice out of the 3D landscape." },
    { id: 3, name: "Calculate 1D Slope", desc: "Now just find the normal 1D derivative along that sliced curve!" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Calculus: Partial Derivatives</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              When a function depends on multiple variables (like predicting house price based on both square footage <strong className="text-[var(--text-primary)]">and</strong> number of bedrooms), we can't just take "a derivative". We have to ask: "How much does the output change if I vary <span className="font-semibold text-[var(--accent)]">only this specific input</span>, while keeping all others perfectly constant?"
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This isolated rate of change is called a <strong className="text-[var(--text-primary)]">Partial Derivative</strong>. By calculating the partial derivative for every single input variable, we can build the <strong className="text-[var(--text-primary)]">Gradient Vector</strong>, which points in the direction of steepest ascent.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The Notation (∂)</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-center text-xl font-bold"><span className="border-b-2 border-current pb-1">∂f</span><span className="pt-1">∂x</span></div>
                <div className="text-[var(--text-secondary)]">= "Partial derivative of f with respect to x" (treat y as a constant number)</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-center text-xl font-bold"><span className="border-b-2 border-current pb-1">∂f</span><span className="pt-1">∂y</span></div>
                <div className="text-[var(--text-secondary)]">= "Partial derivative of f with respect to y" (treat x as a constant number)</div>
              </div>
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
              Imagine standing on the side of a physical mountain. You could step North, or you could step East. 
              The slope if you step purely North (keeping your East/West position frozen) is the partial derivative with respect to North. 
              The slope if you step purely East is the partial derivative with respect to East.
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
              <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl w-full max-w-lg aspect-video relative flex items-center justify-center overflow-hidden">
                
                {activeStep === 1 && (
                  <div className="text-center space-y-4">
                    <svg width="200" height="150" viewBox="0 0 200 150">
                      <path d="M 20 75 Q 100 0 180 75 Q 100 150 20 75 Z" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="2" opacity="0.8" />
                      <path d="M 20 75 Q 100 20 180 75" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
                      <path d="M 20 75 Q 100 130 180 75" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
                    </svg>
                    <div className="font-mono text-sm text-[var(--text-secondary)]">f(x,y) = x² + y²</div>
                  </div>
                )}

                {activeStep >= 2 && (
                  <div className="w-full h-full p-8 flex flex-col justify-center">
                    <div className="relative w-full h-40 border-l-2 border-b-2 border-[var(--border)]">
                      {/* The 2D Slice Parabola */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 Q 50 150 100 0" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
                        {activeStep === 3 && (
                          <>
                            {/* Tangent Line on the slice */}
                            <line x1="30" y1="95" x2="90" y2="20" stroke="var(--accent)" strokeWidth="3" />
                            <circle cx="65" cy="52" r="3" fill="var(--accent)" />
                          </>
                        )}
                      </svg>
                    </div>
                    <div className="text-center mt-6 font-mono text-sm text-[var(--text-secondary)]">
                      {activeVariable === 'y' ? `f(x, ${fixedValue}) = x² + ${fixedValue*fixedValue}` : `f(${fixedValue}, y) = ${fixedValue*fixedValue} + y²`}
                    </div>
                  </div>
                )}
                
                {activeStep >= 2 && (
                  <div className="absolute top-4 right-4 bg-[var(--bg-elevated)] border border-[var(--accent)] text-[var(--accent)] px-3 py-1 rounded text-xs font-bold shadow-sm">
                    {activeVariable === 'y' ? `y is frozen at ${fixedValue}` : `x is frozen at ${fixedValue}`}
                  </div>
                )}
              </div>
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3 w-full max-w-lg">
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
              <label className="text-sm font-bold text-[var(--text-secondary)] block">Variable to calculate derivative for:</label>
              <div className="flex gap-2">
                <button 
                  onClick={() => {setActiveVariable('x'); setActiveStep(3);}} 
                  className={`flex-1 py-2 rounded border transition-colors ${activeVariable === 'x' ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'border-[var(--border)]'}`}
                >
                  ∂f/∂x (Freeze y)
                </button>
                <button 
                  onClick={() => {setActiveVariable('y'); setActiveStep(3);}} 
                  className={`flex-1 py-2 rounded border transition-colors ${activeVariable === 'y' ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'border-[var(--border)]'}`}
                >
                  ∂f/∂y (Freeze x)
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Frozen variable value: {fixedValue}</span>
                </label>
                <input type="range" min="-5" max="5" value={fixedValue} onChange={e => {setFixedValue(Number(e.target.value)); setActiveStep(Math.max(activeStep, 2));}} className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 → Real-World Applications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Real-World Applications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Neural Network Weights</h3>
              <p className="text-sm text-[var(--text-secondary)]">A neural network's Loss Function depends on millions of weight variables. We use partial derivatives to ask: "If I freeze all 999,999 other weights, exactly how should I adjust *this specific weight* to lower the error?"</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">The Gradient Vector (∇)</h3>
              <p className="text-sm text-[var(--text-secondary)]">If you pack all the individual partial derivatives into a single list (a vector), you get the Gradient. The Gradient Vector famously points in the direction of steepest ascent of the mountain.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}