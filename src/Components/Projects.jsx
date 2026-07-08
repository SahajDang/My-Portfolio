import { ExternalLink } from 'lucide-react';
import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, link } from "./designTokens";

function Projects() {
  const projects = [
    {
      title: "Online Coding Judge",
      subtitle: "Automated code execution and evaluation platform",
      description: "Built a scalable online coding judge that enables users to write, run, and submit code against predefined test cases with automated evaluation and real-time feedback. Designed backend workflows for code execution and result processing while focusing on reliability and performance.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "Docker", "GitHub"],
      link: null,
      github: "https://github.com/SahajDang/Online-coding-judge",
    },
    {
      title: "Skin Disease Detection using Vision Transformers",
      subtitle: "AI-powered skin disease classification system",
      description: "Developed a deep learning framework using Vision Transformers for automated skin disease classification from medical images. Focused on image preprocessing, model training, and improving classification accuracy for healthcare-focused applications.",
      tech: ["Python", "TensorFlow", "Vision Transformers", "Deep Learning", "Machine Learning", "GitHub"],
      link: null,
      github: "https://github.com/SahajDang/skin-disease-detection-vit",
    },
    {
      title: "FitFusion Admin Panel",
      subtitle: "Fitness management and equipment booking platform",
      description: "Designed and developed an administrative dashboard for managing users, equipment bookings, rentals, and analytics. Built responsive interfaces and streamlined workflows to improve operational efficiency.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vite", "GitHub", "Vercel"],
      link: null,
      github: "https://github.com/SahajDang/Fit_Fusion-Admin",
    },
    {
      title: "LRU Cache System",
      subtitle: "Thread-safe in-memory caching implementation",
      description: "Implemented a thread-safe LRU (Least Recently Used) Cache in Java with O(1) get and put operations using optimized data structures. Focused on performance, concurrency handling, and clean object-oriented design principles.",
      tech: ["Java", "Data Structures", "Algorithms", "Concurrency", "OOP", "GitHub"],
      link: null,
      github: "https://github.com/SahajDang/LRU-Cache-System",
    },
  ];

  return (
    <div>
      <p className={eyebrow}>05 — Projects</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Some things I&apos;ve <span className={gradientText}>built</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className={`${cardBase} p-6 flex flex-col`}>
            <h3 className={`${fontDisplay} text-xl font-bold text-[#F8F4FF]`}>{project.title}</h3>
            <p className="text-[#A56BFF] text-sm font-medium mb-3">{project.subtitle}</p>
            <p className={`${bodyText} text-sm mb-4 flex-grow`}>{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className={chip}>{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-medium ${link}`}>
                  Live <ExternalLink size={14} />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#A69CB9] hover:text-[#F8F4FF] transition-colors">
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
