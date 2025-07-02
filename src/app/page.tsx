"use client";

import { useEffect, useState } from "react";
import PasswordProtection from "@/components/PasswordProtection";
import Navigation from "@/components/Navigation";
// import TopPopup from "@/components/TopPopup";
// import { usePopup } from "@/components/TopPopupProvider";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // const { showPopup } = usePopup();

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
        // Only enable scroll transformation on desktop
        if (!isMobile) {
          // Smoother transition trigger with slight delay
          setIsScrolled(scrollTop > 50);
        } else {
          // On mobile, keep it simple - no complex transformations
          setIsScrolled(scrollTop > 50);
        }

        // Enhanced active section detection
        const sections = [
          "home",
          "about",
          "job-market-paper",
          "working-papers",
          "publish-papers",
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
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // On mobile, account for the simple header height
      const offset = isMobile ? 80 : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
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
    { href: "#working-papers", label: "Working Papers", number: "03", id: "working-papers" },
    { href: "#publish-papers", label: "Publications", number: "04", id: "publish-papers" },
    { href: "#cv", label: "CV", number: "05", id: "cv" },
    { href: "#teaching", label: "Teaching", number: "06", id: "teaching" },
    { href: "#contact", label: "Contact", number: "07", id: "contact" },
  ];

  return (
    <>
    {/* <PasswordProtection> */}
      <Navigation />
      <div
        className="min-h-screen bg-white scroll-smooth"
        style={{ scrollSnapType: isMobile ? "none" : "y mandatory" }}
      >
        {/* Mobile: Simple header layout, Desktop: Complex transformation */}
        {isMobile ? (
          // MOBILE: Simple fixed header that appears on scroll
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
                : "bg-transparent"
            }`}
          >
            {isScrolled && (
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                    <img
                      src="/picture/Lingxi_IMG_13476.png"
                      alt="Mingduo Zhao"
                      className="w-full h-full object-cover scale-140"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-serif font-light text-gray-900 tracking-tight">
                      Mingduo Zhao
                    </h1>
                    <div className="text-xs text-gray-600">Ph.D. Candidate</div>
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
                    <span className="font-serif text-xs">Email</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1pH_bCencAsriJI9ztSAAFlsbuOqLZVuj/view?usp=drive_link"
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
                    <span className="font-serif text-xs">CV</span>
                  </a>
                </div>
              </div>
            )}
          </header>
        ) : (
          // DESKTOP: Keep the original complex transformation
          <section
            className={`fixed inset-0 transition-all duration-1000 ease-out z-10 ${
              isScrolled
                ? "w-64 sm:w-72 lg:w-80 xl:w-96 border-r border-gray-200"
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
                    ? "max-w-none px-2 sm:px-3 lg:px-4"
                    : "text-center px-4 sm:px-6 lg:px-8"
                }`}
                style={{
                  transition:
                    "padding 1200ms cubic-bezier(0.4, 0, 0.2, 1), max-width 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {!isScrolled ? (
                  // Hero layout - desktop only
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Subtle decorative background elements */}
                    <div className="absolute inset-0 opacity-30 md:opacity-40">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-blue-50 to-gray-50 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-br from-gray-50 to-blue-50 rounded-full blur-3xl"></div>
                    </div>

                    {/* Desktop hero layout */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 lg:py-12 xl:py-16 w-full max-w-none">
                      {/* Desktop Grid layout */}
                      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 h-full">
                        {/* Profile section */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
                          <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12">
                            {/* Profile image */}
                            <div className="flex-shrink-0">
                              <div className="relative">
                                <div className="w-64 h-64 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/30 transform hover:scale-105 transition-transform duration-500">
                                  <img
                                    src="/picture/Lingxi_IMG_13476.png"
                                    alt="Mingduo Zhao"
                                    className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-500"
                                  />
                                </div>
                                {/* Decorative accent */}
                                <div className="absolute -bottom-2 -right-2 lg:-bottom-2 lg:-right-2 w-16 h-16 bg-gray-800 rounded-lg opacity-60 -z-10"></div>
                              </div>
                            </div>

                            {/* Name and title */}
                            <div className="flex-1 text-center lg:text-left lg:pt-4">
                              <div className="space-y-6">
                                <div>
                                  <h1 className="text-5xl xl:text-6xl font-serif font-light text-gray-900 leading-tight tracking-tight mb-2">
                                    Mingduo Zhao <br/><span className="text-2xl">(pronounced Ming-dwo Jow)</span>
                                  </h1>
                                  {/* <div className="text-xl text-gray-600 tracking-wide mb-1">
                                    赵鸣铎
                                  </div> */}
                                </div>

                                <div className="space-y-3">
                                  <div className="text-xl text-gray-800 font-light">
                                    Ph.D. Candidate in Economics
                                  </div>
                                  <div className="text-lg text-gray-600 leading-relaxed">
                                    University of California, Berkeley
                                  </div>
                                  <div className="text-lg text-gray-800 leading-relaxed">
                                    I am currently on the <span className="font-bold">job market in Marketing</span> and expect to graduate in May 2026.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Research description */}
                          <div className="max-w-4xl text-center lg:text-left">
                            <div className="w-12 h-px bg-gray-300 mb-6 mx-auto lg:mx-0"></div>
                            <p className="text-lg leading-relaxed text-gray-700 font-light text-justify">
                              My research explores the intersection of{" "}
                              <em className="text-gray-800 font-medium">
                                marketing
                              </em>
                              ,{" "}
                              <em className="text-gray-800 font-medium">
                                economics
                              </em>
                              ,{" "}
                              <em className="text-gray-800 font-medium">
                                computer science
                              </em>
                              , and{" "}
                              <em className="text-gray-800 font-medium">
                                statistics
                              </em>
                              , with a focus on how technological advancements
                              profoundly transform society, both economically
                              and politically.
                            </p>
                          </div>
                        </div>

                        {/* Navigation panel */}
                        <div className="lg:col-span-5 flex flex-col justify-center mt-10">
                          <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-3xl p-8 xl:p-10 shadow-2xl">
                            {/* Navigation menu */}
                            <nav className="space-y-4 mb-8">
                              {navItems.map((item) => 
                               item.id === "cv" ? (
                              // Special behavior for CV
                              <button
                                key={item.href}
                                onClick={() =>
                                  window.open(
                                    "https://drive.google.com/file/d/1pH_bCencAsriJI9ztSAAFlsbuOqLZVuj/view?usp=drive_link",
                                    "_blank"
                                  )
                                }
                                className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-xl hover:bg-white/50 transition-all duration-300 touch-manipulation w-full text-left"
                                >
                                  <div className="flex items-center space-x-4">
                                    <span className="text-sm font-mono text-gray-400 group-hover:text-gray-600 transition-colors">
                                      {item.number}
                                    </span>
                                    <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors tracking-wide">
                                      {item.label}
                                    </span>
                                  </div>
                                  <div className="w-6 h-px bg-gray-300 group-hover:bg-gray-600 group-hover:w-8 transition-all duration-300"></div>
                                </button>
                            ) : (
                              // Default behavior for all other items
                              <button
                                  key={item.href}
                                  onClick={() => scrollToSection(item.id)}
                                  className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-xl hover:bg-white/50 transition-all duration-300 touch-manipulation w-full text-left"
                                >
                                  <div className="flex items-center space-x-4">
                                    <span className="text-sm font-mono text-gray-400 group-hover:text-gray-600 transition-colors">
                                      {item.number}
                                    </span>
                                    <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors tracking-wide">
                                      {item.label}
                                    </span>
                                  </div>
                                  <div className="w-6 h-px bg-gray-300 group-hover:bg-gray-600 group-hover:w-8 transition-all duration-300"></div>
                                </button>
                              ))
                            }
                            </nav>
                          </div>
                        </div>
                      </div>

                      {/* Scroll indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                          <svg
                            className="w-6 h-6 text-gray-400 animate-smooth-bounce"
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
                          <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                            Explore
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Desktop sidebar content
                  <div className="flex flex-col h-[110vh] justify-between py-8 overflow-y-auto max-h-screen">
                    <div className="flex-1 flex flex-col h-[60vh] justify-center min-h-0">
                      <div className="text-center mb-8">
                        <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden shadow-lg mb-6">
                          <img
                            src="/picture/Lingxi_IMG_13476.png"
                            alt="Mingduo Zhao"
                            className="w-full h-full object-cover scale-105 hover:scale-115 transition-transform duration-500"
                          />
                        </div>
                        <h1 className="text-3xl font-serif font-light text-gray-900 mb-2 tracking-tight">
                          Mingduo Zhao <br/><span className="text-xl">(pronounced Ming-dwo Jow)</span>
                        </h1>
                        {/* <div className="text-lg text-gray-600 mb-2 font-light">
                          赵鸣铎
                        </div> */}
                        <div className="text-lg text-gray-700 mb-1 font-light">
                          Ph.D. Candidate in Economics
                        </div>
                        <div className="text-sm text-gray-600 leading-relaxed mb-1">
                          UC Berkeley • Department of Economics
                        </div>
                      </div>
                    </div>

                    {/* Desktop Navigation with highlighting */}
                    <nav className="h-[45vh] px-8 py-1 border-t border-gray-200 flex-shrink-0">
                      <div className="space-y-0.5">
                        {navItems.map((item) => 
                        item.id === "cv" ? (
                          <button
                            key={item.id}
                            onClick={() => window.open(
                              "https://drive.google.com/file/d/1pH_bCencAsriJI9ztSAAFlsbuOqLZVuj/view?usp=drive_link",
                              "_blank"
                            )}
                            className={`group flex items-center justify-between w-full px-3 py-0.5 rounded-lg transition-all duration-300 text-left ${
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
                              <span className="text-sm font-medium tracking-wide">
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
                        ):(
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`group flex items-center justify-between w-full px-3 py-0.5 rounded-lg transition-all duration-300 text-left ${
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
                              <span className="text-sm font-medium tracking-wide">
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
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Mobile: Simple full-width hero section */}
        {isMobile && (
          <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-white px-4 py-8"
            style={{
              backgroundImage: "url(/picture/bg252.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full max-w-lg mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              {/* Mobile hero content */}
              <div className="space-y-6">
                {/* Profile image */}
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/picture/Lingxi_IMG_13476.png"
                    alt="Mingduo Zhao"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>

                {/* Name and title */}
                <div>
                  <h1 className="text-3xl font-serif font-light text-gray-900 mb-2 tracking-tight">
                    Mingduo Zhao <br/> <span className="text-base">(pronounced Ming-dwo Jow)</span>
                  </h1>
                  {/* <div className="text-base text-gray-600 mb-1">赵鸣铎</div> */}
                  <div className="text-lg text-gray-800 font-light mb-4">
                    Ph.D. Candidate in Economics
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    University of California, Berkeley
                  </div>
                  <div className="text-lg text-gray-800 leading-relaxed">
                    I am currently on the <span className="font-bold">job market in Marketing</span> and expect to graduate in May 2026.
                  </div>
                </div>

                {/* Research description */}
                <div>
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-4"></div>
                  <p className="text-sm leading-relaxed text-gray-700 font-light text-justify">
                    My research explores the intersection of{" "}
                              <em className="text-gray-800 font-medium">
                                marketing
                              </em>
                              ,{" "}
                              <em className="text-gray-800 font-medium">
                                economics
                              </em>
                              ,{" "}
                              <em className="text-gray-800 font-medium">
                                computer science
                              </em>
                              , and{" "}
                              <em className="text-gray-800 font-medium">
                                statistics
                              </em>
                              , with a focus on how technological advancements
                              profoundly transform society, both economically
                              and politically.
                  </p>
                </div>

                {/* Mobile navigation */}
                <div className="space-y-2">
                  {navItems.map((item) => item.id=='cv' ? (
                    <button
                      key={item.href}
                      onClick={() => window.open("https://drive.google.com/file/d/1pH_bCencAsriJI9ztSAAFlsbuOqLZVuj/view?usp=drive_link","_blank")}
                      className="flex items-center justify-between w-full py-3 px-4 bg-white/40 hover:bg-white/60 rounded-lg transition-all duration-300 touch-manipulation"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-gray-400">
                          {item.number}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400"
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
                    </button>
                  ): (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center justify-between w-full py-3 px-4 bg-white/40 hover:bg-white/60 rounded-lg transition-all duration-300 touch-manipulation"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-gray-400">
                          {item.number}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400"
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
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Content - Simplified margin handling */}
        <div
          className={`${
            isMobile
              ? "pt-0" // No complex margins on mobile
              : 
              isScrolled
              ? "ml-64 sm:ml-72 lg:ml-80 xl:ml-96" // Desktop sidebar margins
              : "ml-0"
          }`}
          style={{
            transition: isMobile
              ? "none"
              : "margin 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: isMobile ? "auto" : "margin-left",
          }}
        >
          {/* Desktop spacer for initial scroll trigger */}
          {!isMobile && (
            <div
              className="h-screen"
              
            ></div>
          )}

          {/* About Section - Mobile optimized */}
          <section
            id="about"
            className="scroll-mt-24 flex items-center justify-center bg-white overflow-hidden px-4 sm:px-6 lg:px-8"
            
          >
            <div className="max-w-4xl mx-auto py-8 sm:py-12 lg:py-16 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <div className="flex items-center w-full space-x-3 mb-4">
                  {/* <div className="w-full"></div> */}
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    About
                  </h2>
                </div>
                <div className="w-8 sm:w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light mb-6 sm:mb-8 lg:mb-10">
                  I am a Ph.D. candidate in Economics at the University of California, Berkeley. I am currently on the job market in Marketing. My research explores the intersection of{" "}
                              <em className="text-gray-800 font-medium">
                                marketing
                              </em>
                              ,{" "}
                              <em className="text-gray-800 font-medium">
                                economics
                              </em>
                              ,{" "}
                              <em className="text-gray-800 font-medium">
                                computer science
                              </em>
                              , and{" "}
                              <em className="text-gray-800 font-medium">
                                statistics
                              </em>
                              , with
 a focus on how technological advancements profoundly transform society, both economically and politically.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
                      Topics
                    </h3>
                    <div className="w-6 sm:w-8 h-px bg-gray-300 mb-4 sm:mb-6"></div>
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-light">
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Social Media
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Recommender Systems
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Digital Platforms
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        User Generated Content
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Human
 Computer/AI Interaction (HCI/HAII)
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Political Economics
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
                      Methodologies
                    </h3>
                    <div className="w-6 sm:w-8 h-px bg-gray-300 mb-4 sm:mb-6"></div>
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-light">
                      {[
                        "Machine Learning",
                        "Causal Inference",
                        "Policy Learning",
                        "Structural Model",
                        "Field/Lab Experiment",
                        "Deep Learning",
                        "Natural Language Processing (NLP)"
                      ].map((skill) => (
                        <li className="flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Market Paper Section - Responsive */}
          <section
            id="job-market-paper"
            className="flex items-center justify-center bg-gray-50 overflow-hidden"
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
                   (sole author)
                  </div>
                </div>

                <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-4 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                    Recommender systems shape how people consume news, possibly reinforcing political polarization. We run two field experiments to identify how user preferences and algorithms interact to amplify partisan news consumption. In the first study, 2,065 U.S. participants use blank Google accounts and a browser extension to track users' activities on Google News. The first-round recommendations are exogenous, allowing us to show that ideologically aligned content draws more clicks. A second experiment uses bots to randomly click on articles, revealing that each click leads to more aligned content. These two pieces of causal evidence establish a feedback loop between user preference and algorithmic recommendations. We also find in the field study that, after interacting with the recommender system, people's level of polarization increases. A structural model combining a discrete choice model (demand side) with a multi-armed bandit algorithm (supply side) confirms this positive-feedback mechanism. The model is then used to simulate a counterfactual "ideology-blind" recommendation policy that ignores political slant when curating content. While this policy reduces polarization, it comes at the cost of likely lower engagement. Overall, the findings provide causal evidence that personalized algorithms reinforce partisan consumption and exacerbate polarization. They also uncover a fundamental trade-off between mitigating polarization and sustaining engagement, which offers important insights for both platform owners and policymakers.
                  </p>
                </div>

                <div className="border-t border-gray-100">
                  <div className="flex flex-wrap gap-7">
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section - Summarized */}
          <section
            id="working-papers"
            className=" flex items-center justify-center bg-white overflow-hidden"
            
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    Working Papers
                  </h2>
                </div>
                <div className="w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {/* Working Papers Overview */}
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Game Against AI
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                      (with Yahu Cong)
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6">
                      <li>Under Review at <em className="font-bold">Marketing Science</em></li>
                    </ul>
                  <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-2 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                    AI systems for dynamic pricing, targeted promotions, and individualized recommendations
 typically assume that observed consumer behavior truthfully reveals underlying preferences. However,
 when consumers recognize that their actions influence future targeting decisions, behavior becomes
 strategic rather than preference-revealing, undermining the validity of standard machine learning
based targeting. In order to address this challenge, we introduce Structural Transfer Learning (STL),
 a new framework that incorporates structural economic modeling into machine learning pipelines to
 account for strategic responses induced by policy interventions. STL constructs policy dependent in
stance weights that adjust for endogenous domain shifts, enabling firms to learn targeting policies that
 remain effective even when consumers actively game the system. Furthermore, we demonstrate the
 practical value of STL through a stylized online experiment in a consumer research setting. While
 simplified, the design captures a core strategic response common to many personalization environments, where targeting rules shape behavior. In this setting, naive behavioral targeting rules lead to
 substantial misallocation of incentives. Applying STL improves expected profits by up to 35% relative
 to the naive machine learning benchmark that ignores strategic responses, depending on the relative
 cost of incentives. These findings highlight the need for a fundamental shift in firms’ personalization
 strategies-from solely optimizing predictive models to designing incentive mechanisms that are robust
 to strategic consumer behavior.
                  </p>
                </div>
                  </div>

                <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Unmasking the Deception: The Interplay between Fake Reviews, Ratings Discrepancy,
 and Consumer Demand
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                     (with Yunhao Huang and J. Miguel Villas-Boas)
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6">
                      <li>Under Review at <em className="font-bold">Journal of Marketing Research</em></li>
                    </ul>
                  <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-2 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                     In online marketplaces, consumers rely on reviews to make informed purchase decisions,
 making the presence of fake reviews detrimental. Previous literature implies that products with fake
 reviews can display some patterns in review distribution, such as a higher discrepancy in ratings.
 Consumers might take this pattern into account when making their purchase decisions. In this paper,
 we explore the interplay between fake reviews and ratings discrepancy, and their impact on consumer
 demand, while controlling for average product ratings. First, using a data set with fake review labels,
 we find that product ratings discrepancy is positively correlated with the probability that the product
 has fake reviews. Second, through an identification strategy exploiting ratings discrepancy changes due
 to rating distribution rounding, we find evidence consistent with a negative causal impact of ratings
 discrepancy on consumer demand. Then, we conduct two experiments to establish and quantify the
 mechanism of the impact of ratings discrepancy on consumer demand through consumer suspicion of
 fake reviews. The first experiment shows that higher ratings discrepancy increases consumer suspicion
 of fake reviews, and the second experiment shows that heightened suspicion reduces consumer willingness to pay. Together, these findings reveal that consumers use ratings discrepancies as a signal of fake
 reviews, and this suspicion impacts their purchase decisions. The findings highlight the importance of
 understanding the relationship between fake reviews, ratings discrepancies, and consumer demand in
 online marketplaces.
                  </p>
                </div>
                  </div>

                <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Identity-Based Bias, Algorithm Bias, and Self-Censorship in Online Reviews
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                      (sole author)
                    </p>
                  <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-2 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                    Are individuals from marginalized groups perceived as less persuasive? Does this perception
 lead to their underrepresentation in visible, influential roles? Does it also contribute to their reluctance to share their views? These are important questions that require further investigation. Amazon
 reviews provide a valuable and quantifiable context to explore these questions. This paper investigates
 how the perceived identity of reviewers influences helpfulness votes, the ranking of their reviews, and
 their willingness to post new reviews on Amazon. Utilizing a data set of over 1.8 million reviews, we
 apply advanced natural language processing and computer vision tools to infer the gender and ethnicity
 of reviewers based on their user aliases and avatars. Combined with experimental data, our analysis
 shows causal evidence that reviews perceived as authored by women, non-binary individuals, or ethnic
 minorities are rated as less helpful than those associated with men or white individuals. Furthermore,
 we show that Amazon’s review ranking algorithm amplifies initial disparities in helpfulness recognition.
 Because reviews from marginalized groups receive fewer votes, they are ranked lower and receive less
 exposure, which in turn leads to even fewer votes-creating a self-reinforcing loop that perpetuates the
 underrepresentation of marginalized voices. We also find evidence of self-censorship: reviewers are less
 willing to continue contributing after receiving fewer helpfulness votes on their previous reviews. To
 address these disparities, we propose two platform-level interventions-identity blind review displays
 and affirmative action mechanisms within the review ranking algorithm. To evaluate their impact, we
 further estimate a structural model that captures both the supply and demand sides of the review
 ”market” to assess the welfare implications of these interventions.
                  </p>
                </div>
                  </div>

                <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      From Fame to Office: Electoral Advantage of Political Influencers
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                      (with Ganesh Iyer and Yi Yu)
                    </p>
                  <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-2 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                    In recent years, numerous political candidates have achieved electoral success after first
 becoming well-known as influencers in non-political fields. Famous examples include Donald Trump,
 Ronald Reagan, Arnold Schwarzenegger, and others. This study explores the relationship between
 one’s fame as an influencer and their performance in U.S. gubernatorial elections from 1865 to 2020.
 With a dataset of 3,942 candidates and their Wikipedia biographies, we use Large Language Models
 (LLMs) to identify influencers as individuals who achieved public prominence through roles such as
 entrepreneurs, professional experts, or athletes before entering politics. The findings reveal that influencer candidates hold a significant and substantial advantage and in some cases are 20% more likely
 to win governor elections. This effect is particularly pronounced in three cases: Republican candidates
 in general, especially those running in swing states, and individuals making their first run for office
 and/or lacking prior experience as a governor. As is common in much of the existing literature in
 this field, establishing causality presents a common challenge. To address this, we conduct a voting
 experiment with approximately 1,800 participants. The results show that the estimated advantage of
 being an influencer closely aligns with findings from the observational analysis, reinforcing the causal
 interpretation. This research provides important insights into the dynamics of American democracy,
 indicating that public recognition and celebrity status can serve as pathways to electoral success.
                  </p>
                </div>
                  </div>


                <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Ownership Consolidation and Performance of Earned Media when Building Political
 Brands
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                      (with Hulya Eraslan, Przemyslaw Jeziorski, and Gizem Kosar)
                    </p>
                  <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-2 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                    This study examines how media ownership consolidation influences the effectiveness of earned
 media in shaping political brands in U.S. mayoral elections. Using data from over 300 local radio markets between 1945 and 2006, we link radio station ownership records and news programming to local
 election outcomes. We find that increased market concentration strengthens the re-election prospects
 of incumbent mayors while hindering the performance of challengers. The effect of increased concentration is primarily driven by a reduction in the number of news-producing stations, and it dispro
portionately benefits lower-quality incumbents. We theoretically model this phenomenon within an
 oligopoly framework, demonstrating how ownership structure affects news quality, and ultimately, electoral outcomes. To address potential endogeneity in market structure, we leverage a novel instrument
 based on multi-market mergers. From both managerial and policy perspectives, our results underscore
 the broader consequences of media consolidation: it not only weakens the informative performance of
 earned media but also lowers the quality of decision-making, which poses serious risks to the electoral
 process, as it may prevent the most qualified candidates from winning. Additionally, for firms, more
 concentrated media ownership reduces opportunities for visibility through earned media, diminishing
 the impact of superior offerings and limiting entry of new products.
                  </p>
                </div>
                  </div>


                </div>

              </div>
            </div>
          </section>

          {/* Publish Papers Section - Summarized */}
          <section
            id="publish-papers"
            className=" flex items-center justify-center bg-white overflow-hidden"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                    Publications
                  </h2>
                </div>
                <div className="w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center min-h-0">
                {/* <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light mb-6 sm:mb-8">
                  My research examines the intersection of quantitative
                  marketing, digital platforms, and consumer behavior through
                  rigorous empirical analysis and causal inference
                  methodologies.
                </p> */}

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {/* Publish Papers Overview */}
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-3 sm:mb-4">
                      Longitudinal Targeted Minimum Loss-based Estimation with Temporal-Difference Heterogeneous Transformer
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4">
                      (with Yi Li, Yuxuan Li, Sky Qiu, Toru Shirakawa, Yulun Wu, Hiroyasu Iso, and Mark J. Van Der Laan) 
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6">
                      <li>Proceedings of the 41st International Conference on Machine Learning (ICML 2024)</li>
                      <li>A+ conference as ranked by CORE (Computing Research and Education)</li>
                      <li>Peer-reviewed with 27.5% acceptance rate</li>
                    </ul>
                    <div className="mb-8 sm:mb-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-bold mb-2 sm:mb-6">
                    Abstract
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 sm:mb-6 text-justify">
                    We propose Deep Longitudinal Targeted Minimum Loss-based Estimation (Deep LTMLE),
 a novel approach to estimate the counterfactual mean of outcome under dynamic treatment policies
 in longitudinal problem settings. Our approach utilizes a transformer architecture with heterogeneous
 type embedding trained using temporal-difference learning. After obtaining an initial estimate using
 the transformer, following the targeted minimum loss-based likelihood estimation (TMLE) framework,
 we statistically corrected for the bias commonly associated with machine learning algorithms. Furthermore, our method also facilitates statistical inference by enabling the provision of 95% confidence
 intervals grounded in asymptotic statistical theory. Simulation results demonstrate our method’s superior performance over existing approaches, particularly in complex, long time-horizon scenarios. It
 remains effective in small-sample, short-duration contexts, matching the performance of asymptotically efficient estimators. To demonstrate our method in practice, we applied our method to estimate
 counterfactual mean outcomes for standard versus intensive blood pressure management strategies in
 a real-world cardiovascular epidemiology cohort study.
                  </p>
                </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CV Section - Summarized */}
          {/* <section
            id="cv"
            className="h-screen flex items-center justify-center bg-white overflow-hidden"
            
            onClick={() => window.open("https://drive.google.com/file/d/1pH_bCencAsriJI9ztSAAFlsbuOqLZVuj/view?usp=drive_link", "_blank")}
          >
          
          </section> */}

          {/* Teaching Section - Summarized */}
          <section
            id="teaching"
            className=" flex items-center justify-center bg-gray-50 overflow-hidden"
            
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
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                          Industrial Organization (undergraduate)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2024
                        </span>
                      </div>
                    </div>
                    {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-3 sm:mb-4">
                      Advanced course covering statistical methods, causal
                      inference, and predictive modeling. Conducted lab sessions
                      for 40+ MBA students with focus on R/Python programming.
                    </p> */}
                    {/* <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                        Causal Inference
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                        A/B Testing
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                        R/Python
                      </span>
                    </div> */}
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Behavioral Economics (undergraduate)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2024
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Financial Economics (undergraduate)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Game Theory (undergraduate)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Econometrics (undergraduate)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Econometrics (Ph.D.)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Econometrics (Ph.D.)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-gray-900 mb-1 sm:mb-0 sm:mr-4">
                         Econometrics (Ph.D.)
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 font-light flex-shrink-0">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-2 shadow-lg">
                    <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                      <h4 className="text-base sm:text-lg font-serif font-light text-gray-900 mb-2">
                        Teaching Recognition
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 font-light">
                        Outstanding GSI Award (Spring 2024) • Teaching
                        Excellence Recognition (Fall 2023)
                      </p>
                    </div>
                  </div> */}
                </div>

                {/* Read More Button */}
                {/* <div className="text-center">
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
                </div> */}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-white overflow-y-auto"
            
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col justify-between text-center">
              <div></div> {/* Spacer for centering */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-start space-x-3 mb-4">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 tracking-tight">
                      Contact
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gray-300 mb-4 sm:mb-6"></div>
                </div>

                <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg max-w-2xl mx-auto">
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

                    {/* <div>
                      <h3 className="text-lg sm:text-xl font-serif font-light text-gray-900 mb-3">
                        Office
                      </h3>
                      <div className="w-6 h-px bg-gray-300 mx-auto mb-3"></div>
                      <div className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                        Department of Economics
                        <br />
                        University of California, Berkeley
                        <br />
                        Berkeley, CA 94720
                      </div>
                    </div> */}

                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                      {/* <a
                        href="https://drive.google.com/file/d/1pH_bCencAsriJI9ztSAAFlsbuOqLZVuj/view?usp=drive_link"
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
                      </a> */}
                      <a
                        href="https://www.linkedin.com/in/mingduo-zhao3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 hover:border-gray-400 text-gray-700 text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors rounded-lg text-lg sm:text-xl font-serif font-light text-gray-900"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer integrated into contact section */}
              <div className="mt-7 sm:mt-5 pt-2 border-t border-gray-200">
                <p className="text-sm text-gray-400">
                  © 2025 Mingduo Zhao. Fulfilled by{" "}
                  <a
                    href="https://www.nociza.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 underline transition-colors"
                  >
                    @nociza
                  </a>
                  . All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    {/* </PasswordProtection> */}
    </>
  );
}
