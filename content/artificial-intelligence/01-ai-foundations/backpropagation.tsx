import React from 'react';
import ConceptPage from '@/components/ConceptPage/ConceptPage';

export default function Page() {
  const lesson = {
    title: 'Backpropagation',
    theory: (
      <div className="space-y-4">
        <p>Backpropagation is the core algorithm that enables neural networks to learn by propagating error gradients backward through the network layers.</p>
        <p>It combines the chain rule of calculus with the layered structure of the model to compute partial derivatives of the loss with respect to each weight.</p>
      </div>
    ),
    formulas: [
      {
        expr: (
          <span>
            <strong className="font-serif italic text-orange-600 dark:text-blue-400">∂L</strong> / <strong className="font-serif italic text-orange-600 dark:text-blue-400">∂w</strong> = <strong className="font-serif italic text-orange-600 dark:text-blue-400">δ</strong> × <strong className="font-serif italic text-orange-600 dark:text-blue-400">a</strong>
          </span>
        ),
        description: 'Gradient of loss L with respect to weight w is the product of the error signal δ and the activation a from the previous layer.'
      }
    ],
    visualIntuition: (
      <div className="space-y-4 w-full">
        <p className="text-sm">Hover over the layers on the right to see how gradients flow back through the network.</p>
      </div>
    ),
    interactiveVisualization: (
      <div className="flex border rounded overflow-hidden" style={{ height: '400px' }}>
        <aside className="w-1/6 bg-var(--control-bg) p-4 flex flex-col space-y-4">
          <button className="btn-primary">Run Backprop</button>
          <button className="btn-primary">Reset</button>
        </aside>
        <section className="w-5/6 bg-var(--canvas-bg) flex items-center justify-center text-sm text-var(--text-secondary)">
          {/* Canvas placeholder for network graph */}
          Canvas Placeholder
        </section>
      </div>
    ),
    parameters: [
      { name: 'Learning Rate', description: 'Step size for weight updates, typically 0.001–0.01.' },
      { name: 'Momentum', description: 'Adds inertia to updates, helping escape shallow minima.' }
    ],
    failures: [
      'Vanishing gradients in deep networks can stall learning.',
      'Exploding gradients cause unstable updates.'
    ],
    applications: (
      <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
        <li><strong>Computer Vision:</strong> Enables CNNs to learn visual features.</li>
        <li><strong>Natural Language Processing:</strong> Powers transformer training.</li>
        <li><strong>Reinforcement Learning:</strong> Updates policy networks from reward signals.</li>
      </ul>
    )
  };

  return <ConceptPage lesson={lesson} />;
}
