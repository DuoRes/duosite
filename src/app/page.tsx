import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Teaching from "@/components/Teaching";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-semibold text-gray-900 tracking-tight">
              Mingduo Zhao
            </h1>
            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#home"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
              >
                HOME
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
              >
                ABOUT
              </a>
              <a
                href="#research"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
              >
                RESEARCH
              </a>
              <a
                href="#teaching"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
              >
                TEACHING
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
              >
                CONTACT
              </a>
            </div>
            <a
              href="/CV (4).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
            >
              CURRICULUM VITAE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-serif font-semibold text-gray-900 leading-tight tracking-tight">
                  Mingduo Zhao
                </h1>
                <div className="text-xl font-serif text-gray-600 tracking-wide">
                  赵鸣铎
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-medium text-gray-800 tracking-tight">
                  PhD Candidate in Marketing
                </h2>
                <div className="text-lg text-gray-600 leading-relaxed">
                  <div className="font-medium">Haas School of Business</div>
                  <div>University of California, Berkeley</div>
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  My research examines the intersection of quantitative
                  marketing, digital platforms, and consumer behavior through
                  rigorous empirical analysis and causal inference
                  methodologies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="mailto:mingduo@berkeley.edu"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors"
                >
                  CONTACT
                </a>
                <a
                  href="/CV (4).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 font-medium tracking-wide hover:bg-gray-50 transition-colors"
                >
                  CURRICULUM VITAE
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg">
                  <img
                    src="/picture/WechatIMG5527.jpg"
                    alt="Mingduo Zhao"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-8 tracking-tight">
                About
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-12"></div>
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                I am a PhD Candidate in Marketing at the Haas School of
                Business, University of California, Berkeley. My research
                interests lie at the intersection of quantitative marketing,
                digital platforms, and consumer behavior.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                    Research Interests
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Platform Economics and Competition
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Consumer Learning and Decision-Making
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Digital Marketing and Algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Empirical Methods and Causal Inference
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                    Methodological Expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "R",
                      "Python",
                      "Stata",
                      "MATLAB",
                      "SQL",
                      "Econometrics",
                      "Machine Learning",
                      "Structural Modeling",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-gray-600 border border-gray-200 px-3 py-2 text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-8 tracking-tight">
              Research
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-12"></div>
          </div>

          {/* Job Market Paper */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="border border-gray-200 p-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-gray-900 text-white text-xs font-medium tracking-wide mb-4">
                  JOB MARKET PAPER
                </span>
                <h3 className="text-2xl font-serif font-medium text-gray-900 leading-tight mb-4">
                  Platform Competition and Consumer Learning: Evidence from the
                  Ride-sharing Market
                </h3>
                <div className="text-sm text-gray-500 mb-6">2024</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                This paper investigates how competition between digital
                platforms affects consumer learning and choice behavior. Using
                data from the ride-sharing market, I employ a structural model
                to estimate how consumers learn about platform quality and
                update their preferences over time. The findings reveal that
                platform competition accelerates consumer learning, leading to
                more efficient market outcomes and enhanced consumer welfare.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Structural Modeling",
                  "Causal Inference",
                  "Field Experiments",
                  "Consumer Choice",
                ].map((method) => (
                  <span
                    key={method}
                    className="text-xs text-gray-600 border border-gray-200 px-3 py-1"
                  >
                    {method}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
                  PAPER
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors">
                  ABSTRACT
                </button>
              </div>
            </div>
          </div>

          {/* Working Papers */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-8">
              Working Papers
            </h3>

            <div className="space-y-8">
              <div className="border-l-2 border-gray-200 pl-8">
                <h4 className="text-xl font-serif font-medium text-gray-900 mb-2">
                  Algorithmic Recommendations and Consumer Search Behavior
                </h4>
                <div className="text-sm text-gray-500 mb-4">
                  2024 • Under Review
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This study examines the causal effects of recommendation
                  algorithms on consumer behavior using data from e-commerce
                  platforms.
                </p>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Paper
                  </button>
                  <span className="text-gray-400">•</span>
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Abstract
                  </button>
                </div>
              </div>

              <div className="border-l-2 border-gray-200 pl-8">
                <h4 className="text-xl font-serif font-medium text-gray-900 mb-2">
                  Dynamic Pricing and Consumer Learning in Digital Markets
                </h4>
                <div className="text-sm text-gray-500 mb-4">
                  2023 • Working Paper
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Using field experiments and observational data, we identify
                  the welfare effects of personalized pricing in digital
                  marketplaces.
                </p>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Paper
                  </button>
                  <span className="text-gray-400">•</span>
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Abstract
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-8 tracking-tight">
                Teaching
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-12"></div>
            </div>

            <div className="space-y-12">
              <div className="border border-gray-200 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">
                      Marketing Analytics
                    </h3>
                    <div className="text-sm text-gray-600">
                      UGBA 142 • Graduate Student Instructor
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Fall 2023, Spring 2024
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Advanced course covering statistical methods, data analysis,
                  and predictive modeling in marketing contexts.
                  Responsibilities include conducting lab sessions, grading
                  assignments, and providing Python/R programming instruction.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Topics:</strong> Statistical Analysis, Predictive
                  Modeling, Data Visualization, Programming
                </div>
              </div>

              <div className="border border-gray-200 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">
                      Digital Marketing Strategy
                    </h3>
                    <div className="text-sm text-gray-600">
                      MBA 239 • Teaching Assistant
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Fall 2022, Fall 2023
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MBA-level course focusing on digital marketing strategies,
                  platform economics, and consumer behavior in digital
                  environments. Led case study discussions and guest lectures.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Topics:</strong> Digital Strategy, Platform Economics,
                  Consumer Behavior, Case Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-8 tracking-tight">
              Contact
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-12"></div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:mingduo@berkeley.edu"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  mingduo@berkeley.edu
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Office
                </h3>
                <div className="text-gray-600">
                  Haas School of Business
                  <br />
                  University of California, Berkeley
                  <br />
                  Berkeley, CA 94720
                </div>
              </div>

              <div className="flex justify-center gap-8 pt-8">
                <a
                  href="/CV (4).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
                >
                  CURRICULUM VITAE
                </a>
                <a
                  href="https://linkedin.com/in/mingduo-zhao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Mingduo Zhao. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
