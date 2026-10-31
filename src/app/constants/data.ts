// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================
// Almost everything on the site is driven from the constants below.
// Replace the placeholder values with your own details.

const DOMAIN = "yourdomain.com";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Ann Njambi",
  title: "Full Stack Developer & Data Scientist",
  location: "City, India",
  email: "jahmbyanna@g.com",
  description: [
    "Hey there! I'm a Full Stack Developer and Data Scientist who loves building products that people actually use. I work across the entire stack from clean frontends and solid backends to machine learning models that turn data into real decisions. Right now I'm focused on shipping intelligent, end-to-end applications and deepening my work in MLOps and scalable data systems.",
   
  ],
 profileImage: "/placeholder-avatar.png",
profileGif: "/placeholder-avatar.png",
};

export const USER_NAMES = {
  githubUsername: "ann-njambi",
  linkedinUsername: "your-linkedin",
  twitterUsername: "your-twitter",
  peerlistUsername: "your-peerlist",
  instagramUsername: "ann_njambii",
  // cal.com username + event slug used by the "schedule a meeting" button
  calUsername: "your-cal-username",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  peerlist: `https://peerlist.io/${USER_NAMES.peerlistUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: "/resume.pdf",
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

// Contact form submission endpoint (used by the "send a message" form).
// Create a free form at https://formspree.io/forms and paste your URL here.
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

// Skill icons shown in the "technical skills" section.
// Make this YOUR tech stack: add the ones you use, remove the ones you don't.
// Each entry is a https://skillicons.dev slug — browse that site for all
// available icons (e.g. "docker", "aws", "go", "rust", "kubernetes", ...).
export const SKILLS = [
  // Frontend
  "python",
  "typescript",
  "javascript",
  "react",
  "nextjs",
  "nodejs",
  "postgresql",
  "sql",
  "pandas",
  "numpy",
  "scikitlearn",
  "pytorch",
  "tensorflow",
  "git",
  "docker",
];

export const EXPERIENCE = [
  {
    company: "E&M",
    companyLink: "https://www.emtechhouse.co.ke/en",
    logo: "/placeholder-logo.png",
    role: "Software Developer",
    period: "Jan 2024 - Present",
    location: "Nairobi, Kenya",
    description:
      "I shipped full-stack products end-to-end from first prototype to production platforms — building the core features customers relied on daily. I delivered faster, more reliable releases and improved application performance, giving the business software it could scale on.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Afrisol Technologies",
    companyLink: "https://www.afrisoltech.com/",
    logo: "/placeholder-logo.png",
    role: "Frontend Developer Intern",
    period: "Jun 2023 - Dec 2023",
    location: "Remote",
    description:
      "Built responsive, reusable UI components for production web apps and translated designs into clean frontend code. Improved performance and fixed bugs, helping the team ship features faster.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Catholic University Of Eastern Africa",
    institutionLink: "https://cuea.edu/",
    period: "2023 - 2026",
    score: "3.5 CGPA",
  },
];

export const TESTIMONIALS = [
  {
    name: "Kago Dorcas",
    role: "CTO @ E&M",
    content:
      "She moves comfortably across the whole stack building clean, responsive interfaces in React and Next.js, then backing them with solid Node.js APIs and well-structured PostgreSQL. Reliable, fast, and someone who genuinely cares about the outcome.",
  },
  {
    name: "John Mugo",
    role: "Engineering Manager @ ",
    content:
      "Collaborating with her on frontend initiatives was highly effective — she communicates clearly, iterates efficiently, and produces well structured UI code that is straightforward to maintain and extend.",
  },
  
];
