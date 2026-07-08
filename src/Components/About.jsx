import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, fontMono } from "./designTokens";

function About() {
  const skills = [
    { name: "Java" },
    { name: "Python" },
    { name: "C/C++" },
    { name: "Data Structures & Algorithms" },
    { name: "Object-Oriented Programming" },
    { name: "MySQL" },
    { name: "React.js" },
    { name: "JavaScript" },
    { name: "HTML & CSS" },
    { name: "Git & GitHub" },
    { name: "Machine Learning" },
    { name: "Data Analytics" },
    { name: "System Design" },
    { name: "Computer Networks" },
    { name: "DBMS" },
  ];

  const highlights = [
    { title: "Software Engineering", subtitle: "Building reliable, scalable applications with clean and maintainable code" },
    { title: "Problem Solving & DSA", subtitle: "Applying strong algorithmic thinking to solve complex technical challenges" },
    { title: "Full-Stack Development", subtitle: "Developing robust backend systems and responsive modern web applications" },
    { title: "Data-Driven Solutions", subtitle: "Leveraging analytics, machine learning, and data insights to create impactful products" },
  ];

  return (
    <div>
      <p className={eyebrow}>01 — About</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Turning ideas into <span className={gradientText}>software</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className={`${cardBase} p-8`}> 
          <img
            src="/images/photo.jpg"
            alt="Sahaj Dang — Software Engineer"
            loading="lazy"
            className="mx-auto w-40 h-40 rounded-full object-cover mb-6 shadow-lg border-4 border-white/10"
          />
          <p className={`${bodyText} mb-4`}>
            I&apos;m Sahaj Dang, a Computer Science graduate specializing in Data Science and Analytics, passionate about building software that solves real-world problems.
          </p>
          <p className={`${bodyText} mb-4`}>
            My experience spans Java development, full-stack web applications, data analytics, and scalable software solutions. With strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and System Design, I focus on creating reliable, efficient, and user-friendly applications.
          </p>
          
        </div>

        <div className="space-y-3">
          <h3 className={`${fontDisplay} text-xl font-semibold text-[#F8F4FF] mb-2`}>What I Focus On</h3>
          {highlights.map((h) => (
            <div key={h.title} className={`${cardBase} p-4`}>
              <div className={`${fontMono} text-sm font-semibold text-[#A56BFF]`}>{h.title}</div>
              <div className="text-sm text-[#A69CB9] mt-0.5">{h.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className={`${fontDisplay} text-2xl font-bold text-center mb-8 text-[#F8F4FF]`}>Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill.name} className={chip}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
