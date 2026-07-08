import { fontMono } from "./designTokens";

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className={`${fontMono} text-xs text-[#A69CB9] tracking-wide`}>
          © 2026 Sahaj Dang — Engineering ideas into reality.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
