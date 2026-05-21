"use client";

import React, { useState } from "react";
import ConceptPage from "@/components/ConceptPage/ConceptPage";

export default function Page() {
  const [selectedExample, setSelectedExample] = useState<string>("plane");

  const examples = {
    plane: {
      title: "Plane Passing Through Origin (VALID Subspace)",
      status: "Valid Subspace",
      color: "text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50/20",
      logic: "It contains the origin [0,0,0]. If you add any two vectors lying on the plane, the result remains on the plane (closure under addition). If you scale any vector on the plane, it stays on the plane (closure under scalar multiplication).",
    },
    offsetPlane: {
      title: "Plane Offset from Origin (z = 1) (INVALID)",
      status: "Invalid Space",
      color: "text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 bg-red-50/20",
      logic: "It does not contain the origin [0,0,0] (since z=1). Furthermore, adding two vectors with z=1 yields z=2, which falls outside the plane. Thus, it fails closure under addition.",
    },
    sphere: {
      title: "Surface of a Unit Sphere (INVALID)",
      status: "Invalid Space",
      color: "text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 bg-red-50/20",
      logic: "Although it feels geometrical, it does not contain the origin [0,0,0]. Also, doubling a unit vector yields a length of 2, which leaves the sphere surface, violating scalar closure.",
    },
    functions: {
      title: "Space of Continuous Functions (VALID Vector Space)",
      status: "Valid Vector Space",
      color: "text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50/20",
      logic: "Vectors do not have to be arrow lists! Functions can be added (f+g)(x) = f(x)+g(x) and scaled (cf)(x) = c*f(x). This infinite-dimensional space is foundational for spectral theory and kernel methods.",
    },
  };

  const lesson = {
    title: "Vector Spaces and Fields",
    theory: (
      <div className="space-y-4">
        <p>
          To understand advanced algorithms, we must move beyond viewing vectors simply as lists of numbers. A <strong>vector space</strong> is a rigorous algebraic structure containing a set of elements (vectors) that can be added together and scaled by numbers from another structure called a <strong>field</strong>.
        </p>
        <p>
          A mathematical <strong>field</strong> (such as the Real numbers <strong>R</strong> or Complex numbers <strong>C</strong>) provides scalars. It defines how arithmetic operators (addition, subtraction, multiplication, division) behave.
        </p>
        <p>
          For a set <em>V</em> to qualify as a vector space over a field <em>F</em>, it must satisfy ten axioms including <strong>closure</strong> under addition and scalar multiplication, along with associativity, commutativity, and existence of identity/inverse elements.
        </p>
      </div>
    ),
    keyCharacteristics: [
      {
        title: "Closure Under Addition",
        desc: "If u and v are elements of vector space V, their sum u + v must also reside within V.",
      },
      {
        title: "Closure Under Scaling",
        desc: "If v is an element of V and c is a scalar from field F, the scaled vector c * v must also reside within V.",
      },
      {
        title: "Linear Independence",
        desc: "A set of vectors is independent if no vector in the set can be represented as a linear combination of the remaining vectors.",
      },
      {
        title: "Basis & Dimension",
        desc: "A basis is a minimal set of linearly independent vectors that spans the entire space. The number of vectors in this basis is the dimension of the space.",
      },
    ],
    formulas: [
      {
        expr: (
          <span>
            <strong className="font-serif italic text-orange-600 dark:text-blue-400">v</strong> ={" "}
            <span className="italic">c</span><sub>1</sub><strong className="font-serif italic">v</strong><sub>1</sub> +{" "}
            <span className="italic">c</span><sub>2</sub><strong className="font-serif italic">v</strong><sub>2</sub> + &middot;&middot;&middot; +{" "}
            <span className="italic">c</span><sub><span className="italic">k</span></sub><strong className="font-serif italic">v</strong><sub><span className="italic">k</span></sub>
          </span>
        ),
        description: "Linear Combination. Constructing a new vector v by scaling and summing a set of vectors.",
      },
      {
        expr: (
          <span>
            &sum; <span className="italic">c<sub>i</sub></span><strong className="font-serif italic text-orange-600 dark:text-blue-400">v</strong><sub><span className="italic">i</span></sub> ={" "}
            <strong className="font-serif text-orange-600 dark:text-blue-400">0</strong> &rArr; <span className="italic">c<sub>i</sub></span> = 0{" "}<span className="text-sm text-[var(--text-secondary)] font-normal font-sans">(&forall;i)</span>
          </span>
        ),
        description: "Linear Independence definition. The only way to sum independent vectors to yield zero is for all scalar multipliers to be zero.",
      },
      {
        expr: (
          <span>
            Span(<span className="italic">S</span>) = &#123; <strong className="font-serif italic text-orange-600 dark:text-blue-400">v</strong> |{" "}
            <strong className="font-serif italic">v</strong> = &sum; <span className="italic">c<sub>i</sub></span><strong className="font-serif italic">s</strong><sub><span className="italic">i</span></sub> &#125;
          </span>
        ),
        description: "The span of a set S is the collection of all possible linear combinations that can be constructed from S.",
      },
    ],
    visualIntuition: (
      <div className="space-y-4 w-full">
        <p className="text-sm">
          Select different geometric surfaces below to check if they qualify as valid vector spaces/subspaces. Pay attention to origin and closure constraints.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.keys(examples).map((ex) => (
            <button
              key={ex}
              onClick={() => setSelectedExample(ex)}
              className={`px-4 py-2 rounded-lg border text-xs font-mono transition-all ${
                selectedExample === ex
                  ? "bg-orange-50 border-orange-500 text-orange-700 dark:bg-blue-950/20 dark:border-blue-500 dark:text-blue-400 font-bold"
                  : "bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--text-secondary)]"
              }`}
            >
              {examples[ex as keyof typeof examples].title.split(" (")[0]}
            </button>
          ))}
        </div>
        <div className={`p-5 border rounded-xl animate-fadeIn space-y-2 ${examples[selectedExample as keyof typeof examples].color}`}>
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-sm">
              {examples[selectedExample as keyof typeof examples].title}
            </h5>
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded border border-current">
              {examples[selectedExample as keyof typeof examples].status}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {examples[selectedExample as keyof typeof examples].logic}
          </p>
        </div>
      </div>
    ),
    comparisonTable: {
      headers: ["Structure", "Type of Elements", "Available Operations", "Example Case"],
      rows: [
        ["Field (F)", "Scalars (numbers)", "Addition, Subtraction, Multiplication, Division", "Real numbers R, Complex numbers C"],
        ["Vector Space (V)", "Vectors (geometric or abstract)", "Vector addition, scalar multiplication", "Coordinate space R^3, space of functions"],
        ["Subspace (W)", "Subset of vectors", "Inherits addition and scaling from parent space", "Line or Plane passing through origin in R^3"],
      ],
    },
    applications: (
      <div className="space-y-2 text-sm text-[var(--text-secondary)]">
        <p>
          <strong>Principal Component Analysis (PCA):</strong> Projects high-dimensional datasets onto lower-dimensional orthogonal vector subspaces to perform compression while preserving maximum variance.
        </p>
        <p>
          <strong>Latent Spaces in Autoencoders:</strong> Compresses complex input data (like faces) into a lower-dimensional vector space. In this space, simple translations (vector arithmetic) can modify features (like adding eyeglasses or shifting lighting).
        </p>
      </div>
    ),
    commonMistakes: [
      "Forgetting the origin: a plane or line that is offset from the origin is not a vector subspace because it cannot contain the additive identity [0,0,0].",
      "Treating vectors solely as arrays: functions, matrices, and random variables are vectors too, as long as they satisfy the vector space axioms under addition and scaling.",
    ],
  };

  return <ConceptPage lesson={lesson} />;
}