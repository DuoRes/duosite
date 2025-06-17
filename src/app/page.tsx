import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Teaching from "@/components/Teaching";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Mingduo <span className="text-blue-600">Zhao</span>
            </h1>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#research"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Research
              </a>
              <a
                href="#teaching"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Teaching
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <a
              href="/CV (4).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Mingduo{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Zhao
                  </span>
                </h1>
                <div className="text-2xl font-serif text-purple-600 mb-2">
                  赵鸣铎
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-700">
                  PhD Candidate in Marketing
                </h2>
                <p className="text-lg text-gray-600">
                  Haas School of Business
                  <br />
                  University of California, Berkeley
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Researching the intersection of quantitative marketing, digital
                platforms, and consumer behavior using empirical methods and
                causal inference techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="mailto:mingduo@berkeley.edu"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="/CV (4).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View CV
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I am a PhD Candidate in Marketing at the Haas School of Business,
              University of California, Berkeley. My research interests lie at
              the intersection of quantitative marketing, digital platforms, and
              consumer behavior.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                Through rigorous quantitative analysis, I aim to uncover
                insights that can inform both academic understanding and
                practical business strategies in the digital economy.
              </p>

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
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-700 font-medium">
                  Years of Research
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  5+
                </div>
                <div className="text-gray-700 font-medium">
                  Research Projects
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
                <div className="text-gray-700 font-medium">
                  Teaching Courses
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-gray-700 font-medium">
                  Job Market Paper
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My research explores the intersection of digital platforms,
              consumer behavior, and market competition using rigorous empirical
              methods and economic theory.
            </p>
          </div>

          {/* Job Market Paper */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Job Market Paper
            </h3>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-full mb-3">
                Job Market Paper
              </span>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                Platform Competition and Consumer Learning: Evidence from the
                Ride-sharing Market
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                This paper investigates how competition between digital
                platforms affects consumer learning and choice behavior. Using
                data from the ride-sharing market, I employ a structural model
                to estimate how consumers learn about platform quality and
                update their preferences over time. The findings reveal that
                platform competition accelerates consumer learning, leading to
                more efficient market outcomes.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Structural Modeling",
                  "Causal Inference",
                  "Field Experiments",
                ].map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                  >
                    {method}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-gray-500 font-medium">2024</span>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Download PDF
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Abstract
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in discussing research opportunities,
              collaborations, and sharing insights about digital marketing and
              consumer behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a
              href="mailto:mingduo@berkeley.edu"
              className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                📧
              </div>
              <h4 className="text-lg font-bold mb-2">Email</h4>
              <p className="text-gray-300 text-sm">mingduo@berkeley.edu</p>
            </a>

            <div className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4">
                📍
              </div>
              <h4 className="text-lg font-bold mb-2">Office</h4>
              <p className="text-gray-300 text-sm">
                Berkeley Haas School of Business
                <br />
                Berkeley, CA 94720
              </p>
            </div>

            <a
              href="https://linkedin.com/in/mingduo-zhao"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                💼
              </div>
              <h4 className="text-lg font-bold mb-2">LinkedIn</h4>
              <p className="text-gray-300 text-sm">Connect on LinkedIn</p>
            </a>

            <a
              href="/CV (4).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4">
                📄
              </div>
              <h4 className="text-lg font-bold mb-2">CV</h4>
              <p className="text-gray-300 text-sm">Download full CV</p>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Mingduo Zhao. Built with Next.js, TypeScript, and Tailwind
              CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
