import React from 'react';

export default function PythonFunctional() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Python: Functional Programming</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Functional Programming</span> is a paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            While AI relies heavily on OOP for model structure, functional concepts (like map, filter, lambda functions, and pure functions) are extensively used in data preprocessing pipelines, dataset transformations, and libraries like JAX which emphasize pure functions for auto-differentiation.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Key Functional Concepts in Python</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Lambda Functions</h3>
            <code className="text-sm font-mono block mb-2">square = lambda x: x**2</code>
            <p className="text-sm text-[var(--text-secondary)]">Anonymous inline functions used for short, simple operations.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Map</h3>
            <code className="text-sm font-mono block mb-2">map(func, iterable)</code>
            <p className="text-sm text-[var(--text-secondary)]">Applies a function to every item in an iterable. Crucial for parallel data transformations.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">List Comprehensions</h3>
            <code className="text-sm font-mono block mb-2">[x**2 for x in data if x > 0]</code>
            <p className="text-sm text-[var(--text-secondary)]">A Pythonic, highly optimized way to filter and map data in a single line.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Pure Functions</h3>
            <p className="text-sm text-[var(--text-secondary)]">Functions that always produce the same output for the same input and have no side effects. Essential for reproducible ML pipelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
