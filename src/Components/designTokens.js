
export const colors = {
  void: "#06050A",         // page background — deep violet night
  panel: "#121126",        // glass panel fill
  panelBorder: "rgba(255,255,255,0.08)",
  moonlight: "#F4ECFF",    // primary accent — soft lavender glow
  earthlight: "#A56BFF",   // secondary accent — vivid purple
  ember: "#F19EDB",        // warm accent, used sparingly for contrast
  starlight: "#F8F4FF",    // primary text
  muted: "#A69CB9",        // secondary text
};

export const fontDisplay = "font-['Space_Grotesk']";
export const fontBody = "font-['IBM_Plex_Sans']";
export const fontMono = "font-['IBM_Plex_Mono']";

export const eyebrow = `${fontMono} uppercase tracking-[0.3em] text-[11px] text-[#A56BFF]`;

export const heading =
  `${fontDisplay} font-bold text-3xl sm:text-4xl md:text-5xl text-[#F8F4FF] tracking-tight`;

export const gradientText =
  "bg-gradient-to-r from-[#F4ECFF] via-[#D8C5FF] to-[#A56BFF] bg-clip-text text-transparent";

export const bodyText = `${fontBody} text-[#C9BEE0] leading-relaxed`;

export const cardBase =
  "bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#A56BFF]/40 transition-colors duration-300";

export const chip =
  `${fontMono} text-[11px] px-3 py-1 rounded-full border border-[#A56BFF]/25 text-[#A56BFF] bg-[#A56BFF]/[0.06]`;

export const btnPrimary =
  `${fontMono} inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-[#06050A] bg-gradient-to-r from-[#F4ECFF] to-[#A56BFF] hover:shadow-[0_0_30px_-5px_rgba(165,107,255,0.5)] hover:scale-[1.03] transition-all duration-300`;

export const btnSecondary =
  `${fontMono} inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-[#A56BFF]/40 text-[#A56BFF] hover:bg-[#A56BFF]/10 hover:scale-[1.03] transition-all duration-300`;

export const link =
  "text-[#A56BFF] hover:text-[#F19EDB] transition-colors duration-300";