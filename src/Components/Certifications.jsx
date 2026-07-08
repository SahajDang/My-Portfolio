import { Trophy } from 'lucide-react';
import { eyebrow, heading, gradientText, bodyText, cardBase, fontDisplay, fontMono } from "./designTokens";

function Certifications() {
  const achievements = [
    {
      title: "Flipkart GRID 7.0 Semi-Finalist",
      issuer: "National-Level Engineering Challenge",
      date: "2025",
      description: "Advanced to the Semi-Final Round of Flipkart GRID 7.0, one of India's premier engineering and innovation competitions, competing among thousands of student participants nationwide.",
    },
    {
      title: "GSSoC'25 Mentor",
      issuer: "Open Source Leadership & Mentorship",
      date: "2025",
      description: "Selected as a Mentor for GirlScript Summer of Code 2025, guiding contributors, reviewing pull requests, and supporting collaborative open-source development across community-driven projects.",
    },
  ];

  return (
    <div>
      <p className={eyebrow}>06 — Achievements</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Recognized <span className={gradientText}>through dedication</span>
      </h2>

      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <Trophy size={18} className="text-[#FFB454]" />
          <h3 className={`${fontDisplay} text-xl font-bold text-[#F8F4FF]`}>Selected Highlights</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className={`${cardBase} p-6`}>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-lg font-bold text-[#FFB454]">{a.title}</h4>
                <span className={`${fontMono} text-xs text-[#A69CB9] whitespace-nowrap`}>{a.date}</span>
              </div>
              <p className="text-sm text-[#A69CB9] font-medium mb-2">{a.issuer}</p>
              <p className={`${bodyText} text-sm`}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
