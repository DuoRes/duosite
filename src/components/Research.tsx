const Research = () => {
  const jobMarketPaper = {
    title:
      "Platform Competition and Consumer Learning: Evidence from the Ride-sharing Market",
    abstract:
      "This paper investigates how competition between digital platforms affects consumer learning and choice behavior. Using data from the ride-sharing market, I employ a structural model to estimate how consumers learn about platform quality and update their preferences over time. The findings reveal that platform competition accelerates consumer learning, leading to more efficient market outcomes.",
    status: "Job Market Paper",
    year: "2024",
    methods: ["Structural Modeling", "Causal Inference", "Field Experiments"],
  };

  const workingPapers = [
    {
      title: "Algorithmic Recommendations and Consumer Search Behavior",
      abstract:
        "How do algorithmic recommendations influence consumer search patterns and market competition? This study examines the causal effects of recommendation algorithms on consumer behavior using data from e-commerce platforms.",
      coauthors: ["Professor A", "Professor B"],
      year: "2024",
      status: "Under Review",
      methods: [
        "Difference-in-Differences",
        "Machine Learning",
        "Natural Experiments",
      ],
    },
    {
      title: "Dynamic Pricing and Consumer Learning in Digital Markets",
      abstract:
        "This paper studies how dynamic pricing strategies affect consumer learning and long-term market outcomes. Using a combination of field experiments and observational data, we identify the welfare effects of personalized pricing.",
      coauthors: ["Professor C"],
      year: "2023",
      status: "Working Paper",
      methods: ["Field Experiments", "Structural Modeling", "Welfare Analysis"],
    },
  ];

  const researchInterests = [
    "Platform Economics",
    "Consumer Learning",
    "Digital Marketing",
    "Algorithmic Decision Making",
    "Market Competition",
    "Causal Inference",
  ];

  return (
    <section
      id="research"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Research
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My research explores the intersection of digital platforms, consumer
            behavior, and market competition using rigorous empirical methods
            and economic theory.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Research Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 sm:px-4 py-2 bg-white text-primary-700 font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 border border-primary-200 text-sm sm:text-base"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Job Market Paper */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
            Job Market Paper
          </h3>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-full mb-3 sm:mb-0 w-fit">
                    {jobMarketPaper.status}
                  </span>
                  <span className="text-gray-500 font-medium text-sm sm:text-base">
                    {jobMarketPaper.year}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {jobMarketPaper.title}
                </h4>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {jobMarketPaper.abstract}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                {jobMarketPaper.methods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-xs sm:text-sm font-medium rounded-full"
                  >
                    {method}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <button className="flex items-center justify-center px-4 py-2 sm:py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 touch-manipulation">
                  <svg
                    className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">Download PDF</span>
                </button>
                <button className="flex items-center justify-center px-4 py-2 sm:py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation">
                  <span className="text-sm sm:text-base">View Abstract</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Working Papers */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
            Working Papers
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {workingPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded-full w-fit ${
                          paper.status === "Under Review"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {paper.status}
                      </span>
                      <span className="text-gray-500 font-medium text-sm">
                        {paper.year}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    {paper.title}
                  </h4>
                  {paper.coauthors && (
                    <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
                      <span className="font-medium">Co-authors:</span>{" "}
                      {paper.coauthors.join(", ")}
                    </p>
                  )}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.methods.map((method) => (
                      <span
                        key={method}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full"
                      >
                        {method}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                    <button className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200 touch-manipulation">
                      <svg
                        className="mr-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-sm">Download</span>
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation">
                      <span className="text-sm">Abstract</span>
                    </button>
                    {paper.status === "Under Review" && (
                      <button className="flex items-center justify-center px-4 py-2 border border-green-300 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors duration-200 touch-manipulation">
                        <span className="text-sm">Journal Status</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always open to discussing research opportunities and potential
              collaborations.
            </p>
            <a
              href="mailto:mingduo@berkeley.edu"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
