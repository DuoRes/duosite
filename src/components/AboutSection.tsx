const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative">
              About
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary mt-4"></div>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl">
              I am a PhD Candidate in Marketing at the Haas School of Business,
              University of California, Berkeley. My research interests lie at
              the intersection of{" "}
              <strong className="text-primary">quantitative marketing</strong>,
              <strong className="text-primary"> digital platforms</strong>, and{" "}
              <strong className="text-primary">consumer behavior</strong>.
            </p>

            <p>
              I employ empirical methods and causal inference techniques to
              study how platform design and competition influence consumer
              decision-making and market outcomes. My current work focuses on
              understanding consumer learning in competitive platform
              environments.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-secondary mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Quantitative Marketing
                </h3>
                <p className="text-gray-600">
                  Developing and applying advanced econometric methods to
                  understand market dynamics and consumer behavior.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-secondary mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Digital Platforms
                </h3>
                <p className="text-gray-600">
                  Investigating how platform design, algorithms, and competitive
                  dynamics shape user experiences and market outcomes.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-secondary mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Consumer Behavior
                </h3>
                <p className="text-gray-600">
                  Exploring how consumers learn, adapt, and make decisions in
                  digital and traditional marketplace environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
