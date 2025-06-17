import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="h-screen min-h-[700px] relative flex items-center justify-center hero-bg"
      style={{ backgroundImage: "url(/picture/bg252.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay backdrop-blur-light"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-white/90 shadow-2xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/picture/WechatIMG5527.jpg"
              alt="Mingduo Zhao"
              width={176}
              height={176}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-6xl lg:text-7xl font-bold text-shadow tracking-wide">
            Mingduo Zhao
          </h1>

          <h2
            className="text-3xl lg:text-4xl font-semibold text-secondary text-shadow-sm"
            style={{ fontFamily: "var(--font-noto-serif-sc)" }}
          >
            赵鸣铎
          </h2>

          <div className="space-y-2 mt-8">
            <h3 className="text-2xl lg:text-3xl font-medium text-white/95 text-shadow-sm tracking-wide">
              PhD Candidate in Marketing
            </h3>
            <h3 className="text-xl lg:text-2xl font-normal text-white/90 text-shadow-sm">
              Haas School of Business
            </h3>
            <h3 className="text-xl lg:text-2xl font-normal text-white/90 text-shadow-sm">
              University of California, Berkeley
            </h3>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/80"
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
