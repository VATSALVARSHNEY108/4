import React from 'react';

export default function PythonOOP() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto py-24 px-12">
        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 1</div>
        <h1 className="text-4xl font-bold font-serif mb-8">Python: Object-Oriented Programming (OOP)</h1>
        
        <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--bg-secondary)] rounded-r-lg mb-16">
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Object-Oriented Programming</span> is a paradigm based on the concept of "objects", which can contain data (attributes) and code (methods).
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            In modern AI, almost all frameworks heavily utilize OOP. In PyTorch, custom neural networks are created by defining a Class that inherits from <code>nn.Module</code>. Understanding classes, inheritance, and the <code>__init__</code> and <code>forward</code> methods is mandatory for deep learning engineering.
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-[var(--text-tertiary)]">Section 2.5</div>
        <h2 className="text-2xl font-bold mb-6">Code Integration: PyTorch Module Example</h2>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6 mb-16 overflow-x-auto">
          <pre className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
<span className="text-[var(--accent)]">import</span> torch.nn <span className="text-[var(--accent)]">as</span> nn

<span className="text-[var(--accent)]">class</span> SimpleModel(nn.Module):
    <span className="text-[var(--accent)]">def</span> <span className="text-blue-500">__init__</span>(self, input_size, hidden_size):
        <span className="italic"># Call the parent class (nn.Module) constructor</span>
        <span className="text-blue-500">super</span>(SimpleModel, self).__init__()
        
        <span className="italic"># Define layers as attributes</span>
        self.layer1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(hidden_size, 1)

    <span className="text-[var(--accent)]">def</span> <span className="text-blue-500">forward</span>(self, x):
        <span className="italic"># Define the forward pass logic</span>
        out = self.layer1(x)
        out = self.relu(out)
        out = self.layer2(out)
        <span className="text-[var(--accent)]">return</span> out
          </pre>
        </div>
      </div>
    </div>
  );
}
