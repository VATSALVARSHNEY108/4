"use client"

import React, { useState } from 'react';

export default function BayesianNetworks() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [numNodes, setNumNodes] = useState<number>(3);
  const [edgeProb, setEdgeProb] = useState<number>(0.3);

  const stepsList = [
    { id: 1, name: "Define Nodes", desc: "Add random variables (nodes) to the network." },
    { id: 2, name: "Add Edges", desc: "Connect nodes with directed edges representing conditional dependencies." },
    { id: 3, name: "Set Probabilities", desc: "Assign prior probabilities and conditional tables." },
    { id: 4, name: "Inference", desc: "Query the network to compute posterior probabilities." },
  ];

  // Generate random graph data based on settings
  const nodes = Array.from({ length: numNodes }, (_, i) => ({ id: i, label: `X${i+1}` }));
  const edges = [];
  for (let i = 0; i < numNodes; i++) {
    for (let j = 0; j < numNodes; j++) {
      if (i !== j && Math.random() < edgeProb) {
        edges.push({ from: i, to: j });
      }
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Section 1 → Theory */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Bayesian Networks (Interactive)</h1>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A Bayesian Network is a directed acyclic graph (DAG) that encodes joint probability distributions. Each node represents a random variable, and edges encode conditional dependencies.
            </p>
          </div>
        </section>

        {/* Section 2 → Controls */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                <span>Number of Nodes</span>
                <span>{numNodes}</span>
              </label>
              <input type="range" min="2" max="6" value={numNodes} onChange={e => { setNumNodes(Number(e.target.value)); setActiveStep(1); }} className="w-full" />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-[var(--text-secondary)] flex justify-between">
                <span>Edge Probability</span>
                <span>{edgeProb.toFixed(2)}</span>
              </label>
              <input type="range" min="0" max="1" step="0.05" value={edgeProb} onChange={e => { setEdgeProb(Number(e.target.value)); setActiveStep(2); }} className="w-full" />
            </div>
          </div>
        </section>

        {/* Section 3 → Visualization */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden min-h-[500px]">
            {/* Left Panel */}
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
                {stepsList.map(step => (
                  <div key={step.id} onClick={() => setActiveStep(step.id)} className={`cursor-pointer border-l-4 pl-3 py-1 mt-1 ${activeStep === step.id ? 'border-[var(--accent)] bg-[var(--accent-bg)] rounded-r' : 'border-transparent text-[var(--text-tertiary)]'}`}>
                    <div className={`text-sm font-semibold ${activeStep === step.id ? 'text-[var(--accent)]' : ''}`}>{step.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Canvas */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
              <svg width="400" height="400" viewBox="0 0 400 400" className="border border-[var(--border)] bg-white dark:bg-zinc-800">
                {/* Nodes */}
                {nodes.map((node, idx) => {
                  const angle = (2 * Math.PI / nodes.length) * idx - Math.PI / 2;
                  const cx = 200 + 120 * Math.cos(angle);
                  const cy = 200 + 120 * Math.sin(angle);
                  return (
                    <g key={node.id}>
                      <circle cx={cx} cy={cy} r="20" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="2" />
                      <text x={cx} y={cy + 5} textAnchor="middle" fill="var(--text-primary)" fontWeight="bold">{node.label}</text>
                    </g>
                  );
                })}
                {/* Edges */}
                {edges.map((e, i) => {
                  const from = nodes[e.from];
                  const to = nodes[e.to];
                  const angleFrom = (2 * Math.PI / nodes.length) * e.from - Math.PI / 2;
                  const angleTo = (2 * Math.PI / nodes.length) * e.to - Math.PI / 2;
                  const x1 = 200 + 100 * Math.cos(angleFrom);
                  const y1 = 200 + 100 * Math.sin(angleFrom);
                  const x2 = 200 + 100 * Math.cos(angleTo);
                  const y2 = 200 + 100 * Math.sin(angleTo);
                  return (
                    <g key={i}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-tertiary)" strokeWidth="2" markerEnd="url(#arrow)" />
                    </g>
                  );
                })}
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="var(--text-tertiary)" />
                  </marker>
                </defs>
              </svg>
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3 w-full max-w-md">
                {stepsList.find(s => s.id === activeStep)?.desc}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}