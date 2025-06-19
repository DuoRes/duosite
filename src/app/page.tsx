"use client";

import { useEffect, useState } from "react";
import PasswordProtection from "@/components/PasswordProtection";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-white">
        {/* Dynamic About Section - Full Screen to Sidebar */}
        <section
          className={`fixed inset-0 transition-all duration-1000 ease-in-out z-10 ${
            isScrolled ? "w-[32rem] border-r border-gray-200" : "w-full"
          }`}
          style={{
            backgroundImage: !isScrolled ? "url(/picture/bg252.png)" : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`h-full flex items-center justify-center transition-all duration-1000 ${
              isScrolled ? "bg-gray-50" : "bg-white/95 backdrop-blur-sm"
            }`}
          >
            <div
              className={`max-w-6xl mx-auto px-8 text-center transition-all duration-1000 ${
                isScrolled ? "max-w-md px-6" : ""
              }`}
            >
              {!isScrolled ? (
                // Full screen about content
                <>
                  <div className="mb-8">
                    <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl mb-8 ring-4 ring-white/50 animate-float">
                      <img
                        src="/picture/WechatIMG5527.jpg"
                        alt="Mingduo Zhao"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-6xl font-serif font-light text-gray-900 mb-4 tracking-tight drop-shadow-sm">
                      Mingduo Zhao
                    </h1>
                    <div className="text-xl text-gray-700 mb-3 font-light tracking-wide">
                      赵鸣铎
                    </div>
                    <div className="text-xl text-gray-800 mb-8 font-light">
                      PhD Candidate in Marketing
                    </div>
                    <div className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                      University of California, Berkeley • Haas School of
                      Business
                    </div>
                  </div>

                  <div className="prose prose-lg prose-gray max-w-4xl mx-auto mb-12">
                    <p className="text-lg leading-relaxed text-gray-800">
                      My research examines the intersection of quantitative
                      marketing, digital platforms, and consumer behavior
                      through rigorous empirical analysis and causal inference
                      methodologies.
                    </p>
                  </div>

                  <div className="flex gap-6 justify-center mb-20">
                    <a
                      href="mailto:mingduo@berkeley.edu"
                      className="px-10 py-3 bg-gray-900/90 text-white text-base font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      CONTACT
                    </a>
                    <a
                      href="/CV (4).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-3 border-2 border-gray-800/70 text-gray-900 text-base font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      CURRICULUM VITAE
                    </a>
                  </div>

                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-8 h-8 text-gray-700 animate-smooth-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      <p className="text-sm text-gray-700 mt-2 font-medium animate-pulse">
                        Scroll to explore
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                // Sidebar profile content
                <div className="flex flex-col h-full justify-between py-8">
                  <div className="flex-1">
                    <div className="text-center mb-12">
                      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg mb-8">
                        <img
                          src="/picture/WechatIMG5527.jpg"
                          alt="Mingduo Zhao"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h1 className="text-3xl font-serif font-light text-gray-900 mb-3 tracking-tight">
                        Mingduo Zhao
                      </h1>
                      <div className="text-lg text-gray-600 mb-2 font-light">
                        赵鸣铎
                      </div>
                      <div className="text-lg text-gray-700 mb-6 font-light">
                        PhD Candidate in Marketing
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed mb-8">
                        UC Berkeley • Haas School of Business
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed px-4">
                        Research at the intersection of quantitative marketing,
                        digital platforms, and consumer behavior.
                      </div>
                    </div>

                    <div className="space-y-4 mb-12 px-4">
                      <a
                        href="mailto:mingduo@berkeley.edu"
                        className="block w-full px-8 py-4 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors text-center"
                      >
                        CONTACT
                      </a>
                      <a
                        href="/CV (4).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-8 py-4 border border-gray-300 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors text-center"
                      >
                        CURRICULUM VITAE
                      </a>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="px-8 py-4 border-t border-gray-200">
                    <div className="space-y-6">
                      <a
                        href="#about"
                        className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                      >
                        ABOUT
                      </a>
                      <a
                        href="#job-market-paper"
                        className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                      >
                        JOB MARKET PAPER
                      </a>
                      <a
                        href="#research"
                        className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                      >
                        RESEARCH
                      </a>
                      <a
                        href="#teaching"
                        className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                      >
                        TEACHING
                      </a>
                      <a
                        href="#contact"
                        className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                      >
                        CONTACT
                      </a>
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content - Only visible when scrolled */}
        <div
          className={`transition-all duration-1000 ${
            isScrolled ? "ml-[32rem]" : "ml-0"
          }`}
        >
          {/* Spacer for initial scroll trigger */}
          <div className="h-screen"></div>

          {/* About Section - Detailed */}
          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-white"
          >
            <div className="max-w-5xl mx-auto px-12 py-16">
              <div className="mb-20">
                <h2 className="text-5xl font-serif font-semibold text-gray-900 mb-12 tracking-tight">
                  About
                </h2>
                <div className="w-20 h-px bg-gray-400 mb-16"></div>
              </div>

              <div className="prose prose-xl prose-gray max-w-none">
                <p className="text-2xl leading-relaxed text-gray-700 mb-12">
                  I am a PhD Candidate in Marketing at the Haas School of
                  Business, University of California, Berkeley. My research
                  interests lie at the intersection of quantitative marketing,
                  digital platforms, and consumer behavior.
                </p>

                <div className="grid md:grid-cols-2 gap-16 mt-20">
                  <div>
                    <h3 className="text-3xl font-serif font-medium text-gray-900 mb-8">
                      Research Interests
                    </h3>
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        Platform Economics and Competition
                      </li>
                      <li className="flex items-start">
                        <span className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        Consumer Learning and Decision-Making
                      </li>
                      <li className="flex items-start">
                        <span className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        Digital Marketing and Algorithms
                      </li>
                      <li className="flex items-start">
                        <span className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        Empirical Methods and Causal Inference
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-3xl font-serif font-medium text-gray-900 mb-8">
                      Methodological Expertise
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
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
                          className="text-base text-gray-600 border border-gray-200 px-4 py-3 text-center hover:bg-gray-50 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Market Paper Section */}
          <section
            id="job-market-paper"
            className="min-h-screen flex items-center justify-center bg-gray-50"
          >
            <div className="max-w-5xl mx-auto px-12 py-16">
              <div className="mb-20">
                <h2 className="text-5xl font-serif font-semibold text-gray-900 mb-12 tracking-tight">
                  Job Market Paper
                </h2>
                <div className="w-20 h-px bg-gray-400 mb-16"></div>
              </div>

              <div className="bg-white border border-gray-200 p-16 shadow-lg">
                <div className="mb-12">
                  <span className="inline-block px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide mb-8">
                    JOB MARKET PAPER
                  </span>
                  <h3 className="text-4xl font-serif font-medium text-gray-900 leading-tight mb-8">
                    News Consumption, Recommender Systems, and Polarization
                  </h3>
                  <div className="text-xl text-gray-600 mb-12">
                    Mingduo Zhao • 2024
                  </div>
                </div>

                <div className="prose prose-xl max-w-none mb-12">
                  <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    Recommender systems shape how people consume news, possibly
                    reinforcing political polarization. We run two field
                    experiments to identify how user preferences and algorithms
                    interact to amplify partisan news consumption. In the first
                    study, 2,065 U.S. participants use blank Google accounts and
                    a browser extension to track users' activities on Google
                    News.
                  </p>
                  <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    The first-round recommendations are exogenous, allowing us
                    to show that aligned content draws more clicks. A second
                    experiment uses bots to randomly click on articles,
                    revealing that each click leads to more ideologically
                    aligned content. These two pieces of causal evidence
                    establish a feedback loop between user preference and
                    algorithmic recommendations.
                  </p>
                  <p className="text-xl leading-relaxed text-gray-700">
                    We also find in the field study that, after interacting with
                    the recommender system, people's level of polarization
                    increases. A structural model combining a discrete choice
                    model (demand side) with a multi-armed bandit algorithm
                    (supply side) confirms this positive-feedback mechanism.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                  {[
                    "Field Experiments",
                    "Structural Modeling",
                    "Causal Inference",
                    "Digital Platforms",
                    "Political Economy",
                  ].map((method) => (
                    <span
                      key={method}
                      className="text-base text-gray-600 border border-gray-200 px-6 py-3 bg-gray-50"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-10 py-4 bg-gray-900 text-white text-base font-medium tracking-wide hover:bg-gray-800 transition-colors">
                    DOWNLOAD PAPER
                  </button>
                  <button className="px-10 py-4 border border-gray-300 text-gray-900 text-base font-medium tracking-wide hover:bg-gray-50 transition-colors">
                    VIEW ABSTRACT
                  </button>
                  <button className="px-10 py-4 border border-gray-300 text-gray-900 text-base font-medium tracking-wide hover:bg-gray-50 transition-colors">
                    SLIDES
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section
            id="research"
            className="min-h-screen flex items-center justify-center bg-white"
          >
            <div className="max-w-6xl mx-auto px-12 py-16">
              <div className="mb-20">
                <h2 className="text-5xl font-serif font-semibold text-gray-900 mb-12 tracking-tight">
                  Research
                </h2>
                <div className="w-20 h-px bg-gray-400 mb-16"></div>
              </div>

              <div>
                <h3 className="text-3xl font-serif font-medium text-gray-900 mb-12">
                  Working Papers
                </h3>

                <div className="space-y-12">
                  <div className="bg-white border-l-4 border-gray-200 pl-12 py-8">
                    <h4 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                      Algorithmic Recommendations and Consumer Search Behavior
                    </h4>
                    <div className="text-base text-gray-500 mb-6">
                      2024 • Under Review
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      This study examines the causal effects of recommendation
                      algorithms on consumer behavior using data from e-commerce
                      platforms.
                    </p>
                    <div className="flex gap-4">
                      <button className="text-base text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Paper
                      </button>
                      <span className="text-gray-400">•</span>
                      <button className="text-base text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Abstract
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-gray-200 pl-12 py-8">
                    <h4 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                      Dynamic Pricing and Consumer Learning in Digital Markets
                    </h4>
                    <div className="text-base text-gray-500 mb-6">
                      2023 • Working Paper
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Using field experiments and observational data, we
                      identify the welfare effects of personalized pricing in
                      digital marketplaces.
                    </p>
                    <div className="flex gap-4">
                      <button className="text-base text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Paper
                      </button>
                      <span className="text-gray-400">•</span>
                      <button className="text-base text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Abstract
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Section */}
          <section
            id="teaching"
            className="min-h-screen flex items-center justify-center bg-gray-50"
          >
            <div className="max-w-6xl mx-auto px-12 py-16">
              <div className="mb-20">
                <h2 className="text-5xl font-serif font-semibold text-gray-900 mb-12 tracking-tight">
                  Teaching
                </h2>
                <div className="w-20 h-px bg-gray-400 mb-16"></div>
              </div>

              <div className="space-y-16">
                <div className="border border-gray-200 p-12 bg-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                        Marketing Analytics
                      </h3>
                      <div className="text-base text-gray-600">
                        UGBA 142 • Graduate Student Instructor
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Fall 2023, Spring 2024
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Advanced course covering statistical methods, data analysis,
                    and predictive modeling in marketing contexts.
                    Responsibilities include conducting lab sessions, grading
                    assignments, and providing Python/R programming instruction.
                  </p>
                  <div className="text-base text-gray-600">
                    <strong>Topics:</strong> Statistical Analysis, Predictive
                    Modeling, Data Visualization, Programming
                  </div>
                </div>

                <div className="border border-gray-200 p-12 bg-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                        Digital Marketing Strategy
                      </h3>
                      <div className="text-base text-gray-600">
                        MBA 239 • Teaching Assistant
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      Fall 2022, Fall 2023
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    MBA-level course focusing on digital marketing strategies,
                    platform economics, and consumer behavior in digital
                    environments. Led case study discussions and guest lectures.
                  </p>
                  <div className="text-base text-gray-600">
                    <strong>Topics:</strong> Digital Strategy, Platform
                    Economics, Consumer Behavior, Case Analysis
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-white"
          >
            <div className="max-w-4xl mx-auto px-12 py-16 text-center">
              <h2 className="text-5xl font-serif font-semibold text-gray-900 mb-12 tracking-tight">
                Contact
              </h2>
              <div className="w-20 h-px bg-gray-400 mx-auto mb-16"></div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    Email
                  </h3>
                  <a
                    href="mailto:mingduo@berkeley.edu"
                    className="text-xl text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    mingduo@berkeley.edu
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    Office
                  </h3>
                  <div className="text-xl text-gray-600 leading-relaxed">
                    Haas School of Business
                    <br />
                    University of California, Berkeley
                    <br />
                    Berkeley, CA 94720
                  </div>
                </div>

                <div className="flex justify-center gap-12 pt-12">
                  <a
                    href="/CV (4).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-600 hover:text-gray-900 transition-colors tracking-wide font-medium"
                  >
                    CURRICULUM VITAE
                  </a>
                  <a
                    href="https://linkedin.com/in/mingduo-zhao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-600 hover:text-gray-900 transition-colors tracking-wide font-medium"
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-12 text-center">
              <p className="text-base text-gray-500">
                © 2024 Mingduo Zhao. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </PasswordProtection>
  );
}
