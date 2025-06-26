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
          <div className="text-center mb-16 ">
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
                {/* <div className="h-[100vh]" />  5rem of space */}
              Working Papers
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Primary Fields: Quantitative Marketing, Digital Platforms,
              Consumer Behavior
            </p> */}
          </div>

          {/* Job Market Paper */}
          <section className="mb-16">

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:flex-1">
                  Game Against AI
                </h3>
                <div className="prose prose-lg text-gray-700 max-w-none">
                    with Yahu Cong
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 max-w-none">
                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                  Abstract
                </h4>
                <p className="mb-6">
                  AI systems for dynamic pricing, targeted promotions, and individualized recommendations
 typically assume that observed consumer behavior truthfully reveals underlying preferences. However,
 when consumers recognize that their actions influence future targeting decisions, behavior becomes
 strategic rather than preference-revealing, undermining the validity of standard machine learning
based targeting. 
                </p>
                <p className="mb-6">
                  In order to address this challenge, we introduce Structural Transfer Learning (STL),
 a new framework that incorporates structural economic modeling into machine learning pipelines to
 account for strategic responses induced by policy interventions. STL constructs policy dependent in
stance weights that adjust for endogenous domain shifts, enabling firms to learn targeting policies that
 remain effective even when consumers actively game the system.
                </p>
                <p className="mb-6">
                  Furthermore, we demonstrate the
 practical value of STL through a stylized online experiment in a consumer research setting. While
 simplified, the design captures a core strategic response common to many personalization environ
ments, where targeting rules shape behavior. In this setting, naive behavioral targeting rules lead to
 substantial misallocation of incentives. Applying STL improves expected profits by up to 35% relative
 to the naive machine learning benchmark that ignores strategic responses, depending on the relative
 cost of incentives. These findings highlight the need for a fundamental shift in firms’ personalization
 strategies-from solely optimizing predictive models to designing incentive mechanisms that are robust
 to strategic consumer behavior.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                  Status
                </h4>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Under Review at 
                    <em className="font-bold"> Marketing Science </em>
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
