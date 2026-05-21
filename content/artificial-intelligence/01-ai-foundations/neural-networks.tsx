// Lesson: Neural Networks Basics
import React from "react";

export default function NeuralNetworks() {
  return (
    <article className="p-12" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <section id="theory" className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Neural Networks Basics</h1>
        <p className="mb-2">A neural network is a collection of interconnected nodes (neurons) organized in layers that transform inputs into outputs through learned weights.</p>
        <p className="mb-2">They model complex, non‑linear relationships and are the backbone of modern AI.</p>
      </section>
      <section id="formula" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Formula</h2>
        <div className="p-4" style={{ backgroundColor: "var(--card-bg)", borderRadius: "0.5rem", boxShadow: "var(--shadow-light)" }}>
          <code>h = sigma(Wx + b)</code>
          <p className="mt-2 text-sm">where <em>W</em> are weights, <em>b</em> bias, <em>σ</em> activation function.</p>
        </div>
      </section>
      <section id="intuition" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Visual Intuition</h2>
        <p>Think of layers as a series of filters that progressively extract higher‑level features.</p>
      </section>
      <section id="visualization" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interactive Visualization</h2>
        <div className="flex">
          <aside className="w-1/6 p-2" style={{ backgroundColor: "var(--panel-bg)" }}>
            <button className="w-full mb-2" style={{ backgroundColor: "var(--accent-orange)", color: "white", padding: "0.5rem", borderRadius: "0.25rem" }}>Play</button>
          </aside>
          <main className="flex-1 ml-4" style={{ backgroundColor: "var(--canvas-bg)" }}>
            {/* Canvas Placeholder */}
          </main>
        </div>
      </section>
      <section id="parameters" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Parameter Effects</h2>
        <p>Adjust the number of hidden units to see how model capacity changes.</p>
      </section>
      <section id="failure" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Failure Cases</h2>
        <p>Too many parameters can lead to overfitting; too few cause underfitting.</p>
      </section>
      <section id="applications" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Real‑World Applications</h2>
        <ul className="list-disc pl-5">
          <li>Image classification</li>
          <li>Speech recognition</li>
        </ul>
      </section>
    </article>
  );
}
