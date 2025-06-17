const TeachingSection = () => {
  return (
    <section id="teaching" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative">
            Teaching Experience
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to excellence in marketing education and student
            mentorship
          </p>
        </div>

        {/* Teaching Roles */}
        <div className="space-y-8">
          {/* Graduate Student Instructor */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
                Graduate Student Instructor
              </h3>
              <span className="text-lg font-semibold text-secondary">
                UC Berkeley Haas
              </span>
            </div>

            {/* Courses */}
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Marketing Analytics (MBA)
                  </h4>
                  <span className="text-gray-600 font-medium mt-1 md:mt-0">
                    Fall 2023
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Advanced marketing analytics course covering experimental
                  design, causal inference, and predictive modeling. Taught MBA
                  students how to apply econometric methods and machine learning
                  techniques to solve real-world marketing problems.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Causal Inference
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    A/B Testing
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    R/Python
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Digital Marketing (Undergraduate)
                  </h4>
                  <span className="text-gray-600 font-medium mt-1 md:mt-0">
                    Spring 2023
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Core marketing course focusing on digital strategy, platforms,
                  and analytics. Guided undergraduate students through digital
                  marketing fundamentals, including social media marketing,
                  search engine optimization, and digital advertising.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Digital Strategy
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    SEO/SEM
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Analytics
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Consumer Behavior (Undergraduate)
                  </h4>
                  <span className="text-gray-600 font-medium mt-1 md:mt-0">
                    Fall 2022
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Foundational course exploring psychological and behavioral
                  factors that influence consumer decision-making. Emphasized
                  both theoretical frameworks and practical applications in
                  marketing strategy.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Psychology
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Decision Making
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Research Methods
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                    Case Studies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Teaching Philosophy
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Experiential Learning
                    </h4>
                    <p className="text-gray-700">
                      Combining theoretical knowledge with hands-on projects and
                      real-world case studies to enhance student understanding
                      and engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Data-Driven Thinking
                    </h4>
                    <p className="text-gray-700">
                      Emphasizing the importance of empirical evidence and
                      analytical thinking in marketing decision-making
                      processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Critical Thinking
                    </h4>
                    <p className="text-gray-700">
                      Encouraging students to question assumptions, evaluate
                      evidence, and develop independent analytical capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Industry Relevance
                    </h4>
                    <p className="text-gray-700">
                      Bridging academic theory with current industry practices
                      and emerging trends in digital marketing and consumer
                      behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Feedback */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  Marketing Analytics
                </span>
              </div>
              <p className="text-gray-700 italic">
                "Mingduo's teaching style made complex statistical concepts
                accessible and engaging. The real-world applications really
                helped solidify our understanding."
              </p>
              <p className="text-sm text-gray-500 mt-3">
                — MBA Student, Fall 2023
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  Digital Marketing
                </span>
              </div>
              <p className="text-gray-700 italic">
                "Excellent balance of theory and practice. The course projects
                gave us valuable hands-on experience with digital marketing
                tools and strategies."
              </p>
              <p className="text-sm text-gray-500 mt-3">
                — Undergraduate Student, Spring 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
