"use client";

import Link from "next/link";
import PasswordProtection from "@/components/PasswordProtection";

export default function TeachingPage() {
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
              <div className="text-lg font-serif text-gray-900">Teaching</div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
              Teaching Experience
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Committed to excellence in marketing education and student
              mentorship
            </p>
          </div>

          {/* Teaching Roles */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-12">
              Graduate Student Instructor
            </h2>

            <div className="space-y-8">
              {/* Course 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Marketing Analytics (MBA)
                    </h3>
                    <div className="text-lg text-blue-600 font-medium">
                      UGBA 142 • UC Berkeley Haas
                    </div>
                  </div>
                  <span className="text-gray-600 font-medium mt-4 lg:mt-0">
                    Fall 2023, Spring 2024
                  </span>
                </div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Course Description
                  </h4>
                  <p className="mb-4">
                    Advanced marketing analytics course covering experimental
                    design, causal inference, and predictive modeling. Taught
                    MBA students how to apply econometric methods and machine
                    learning techniques to solve real-world marketing problems.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Conducted weekly lab sessions for 40+ MBA students</li>
                    <li>
                      Designed and graded assignments on statistical analysis
                      and programming
                    </li>
                    <li>
                      Provided one-on-one tutoring for struggling students
                    </li>
                    <li>
                      Developed supplementary materials for R and Python
                      programming
                    </li>
                    <li>Assisted with exam preparation and review sessions</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Topics Covered
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Statistical Methods
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Regression analysis</li>
                        <li>• A/B testing</li>
                        <li>• Causal inference</li>
                        <li>• Time series analysis</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Programming
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• R programming</li>
                        <li>• Python for analytics</li>
                        <li>• Data visualization</li>
                        <li>• Statistical software</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Causal Inference
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      A/B Testing
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      R/Python
                    </span>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-800">
                    <strong>Student Feedback:</strong> "Mingduo's clear
                    explanations and practical examples made complex statistical
                    concepts accessible. The lab sessions were incredibly
                    helpful for understanding real-world applications."
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Digital Marketing Strategy
                    </h3>
                    <div className="text-lg text-blue-600 font-medium">
                      MBA 239 • UC Berkeley Haas
                    </div>
                  </div>
                  <span className="text-gray-600 font-medium mt-4 lg:mt-0">
                    Fall 2022, Fall 2023
                  </span>
                </div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Course Description
                  </h4>
                  <p className="mb-4">
                    MBA-level course focusing on digital marketing strategies,
                    platform economics, and consumer behavior in digital
                    environments. Led case study discussions and guest lectures
                    on emerging trends in digital marketing.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Led case study discussions for 60+ MBA students</li>
                    <li>Graded assignments on digital marketing strategy</li>
                    <li>Delivered guest lectures on platform economics</li>
                    <li>Mentored student teams on final projects</li>
                    <li>
                      Provided feedback on business strategy presentations
                    </li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Topics Covered
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Strategy
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Digital transformation</li>
                        <li>• Platform strategy</li>
                        <li>• Network effects</li>
                        <li>• Competitive dynamics</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Applications
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Social media marketing</li>
                        <li>• E-commerce platforms</li>
                        <li>• Mobile marketing</li>
                        <li>• Content strategy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                      Digital Strategy
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                      Platform Economics
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                      Consumer Behavior
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                      Case Analysis
                    </span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Consumer Behavior (Undergraduate)
                    </h3>
                    <div className="text-lg text-blue-600 font-medium">
                      UGBA 104 • UC Berkeley Haas
                    </div>
                  </div>
                  <span className="text-gray-600 font-medium mt-4 lg:mt-0">
                    Fall 2022
                  </span>
                </div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Course Description
                  </h4>
                  <p className="mb-4">
                    Foundational course exploring psychological and behavioral
                    factors that influence consumer decision-making. Emphasized
                    both theoretical frameworks and practical applications in
                    marketing strategy for undergraduate business students.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Taught discussion sections for 80+ undergraduate students
                    </li>
                    <li>Graded exams and assignments on consumer psychology</li>
                    <li>Facilitated group projects on consumer research</li>
                    <li>
                      Office hours for academic support and career guidance
                    </li>
                    <li>Developed interactive exercises and demonstrations</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                      Psychology
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                      Decision Making
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                      Research Methods
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                      Case Studies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-12">
              Teaching Philosophy
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                        Experiential Learning
                      </h3>
                      <p className="text-gray-700">
                        Combining theoretical knowledge with hands-on projects
                        and real-world case studies to enhance student
                        understanding and engagement. Students learn by doing,
                        not just listening.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                        Data-Driven Thinking
                      </h3>
                      <p className="text-gray-700">
                        Emphasizing the importance of empirical evidence and
                        analytical thinking in marketing decision-making
                        processes. Teaching students to question assumptions and
                        test hypotheses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                        Inclusive Environment
                      </h3>
                      <p className="text-gray-700">
                        Creating an inclusive classroom where all students feel
                        comfortable participating and sharing their
                        perspectives. Encouraging diverse viewpoints and
                        collaborative learning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                        Practical Application
                      </h3>
                      <p className="text-gray-700">
                        Bridging the gap between academic theory and industry
                        practice through real-world examples, industry
                        connections, and practical skill development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Awards and Recognition */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-12">
              Awards & Recognition
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Outstanding GSI Award
                  </h3>
                  <span className="text-gray-600 font-medium">Spring 2024</span>
                </div>
                <p className="text-gray-700">
                  Recognized for excellence in teaching and student mentorship
                  in the Marketing Analytics course.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Teaching Excellence Recognition
                  </h3>
                  <span className="text-gray-600 font-medium">Fall 2023</span>
                </div>
                <p className="text-gray-700">
                  Honored by the Haas School of Business for innovative teaching
                  methods and high student evaluations.
                </p>
              </div>
            </div>
          </section>

          {/* Student Testimonials */}
          <section>
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-12">
              Student Testimonials
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "Mingduo's teaching style made complex econometric concepts
                  accessible and engaging. His real-world examples helped me
                  understand how to apply these methods in practice."
                </p>
                <div className="text-sm text-gray-600">
                  — MBA Student, Marketing Analytics
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "The case study discussions were incredibly insightful.
                  Mingduo challenged us to think critically about digital
                  marketing strategies and their implications."
                </p>
                <div className="text-sm text-gray-600">
                  — MBA Student, Digital Marketing Strategy
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "Office hours with Mingduo were always helpful. He took the
                  time to explain concepts clearly and provide career advice
                  beyond the coursework."
                </p>
                <div className="text-sm text-gray-600">
                  — Undergraduate Student, Consumer Behavior
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic mb-4">
                  "The programming tutorials and hands-on exercises made
                  learning R and Python much easier. These skills have been
                  invaluable in my internship."
                </p>
                <div className="text-sm text-gray-600">
                  — MBA Student, Marketing Analytics
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PasswordProtection>
  );
}
