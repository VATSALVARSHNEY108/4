"use client";

import React, { useState } from "react";

/**
 * Lesson 20 – Data Structures: Arrays & Trees
 * Provides an interactive visualizer for a one‑dimensional array and a simple binary tree.
 */
export default function DataStructures() {
  // ----- Array Section -----
  const [arraySize, setArraySize] = useState<number>(5);
  const array = Array.from({ length: arraySize }, (_, i) => i + 1);

  // ----- Tree Section -----
  // Build a balanced binary tree from the array values
  type TreeNode = { value: number; left?: TreeNode; right?: TreeNode };
  const buildTree = (vals: number[]): TreeNode | undefined => {
    if (vals.length === 0) return undefined;
    const mid = Math.floor(vals.length / 2);
    return {
      value: vals[mid],
      left: buildTree(vals.slice(0, mid)),
      right: buildTree(vals.slice(mid + 1)),
    };
  };
  const treeRoot = buildTree(array);

  const renderTree = (node?: TreeNode) => {
    if (!node) return null;
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="px-3 py-1 bg-[var(--accent-bg)] border border-[var(--border)] rounded-md text-[var(--text-primary)]">
          {node.value}
        </div>
        {(node.left || node.right) && (
          <div className="flex space-x-4">
            {renderTree(node.left)}
            {renderTree(node.right)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* ----- Array Visualizer ----- */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">Arrays</h1>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-[var(--text-tertiary)]" htmlFor="sizeSlider">
              Size
            </label>
            <input
              id="sizeSlider"
              type="range"
              min="1"
              max="10"
              value={arraySize}
              onChange={e => setArraySize(Number(e.target.value))}
              className="w-48"
            />
            <span className="text-sm text-[var(--text-primary)] w-8 text-center">
              {arraySize}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {array.map((num, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center bg-[var(--accent-bg)] border border-[var(--border)] rounded-lg text-[var(--text-primary)]"
              >
                {num}
              </div>
            ))}
          </div>
        </section>

        {/* ----- Tree Visualizer ----- */}
        <section className="space-y-6 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">Binary Tree (balanced)</h1>
          <div className="flex justify-center">
            {renderTree(treeRoot)}
          </div>
        </section>
      </main>
    </div>
  );
}