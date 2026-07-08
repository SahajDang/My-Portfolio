import { useState, useEffect, useRef } from "react";
import { fontDisplay, fontMono } from "./designTokens";

function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const pendingSectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50;
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);

        if (pendingSectionRef.current) {
          const sectionId = pendingSectionRef.current;
          pendingSectionRef.current = null;
          requestAnimationFrame(() => scrollToSection(sectionId));
        }
      };
    }
  }, [isMenuOpen, scrollToSection]);

  const navBg = scrolled
    ? "bg-[#121126]/25 backdrop-blur-xl border-b border-white/10"
    : "bg-transparent";

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "leetcode", label: "LeetCode" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Achievements" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" }
  ];

  const handleDesktopClick = (id) => scrollToSection(id);

  const handleMobileClick = (id) => {
    pendingSectionRef.current = id;
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={`${fontDisplay} text-xl font-bold text-[#F8F4FF] hover:text-[#A56BFF] transition-colors duration-300 flex items-center gap-3`}
            aria-label="Go to home"
          >
            <img src="/images/photo.jpg" alt="Sahaj logo" className="w-8 h-8 rounded-full object-cover" loading="lazy" />
            <span>Sahaj</span>
          </button>

          <div className={`hidden md:flex space-x-7 ${fontMono} text-sm`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleDesktopClick(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#A56BFF]" : "text-[#A69CB9] hover:text-[#F8F4FF]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#A56BFF]" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#A69CB9] hover:text-[#A56BFF] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed left-4 right-4 transition-all duration-300 origin-top ${
          isMenuOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        style={{ top: "72px" }}
      >
        <div
          className={`py-2 space-y-1 bg-[#121126]/95 backdrop-blur-md rounded-2xl border border-white/10 ${fontMono} text-sm overflow-y-auto overscroll-contain`}
          style={{
            maxHeight: "calc(100dvh - 100px)",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMobileClick(item.id)}
              className={`block w-full text-left px-5 py-3.5 transition-colors rounded-lg ${
                activeSection === item.id ? "text-[#A56BFF] bg-white/5" : "text-[#A69CB9] hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navigation;