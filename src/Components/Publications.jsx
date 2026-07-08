import { ExternalLink } from 'lucide-react';
import { eyebrow, heading, gradientText, bodyText, cardBase, fontDisplay, fontMono, btnPrimary } from "./designTokens";

function Publications() {
  const publications = [
    {
      title: "Skin Disease Detection using Vision Transformers",
      journal: "Research Manuscript Under Review",
      authors: "Sahaj Dang",
      c_authors : "Shreya Saxena, Maniya Jain",
      publishDate: "2026",
      abstract: "Conducted research on automated skin disease classification using Vision Transformer (ViT) architectures. The work focuses on deep learning-based image analysis, feature extraction, and improving diagnostic accuracy through advanced computer vision techniques.",
      tech: ["Python", "TensorFlow", "Vision Transformers", "Deep Learning", "Computer Vision"],
      status: "Under Review",
      link: "https://github.com/SahajDang/skin-disease-detection-vit",
    }
  ];

  return (
    <div>
      <p className={eyebrow}>07 — Research</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Exploring <span className={gradientText}>AI for real-world impact</span>
      </h2>

      <div className="space-y-6">
        {publications.map((paper) => (
          <div key={paper.title} className={`${cardBase} p-8`}>
            <h3 className={`${fontDisplay} text-xl font-bold mb-6 text-[#F8F4FF] leading-tight`}>{paper.title}</h3>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 ${fontMono} text-xs`}>
              <div className="flex items-center gap-2 text-[#A69CB9] bg-white/5 px-3 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 bg-[#C29BFF] rounded-full shrink-0" /> {paper.journal}
              </div>
              <div className="flex items-center gap-2 text-[#A69CB9] bg-white/5 px-3 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 bg-[#A56BFF] rounded-full shrink-0" /> {paper.publishDate}
              </div>
            </div>

            <p className={`${bodyText} text-sm mb-4`}>
              <span className="font-semibold text-[#A56BFF]">Author: </span>{paper.authors}
            </p>
            <p className={`${bodyText} text-sm mb-4`}>
              <span className="font-semibold text-[#A56BFF]">Co-Author: </span>{paper.c_authors}
            </p>
            <p className={`${bodyText} text-sm mb-4`}>{paper.abstract}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {paper.tech.map((t) => (
                <span key={t} className="text-[11px] px-3 py-1 rounded-full border border-[#A56BFF]/25 text-[#A56BFF] bg-[#A56BFF]/[0.06]">{t}</span>
              ))}
            </div>

            <p className={`${bodyText} text-sm mb-8`}>
              <span className="font-semibold text-[#A56BFF]">Status:</span> {paper.status}
            </p>

            <a href={paper.link} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Explore More <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
