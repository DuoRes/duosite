const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative">
            Research
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Primary Fields: Quantitative Marketing, Digital Platforms, Consumer
            Behavior
          </p>
        </div>

        {/* Research Papers */}
        <div className="space-y-8">
          {/* Job Market Paper */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:flex-1">
                Platform Competition and Consumer Learning
              </h3>
              <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
                <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full">
                  Job Market Paper
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  Draft Available Upon Request
                </span>
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                This paper investigates how competition between digital
                platforms affects consumer learning and decision-making
                processes. Using a novel dataset and quasi-experimental methods,
                I demonstrate that platform competition significantly influences
                how consumers learn and adapt their behaviors in digital
                marketplaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Platform Economics
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Consumer Learning
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Causal Inference
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Competition
                </span>
              </div>
            </div>
          </div>

          {/* Work in Progress */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:flex-1">
                The Impact of Social Media on Consumer Purchase Decisions
              </h3>
              <span className="inline-block px-4 py-2 bg-gray-500 text-white text-sm font-semibold rounded-full self-start">
                Work in Progress
              </span>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                This research examines how social media platforms shape consumer
                decision-making processes and purchase behaviors. The study
                combines machine learning techniques with econometric analysis
                to identify causal relationships between social media exposure
                and consumer choices.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Social Media
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Purchase Behavior
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Digital Marketing
                </span>
              </div>
            </div>
          </div>

          {/* Additional Research Interest */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:flex-1">
                Algorithm Transparency and Consumer Trust in Digital Platforms
              </h3>
              <span className="inline-block px-4 py-2 bg-gray-400 text-white text-sm font-semibold rounded-full self-start">
                Research Interest
              </span>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Exploring how algorithmic transparency affects consumer trust
                and engagement on digital platforms. This line of research aims
                to understand the trade-offs between algorithmic performance and
                transparency in building sustainable platform ecosystems.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Algorithm Design
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Trust
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Transparency
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Platform Design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Methods */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Research Methodology
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Econometrics</h4>
              <p className="text-sm text-gray-600">
                Causal inference and identification strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Experiments</h4>
              <p className="text-sm text-gray-600">
                Field and lab experiments design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Machine Learning
              </h4>
              <p className="text-sm text-gray-600">
                Predictive modeling and pattern recognition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Big Data</h4>
              <p className="text-sm text-gray-600">
                Large-scale data collection and analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
