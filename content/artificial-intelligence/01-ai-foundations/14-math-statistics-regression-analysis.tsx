"use client";

import React from 'react';

export default function RegressionAnalysis() {
  return (
    <div className="px-12 py-24">
      <h1 className="text-3xl font-bold mb-6">Regression Analysis</h1>
      <p className="text-base mb-4">
        Regression analysis models the relationship between a dependent variable and one or more independent variables. It is a fundamental tool in statistics and machine learning for predicting outcomes.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Formula</h2>
      <pre className="whitespace-pre-wrap bg-[var(--card-bg)] p-4 rounded shadow-sm">
        {`\\[\\hat{y} = \\beta_0 + \\beta_1 x\\]`}
      </pre>
    </div>
  );
}