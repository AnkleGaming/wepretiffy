// src/constants/colors.js
const Colors = {
  // Base backgrounds – soft purples/grays
  bgGray: "bg-purple-50", // very light purple (almost lavender)
  borderGray: "border-purple-200",
  divideGray: "divide-purple-200",

  // Text colors
  textWhite: "text-white",
  textGray: "text-purple-600", // muted purple instead of gray
  textGrayDark: "text-purple-900", // deep purple for main headings
  textMuted: "text-purple-700", // slightly lighter than dark

  // Primary gradients – rich purple → violet
  primaryFrom: "from-purple-600",
  primaryTo: "to-violet-600",
  hoverFrom: "hover:from-purple-700",
  hoverTo: "hover:to-violet-700",
  primaryMain: "purple-600", // use this for solid backgrounds/buttons

  // Alternate gradient set (a bit more playful)
  gradientFrom: "from-fuchsia-600",
  gradientTo: "to-purple-600",

  // Table header – elegant purple accent
  tableHeadBg: "bg-purple-100",
  tableHeadText: "text-purple-700",

  // Status colors (still distinguishable but on-brand)
  pendingBg: "bg-amber-100",
  pendingText: "text-amber-800",
  successBg: "bg-emerald-100",
  successText: "text-emerald-800",

  // Optional extra purple shades you might love
  accentLight: "bg-purple-100",
  accent: "bg-purple-500",
  accentDark: "bg-purple-700",
  accentHover: "hover:bg-purple-600",
};

export default Colors;
