"use client";

import React, { useState } from 'react';

export default function ConditionalProbability() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [probA, setProbA] = useState<number>(0.3);
  const [probBGivenA, setProbBGivenA] = useState<number>(0.8);
  const [probBGivenNotA, setProbBGivenNotA] = useState<number>(0.1);

  const stepsList = [
    { id: 1, name: "Prior Probability P(A)", desc: "The base probability of Event A happening, before we see any evidence." },
    { id: 2, name: "Likelihoods P(B|A) & P(B|~A)", desc: "If A is true, how likely is evidence B? If A is false, how likely is evidence B?" },
    { id: 3, name: "Total Probability P(B)", desc: "The overall chance of seeing evidence B, calculated by summing the two scenarios where B happens." },
    { id: 4, name: "Posterior P(A|B) [Bayes]", desc: "We saw evidence B! We restrict our universe ONLY to the B circle. What portion of B is also A?" },
  ];

  // Calculations
  const probNotA = 1 - probA;
  const jointAB = probA * probBGivenA;
  const jointNotAB = probNotA * probBGivenNotA;
  const totalB = jointAB + jointNotAB;
  const posterior = totalB > 0 ? jointAB / totalB : 0;

  // Visual layout for square representing Universe (1.0 area)
  // Let's use a 400x400 SVG where Area = Probability.
  // Left side is A, Right side is ~A.
  const width = 400;
  const height = 400;
  
  const widthA = width * probA;
  const widthNotA = width - widthA;

  const heightBInA = height * probBGivenA;
  const heightBInNotA = height * probBGivenNotA;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Conditional & Bayes</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--accent)]">Conditional Probability</span> is the probability of an event happening, given that we know another event has already happened. It effectively shrinks our "universe of possibilities" down to only the scenarios where the given event is true.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This leads directly to <strong className="text-[var(--text-primary)]">Bayes' Theorem</strong>, the mathematical rule for updating our beliefs based on new evidence. It is the core of modern machine learning algorithms like Naive Bayes classifiers and Hidden Markov Models.
            </p>
          </div>
        </section>

        {/* Section 2 → Formula */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Bayes' Theorem</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4 font-bold flex flex-wrap items-center gap-4">
              <div>P(A|B) =</div>
              <div className="flex flex-col text-center">
                <span className="border-b-2 border-current pb-1">P(B|A) · P(A)</span>
                <span className="pt-1">P(B)</span>
              </div>
            </div>
            <table className="w-full text-left text-sm border-collapse mt-6">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-2 pr-4 font-semibold">Term</th>
                  <th className="py-2 font-semibold">Name & Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--accent)]">P(A|B)</td>
                  <td className="py-2 text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Posterior:</strong> How likely is the hypothesis A, given that we just saw evidence B?</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-blue-500">P(A)</td>
                  <td className="py-2 text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Prior:</strong> How likely was hypothesis A before we saw any evidence?</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-green-500">P(B|A)</td>
                  <td className="py-2 text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Likelihood:</strong> If A is true, how likely is it that we would see evidence B?</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-purple-500">P(B)</td>
                  <td className="py-2 text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Evidence / Marginal:</strong> The total probability of seeing evidence B under all possible scenarios.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 → Interactive Visualization */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Visualizing Bayes (Area Model)</h2>
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
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
              <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl relative overflow-hidden p-6 w-full max-w-[500px] flex flex-col items-center">
                
                <svg width={width} height={height} className="border-2 border-[var(--text-tertiary)] bg-white dark:bg-zinc-800">
                  {/* Base Universe */}
                  
                  {/* A Area */}
                  <rect 
                    x={0} y={0} width={widthA} height={height} 
                    fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth={activeStep === 1 ? 4 : 0}
                    className="transition-all duration-500"
                  />
                  
                  {/* ~A Area */}
                  <rect 
                    x={widthA} y={0} width={widthNotA} height={height} 
                    fill="rgba(113, 113, 122, 0.1)" stroke="#71717a" strokeWidth={activeStep === 1 ? 4 : 0}
                    className="transition-all duration-500"
                  />

                  {/* B inside A */}
                  <rect 
                    x={0} y={height - heightBInA} width={widthA} height={heightBInA} 
                    fill="rgba(16, 185, 129, 0.6)" stroke="#10b981" strokeWidth={activeStep >= 2 ? 2 : 0}
                    opacity={activeStep >= 2 ? 1 : 0}
                    className="transition-all duration-500"
                  />
                  
                  {/* B inside ~A */}
                  <rect 
                    x={widthA} y={height - heightBInNotA} width={widthNotA} height={heightBInNotA} 
                    fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth={activeStep >= 2 ? 2 : 0}
                    opacity={activeStep >= 2 ? 1 : 0}
                    className="transition-all duration-500"
                  />

                  {/* Dim everything except B in Step 4 to show conditional restriction */}
                  {activeStep === 4 && (
                    <rect x={0} y={0} width={width} height={height} fill="black" opacity="0.6" className="transition-all duration-500" style={{ pointerEvents: 'none', mixBlendMode: 'saturation' }} />
                  )}

                  {/* Labels */}
                  {activeStep >= 1 && widthA > 40 && <text x={widthA/2} y={30} textAnchor="middle" fill="#3b82f6" fontWeight="bold">A</text>}
                  {activeStep >= 1 && widthNotA > 40 && <text x={widthA + widthNotA/2} y={30} textAnchor="middle" fill="#a1a1aa" fontWeight="bold">~A</text>}
                  
                  {activeStep >= 2 && widthA > 40 && heightBInA > 20 && <text x={widthA/2} y={height - heightBInA/2 + 5} textAnchor="middle" fill="white" fontWeight="bold">B|A</text>}
                  {activeStep >= 2 && widthNotA > 40 && heightBInNotA > 20 && <text x={widthA + widthNotA/2} y={height - heightBInNotA/2 + 5} textAnchor="middle" fill="white" fontWeight="bold">B|~A</text>}
                </svg>

                {/* Status Bar */}
                <div className="w-full mt-4 flex justify-between text-sm font-mono bg-[var(--bg-elevated)] border border-[var(--border)] p-3 rounded text-[var(--text-secondary)]">
                  {activeStep === 1 && <div>P(A) = {probA.toFixed(2)}</div>}
                  {activeStep === 2 && <div>P(B|A) = {probBGivenA.toFixed(2)} | P(B|~A) = {probBGivenNotA.toFixed(2)}</div>}
                  {activeStep === 3 && <div>P(B) = ({(jointAB).toFixed(2)}) + ({(jointNotAB).toFixed(2)}) = <strong className="text-purple-500">{totalB.toFixed(2)}</strong></div>}
                  {activeStep === 4 && <div>P(A|B) = {jointAB.toFixed(2)} / {totalB.toFixed(2)} = <strong className="text-[var(--accent)] text-lg">{posterior.toFixed(3)}</strong></div>}
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3 w-full max-w-[500px]">
                {stepsList.find(s => s.id === activeStep)?.desc}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 → Parameter Effects */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Parameter Effects (Try a Medical Test!)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-blue-500 flex justify-between">
                  <span>P(A): Disease Prevalence</span>
                  <span>{probA.toFixed(2)}</span>
                </label>
                <input 
                  type="range" min="0" max="1" step="0.01" value={probA} 
                  onChange={e => {setProbA(Number(e.target.value)); setActiveStep(4);}} 
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-green-500 flex justify-between">
                  <span>P(B|A): True Positive Rate (Sensitivity)</span>
                  <span>{probBGivenA.toFixed(2)}</span>
                </label>
                <input 
                  type="range" min="0" max="1" step="0.01" value={probBGivenA} 
                  onChange={e => {setProbBGivenA(Number(e.target.value)); setActiveStep(4);}} 
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-emerald-700 dark:text-emerald-300 flex justify-between">
                  <span>P(B|~A): False Positive Rate</span>
                  <span>{probBGivenNotA.toFixed(2)}</span>
                </label>
                <input 
                  type="range" min="0" max="1" step="0.01" value={probBGivenNotA} 
                  onChange={e => {setProbBGivenNotA(Number(e.target.value)); setActiveStep(4);}} 
                  className="w-full"
                />
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border)]">
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>The Base Rate Fallacy:</strong> Try setting a very rare disease P(A) = 0.01. Give the test a great True Positive Rate P(B|A) = 0.99. But give it a 5% False Positive Rate P(B|~A) = 0.05.
                  Notice that even if you test positive (B), the probability you actually have the disease P(A|B) is shockingly low!
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}