import React from 'react';

export default function HistoryOfAI() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">History of AI</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Artificial Intelligence (AI) began as an ambitious attempt to understand human intelligence and replicate it in machines. The field was formally founded at the Dartmouth Conference in 1956, where pioneers laid out the vision for creating thinking machines.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Throughout its history, AI has experienced waves of intense optimism and funding, followed by periods of disappointment known as <span className="text-[var(--accent)] font-medium">AI Winters</span>.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2</div>
        <h2 className="text-2xl font-bold mb-6">Key Eras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Symbolic AI (1950s-1980s)</h3>
            <p className="text-sm text-[var(--text-secondary)]">Relied on explicit rules and logic programming. Excelled at constrained problems like chess but struggled with perception.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Machine Learning (1990s-2010s)</h3>
            <p className="text-sm text-[var(--text-secondary)]">Shifted focus from rule-making to learning from data using statistical techniques like Support Vector Machines.</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6">
            <h3 className="font-bold mb-2">Deep Learning (2010s-Present)</h3>
            <p className="text-sm text-[var(--text-secondary)]">Fueled by massive datasets and GPUs, neural networks revolutionized image recognition and generative AI.</p>
          </div>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 5</div>
        <h2 className="text-2xl font-bold mb-6">Symbolic AI vs. Neural Networks</h2>
        <div className="overflow-hidden rounded-[10px] border border-[var(--border)] mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-secondary)]">
                <th className="p-4 border-b border-[var(--border)] font-semibold">Aspect</th>
                <th className="p-4 border-b border-[var(--border)] font-semibold">Symbolic AI</th>
                <th className="p-4 border-b border-[var(--border)] font-semibold">Neural Networks</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[var(--text-secondary)]">
              <tr>
                <td className="p-4 border-b border-[var(--border)] font-medium text-[var(--text-primary)]">Approach</td>
                <td className="p-4 border-b border-[var(--border)]">Top-down logic rules</td>
                <td className="p-4 border-b border-[var(--border)]">Bottom-up pattern recognition</td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]/50">
                <td className="p-4 border-b border-[var(--border)] font-medium text-[var(--text-primary)]">Explainability</td>
                <td className="p-4 border-b border-[var(--border)]">High (traceable rules)</td>
                <td className="p-4 border-b border-[var(--border)]">Low ("Black Box")</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
