// Lesson: Probabilistic Models
import React from "react";

export default function ProbabilisticModels() {
  return (
    <article className="p-12" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <section id="theory" className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Probabilistic Models</h1>
        <p className="mb-2">
          Probabilistic models capture uncertainty by describing data generation processes using probability distributions.
        </p>
        <p className="mb-2">
          They form the statistical backbone of many AI algorithms, from Bayesian inference to generative modeling.
        </p>
      </section>
      <section id="formula" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Formula</h2>
        <div className="p-4" style={{ backgroundColor: "var(--card-bg)", borderRadius: "0.5rem", boxShadow: "var(--shadow-light)" }}>
          <code>{`p(x|theta) = frac{1}{Z(theta)} expbigl(-E(x; theta)bigr)`}</code>
          <p className="mt-2 text-sm">
            where <em>p</em> is the probability of data <em>x</em> given parameters <em>θ</em>, <em>E</em> an energy function, and <em>Z</em> the partition function.
          </p>
        </div>
      </section>
      <section id="intuition" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Visual Intuition</h2>
        <p>Imagine a landscape where valleys represent high probability regions; parameters shape the terrain.</p>
      </section>
      <section id="visualization" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interactive Visualization</h2>
        <div className="flex">
          <aside className="w-1/6 p-2" style={{ backgroundColor: "var(--panel-bg)" }}>
            {/* Controls placeholder */}
            <button className="w-full mb-2" style={{ backgroundColor: "var(--accent-orange)", color: "white", padding: "0.5rem", borderRadius: "0.25rem" }}>Play</button>
          </aside>
          <main className="flex-1 ml-4" style={{ backgroundColor: "var(--canvas-bg)" }}>
            {/* Canvas placeholder */}
          </main>
        </div>
      </section>
      <section id="parameters" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Parameter Effects</h2>
        <p>Changing distribution parameters (mean, variance) reshapes the probability landscape, affecting model confidence.</p>
      </section>
      <section id="failure" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Failure Cases</h2>
        <p>Mis‑specified priors or over‑confident likelihoods can lead to poor generalization and biased predictions.</p>
      </section>
      <section id="applications" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Real‑World Applications</h2>
        <ul className="list-disc pl-5">
          <li>Bayesian networks for causal inference</li>
          <li>Hidden Markov Models for speech recognition</li>
          <li>Variational Autoencoders for generative modeling</li>
        </ul>
      </section>
    </article>
  );
}

