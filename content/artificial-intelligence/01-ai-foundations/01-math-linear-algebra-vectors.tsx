"use client";
import React, { useState } from "react";

export const metadata = { title: "Vectors – Linear Algebra" };

export default function VectorsLesson() {
  const [x1, setX1] = useState(1);
  const [y1, setY1] = useState(2);
  const [x2, setX2] = useState(3);
  const [y2, setY2] = useState(1);

  const result = { x: x1 + x2, y: y1 + y2 };

  const vectorStyle = (x: number, y: number) => ({
    transform: `translate(${x * 30}px, ${-y * 30}px)`,
    transition: "transform 0.3s ease",
  });

  return (
    <section className="px-12 py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--accent)" }}>Vector Addition</h1>
      <p className="mb-4">Adjust the components of two 2‑D vectors and see their sum visualized.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>Vector A</h2>
          <label>X: <input type="range" min="-5" max="5" value={x1} onChange={e => setX1(Number(e.target.value))} className="w-full" /></label>
          <label>Y: <input type="range" min="-5" max="5" value={y1} onChange={e => setY1(Number(e.target.value))} className="w-full" /></label>
          <h2 className="text-2xl font-semibold mt-4" style={{ color: "var(--accent)" }}>Vector B</h2>
          <label>X: <input type="range" min="-5" max="5" value={x2} onChange={e => setX2(Number(e.target.value))} className="w-full" /></label>
          <label>Y: <input type="range" min="-5" max="5" value={y2} onChange={e => setY2(Number(e.target.value))} className="w-full" /></label>
        </div>
        {/* Visualization */}
        <div className="relative h-64 border border-[var(--border)] rounded" style={{ backgroundColor: "var(--bg-secondary)" }}>
          {/* Origin */}
          <div className="absolute left-1/2 top-1/2 w-0 h-0 border-l-2 border-[var(--text-secondary)]" />
          {/* Vector A */}
          <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-[var(--accent)]" style={vectorStyle(x1, y1)} />
          {/* Vector B */}
          <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-[var(--accent)] opacity-70" style={vectorStyle(x2, y2)} />
          {/* Result */}
          <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-[var(--text-primary)]" style={vectorStyle(result.x, result.y)} />
        </div>
      </div>
      <p className="mt-4">
        Resulting Vector: ({result.x}, {result.y})
      </p>
    </section>
  );
}