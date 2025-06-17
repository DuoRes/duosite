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
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My research explores the intersection of digital platforms, consumer
            behavior, and market competition using rigorous empirical methods
            and economic theory.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Research Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-white text-primary-700 font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 border border-primary-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Job Market Paper */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Job Market Paper
          </h3>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-full mb-3">
                  {jobMarketPaper.status}
                </span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {jobMarketPaper.title}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {jobMarketPaper.abstract}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {jobMarketPaper.methods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-gray-500 font-medium">
                {jobMarketPaper.year}
              </span>
              <div className="flex gap-3">
                <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
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
                  Download PDF
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Working Papers */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Working Papers
          </h3>
          <div className="grid gap-8">
            {workingPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                          paper.status === "Under Review"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {paper.status}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {paper.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {paper.title}
                    </h4>
                    {paper.coauthors && (
                      <p className="text-gray-600 mb-3">
                        <span className="font-medium">Co-authors:</span>{" "}
                        {paper.coauthors.join(", ")}
                      </p>
                    )}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {paper.abstract}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.methods.map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200">
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
                    Download PDF
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Abstract
                  </button>
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
