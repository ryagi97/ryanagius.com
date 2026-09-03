export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [];

export const education: Education[] = [];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'C++'],
  },
  {
    title: 'Computer Vision / ML',
    skills: ['PyTorch', 'OpenCV', 'Detection', 'Tracking', 'Person re-identification'],
  },
  {
    title: 'Edge / Systems',
    skills: ['NVIDIA Jetson', 'DeepStream', 'GStreamer', 'CUDA', 'Multi-camera analytics'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'Computer Vision engineer',
  'builder of applied vision systems',
  'photographer and traveller',
  'sailor and home cook',
];
