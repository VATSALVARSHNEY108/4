export const metadata = { title: "History of AI" };

export default function Lesson00HistoryOfAI() {
  return (
    <section className="px-12 py-24 text-primary bg-primary min-h-screen">
      <h1 className="text-4xl font-bold mb-8">History of Artificial Intelligence</h1>
      <p className="mb-4">
        Artificial Intelligence (AI) has evolved through several distinct eras, each marked by breakthroughs, setbacks, and renewed optimism. Below we outline a concise timeline that captures the spirit of these milestones.
      </p>
      <ul className="list-disc ml-8 space-y-2">
        <li><strong>1950s – Foundations</strong>: Alan Turing proposes the "Turing Test" and the concept of machine intelligence.</li>
        <li><strong>1956 – Dartmouth Workshop</strong>: The term "Artificial Intelligence" is coined, ushering in the birth of the field.</li>
        <li><strong>1960s–1970s – Symbolic AI</strong>: Early programs like <em>Logic Theorist</em> and <em>General Problem Solver</em> demonstrate logical reasoning.</li>
        <li><strong>1980s – Expert Systems</strong>: Commercial success with systems such as <em>MYCIN</em> and <em>XCON</em>, leveraging rule‑based knowledge bases.</li>
        <li><strong>1990s – Machine Learning Revival</strong>: Statistical methods, decision trees, and support vector machines gain prominence.</li>
        <li><strong>1997 – Deep Blue</strong>: IBM's chess‑playing computer defeats world champion Garry Kasparov.</li>
        <li><strong>2000s – Big Data & GPUs</strong>: Availability of massive datasets and GPU acceleration enable deep neural networks.</li>
        <li><strong>2012 – AlexNet</strong>: Breakthrough in image classification spurs the modern deep learning era.</li>
        <li><strong>2020s – Foundation Models</strong>: Large language models (GPT‑3/4, PaLM) and multimodal systems transform how AI is applied.</li>
      </ul>
      <p className="mt-8">
        Understanding this historical context helps frame the subsequent theoretical foundations we will explore.
      </p>
    </section>
  );
}