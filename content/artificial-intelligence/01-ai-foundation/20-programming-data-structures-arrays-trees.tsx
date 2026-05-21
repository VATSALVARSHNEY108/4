import React from 'react';

export default function DataStructuresAI() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Data Structures for AI</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            While Mathematics tells us <span className="text-[var(--accent)] font-medium">what</span> to compute, Data Structures tell us <span className="text-[var(--accent)] font-medium">how</span> to organize data in memory so we can compute it efficiently.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Arrays, Tensors, Trees, and Graphs are the fundamental structures. N-dimensional arrays (Tensors) are used for batching data. Trees are heavily used in Decision Tree algorithms, Random Forests, and search spaces (like AlphaGo's Monte Carlo Tree Search).
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Key Structures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Tensors (N-Dimensional Arrays)</h3>
            <p className="text-sm text-[var(--text-secondary)]">Contiguous memory blocks that allow for highly parallelized operations on GPUs. PyTorch and TensorFlow operate almost exclusively on Tensors.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Graphs & Trees</h3>
            <p className="text-sm text-[var(--text-secondary)]">Used to map state spaces in reinforcement learning, represent knowledge bases (Knowledge Graphs), and define computational graphs for backpropagation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
