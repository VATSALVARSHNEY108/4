"use client";

import React, { useState } from 'react';

export default function ChainRule() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [gear1Speed, setGear1Speed] = useState<number>(2); // df/dg
  const [gear2Speed, setGear2Speed] = useState<number>(3); // dg/dx
  
  const finalSpeed = gear1Speed * gear2Speed;

  const stepsList = [
    { id: 1, name: "Input (x)", desc: "A change in x turns the first small gear." },
    { id: 2, name: "Inner Function (g)", desc: "The first gear turns the second gear at rate dg/dx." },
    { id: 3, name: "Outer Function (f)", desc: "The second gear turns the final output gear at rate df/dg." },
    { id: 4, name: "Total Change", desc: "The total rate of change is the product of the intermediate rates." },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Calculus: The Chain Rule</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The <span className="font-semibold text-[var(--accent)]">Chain Rule</span> is a formula to compute the derivative of a composite function. If the output of function A becomes the input of function B, the chain rule tells us how a tiny change at the very beginning ripples all the way through to the final output.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In deep learning, this is the entire mathematical foundation of <strong className="text-[var(--text-primary)]">Backpropagation</strong>. Neural networks are just hundreds of composite functions nested inside each other.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The Chain Equation</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold flex flex-wrap gap-4 items-center">
              <div>d/dx [f(g(x))] = f'(g(x)) · g'(x)</div>
              <div className="text-[var(--text-secondary)]">OR</div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col text-center"><span className="border-b-2 border-current pb-1">dy</span><span className="pt-1">dx</span></div>
                <span>=</span>
                <div className="flex flex-col text-center"><span className="border-b-2 border-current pb-1">dy</span><span className="pt-1">du</span></div>
                <span>·</span>
                <div className="flex flex-col text-center"><span className="border-b-2 border-current pb-1">du</span><span className="pt-1">dx</span></div>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">To find how y changes with x, multiply how y changes with u by how u changes with x.</p>
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
              Imagine a system of interlocking gears. If turning the first gear 1 inch causes the second gear to turn 3 inches (rate = 3), and turning the second gear 1 inch causes the third gear to turn 2 inches (rate = 2), then turning the first gear 1 inch causes the third gear to turn exactly 6 inches (3 × 2 = 6).
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
            <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
              <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl w-full max-w-lg p-8 relative flex items-center justify-between">
                
                {/* Gear 1 (x) */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-full border-4 border-dashed transition-transform duration-1000 ease-linear ${activeStep >= 1 ? 'animate-spin border-blue-500' : 'border-[var(--border)]'}`} style={{ animationDuration: '3s' }} />
                  <div className="text-center">
                    <div className="font-bold">Input (x)</div>
                    <div className="text-xs text-[var(--text-secondary)]">Rate: 1</div>
                  </div>
                </div>

                {activeStep >= 2 ? <div className="text-xl font-bold text-blue-500">× {gear2Speed}</div> : <div className="w-8" />}

                {/* Gear 2 (g) */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-24 h-24 rounded-full border-4 border-dashed transition-transform duration-1000 ease-linear ${activeStep >= 2 ? 'animate-spin border-green-500' : 'border-[var(--border)]'}`} style={{ animationDuration: `${3 / gear2Speed}s`, animationDirection: 'reverse' }} />
                  <div className="text-center">
                    <div className="font-bold">g(x)</div>
                    <div className="text-xs text-[var(--text-secondary)]">dg/dx = {gear2Speed}</div>
                  </div>
                </div>

                {activeStep >= 3 ? <div className="text-xl font-bold text-green-500">× {gear1Speed}</div> : <div className="w-8" />}

                {/* Gear 3 (f) */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-32 h-32 rounded-full border-4 border-dashed transition-transform duration-1000 ease-linear ${activeStep >= 3 ? 'animate-spin border-[var(--accent)]' : 'border-[var(--border)]'}`} style={{ animationDuration: `${3 / finalSpeed}s` }} />
                  <div className="text-center">
                    <div className="font-bold">Output f(g(x))</div>
                    <div className="text-xs text-[var(--text-secondary)]">df/dg = {gear1Speed}</div>
                  </div>
                </div>

                {/* Overlay Result */}
                {activeStep === 4 && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[var(--bg-elevated)] border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded-lg font-bold shadow-lg">
                    Total df/dx = {gear2Speed} × {gear1Speed} = {finalSpeed}
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
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Inner derivative (dg/dx): {gear2Speed}</span>
                </label>
                <input type="range" min="1" max="5" value={gear2Speed} onChange={e => {setGear2Speed(Number(e.target.value)); setActiveStep(4);}} className="w-full" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                  <span>Outer derivative (df/dg): {gear1Speed}</span>
                </label>
                <input type="range" min="1" max="5" value={gear1Speed} onChange={e => {setGear1Speed(Number(e.target.value)); setActiveStep(4);}} className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 → Failure Cases */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Vanishing Gradients</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <h3 className="font-semibold text-[#e8640a] mb-2">The Chain Multiplies Everything</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              If you chain together many functions whose derivatives are slightly less than 1 (like the Sigmoid function), multiplying 0.9 × 0.9 × 0.9... quickly approaches exactly 0. This is the famous "Vanishing Gradient" problem in deep neural networks—the first layers stop learning because the derivative signal shrinks to zero by the time it reaches them.
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
              <h3 className="font-semibold mb-2">Backpropagation</h3>
              <p className="text-sm text-[var(--text-secondary)]">To train an AI, we need to know how tweaking a weight in layer 1 affects the final error at layer 100. We just use the chain rule, stepping backward from layer 100 to layer 1, multiplying the local derivatives at each step.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Financial Options Pricing</h3>
              <p className="text-sm text-[var(--text-secondary)]">In quantitative finance, the value of an option depends on the price of the stock, which in turn depends on market volatility. Calculating Greeks (risk metrics) heavily relies on the chain rule to pass sensitivities through these dependencies.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}