const Teaching = () => {
  const courses = [
    {
      title: "Marketing Analytics",
      code: "UGBA 142",
      type: "Graduate Student Instructor",
      semester: "Fall 2023, Spring 2024",
      description:
        "Advanced course covering statistical methods, data analysis, and predictive modeling in marketing contexts. Taught Python and R programming for marketing applications.",
      topics: [
        "Statistical Analysis",
        "Predictive Modeling",
        "Data Visualization",
        "Python/R Programming",
      ],
      icon: (
        <svg
          className="w-6 h-6"
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
    },
    {
      title: "Digital Marketing Strategy",
      code: "MBA 239",
      type: "Teaching Assistant",
      semester: "Fall 2022, Fall 2023",
      description:
        "MBA-level course focusing on digital marketing strategies, platform economics, and consumer behavior in digital environments. Conducted lab sessions and guest lectures.",
      topics: [
        "Digital Strategy",
        "Platform Economics",
        "Consumer Behavior",
        "Case Studies",
      ],
      icon: (
        <svg
          className="w-6 h-6"
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
    },
  ];

  const teachingPhilosophy = {
    title: "Teaching Philosophy",
    description:
      "I believe in making complex quantitative concepts accessible through practical applications and real-world examples. My teaching emphasizes hands-on learning, critical thinking, and the connection between theory and practice in marketing.",
    principles: [
      "Active Learning",
      "Real-world Applications",
      "Collaborative Problem Solving",
      "Data-driven Decision Making",
    ],
  };

  const skills = [
    { name: "Statistical Software", tools: ["R", "Python", "Stata", "MATLAB"] },
    {
      name: "Data Analysis",
      tools: ["Econometrics", "Machine Learning", "Causal Inference"],
    },
    {
      name: "Presentation",
      tools: ["Classroom Teaching", "Workshop Facilitation", "Guest Lectures"],
    },
    {
      name: "Course Development",
      tools: ["Curriculum Design", "Assignment Creation", "Assessment"],
    },
  ];

  return (
    <section id="teaching" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Teaching
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about making quantitative marketing accessible and
            engaging through innovative pedagogy and practical applications.
          </p>
        </div>

        {/* Teaching Philosophy */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {teachingPhilosophy.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {teachingPhilosophy.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {teachingPhilosophy.principles.map((principle) => (
                    <div
                      key={principle}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Student-Centered Learning
                    </h4>
                    <p className="text-gray-600">
                      Focusing on student engagement and practical skill
                      development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Teaching Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                      {course.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">
                        {course.title}
                      </h4>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded">
                        {course.code}
                      </span>
                    </div>
                    <p className="text-purple-600 font-medium mb-2">
                      {course.type}
                    </p>
                    <p className="text-gray-500 text-sm">{course.semester}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {course.description}
                </p>

                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Topics Covered:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Skills */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Teaching Skills & Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    {skillCategory.name}
                  </h4>
                  <div className="space-y-2">
                    {skillCategory.tools.map((tool) => (
                      <div key={tool} className="text-gray-600 font-medium">
                        {tool}
                      </div>
                    ))}
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
              Interested in Guest Lectures or Workshops?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              I'm available for guest lectures, workshops, and teaching
              collaborations in quantitative marketing and data analysis.
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
              Contact for Teaching Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
