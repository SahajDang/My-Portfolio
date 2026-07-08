import { Download, ExternalLink } from "lucide-react";
import { eyebrow, heading, gradientText, bodyText, btnPrimary, btnSecondary } from "./designTokens";

function Resume() {
  return (
    <div className="text-center">
      <p className={eyebrow}>03 — Resume</p>
      <h2 className={`${heading} mt-3 mb-4`}>
        The <span className={gradientText}>full record</span>
      </h2>
      <p className={`${bodyText} mb-10 max-w-xl mx-auto`}>
        Experience, skills, and achievements — one document, no scrolling required.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={btnSecondary}>
          <ExternalLink size={18} />
          View Resume
        </a>
        <a href="/resume.pdf" download className={btnPrimary}>
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;