"use client";

import { useEffect, useState } from "react";
import PasswordProtection from "@/components/PasswordProtection";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear existing timeout to throttle scroll events
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        // Smoother transition trigger with slight delay
        setIsScrolled(scrollTop > 80);

        // Enhanced active section detection
        const sections = [
          "home",
          "about",
          "job-market-paper",
          "research",
          "teaching",
          "contact",
        ];
        let currentSection = "home";

        // Find the section that's most visible in the viewport
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const sectionHeight = rect.height;
            const viewportHeight = window.innerHeight;

            // Calculate how much of the section is visible
            const visibleTop = Math.max(0, -rect.top);
            const visibleBottom = Math.min(
              sectionHeight,
              viewportHeight - rect.top
            );
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibilityRatio =
              visibleHeight / Math.min(sectionHeight, viewportHeight);

            // Section is active if it's at least 30% visible and in the upper half of viewport
            if (visibilityRatio > 0.3 && rect.top <= viewportHeight * 0.6) {
              currentSection = sectionId;
            }
          }
        });

        setActiveSection(currentSection);
      }, 10); // Small throttle to smooth out rapid scroll events
    };

    const handleResize = () => {
      checkMobile();
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "#about", label: "About", number: "01", id: "about" },
    {
      href: "#job-market-paper",
      label: "Job Market Paper",
      number: "02",
      id: "job-market-paper",
    },
    { href: "#research", label: "Research", number: "03", id: "research" },
    { href: "#teaching", label: "Teaching", number: "04", id: "teaching" },
    { href: "#contact", label: "Contact", number: "05", id: "contact" },
  ];

  return (
    <PasswordProtection>
      <Navigation />
      <div
        className="min-h-screen bg-white scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* Dynamic About Section - Full Screen to Sidebar */}
        <section
          className={`fixed inset-0 transition-all duration-1000 ease-out z-10 ${
            isScrolled && !isMobile
              ? "w-64 sm:w-72 lg:w-80 xl:w-96 border-r border-gray-200"
              : isMobile && isScrolled
              ? "w-full h-20 top-0 border-b border-gray-200"
              : "w-full"
          }`}
          style={{
            backgroundImage: !isScrolled ? "url(/picture/bg252.png)" : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition:
              "all 1200ms cubic-bezier(0.4, 0, 0.2, 1), transform 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "width, height, transform, background-image",
          }}
        >
          <div
            className={`h-full flex items-center justify-center transition-all duration-1000 ease-out ${
              isScrolled ? "bg-gray-50" : "bg-white/95 backdrop-blur-sm"
            }`}
            style={{
              transition:
                "background-color 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className={`w-full mx-auto transition-all duration-1000 ease-out ${
                isScrolled
                  ? isMobile
                    ? "px-4 py-2"
                    : "max-w-none px-2 sm:px-3 lg:px-4"
                  : "text-center px-4 sm:px-6 lg:px-8"
              }`}
              style={{
                transition:
                  "padding 1200ms cubic-bezier(0.4, 0, 0.2, 1), max-width 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {!isScrolled ? (
                // Hero layout - optimized for mobile
                <div className="relative w-full h-full overflow-hidden">
                  {/* Subtle decorative background elements */}
                  <div className="absolute inset-0 opacity-30 md:opacity-40">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-blue-50 to-gray-50 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-br from-gray-50 to-blue-50 rounded-full blur-3xl"></div>
                  </div>

                  {/* Mobile-optimized layout */}
                  <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 lg:py-12 xl:py-16 w-full max-w-none">
                    {/* Mobile: Stack vertically, Desktop: Grid layout */}
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 h-full">
                      {/* Profile section - mobile optimized */}
                      <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
                        <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12">
                          {/* Profile image - responsive sizing with mobile positioning fix */}
                          <div className="flex-shrink-0 mt-8 sm:mt-12 md:mt-16 lg:mt-0">
                            <div className="relative">
                              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/30 transform hover:scale-105 transition-transform duration-500">
                                <img
                                  src="/picture/WechatIMG5527.jpg"
                                  alt="Mingduo Zhao"
                                  className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-500"
                                />
                              </div>
                              {/* Decorative accent - responsive */}
                              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-3 md:-right-3 lg:-bottom-2 lg:-right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 bg-gray-800 rounded-lg opacity-60 -z-10"></div>
                            </div>
                          </div>

                          {/* Name and title - mobile optimized */}
                          <div className="flex-1 text-center lg:text-left lg:pt-4">
                            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                              <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-gray-900 leading-tight tracking-tight mb-2">
                                  Mingduo Zhao
                                </h1>
                                <div className="text-sm sm:text-base lg:text-xl text-gray-600 tracking-wide mb-1">
                                  赵鸣铎
                                </div>
                              </div>

                              <div className="space-y-2 lg:space-y-3">
                                <div className="text-sm sm:text-base lg:text-xl text-gray-800 font-light">
                                  PhD Candidate in Economics
                                </div>
                                <div className="text-xs sm:text-sm lg:text-lg text-gray-600 leading-relaxed">
                                  University of California, Berkeley
                                  <br />
                                  Haas School of Business
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Research description - mobile optimized */}
                        <div className="max-w-none lg:max-w-4xl text-center lg:text-left px-2 sm:px-0 -mt-2 sm:-mt-4 lg:mt-0">
                          <div className="w-4 sm:w-6 lg:w-12 h-px bg-gray-300 mb-2 sm:mb-3 lg:mb-6 mx-auto lg:mx-0"></div>
                          <p className="text-xs sm:text-sm lg:text-lg leading-relaxed text-gray-700 font-light">
                            My research examines the intersection of{" "}
                            <em className="text-gray-800 font-medium">
                              quantitative marketing
                            </em>
                            ,{" "}
                            <em className="text-gray-800 font-medium">
                              digital platforms
                            </em>
                            , and{" "}
                            <em className="text-gray-800 font-medium">
                              consumer behavior
                            </em>{" "}
                            through rigorous empirical analysis and causal
                            inference methodologies.
                          </p>
                        </div>
                      </div>

                      {/* Navigation panel - mobile optimized positioning */}
                      <div className="lg:col-span-5 flex flex-col justify-center mt-2 sm:mt-4 lg:mt-0">
                        <div className="bg-white/50 lg:bg-white/60 backdrop-blur-lg border border-white/30 lg:border-white/40 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 xl:p-10 shadow-xl lg:shadow-2xl">
                          {/* Navigation menu - mobile optimized */}
                          <nav className="space-y-1.5 sm:space-y-2 lg:space-y-4 mb-3 sm:mb-4 lg:mb-8">
                            {navItems.map((item) => (
                              <button
                                key={item.href}
                                onClick={() => scrollToSection(item.id)}
                                className="group flex items-center justify-between py-1.5 sm:py-2 lg:py-3 px-2 sm:px-3 lg:px-4 -mx-2 sm:-mx-3 lg:-mx-4 rounded-lg lg:rounded-xl hover:bg-white/40 lg:hover:bg-white/50 transition-all duration-300 touch-manipulation w-full text-left"
                              >
                                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                                  <span className="text-xs sm:text-xs lg:text-sm font-mono text-gray-400 group-hover:text-gray-600 transition-colors">
                                    {item.number}
                                  </span>
                                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors tracking-wide">
                                    {item.label}
                                  </span>
                                </div>
                                <div className="w-2 sm:w-3 lg:w-6 h-px bg-gray-300 group-hover:bg-gray-600 group-hover:w-3 sm:group-hover:w-4 lg:group-hover:w-8 transition-all duration-300"></div>
                              </button>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>

                    {/* Scroll indicator - mobile optimized positioning */}
                    <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 lg:bottom-0 left-1/2 transform -translate-x-1/2">
                      <div className="flex flex-col items-center space-y-1 sm:space-y-2 lg:space-y-3">
                        <div className="w-px h-4 sm:h-6 lg:h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-gray-400 animate-smooth-bounce"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase hidden sm:block">
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Sidebar/mobile header content with enhanced highlighting
                <div
                  className={`${
                    isMobile
                      ? "flex items-center justify-between h-full px-4 py-2"
                      : "flex flex-col h-full justify-between py-4 sm:py-6 lg:py-8 overflow-y-auto max-h-screen"
                  }`}
                >
                  {isMobile ? (
                    // Mobile collapsed header
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                          <img
                            src="/picture/WechatIMG5527.jpg"
                            alt="Mingduo Zhao"
                            className="w-full h-full object-cover scale-140"
                          />
                        </div>
                        <div>
                          <h1 className="text-sm font-serif font-light text-gray-900 tracking-tight">
                            Mingduo Zhao
                          </h1>
                          <div className="text-xs text-gray-600">
                            PhD Candidate
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href="mailto:mingduo@berkeley.edu"
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-manipulation"
                        >
                          <svg
                            className="w-4 h-4 text-gray-600"
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
                        </a>
                        <a
                          href="/CV.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors touch-manipulation"
                        >
                          <svg
                            className="w-4 h-4"
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
                        </a>
                      </div>
                    </>
                  ) : (
                    // Desktop sidebar content with enhanced navigation
                    <>
                      <div className="flex-1 flex flex-col justify-center min-h-0">
                        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-2xl overflow-hidden shadow-lg mb-4 sm:mb-5 lg:mb-6">
                            <img
                              src="/picture/WechatIMG5527.jpg"
                              alt="Mingduo Zhao"
                              className="w-full h-full object-cover scale-150 hover:scale-115 transition-transform duration-500"
                            />
                          </div>
                          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-light text-gray-900 mb-1 sm:mb-2 tracking-tight">
                            Mingduo Zhao
                          </h1>
                          <div className="text-base sm:text-lg text-gray-600 mb-1 sm:mb-2 font-light">
                            赵鸣铎
                          </div>
                          <div className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-5 lg:mb-6 font-light">
                            PhD Candidate in Economics
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                            UC Berkeley • Haas School of Business
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Desktop Navigation with highlighting */}
                      <nav className="px-4 sm:px-6 lg:px-8 py-1 sm:py-1 lg:py-1 border-t border-gray-200 flex-shrink-0">
                        <div className="space-y-0.5 sm:space-y-1">
                          {navItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className={`group flex items-center justify-between w-full px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-left ${
                                activeSection === item.id
                                  ? "bg-primary-50 border-l-4 border-primary-500 text-primary-700 shadow-sm pl-2"
                                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <span
                                  className={`text-xs font-mono transition-colors ${
                                    activeSection === item.id
                                      ? "text-primary-600"
                                      : "text-gray-400 group-hover:text-gray-600"
                                  }`}
                                >
                                  {item.number}
                                </span>
                                <span className="text-xs sm:text-sm font-medium tracking-wide">
                                  {item.label}
                                </span>
                              </div>
                              <div
                                className={`h-px transition-all duration-300 ${
                                  activeSection === item.id
                                    ? "w-6 bg-primary-500"
                                    : "w-4 bg-gray-300 group-hover:bg-gray-600 group-hover:w-6"
                                }`}
                              ></div>
                            </button>
                          ))}
                        </div>
                      </nav>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content - Responsive margin handling */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isScrolled && !isMobile
              ? "ml-64 sm:ml-72 lg:ml-80 xl:ml-96"
              : isMobile && isScrolled
              ? "mt-20"
              : "ml-0"
          }`}
          style={{
            transition: "margin 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "margin-left, margin-top",
          }}
        >
          {/* Spacer for initial scroll trigger */}
          <div className="h-screen" style={{ scrollSnapAlign: "start" }}></div>

          {/* About Section - Mobile optimized */}
          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 sm:px-6 lg:px-8"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl mx-auto py-8 sm:py-12 lg:py-16 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    About
                  </h2>
                </div>
                <div className="w-8 sm:w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light mb-6 sm:mb-8 lg:mb-10">
                  I am a PhD Candidate in Marketing at the Haas School of
                  Business, University of California, Berkeley. My research
                  interests lie at the intersection of{" "}
                  <em className="text-gray-800 font-medium">
                    quantitative marketing
                  </em>
                  ,{" "}
                  <em className="text-gray-800 font-medium">
                    digital platforms
                  </em>
                  , and{" "}
                  <em className="text-gray-800 font-medium">
                    consumer behavior
                  </em>
                  .
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
                      Research Interests
                    </h3>
                    <div className="w-6 sm:w-8 h-px bg-gray-300 mb-4 sm:mb-6"></div>
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-light">
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Platform Economics and Competition
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Consumer Learning and Decision-Making
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Digital Marketing and Algorithms
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Empirical Methods and Causal Inference
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
                      Methodological Expertise
                    </h3>
                    <div className="w-6 sm:w-8 h-px bg-gray-300 mb-4 sm:mb-6"></div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {[
                        "R",
                        "Python",
                        "Stata",
                        "MATLAB",
                        "SQL",
                        "Econometrics",
                        "Machine Learning",
                        "Causal Inference",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full text-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Market Paper Section - Responsive */}
          <section
            id="job-market-paper"
            className="h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    Job Market Paper
                  </h2>
                </div>
                <div className="w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex-1 flex flex-col justify-center min-h-0">
                <div className="mb-4 sm:mb-3">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium tracking-wide mb-4 sm:mb-6 rounded-lg">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <span>JOB MARKET PAPER</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-gray-900 leading-tight mb-3 sm:mb-4">
                    News Consumption, Recommender Systems, and Polarization
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 font-light mb-4 sm:mb-6">
                    Mingduo Zhao • 2024
                  </div>
                </div>

                <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6">
                    Field experiments with 2,065 participants reveal how
                    recommendation algorithms and user preferences interact to
                    create feedback loops that amplify partisan news consumption
                    and increase political polarization.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light">
                    Using structural modeling that combines discrete choice
                    models with multi-armed bandit algorithms, we provide causal
                    evidence for this positive-feedback mechanism and its impact
                    on democratic discourse.
                  </p>
                </div>

                <div className="border-t border-gray-100">
                  <div className="flex flex-wrap gap-7">
                    <button className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg shadow-sm">
                      Download Paper
                    </button>
                    <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg">
                      Abstract
                    </button>
                    <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg">
                      Slides
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section - Summarized */}
          <section
            id="research"
            className="h-screen flex items-center justify-center bg-white overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    Research
                  </h2>
                </div>
                <div className="w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light mb-6 sm:mb-8">
                  My research examines the intersection of quantitative
                  marketing, digital platforms, and consumer behavior through
                  rigorous empirical analysis and causal inference
                  methodologies.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {/* Working Papers Overview */}
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Working Papers
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                      Research on algorithmic recommendations in e-commerce,
                      dynamic pricing effects, and consumer learning in digital
                      markets. Combines field experiments, structural modeling,
                      and causal inference techniques.
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                        E-commerce
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                        Dynamic Pricing
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                        Consumer Learning
                      </span>
                    </div>
                  </div>

                  {/* Research Interests */}
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Research Focus
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                      Platform economics, digital marketing algorithms, consumer
                      behavior analysis, and empirical methods for causal
                      inference in marketing contexts.
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="text-center">
                  <a
                    href="/research"
                    className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-white hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium tracking-wide transition-colors rounded-lg whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">View All Research</span>
                    <span className="sm:hidden">Research</span>
                    <svg
                      className="w-3 h-3 ml-1.5 sm:ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Section - Summarized */}
          <section
            id="teaching"
            className="h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    Teaching
                  </h2>
                </div>
                <div className="w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                          Marketing Analytics (MBA)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2023-2024
                        </span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-3 sm:mb-4">
                      Advanced course covering statistical methods, causal
                      inference, and predictive modeling. Conducted lab sessions
                      for 40+ MBA students with focus on R/Python programming.
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                        Causal Inference
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                        A/B Testing
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                        R/Python
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                          Digital Marketing Strategy (MBA)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2022-2023
                        </span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-3 sm:mb-4">
                      MBA course on digital marketing strategies and platform
                      economics. Led case discussions for 60+ students and
                      delivered guest lectures.
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-green-50 text-green-700 text-xs sm:text-sm rounded-full">
                        Digital Strategy
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-green-50 text-green-700 text-xs sm:text-sm rounded-full">
                        Platform Economics
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-green-50 text-green-700 text-xs sm:text-sm rounded-full">
                        Case Analysis
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-2 shadow-lg">
                    <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                      <h4 className="text-base sm:text-lg font-serif font-light text-gray-900 mb-2">
                        Teaching Recognition
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 font-light">
                        Outstanding GSI Award (Spring 2024) • Teaching
                        Excellence Recognition (Fall 2023)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="text-center">
                  <a
                    href="/teaching"
                    className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-2 bg-none hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium tracking-wide transition-colors rounded-lg"
                  >
                    View Teaching Details
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="h-screen flex items-center justify-center bg-white overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-center text-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    Contact
                  </h2>
                </div>
                <div className="w-12 h-px bg-gray-300 mx-auto mb-4 sm:mb-6"></div>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg max-w-2xl mx-auto flex-1 flex flex-col justify-center min-h-0">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-light text-gray-900 mb-3">
                      Email
                    </h3>
                    <div className="w-6 h-px bg-gray-300 mx-auto mb-3"></div>
                    <a
                      href="mailto:mingduo@berkeley.edu"
                      className="text-base sm:text-lg text-gray-600 hover:text-gray-900 transition-colors font-light"
                    >
                      mingduo@berkeley.edu
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-light text-gray-900 mb-3">
                      Office
                    </h3>
                    <div className="w-6 h-px bg-gray-300 mx-auto mb-3"></div>
                    <div className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                      Haas School of Business
                      <br />
                      University of California, Berkeley
                      <br />
                      Berkeley, CA 94720
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <a
                      href="/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium tracking-wide transition-colors rounded-lg inline-flex items-center"
                    >
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      CV
                    </a>
                    <a
                      href="https://linkedin.com/in/mingduo-zhao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 hover:border-gray-400 text-gray-700 text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-12 text-center">
              <p className="text-base text-gray-500">
                © 2025 Mingduo Zhao. Fulfilled by @nociza. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </PasswordProtection>
  );
}
