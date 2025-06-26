"use client";

import Link from "next/link";
import PasswordProtection from "@/components/PasswordProtection";

export default function ResearchPage() {
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                ← Back to Home
              </Link>
              <div className="text-lg font-serif text-gray-900">Research</div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12 overflow-y-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
              Job Market Paper
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Primary Fields: Quantitative Marketing, Digital Platforms,
              Consumer Behavior
            </p> */}
          </div>

          {/* Job Market Paper */}
          <section className="mb-16">
            {/* <h2 className="text-3xl font-serif font-light text-gray-900 mb-12">
              Job Market Paper
            </h2> */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:flex-1">
                  News Consumption, Recommender Systems, and Polarization
                </h3>
                <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Job Market Paper
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    Mingduo Zhao • 2024
                  </span>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 max-w-none">
                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                  Abstract
                </h4>
                <p className="mb-6">
                  Recommender systems shape how people consume news, possibly
                  reinforcing political polarization. We run two field
                  experiments to identify how user preferences and algorithms
                  interact to amplify partisan news consumption. In the first
                  study, 2,065 U.S. participants use blank Google accounts and a
                  browser extension to track users' activities on Google News.
                </p>
                <p className="mb-6">
                  The first-round recommendations are exogenous, allowing us to
                  show that aligned content draws more clicks. A second
                  experiment uses bots to randomly click on articles, revealing
                  that each click leads to more ideologically aligned content.
                  These two pieces of causal evidence establish a feedback loop
                  between user preference and algorithmic recommendations.
                </p>
                <p className="mb-6">
                  We also find in the field study that, after interacting with
                  the recommender system, people's level of polarization
                  increases. A structural model combining a discrete choice
                  model (demand side) with a multi-armed bandit algorithm
                  (supply side) confirms this positive-feedback mechanism.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                  Key Findings
                </h4>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Recommendation algorithms create feedback loops that amplify
                    ideologically aligned content consumption
                  </li>
                  <li>
                    Users show strong preference for content that aligns with
                    their political views
                  </li>
                  <li>
                    Algorithmic recommendations significantly increase
                    polarization levels over time
                  </li>
                  <li>
                    The feedback mechanism is robust across different
                    demographic groups and political affiliations
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                  Methodology
                </h4>
                <p className="mb-4">
                  This research employs a multi-method approach combining field
                  experiments, structural modeling, and causal inference
                  techniques:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong>Field Experiment 1:</strong> 2,065 participants with
                    blank Google accounts
                  </li>
                  <li>
                    <strong>Field Experiment 2:</strong> Bot-based randomized
                    clicking experiment
                  </li>
                  <li>
                    <strong>Structural Model:</strong> Discrete choice model
                    combined with multi-armed bandit algorithm
                  </li>
                  <li>
                    <strong>Data Collection:</strong> Browser extension tracking
                    real user behavior
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    Field Experiments
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    Structural Modeling
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    Causal Inference
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    Digital Platforms
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    Political Economy
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors">
                  Download Paper
                </button>
                <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium hover:bg-gray-50 transition-colors rounded-lg">
                  View Slides
                </button>
                <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium hover:bg-gray-50 transition-colors rounded-lg">
                  Working Paper
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PasswordProtection>
  );
}
