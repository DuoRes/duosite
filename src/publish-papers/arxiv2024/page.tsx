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
              <div className="text-lg font-serif text-gray-900">Mingduo's Research</div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12 overflow-y-auto">
          {/* Page Header */}

          {/* Paper Detail */}
          <section className="mb-16">

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:flex-1">
                  Longitudinal Targeted Minimum Loss-based Estimation with Temporal-Difference Heterogeneous Transformer
                </h3>
              </div>
              <div className="prose prose-lg text-gray-700 max-w-none">
                    with Yi Li, Yuxuan Li, Sky Qiu, Toru Shirakawa, Yulun Wu, Hiroyasu
 Iso, and Mark J. Van Der Laan
                </div>

              <div className="prose prose-lg text-gray-700 max-w-none">
                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                  Abstract
                </h4>
                <p className="mb-6">
                  We propose Deep Longitudinal Targeted Minimum Loss-based Estimation (Deep LTMLE), a novel approach to estimate the counterfactual mean of outcome under dynamic treatment policies in longitudinal problem settings. Our approach utilizes a transformer architecture with heterogeneous type embedding trained using temporal-difference learning. After obtaining an initial estimate using the transformer, following the targeted minimum loss-based likelihood estimation (TMLE) framework, we statistically corrected for the bias commonly associated with machine learning algorithms. 
                </p>
                <p className="mb-6">
                 Furthermore, our method also facilitates statistical inference by enabling the provision of 95% confidence intervals grounded in asymptotic statistical theory. Simulation results demonstrate our method's superior performance over existing approaches, particularly in complex, long time-horizon scenarios. It remains effective in small-sample, short-duration contexts, matching the performance of asymptotically efficient estimators. To demonstrate our method in practice, we applied our method to estimate counterfactual mean outcomes for standard versus intensive blood pressure management strategies in a real-world cardiovascular epidemiology cohort study.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                  Status
                </h4>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <a href="https://doi.org/10.48550/arXiv.2404.04399">
                        Published in ICML 2024, PMLR 235
                    </a>
                  </li>
                </ul>

                
              </div>

              
            </div>
          </section>
        </main>
      </div>
    </PasswordProtection>
  );
}
