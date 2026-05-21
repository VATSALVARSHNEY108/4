import React from 'react';

const Introduction = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 → Theory / Concept Explanation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 1</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Introduction to Artificial Intelligence</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-xl">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Artificial Intelligence (AI) is the study of systems that can perform tasks that normally require human intelligence. It spans perception, reasoning, learning, and decision‑making. Understanding AI begins with grasping the core concepts that enable machines to model, predict, and act on data.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This lesson provides a high‑level overview of the AI ecosystem, its historical milestones, and the motivations behind modern AI research. It sets the stage for deeper dives into algorithms, mathematics, and practical implementations.
            </p>
          </div>
        </section>

        {/* Section 2 → Key Characteristics */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 2</span>
            <h2 className="text-3xl font-semibold font-serif">Key Characteristics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Adaptability", desc: "AI systems can learn from new data and adjust their behavior without being explicitly reprogrammed." },
              { title: "Pattern Recognition", desc: "The ability to identify structures and relationships in complex, unstructured datasets like images or text." },
              { title: "Automation", desc: "Executing complex sequences of tasks rapidly and consistently without human intervention." },
              { title: "Probabilistic Nature", desc: "Unlike traditional software, AI often outputs probabilities and confidence scores rather than absolute certainties." }
            ].map((char, idx) => (
              <div key={idx} className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors">
                <h3 className="text-xl font-semibold mb-2">{char.title}</h3>
                <p className="text-[var(--text-secondary)]">{char.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 → Formula or Rules */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 3</span>
            <h2 className="text-3xl font-semibold font-serif">The Core Paradigm</h2>
          </div>
          
          <div className="bg-[var(--accent-bg)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 font-mono overflow-x-auto">
            <div className="text-xl mb-4">
              AI System = Data + Model Architecture + Objective Function
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-2 pr-4 font-semibold">Component</th>
                  <th className="py-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">Data</td>
                  <td className="py-2 text-[var(--text-secondary)]">The historical examples, images, text, or signals the system learns from.</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">Model Architecture</td>
                  <td className="py-2 text-[var(--text-secondary)]">The mathematical structure (e.g., Neural Network, Decision Tree) used to process the data.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-[var(--text-secondary)]">Objective Function</td>
                  <td className="py-2 text-[var(--text-secondary)]">The rule that tells the model how well it is doing, guiding the learning process to minimize errors.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 → Visual Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 4</span>
            <h2 className="text-3xl font-semibold font-serif">Visual Intuition</h2>
          </div>
          
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
            <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              {/* Data Node */}
              <rect x="20" y="80" width="80" height="40" rx="8" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" />
              <text x="60" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="14" fontWeight="bold">Data</text>
              
              {/* Arrow */}
              <path d="M 100 100 L 150 100" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Model Node */}
              <rect x="160" y="60" width="80" height="80" rx="40" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="2" />
              <text x="200" y="105" textAnchor="middle" fill="var(--accent)" fontSize="14" fontWeight="bold">Model</text>
              
              {/* Arrow */}
              <path d="M 240 100 L 290 100" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Output Node */}
              <rect x="300" y="80" width="80" height="40" rx="8" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" />
              <text x="340" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="14" fontWeight="bold">Prediction</text>

              {/* Feedback Loop */}
              <path d="M 340 120 L 340 160 L 200 160 L 200 140" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead-gray)" />
              <text x="270" y="150" textAnchor="middle" fill="var(--text-tertiary)" fontSize="12">Feedback (Objective)</text>

              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
                </marker>
                <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="var(--text-tertiary)" />
                </marker>
              </defs>
            </svg>
            <p className="mt-6 text-sm text-[var(--text-secondary)] text-center max-w-lg">
              Think of AI as a chef: the data are the ingredients, the model is the cooking technique, and the objective is the taste‑test that determines success.
            </p>
          </div>
        </section>

        {/* Section 5 → Comparison Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 5</span>
            <h2 className="text-3xl font-semibold font-serif">Traditional Programming vs AI</h2>
          </div>
          
          <div className="overflow-x-auto border border-[var(--border)] rounded-xl">
            <table className="w-full text-left">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="p-4 font-semibold border-b border-[var(--border)]">Aspect</th>
                  <th className="p-4 font-semibold border-b border-[var(--border)]">Traditional Programming</th>
                  <th className="p-4 font-semibold border-b border-[var(--border)]">Artificial Intelligence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="p-4 font-medium">Input</td>
                  <td className="p-4 text-[var(--text-secondary)]">Data + Rules</td>
                  <td className="p-4 text-[var(--text-secondary)]">Data + Answers</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/50">
                  <td className="p-4 font-medium">Output</td>
                  <td className="p-4 text-[var(--text-secondary)]">Answers</td>
                  <td className="p-4 text-[var(--text-secondary)]">Rules (The Model)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Flexibility</td>
                  <td className="p-4 text-[var(--text-secondary)]">Rigid, fails on unexpected edge cases</td>
                  <td className="p-4 text-[var(--text-secondary)]">Adaptive, generalizes to new scenarios</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/50">
                  <td className="p-4 font-medium">Logic</td>
                  <td className="p-4 text-[var(--text-secondary)]">Explicitly written by a human developer</td>
                  <td className="p-4 text-[var(--text-secondary)]">Learned automatically through optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 → Real-World Applications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 6</span>
            <h2 className="text-3xl font-semibold font-serif">Real-World Applications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center mb-4 text-[var(--accent)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 className="font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-sm text-[var(--text-secondary)]">Powering conversational agents like ChatGPT, translation services, and sentiment analysis tools.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center mb-4 text-[var(--accent)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <h3 className="font-semibold mb-2">Computer Vision</h3>
              <p className="text-sm text-[var(--text-secondary)]">Used in facial recognition, medical image diagnosis, and autonomous vehicles interpreting their surroundings.</p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center mb-4 text-[var(--accent)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              </div>
              <h3 className="font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-sm text-[var(--text-secondary)]">Helping businesses forecast inventory needs, detect financial fraud, and personalize content recommendations.</p>
            </div>
          </div>
        </section>

        {/* Section 7 → Important Notes / Common Mistakes */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-tertiary)] uppercase">Section 7</span>
            <h2 className="text-3xl font-semibold font-serif">Important Notes</h2>
          </div>
          
          <div className="bg-[#fff4ed] dark:bg-[rgba(232,100,10,0.1)] border-l-4 border-[#e8640a] rounded-r-xl p-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8640a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <div>
                <h3 className="font-semibold text-[#e8640a] mb-1">Common Misconception</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  People often confuse "AI" with "Machine Learning". Artificial Intelligence is the broad concept of machines being able to carry out tasks in a way that we would consider "smart". Machine Learning is a specific subset of AI based on the idea that we should just give machines access to data and let them learn for themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Introduction;
