import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, fontMono } from "./designTokens";

const experiences = [
  {
    id: 1,
    role: "Software Development & Technical Projects",
    company: "2022 — 2026",
    duration: "Academic & Project Experience",
    description: [
      "Developed full-stack web applications, machine learning solutions, and data-driven platforms using modern technologies.",
      "Built projects spanning recommendation systems, sales forecasting, analytics dashboards, and web-based management systems.",
      "Strengthened problem-solving and software engineering skills through 400+ LeetCode problems, hackathons, and open-source contributions.",
      "Focused on writing clean, maintainable code while continuously learning new technologies and development practices.",
    ],
    skills: ["Java", "Python", "React", "MySQL", "Machine Learning", "DSA", "Git", "System Design"],
  },
];

function Experience() {
  return (
    <div>
      <p className={eyebrow}>02 — Experience</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        <span className={gradientText}>Code. Learn. Build.</span>
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className={`${cardBase} p-8`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`${fontDisplay} text-xl font-bold text-[#F8F4FF]`}>{exp.role}</h3>
                  <span className={chip}>Current</span>
                </div>
                <p className="text-[#A56BFF] font-semibold text-lg">{exp.company}</p>
              </div>
              <span className={`${fontMono} text-[#A69CB9] text-sm whitespace-nowrap`}>{exp.duration}</span>
            </div>

            <ul className="space-y-2 mb-6">
              {exp.description.map((point, i) => (
                <li key={i} className={`${bodyText} flex items-start gap-2`}>
                  <span className="text-[#A56BFF] mt-1.5 shrink-0">▸</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {exp.skills.map((skill) => (
                <span key={skill} className={chip}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
