// Lesson: Gradient Descent
import React from "react";

export default function GradientDescent() {
  return (
    <article className="p-12" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <section id="theory" className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Gradient Descent</h1>
        <p className="mb-2">
          Gradient Descent is an optimization algorithm that iteratively moves towards the minimum of a function by taking steps proportional to the negative of the gradient.
        </p>
        <p className="mb-2">
          It is the workhorse behind training many machine‑learning models because it efficiently finds parameter values that minimize loss.
        </p>
      </section>
      <section id="formula" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Formula</h2>
        <div className="p-4" style={{ backgroundColor: "var(--card-bg)", borderRadius: "0.5rem", boxShadow: "var(--shadow-light)" }}>
          <code>θ_{t+1} = θ_t - eta nabla_θ J(θ_t)</code>
          <p className="mt-2 text-sm">
            where <em>θ</em> are the parameters, <em>η</em> is the learning rate, and <em>∇_θ J</em> is the gradient of the loss function.
          </p>
        </div>
      </section>
      <section id="intuition" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Visual Intuition</h2>
        <p>Imagine a ball rolling down a hill; each step moves it lower until it reaches the valley (the minimum).</p>
      </section>
      <section id="visualization" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interactive Visualization</h2>
        <div className="flex">
          <aside className="w-1/6 p-2" style={{ backgroundColor: "var(--panel-bg)" }}>
            {/* Control Panel Placeholder */}
            <button className="w-full mb-2" style={{ backgroundColor: "var(--accent-orange)", color: "white", padding: "0.5rem", borderRadius: "0.25rem" }}>Play</button>
          </aside>
          <main className="flex-1 ml-4" style={{ backgroundColor: "var(--canvas-bg)" }}>
            {/* Canvas Placeholder */}
          </main>
        </div>
      </section>
      <section id="parameters" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Parameter Effects</h2>
        <p>Changing the learning rate <em>η</em> alters how quickly the algorithm converges and can cause overshooting if too large.</p>
      </section>
      <section id="failure" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Failure Cases</h2>
        <p>If the learning rate is too high, the algorithm may diverge; if too low, convergence is slow.</p>
      </section>
      <section id="applications" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Real‑World Applications</h2>
        <ul className="list-disc pl-5">
          <li>Training deep neural networks</li>
          <li>Linear regression</li>
        </ul>
      </section>
    </article>
  );
}
