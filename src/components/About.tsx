const About = () => {
  const expertiseAreas = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Quantitative Marketing",
      description:
        "Developing and applying advanced econometric methods to understand market dynamics and consumer behavior patterns.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Digital Platforms",
      description:
        "Investigating how platform design, algorithms, and competitive dynamics shape user experiences and market outcomes.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Consumer Behavior",
      description:
        "Exploring how consumers learn, adapt, and make decisions in digital and traditional marketplace environments.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a PhD Candidate in Marketing at the Haas School of Business,
            University of California, Berkeley. My research interests lie at the
            intersection of quantitative marketing, digital platforms, and
            consumer behavior.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Research Focus
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I employ empirical methods and causal inference techniques to
              study how platform design and competition influence consumer
              decision-making and market outcomes. My current work focuses on
              understanding consumer learning in competitive platform
              environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through rigorous quantitative analysis, I aim to uncover insights
              that can inform both academic understanding and practical business
              strategies in the digital economy.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "R",
                  "Python",
                  "Stata",
                  "MATLAB",
                  "SQL",
                  "Causal Inference",
                  "Machine Learning",
                  "Econometrics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Achievements */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-700 font-medium">Years of Research</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Research Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Teaching Courses</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-700 font-medium">Job Market Paper</div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${area.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>

                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
