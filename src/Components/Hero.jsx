import { fontDisplay, fontMono, eyebrow, gradientText, btnPrimary, btnSecondary } from "./designTokens";

function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8 ${eyebrow}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A56BFF] animate-pulse" />
          Incoming Digital Specialist Engineer Trainee · Infosys
        </div>

        <h1 className={`${fontDisplay} text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-[0.95] text-[#F8F4FF]`}>
          Sahaj <span className={gradientText}>Dang</span>
        </h1>

        <p className={`${fontMono} text-lg sm:text-xl text-[#A69CB9] mb-3 max-w-2xl mx-auto`}>
          Full Stack Development · DSA · Big Data · Data Science
        </p>

        <p className={`${fontMono} text-sm sm:text-base text-[#C29BFF] mb-14 tracking-wide`}>
          Building scalable software and solving complex problems through technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => scrollToSection("projects")} className={btnPrimary}>
            View My Work
          </button>
          <button onClick={() => scrollToSection("contact")} className={btnSecondary}>
            Let&apos;s Connect
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-[#A69CB9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
export default Hero;
