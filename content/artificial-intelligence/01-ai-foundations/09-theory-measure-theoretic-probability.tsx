import React from 'react';

export default function MeasureTheoreticProbability() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory / Concept Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Measure-Theoretic Probability</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Basic probability (rolling dice, flipping coins) works well until you deal with <strong className="text-[var(--text-primary)]">continuous space</strong>. If you pick a random real number between 0 and 1, the probability of picking exactly 0.50000... is mathematically zero. Yet, some number must be picked!
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              To resolve these paradoxes, Andrey Kolmogorov rebuilt probability theory in 1933 using <span className="font-semibold text-[var(--accent)]">Measure Theory</span>. It treats probability exactly like measuring the volume or mass of a physical object. The total "mass" of the universe of possibilities is exactly 1.
            </p>
          </div>
        </section>

        {/* Section 2 → Key Characteristics */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">The Probability Space (Ω, F, P)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sample Space (Ω)", desc: "The set of all possible outcomes. Like the canvas upon which everything happens. (e.g., all real numbers between 0 and 1)." },
              { title: "Sigma-Algebra (F)", desc: "The collection of all 'measurable' events. You can't assign probability to random scatterings of points; they must form measurable chunks (like intervals)." },
              { title: "Probability Measure (P)", desc: "A function that takes an event from the Sigma-Algebra and assigns it a 'volume' (a probability between 0 and 1)." }
            ].map((char, idx) => (
              <div key={idx} className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors">
                <h3 className="text-xl font-semibold mb-2">{char.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{char.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 → Formula or Rules */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">Kolmogorov's Axioms</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="space-y-6">
              <div>
                <div className="font-bold text-lg mb-1">1. Non-negativity</div>
                <div className="text-[var(--text-secondary)]">For any event E in F, P(E) ≥ 0.</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">You can't have negative mass.</div>
              </div>
              
              <div>
                <div className="font-bold text-lg mb-1">2. Unit Measure</div>
                <div className="text-[var(--text-secondary)]">P(Ω) = 1.</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">The probability that *something* happens is 100%. The total mass of the universe is 1.</div>
              </div>

              <div>
                <div className="font-bold text-lg mb-1">3. Countable Additivity</div>
                <div className="text-[var(--text-secondary)]">If E₁, E₂, ... are mutually exclusive events, then P(E₁ ∪ E₂ ∪ ...) = P(E₁) + P(E₂) + ...</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">If you cut a block of cheese into pieces, the total mass is the sum of the mass of the pieces.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 → Visual Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Visual Intuition</h2>
          </div>
          
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
            <svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              {/* Sample Space Omega */}
              <rect x="50" y="25" width="300" height="200" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" />
              <text x="60" y="45" fill="var(--text-primary)" fontSize="16" fontWeight="bold">Ω (Total Mass = 1.0)</text>
              
              {/* Event A */}
              <circle cx="150" cy="125" r="50" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="2" opacity="0.8" />
              <text x="150" y="130" textAnchor="middle" fill="var(--accent)" fontSize="14" fontWeight="bold">Event A</text>
              <text x="150" y="150" textAnchor="middle" fill="var(--accent)" fontSize="12">Mass = 0.3</text>

              {/* Event B */}
              <circle cx="270" cy="125" r="40" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
              <text x="270" y="130" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">Event B</text>
              <text x="270" y="150" textAnchor="middle" fill="#3b82f6" fontSize="12">Mass = 0.2</text>
              
              <text x="200" y="245" textAnchor="middle" fill="var(--text-secondary)" fontSize="12">The area (measure) exactly represents the probability.</text>
            </svg>
          </div>
        </section>

        {/* Section 5 → Real-World Applications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 5</span>
            <h2 className="text-3xl font-semibold font-serif">Machine Learning Connection</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Expected Value as Integrals</h3>
              <p className="text-sm text-[var(--text-secondary)]">In deep learning, expectations (like average loss) are formally defined as Lebesgue integrals with respect to a probability measure. This guarantees the math holds even for extremely complex, discontinuous neural network landscapes.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <h3 className="font-semibold mb-2">KL Divergence</h3>
              <p className="text-sm text-[var(--text-secondary)]">When training Generative Models (like VAEs or Diffusion Models), we measure the distance between the model's probability distribution and the real world's distribution. This fundamentally relies on measure theory (the Radon-Nikodym derivative).</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}