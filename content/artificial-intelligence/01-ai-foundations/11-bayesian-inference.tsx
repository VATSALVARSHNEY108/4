import React from "react";

export default function BayesianInference() {
  return (
    <section className="px-12 py-24 bg-var(--bg-primary) text-var(--text-primary)">
      <h1 className="text-3xl font-bold mb-4">11. Bayesian Inference</h1>
      <p className="mb-4">
        Bayesian inference provides a principled way to update beliefs in the light of new evidence. It relies on Bayes' theorem:
      </p>
      <pre className="bg-var(--card-bg) p-4 rounded overflow-x-auto whitespace-pre-wrap">
        {`\\[\text{Posterior} = \frac{\text{Likelihood} \times \text{Prior}}{\text{Evidence}}\\]`}
      </pre>
      <p className="mt-4">
        Where:
        <ul className="list-disc ml-6 mt-2">
          <li>Prior: initial belief before seeing data.</li>
          <li>Likelihood: probability of observed data under a hypothesis.</li>
          <li>Evidence: normalizing constant.</li>
          <li>Posterior: updated belief after observing data.</li>
        </ul>
      </p>
    </section>
  );
}
