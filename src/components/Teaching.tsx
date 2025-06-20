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
    <section id="teaching" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Teaching
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about making quantitative marketing accessible and
            engaging through innovative pedagogy and practical applications.
          </p>
        </div>

        {/* Teaching Philosophy */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {teachingPhilosophy.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  {teachingPhilosophy.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {teachingPhilosophy.principles.map((principle) => (
                    <div
                      key={principle}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-3 h-3 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Student-Centered Learning
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
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
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Teaching Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                      {course.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-0">
                        {course.title}
                      </h4>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded w-fit">
                        {course.code}
                      </span>
                    </div>
                    <p className="text-purple-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                      {course.type}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {course.semester}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {course.description}
                </p>

                <div>
                  <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">
                    Key Topics
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 text-xs sm:text-sm font-medium rounded-full"
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
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Teaching Skills & Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  {skill.name}
                </h4>
                <div className="space-y-2">
                  {skill.tools.map((tool) => (
                    <div key={tool} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
