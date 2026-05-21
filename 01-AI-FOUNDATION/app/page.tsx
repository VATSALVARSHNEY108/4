// app/page.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import CardGrid from '../components/CardGrid';
import FormulaCard from '../components/FormulaCard';
import CodeBlock from '../components/CodeBlock';
import InteractiveCanvas from '../components/InteractiveCanvas';
import ControlPanel from '../components/ControlPanel';
import ParameterSliders from '../components/ParameterSliders';
import FailureCase from '../components/FailureCase';

const Page: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--bg-primary', '#111111');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--bg-tertiary', '#222222');
      root.style.setProperty('--text-primary', '#fafafa');
      root.style.setProperty('--text-secondary', '#cccccc');
      root.style.setProperty('--border', '#333333');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8f7f4');
      root.style.setProperty('--bg-tertiary', '#f0ede8');
      root.style.setProperty('--text-primary', '#111111');
      root.style.setProperty('--text-secondary', '#5a5a5a');
      root.style.setProperty('--border', '#e5e0d8');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="px-12 py-24">
        <SectionHeader title="Gradient Descent" />
        <p className="mb-8 max-w-3xl">
          Gradient Descent is an optimization algorithm used to minimize a loss function by iteratively moving
          in the direction of steepest descent. It forms the backbone of many machine‑learning training
          procedures.
        </p>
        <CardGrid>
          <FormulaCard formula="J(θ) = \frac{1}{2m}\sum_{i=1}^{m}(h_\theta(x^{(i)}) - y^{(i)})^2" description="Mean Squared Error" />
          <FormulaCard formula="\theta_j := \theta_j - \alpha\frac{\partial}{\partial\theta_j}J(\theta)" description="Parameter update rule" />
        </CardGrid>
        <section className="my-12">
          <InteractiveCanvas />
          <ControlPanel />
          <ParameterSliders />
          <FailureCase />
        </section>
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Reference Implementation</h2>
          <CodeBlock language="typescript" code={`function gradientDescent(X: number[][], y: number[], theta: number[], alpha: number, iterations: number) {
  const m = y.length;
  for (let i = 0; i < iterations; i++) {
    const predictions = X.map(row => dot(row, theta));
    const errors = predictions.map((p, idx) => p - y[idx]);
    const gradient = new Array(theta.length).fill(0);
    for (let j = 0; j < theta.length; j++) {
      for (let k = 0; k < m; k++) {
        gradient[j] += errors[k] * X[k][j];
      }
      gradient[j] = (gradient[j] / m) * alpha;
      theta[j] -= gradient[j];
    }
  }
  return theta;
}

function dot(a: number[], b: number[]) { return a.reduce((sum, v, i) => sum + v * b[i], 0); }`} />
        </section>
      </main>
    </div>
  );
};

export default Page;
