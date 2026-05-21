import React from 'react';
import ConceptPage from '@/components/ConceptPage/ConceptPage';

export default function Page() {
  const lesson = {
    title: 'Convolutional Neural Networks',
    theory: (
      <div className="space-y-4">
        <p>CNNs are specialized neural networks designed to process data with a grid-like topology such as images.</p>
        <p>They exploit spatial locality via learnable convolution kernels, reducing parameters and capturing hierarchical features.</p>
      </div>
    ),
    formulas: [
      {
        expr: (
          <span>
            <strong className="font-serif italic text-orange-600 dark:text-blue-400">y_{i,j,k}</strong> = n            sum_{c}sum_{m}sum_{n} n            <strong className="font-serif italic text-orange-600 dark:text-blue-400">x_{i+m, j+n, c}</strong>n            cdot n            <strong className="font-serif italic text-orange-600 dark:text-blue-400">w_{m,n,c,k}</strong>
          </span>
        ),
        description: 'Discrete convolution operation producing activation y at spatial location (i,j) for output channel k.'
      }
    ],
    visualIntuition: (
      <div className="space-y-4 w-full">
        <p className="text-sm">Think of a sliding window that extracts local patches and applies the same filter across the image.</p>
      </div>
    ),
    interactiveVisualization: (
      <div className="flex border rounded overflow-hidden" style={{ height: '400px' }}>
        <aside className="w-1/6 bg-var(--control-bg) p-4 flex flex-col space-y-4">
          <button className="btn-primary">Play</button>
          <button className="btn-primary">Reset</button>
        </aside>
        <section className="w-5/6 bg-var(--canvas-bg) flex items-center justify-center text-sm text-var(--text-secondary)">
          {/* Canvas placeholder for convolution animation */}
          Canvas Placeholder
        </section>
      </div>
    ),
    parameters: [
      { name: 'Kernel Size', description: 'Spatial dimensions of the filter (e.g., 3×3, 5×5).' },
      { name: 'Stride', description: 'Step size for moving the kernel across the input.' },
      { name: 'Padding', description: 'Zeros added around input to control output size.' }
    ],
    failures: [
      'Too many layers without proper regularization lead to over‑fitting.',
      'Improper stride or padding can cause loss of spatial information.'
    ],
    applications: (
      <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
        <li><strong>Image Classification:</strong> Detect objects in photographs.</li>
        <li><strong>Medical Imaging:</strong> Segment tumors in MRI scans.</li>
        <li><strong>Video Analysis:</strong> Extract motion features frame‑by‑frame.</li>
      </ul>
    )
  };

  return <ConceptPage lesson={lesson} />;
}
