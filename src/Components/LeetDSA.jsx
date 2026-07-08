import { eyebrow, heading, gradientText, fontMono, cardBase, btnPrimary } from "./designTokens";

function LeetCode() {
  const stats = [
    { label: "Problems Solved", value: "401+" },
    { label: "Global Rank", value: "301K" },
    { label: "Core Strength", value: "DSA" },
    { label: "Growth Mindset", value: "Consistency" },
  ];

  return (
    <div>
      <p className={eyebrow}>04 — Problem Solving</p>
      <h2 className={`${heading} mt-3 mb-4`}>
        <span className={gradientText}>Sharpened through practice</span>
      </h2>
      <p className="text-[#A69CB9] mb-10">
        Solving problems has become a daily habit that strengthens my analytical thinking and software engineering fundamentals. I enjoy breaking down complex challenges into efficient and elegant solutions.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`${cardBase} p-4 text-center`}>
            <p className={`${fontMono} text-2xl font-bold text-[#A56BFF]`}>{stat.value}</p>
            <p className="text-[#A69CB9] text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={`${cardBase} p-8`}>
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full flex justify-center overflow-hidden rounded-xl">
            <img
              src="https://leetcard.jacoblin.cool/sahajdang?ext=heatmap"
              alt="LeetCode Stats"
              className="w-full max-w-2xl rounded-lg"
            />
          </div>
          <a
            href="https://leetcode.com/sahajdang"
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            View Full Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeetCode;
