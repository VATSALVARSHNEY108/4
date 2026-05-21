import React, { useState, useEffect, useRef } from 'react';
// --- Subcomponents for standard UI elements ---
const SectionHeader: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="mb-8">
    <h2 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-tertiary)] mb-2">Section {number}</h2>
    <h3 className="text-3xl font-bold font-serif text-[var(--text-primary)]">{title}</h3>
  </div>
);
const TheoryBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border-l-[3px] border-[var(--accent)] pl-6 py-4 bg-[var(--bg-secondary)] rounded-r-lg shadow-sm mb-12">
    {children}
  </div>
);
const FormulaCard: React.FC<{ formula: string; title: string; children: React.ReactNode }> = ({ formula, title, children }) => (
  <div className="bg-[var(--accent-bg)] border-l-[3px] border-[var(--accent)] rounded-r-[10px] p-6 max-w-3xl mb-12 shadow-sm">
    <p className="text-sm font-semibold text-[var(--text-tertiary)] mb-3 uppercase tracking-wider">{title}</p>
    <code className="text-xl md:text-2xl font-mono block mb-5 text-[var(--text-primary)] font-semibold">{formula}</code>
    <div className="text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-4">
      {children}
    </div>
  </div>
);
// --- Code Integration Component ---
const CodeIntegration: React.FC = () => {
  const [mode, setMode] = useState<'read' | 'step' | 'edit'>('read');
  const [activeStep, setActiveStep] = useState<number>(0);
  
  const codeLines = [
    "import multiprocessing",
    "import time",
    "",
    "def cpu_heavy_task(data_chunk):",
    "    # Simulating heavy computation (e.g., image augmentation)",
    "    return sum(i * i for i in data_chunk)",
    "",
    "if __name__ == '__main__':",
    "    data = [range(10000), range(10000, 20000), range(20000, 30000)]",
    "    ",
    "    start_time = time.time()",
    "    # Create a pool of worker processes",
    "    with multiprocessing.Pool(processes=3) as pool:",
    "        results = pool.map(cpu_heavy_task, data)",
    "    ",
    "    print(f'Processed in {time.time() - start_time:.2f} seconds')"
  ];
  const stepExplanations = [
    "Import the multiprocessing library to bypass the GIL.",
    "Import time to measure performance.",
    "",
    "Define a CPU-bound function that will run in parallel.",
    "",
    "Perform the actual computation and return the result.",
    "",
    "Required on Windows to prevent recursive spawning.",
    "Prepare chunks of data to be processed.",
    "",
    "Record the start time.",
    "",
    "Initialize a process pool with 3 distinct workers.",
    "Map the function across the data chunks in parallel.",
    "",
    "Print the total execution time."
  ];
  return (
    <div className="mb-16">
      <SectionHeader number="2.5" title="Code Integration" />
      <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="flex border-b border-[var(--border)] bg-[var(--bg-tertiary)] p-2 gap-2">
          {['read', 'step', 'edit'].map((m) => (
            <button 
              key={m}
              onClick={() => { setMode(m as any); setActiveStep(0); }}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${mode === m ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'}`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)} Mode
            </button>
          ))}
        </div>
        
        {/* Editor Area */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-4 bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-x-auto">
            {mode === 'edit' ? (
              <textarea 
                className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"
                defaultValue={codeLines.join('\n')}
              />
            ) : (
              codeLines.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${mode === 'step' && activeStep === idx ? 'bg-[#2a2d2e] border-l-[3px] border-[var(--accent)]' : 'border-l-[3px] border-transparent'} pl-2 py-0.5 cursor-pointer`}
                  onClick={() => mode === 'step' && setActiveStep(idx)}
                >
                  <span className="text-[#858585] w-8 text-right pr-4 select-none">{idx + 1}</span>
                  <span className={line.startsWith('import') || line.startsWith('def ') || line.startsWith('if ') || line.startsWith('with ') ? 'text-[#c586c0]' : line.startsWith('    #') ? 'text-[#6a9955]' : 'text-[#d4d4d4]'}>
                    {line || '\u00A0'}
                  </span>
                </div>
              ))
            )}
          </div>
          
          {/* Explanation Panel for Step Mode */}
          {mode === 'step' && (
            <div className="w-full md:w-1/3 border-l border-[var(--border)] p-6 bg-[var(--bg-secondary)]">
              <h4 className="font-bold text-[var(--text-primary)] mb-4">Execution Logic</h4>
              <p className="text-[var(--text-secondary)] text-sm mb-6">
                {stepExplanations[activeStep] || "No specific action on this line."}
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded text-sm hover:bg-[var(--border)] transition-colors"
                >
                  ⏮ Prev
                </button>
                <button 
                  onClick={() => setActiveStep(Math.min(codeLines.length - 1, activeStep + 1))}
                  className="px-3 py-1.5 bg-[var(--accent)] text-white rounded text-sm hover:opacity-90 transition-opacity"
                >
                  Next ⏭
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
// --- Interactive Visualization ---
const InteractiveSimulation: React.FC = () => {
  const [executionMode, setExecutionMode] = useState<'sequential' | 'threading' | 'multiprocessing'>('multiprocessing');
  const [tasks, setTasks] = useState<{id: number, progress: number, status: 'waiting' | 'running' | 'completed'}[]>(
    Array.from({length: 4}, (_, i) => ({id: i, progress: 0, status: 'waiting'}))
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [activeWorker, setActiveWorker] = useState<number | null>(null);
  // Simulation logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setTasks(prev => {
          const newTasks = [...prev];
          let allCompleted = true;
          let runningCount = newTasks.filter(t => t.status === 'running').length;
          // Process logic based on mode
          for (let i = 0; i < newTasks.length; i++) {
            const task = newTasks[i];
            
            if (task.status !== 'completed') {
              allCompleted = false;
            }
            if (task.status === 'running') {
              task.progress += (5 * speed);
              if (task.progress >= 100) {
                task.progress = 100;
                task.status = 'completed';
                runningCount--;
                setActiveWorker(null);
              }
            }
            // Start new tasks if capacity allows
            if (task.status === 'waiting') {
              if (executionMode === 'sequential' && runningCount < 1) {
                task.status = 'running';
                runningCount++;
                setActiveWorker(1); // Single core active
              } 
              else if (executionMode === 'threading' && runningCount < 1) {
                // Threading in Python (CPU bound) still restricted by GIL - essentially runs 1 at a time switching rapidly
                task.status = 'running';
                runningCount++;
                setActiveWorker(1);
              }
              else if (executionMode === 'multiprocessing' && runningCount < 4) {
                // Multiprocessing runs fully in parallel on different cores
                task.status = 'running';
                runningCount++;
              }
            }
          }
          if (allCompleted) setIsPlaying(false);
          return newTasks;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, executionMode, speed]);
  const reset = () => {
    setIsPlaying(false);
    setTasks(Array.from({length: 4}, (_, i) => ({id: i, progress: 0, status: 'waiting'})));
    setActiveWorker(null);
  };
  return (
    <div className="mb-16">
      <SectionHeader number="4 & 5" title="Interactive Visualization & Parameters" />
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Control Panel */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-5 shadow-sm">
            <h4 className="font-bold text-[var(--text-primary)] mb-4">Execution Model</h4>
            
            <div className="flex flex-col gap-2 mb-6">
              {(['sequential', 'threading', 'multiprocessing'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => { setExecutionMode(m); reset(); }}
                  className={`py-2 px-3 text-left rounded text-sm transition-colors ${executionMode === m ? 'bg-[var(--accent-bg)] border-[var(--accent)] border font-semibold text-[var(--accent)]' : 'border border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'}`}
                >
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
            <h4 className="font-bold text-[var(--text-primary)] mb-3">Controls</h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button onClick={() => setIsPlaying(!isPlaying)} className="bg-[var(--accent)] text-white py-2 rounded text-sm font-medium hover:opacity-90">
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
              <button onClick={reset} className="bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-primary)] py-2 rounded text-sm font-medium hover:bg-[var(--border)]">
                ↺ Reset
              </button>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase mb-2">Speed ({speed}x)</label>
              <input type="range" min="0.5" max="3" step="0.5" value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} className="w-full accent-[var(--accent)]" />
            </div>
          </div>
          {/* Context Panel */}
          <div className="bg-[var(--accent-bg)] border border-[var(--accent)] border-opacity-30 rounded-[10px] p-4">
            <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
              {executionMode === 'sequential' && "Sequential: Tasks are processed one after the other on a single core."}
              {executionMode === 'threading' && "Threading: Python's Global Interpreter Lock (GIL) prevents threads from running CPU-bound tasks truly in parallel. Only one thread runs at a time."}
              {executionMode === 'multiprocessing' && "Multiprocessing: Bypasses the GIL by creating entirely separate memory spaces. True parallelism on multiple cores."}
            </p>
          </div>
        </div>
        {/* Right Canvas */}
        <div className="w-full lg:w-3/4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[10px] p-6 shadow-inner relative flex flex-col justify-center min-h-[400px]">
          
          <div className="flex justify-between mb-8 px-4">
            <div className="text-center w-full">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-6">CPU Cores (Python Processes)</h4>
              <div className="flex justify-center gap-4">
                {[0, 1, 2, 3].map(core => {
                  const isActive = executionMode === 'multiprocessing' 
                    ? tasks[core].status === 'running'
                    : core === 0 && (tasks.some(t => t.status === 'running'));
                    
                  return (
                    <div key={core} className={`w-20 h-20 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[var(--accent)] bg-[var(--accent-bg)] shadow-[0_0_15px_var(--accent-bg)]' : 'border-[var(--border)] bg-[var(--bg-primary)] opacity-50'}`}>
                      <span className="font-mono text-xs font-semibold text-[var(--text-secondary)]">Core {core}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto w-full">
            {tasks.map(task => (
              <div key={task.id} className="bg-[var(--bg-primary)] border border-[var(--border)] p-4 rounded-lg flex items-center gap-4 relative overflow-hidden">
                <div className="w-16 text-sm font-semibold text-[var(--text-secondary)]">Task {task.id}</div>
                
                {/* Progress Bar Container */}
                <div className="flex-1 h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden relative">
                  <div 
                    className={`h-full transition-all duration-100 ease-linear ${task.status === 'completed' ? 'bg-[#10b981]' : 'bg-[var(--accent)]'}`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                
                <div className="w-16 text-right text-xs font-mono text-[var(--text-tertiary)]">
                  {Math.floor(task.progress)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// --- Main Page Component ---
export default function PythonConcurrencyLesson() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans pb-24">
      <header className="py-8 px-12 border-b border-[var(--border)] bg-[var(--bg-secondary)] mb-12">
        <h1 className="text-4xl font-bold font-serif max-w-5xl mx-auto">19. Python: Concurrency & Multiprocessing</h1>
      </header>
      <main className="max-w-6xl mx-auto px-6">
        
        <SectionHeader number="1" title="Concept Explanation" />
        <TheoryBlock>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--accent)] font-medium">Concurrency</span> allows a program to execute multiple tasks seemingly at the same time. While mathematics defines <span className="italic">what</span> AI computes, concurrency defines <span className="italic">how fast</span> it computes across hardware.
          </p>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            AI workloads face a unique bottleneck: GPUs are incredibly fast at math, but they depend on CPUs to fetch, augment, and transfer data (e.g., resizing images). If the CPU is too slow, the GPU sits idle. This is known as being <span className="text-[var(--accent)] font-medium">CPU-bound</span> or I/O-bound.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Python presents a specific challenge here due to the <span className="font-bold">Global Interpreter Lock (GIL)</span>, which prevents multiple threads from executing Python bytecodes simultaneously.
          </p>
        </TheoryBlock>
        <SectionHeader number="2" title="The Rule of Concurrency in Python" />
        <FormulaCard title="Decision Matrix" formula="I/O-Bound → Threading. CPU-Bound → Multiprocessing.">
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Threading:</strong> Shares memory. Great for downloading files or making API requests because the GIL is released during I/O wait times.</li>
            <li><strong>Multiprocessing:</strong> Separate memory spaces. Bypasses the GIL entirely. Essential for data augmentation, heavy calculations, and PyTorch DataLoaders.</li>
          </ul>
        </FormulaCard>
        <CodeIntegration />
        <SectionHeader number="3" title="Visual Intuition" />
        <div className="mb-16 flex flex-col md:flex-row items-center gap-8 border border-[var(--border)] p-8 rounded-[10px] bg-[var(--bg-secondary)]">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-3">The Restaurant Kitchen Analogy</h4>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              Imagine a kitchen making 4 complex meals.
            </p>
            <ul className="text-sm text-[var(--text-secondary)] space-y-2">
              <li><strong>Sequential:</strong> 1 Chef cooks 1 meal entirely, then starts the next. Very slow.</li>
              <li><strong>Threading (with GIL):</strong> 1 Chef jumps rapidly between 4 different stoves. They aren't actually cooking 4 meals at the exact same time, they are just task-switching.</li>
              <li><strong>Multiprocessing:</strong> 4 distinct Chefs in 4 distinct kitchens, each cooking 1 meal. True parallel execution.</li>
            </ul>
          </div>
          <div className="w-48 h-48 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center border-4 border-[var(--border)] shadow-inner">
            <span className="text-6xl">🧑‍🍳</span>
          </div>
        </div>
        <InteractiveSimulation />
        <SectionHeader number="6" title="Failure Cases" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#fff4f4] dark:bg-[#2a1111] border-l-4 border-red-500 rounded-r-[10px] p-6 shadow-sm">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
              <span>⚠️</span> Race Conditions (Threading)
            </h4>
            <p className="text-sm text-red-900 dark:text-red-200">
              When two threads access and modify shared memory simultaneously without locks. Data becomes corrupted because the operations overlap unpredictably.
            </p>
          </div>
          <div className="bg-[#fff4f4] dark:bg-[#2a1111] border-l-4 border-red-500 rounded-r-[10px] p-6 shadow-sm">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
              <span>⚠️</span> Deadlocks
            </h4>
            <p className="text-sm text-red-900 dark:text-red-200">
              Process A holds Lock 1 and waits for Lock 2. Process B holds Lock 2 and waits for Lock 1. Both freeze indefinitely, crashing the AI training pipeline.
            </p>
          </div>
        </div>
        <SectionHeader number="7" title="Real-World Applications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { app: "PyTorch DataLoaders", desc: "Setting `num_workers=4` uses multiprocessing to augment images and load tensors into memory parallel to GPU computation." },
            { app: "LLM API Batching", desc: "Using `asyncio` or Threading to send thousands of concurrent API requests to OpenAI for data generation." },
            { app: "AlphaGo Self-Play", desc: "Massive multiprocessing clusters where thousands of separate processes play Go games against each other to generate training data." }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--bg-secondary)] border border-[var(--border)] p-5 rounded-[10px] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[var(--accent-bg)] flex items-center justify-center text-[var(--accent)] font-bold">
                  {i + 1}
                </div>
                <h4 className="font-bold">{item.app}</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}