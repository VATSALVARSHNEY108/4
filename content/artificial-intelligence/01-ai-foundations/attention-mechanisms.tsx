import React from 'react';
import ConceptPage from '@/components/ConceptPage/ConceptPage';

export default function Page() {
  const lesson = {
    title: 'Attention Mechanisms',
    theory: (
      <div className="space-y-4">
        <p>Attention allows models to focus on relevant parts of the input when generating each output token, enabling dynamic weighting of information.</p>
        <p>It replaces fixed-size context windows with content‑aware relevance scores, improving handling of long sequences.</p>
      </div>
    ),
    formulas: [
      {
        expr: (
          <span>
            <strong className="font-serif italic text-orange-600 dark:text-blue-400">α_{i,j}</strong> = {`frac{exp(e_{i,j})}{sum_k exp(e_{i,k})}`}
          </span>
        ),
        description: 'Softmax‑normalized attention weight between query i and key j.'
      }
    ],
    visualIntuition: (
      <div className="space-y-4 w-full">
        <p className="text-sm">Imagine a spotlight that highlights the most relevant words in a sentence for a given word being generated.</p>
      </div>
    ),
    interactiveVisualization: (
      <div className="flex border rounded overflow-hidden" style={{ height: '400px' }}>
        <aside className="w-1/6 bg-var(--control-bg) p-4 flex flex-col space-y-4">
          <button className="btn-primary">Play</button>
          <button className="btn-primary">Reset</button>
        </aside>
        <section className="w-5/6 bg-var(--canvas-bg) flex items-center justify-center text-sm text-var(--text-secondary)">
          {/* Canvas placeholder for attention matrix */}
          Canvas Placeholder
        </section>
      </div>
    ),
    parameters: [
      { name: 'Head Count', description: 'Number of parallel attention heads.' },
      { name: 'Scale Factor', description: '√d_k scaling to maintain stable gradients.' }
    ],
    failures: [
      'Quadratic memory cost limits very long sequences.',
      'Softmax can produce diffuse weights losing sharp focus.'
    ],
    applications: (
      <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
        <li><strong>Machine Translation:</strong> Align source and target tokens.</li>
        <li><strong>Document Retrieval:</strong> Focus on relevant passages.</li>
        <li><strong>Vision Transformers:</strong> Attend over image patches.</li>
      </ul>
    )
  };

  return <ConceptPage lesson={lesson} />;
}
