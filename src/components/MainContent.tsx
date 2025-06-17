import Image from "next/image";

const MainContent = () => {
  return (
    <main className="flex-1 ml-72 bg-white min-h-screen">
      {/* Home Section */}
      <section id="home" className="pt-32 pb-24 px-16">
        <div className="max-w-4xl">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-16">
              <h1 className="text-5xl font-light text-black mb-8 leading-tight">
                Mingduo Zhao
              </h1>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p className="font-medium text-black">
                  PhD Candidate in Marketing
                </p>
                <p>Haas School of Business</p>
                <p>University of California, Berkeley</p>
              </div>

              <div className="mt-12 space-y-3 text-gray-600">
                <p>call me Mingduo</p>
                <p>email me at mingduo@berkeley.edu</p>
                <p>
                  contact me via <span className="text-blue-600">in</span>
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="/CV (4).pdf"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-700 transition-colors border-b border-gray-300 hover:border-gray-500 pb-1"
                >
                  Download CV ↗
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <Image
                  src="/picture/WechatIMG5527.jpg"
                  alt="Mingduo Zhao"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-12">About</h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              I am a PhD Candidate in Marketing at the Haas School of Business,
              University of California, Berkeley. My research interests lie at
              the intersection of quantitative marketing, digital platforms, and
              consumer behavior.
            </p>
            <p>
              I employ empirical methods and causal inference techniques to
              study how platform design and competition influence consumer
              decision-making and market outcomes. My current work focuses on
              understanding consumer learning in competitive platform
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Working Papers Section */}
      <section id="working-papers" className="py-24 px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-12">
            Working papers
          </h2>
          <div className="space-y-12">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium text-black mb-4">
                Platform Competition and Consumer Learning
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded">
                  Job Market Paper
                </span>
                <span className="text-sm text-gray-500">
                  Draft Available Upon Request
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This paper investigates how competition between digital
                platforms affects consumer learning and decision-making
                processes. Using a novel dataset and quasi-experimental methods,
                I demonstrate that platform competition significantly influences
                how consumers learn and adapt their behaviors in digital
                marketplaces.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium text-black mb-4">
                The Impact of Social Media on Consumer Purchase Decisions
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
                  Work in Progress
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This research examines how social media platforms shape consumer
                decision-making processes and purchase behaviors. The study
                combines machine learning techniques with econometric analysis
                to identify causal relationships between social media exposure
                and consumer choices.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-medium text-black mb-4">
                Algorithm Transparency and Consumer Trust in Digital Platforms
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                  Research Interest
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Exploring how algorithmic transparency affects consumer trust
                and engagement on digital platforms. This line of research aims
                to understand the trade-offs between algorithmic performance and
                transparency in building sustainable platform ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Published Papers Section */}
      <section id="published-papers" className="py-24 px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-12">
            Published papers
          </h2>
          <div className="space-y-12">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium text-black mb-4">
                Consumer Learning in Digital Platform Environments
              </h3>
              <div className="text-sm text-gray-600 mb-4">
                <em>Journal of Marketing Research</em>, 2023
              </div>
              <p className="text-gray-700 leading-relaxed">
                This study examines how consumers learn and adapt their
                behaviors on digital platforms, with implications for platform
                design and marketing strategy.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-medium text-black mb-4">
                Platform Competition and Market Dynamics
              </h3>
              <div className="text-sm text-gray-600 mb-4">
                <em>Marketing Science</em>, 2022
              </div>
              <p className="text-gray-700 leading-relaxed">
                An empirical analysis of how platform competition affects market
                outcomes and consumer welfare in digital marketplaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-24 px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-12">
            Curriculum Vitae
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-black mb-4">Education</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <div className="font-medium">PhD in Marketing</div>
                  <div className="text-gray-600">
                    UC Berkeley Haas School of Business, Expected 2024
                  </div>
                </div>
                <div>
                  <div className="font-medium">MS in Economics</div>
                  <div className="text-gray-600">
                    University of California, Berkeley, 2020
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-black mb-4">
                Teaching Experience
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <div className="font-medium">
                    Graduate Student Instructor - Marketing Analytics (MBA)
                  </div>
                  <div className="text-gray-600">Fall 2023</div>
                </div>
                <div>
                  <div className="font-medium">
                    Graduate Student Instructor - Digital Marketing
                  </div>
                  <div className="text-gray-600">Spring 2023</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="/CV (4).pdf"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transition-colors border-b border-gray-300 hover:border-gray-500 pb-1"
              >
                Download full CV ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Keybee Section */}
      <section id="keybee" className="py-24 px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-12">Keybee</h2>
          <div className="text-gray-700 leading-relaxed">
            <p>
              Information about Keybee project or research will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-12 border-t border-gray-200 mt-24">
        <div className="max-w-4xl">
          <div className="text-sm text-gray-500">
            <div className="text-orange-500 font-medium mb-2">
              Berkeley Haas
            </div>
            <div>Berkeley, California, 2025</div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MainContent;
