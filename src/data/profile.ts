// ============================================================
// Chenzhe Zhang — Personal Portfolio Data
// ============================================================
// All personal content lives here. Edit this file to update the site.
// ============================================================

// ── Site Metadata ────────────────────────────────────────────
export const site = {
  title: "Chenzhe Zhang — Portfolio",
  description:
    "Chenzhe Zhang is a CMU M.S. student in Civil & Computer Engineering working at the intersection of BIM, construction technology, spatial data, and computational optimization.",
  url: "https://zhangcz03.github.io",
  author: "Chenzhe Zhang",
  email: "chenzhez@andrew.cmu.edu",
} as const;

// ── Navigation ─────────────────────────────────────────────────
export const nav = {
  brand: "Chenzhe Zhang",
  links: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
  ],
} as const;

// ── Hero ───────────────────────────────────────────────────────
export const hero = {
  headline: "Hi, I'm Chenzhe Zhang",
  subhead: "Civil + Computer Engineering @ Carnegie Mellon",
  description:
    "I work at the intersection of BIM, construction technology, spatial data, structural analysis, and computational optimization.",
  statusText: "CMU M.S. · BIM / GIS / Optimization",
  cta: [
    { text: "View Projects", href: "/portfolio", primary: true },
    { text: "Download Resume", href: "/resume", primary: false },
  ],
} as const;

// ── Stats ──────────────────────────────────────────────────────
export const stats = [
  { label: "M.S. @ CMU" },
  { label: "B.S. @ UIUC" },
  { label: "BIM + Construction Tech" },
  { label: "Python + Spatial Analysis" },
] as const;

// ── Projects ───────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Optimization Design of Order Dispatch System",
    description:
      "Python-based simulation and multi-objective routing optimization model evaluating delivery distance, punctuality, cost, and workload fairness.",
    tags: ["Python", "Optimization", "Simulation", "Routing"],
  },
  {
    title: "3D Printed Fiber Concrete + OpenSees",
    description:
      "Designed 3D-printed fiber-reinforced concrete specimens, collected strain data, derived a constitutive model, and implemented it in OpenSees for structural analysis and topology optimization.",
    tags: ["OpenSees", "Structural Analysis", "Concrete", "Research"],
  },
  {
    title: "BIM Visualization for Construction Bidding",
    description:
      "Translated CAD drawings into Revit-based architectural, structural, facade, foundation pit support, and site logistics models for bidding-stage visualization.",
    tags: ["Revit", "AutoCAD", "Lumion", "BIM"],
  },
  {
    title: "Construction Site Coordination",
    description:
      "Compared drawings with field conditions, reviewed design-field discrepancies, and supported construction documentation, progress tracking, and project coordination.",
    tags: ["Construction", "Documentation", "Field Coordination"],
  },
  {
    title: "Regional Spatial Planning Analysis",
    description:
      "Used ArcGIS to analyze spatial, transportation, and land-use data, producing thematic maps for infrastructure planning and route optimization.",
    tags: ["ArcGIS", "Spatial Analysis", "Transportation"],
  },
];

// ── Profile (About page sidebar) ────────────────────────────────
export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "bilibili" | "github" | "email";
}

export const profile = {
  name: "Chenzhe Zhang",
  subtitle: "M.S. Civil & Computer Engineering",
  institution: "Carnegie Mellon University",
  photoPath: "/profile-photo.jpg",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/chenzhezhang/",
    icon: "linkedin",
  },
  {
    label: "Bilibili",
    url: "https://space.bilibili.com/1374100183?spm_id_from=333.1007.0.0",
    icon: "bilibili",
  },
];

// ── About ──────────────────────────────────────────────────────
export const aboutText = `I am pursuing an M.S. in Civil and Computer Engineering at Carnegie Mellon University, building on my undergraduate foundation in Civil Engineering from the University of Illinois Urbana-Champaign, where I focused on structural engineering with a minor in transportation engineering.

My work sits at the intersection of civil infrastructure and computational methods — spanning BIM-driven design, geospatial analysis, structural modeling, and data-driven optimization. I am drawn to workflows that make infrastructure smarter: digital twins, automated design-to-construction pipelines, and simulation-backed decision-making.

During my time at Zhejiang Zhongcheng Construction Group, I worked across both bidding-stage BIM modeling and on-site construction coordination — translating CAD drawings into Revit models, supporting site logistics, and reconciling design-field discrepancies. I have also applied ArcGIS-based spatial analysis to land-use planning, generating thematic maps that informed transportation and infrastructure decisions.

I am interested in pushing the boundaries of how we design, simulate, and deliver the built environment — combining domain knowledge from civil engineering with modern computational tools to build more efficient, resilient, and intelligent infrastructure.`;

// ── Experience ─────────────────────────────────────────────────
export interface Experience {
  dateRange: string;
  title: string;
  institution: string;
  description: string;
}

export const education: Experience[] = [
  {
    dateRange: "Aug 2025 — Dec 2026",
    title: "M.S. in Civil and Computer Engineering",
    institution: "Carnegie Mellon University",
    description:
      "Graduate studies bridging civil infrastructure systems with computation, data analysis, and software engineering.",
  },
  {
    dateRange: "Sep 2021 — Jun 2025",
    title: "B.S. in Civil Engineering",
    institution: "University of Illinois Urbana-Champaign",
    description:
      "Structural engineering major with a minor in transportation engineering. Coursework in structural analysis, BIM, fluid mechanics, transportation systems, and computational methods.",
  },
];

export const work: Experience[] = [
  {
    dateRange: "2023 — 2024",
    title: "Engineering Intern (BIM & Site Coordination)",
    institution: "Zhejiang Zhongcheng Construction Group",
    description:
      "Produced Revit-based bidding models from CAD drawings. Supported on-site construction coordination, documentation, and design-field discrepancy review.",
  },
];

// ── Skills ─────────────────────────────────────────────────────
export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "BIM & Design",
    items: ["Revit", "AutoCAD", "Lumion", "ArcGIS", "OpenSees"],
  },
  {
    category: "Programming & Analysis",
    items: ["Python", "SQL", "PyTorch", "PyQt5", "MATLAB"],
  },
  {
    category: "Civil & Construction",
    items: [
      "BIM Modeling",
      "CAD Interpretation",
      "Construction Documentation",
      "Site Logistics",
      "Foundation Pit Support",
      "Structural Analysis",
    ],
  },
];

// ── Resume Summary ─────────────────────────────────────────────
export const resumeSummary = {
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "M.S. in Civil and Computer Engineering",
      date: "Aug 2025 — Dec 2026",
    },
    {
      school: "University of Illinois Urbana-Champaign",
      degree: "B.S. in Civil Engineering",
      date: "Sep 2021 — Jun 2025",
    },
  ],
  skillGroups,
} as const;
