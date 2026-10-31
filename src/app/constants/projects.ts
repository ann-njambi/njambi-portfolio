// =============================================
// YOUR PROJECTS
// =============================================
// Each entry renders as a collapsible item on the home page and gets its own
// detail page at /projects/<slug>. Every field except name/tagline/description/
// tech/github is optional — delete what you don't need.
//
// Replace the placeholder images (/placeholder-image.png) with your own
// screenshots under public/projects/<your-project>/.

export const PROJECTS = [
  // =============================================
  // Project One
  // =============================================
  {
    name: "BiasharaCredit",
    tagline: "A full-stack loan origination and credit assessment platform for SMEs..",
    overview:
      "Small businesses often struggle to access credit because traditional banks rely on outdated, manual processes. I built a full-stack lending platform that allows SMEs to apply for loans digitally, upload financial documents, and receive credit assessments. The system includes a customer portal for applications and an administrative dashboard for credit officers to review, score, and approve loans replacing manual paperwork with a streamlined digital workflow.",
    description:
      "BiasharaCredit is a full-stack web application designed to streamline the SME lending process. It features a secure customer portal where business owners can submit loan applications, upload supporting documents, and track their approval status. For the lending institution, the platform provides a comprehensive administrative dashboard with automated credit scoring, financial ratio analysis, and status tracking. The system handles role-based authentication, ensuring customers only see their own data while credit officers can manage the entire portfolio.",
    tech: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Python",
    "Django",
    "Django REST Framework",
    "SQLite",
    "JWT Authentication",
    "Recharts",
    ],
    link: "https://example.com",
    github: "https://github.com/ann-njambi/sme-loan-system",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot one",
          caption: "Describe what this screenshot shows.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot two",
          caption: "Another short caption for context.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot three",
          caption: "Captions are optional — remove them if you like.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot four",
          caption: "Add as many gallery images as you need.",
        },
      ],
    },
    features: [
      "Role-based authentication (Credit Officers vs. SME Customers)",
    "Digital loan application with document upload",
    "Automated credit scoring and risk band calculation",
    "Admin dashboard with Recharts data visualization",
    "PDF generation for formal loan agreements",
    "Search and filtering for loan applications",
    ],
    technicalDetails: [
      {
        title: "Architecture Highlight",
        description:
          "Built with a decoupled architecture: a React frontend for the user interface and a Django REST Framework backend for the API and business logic. This separation ensures the platform is fast, scalable, and secure.",
      },
      {
        title: "Data Layer & Security",
        description:
          "Utilizes SQLite for development with Django ORM. Security is enforced using JWT (JSON Web Tokens) to protect API endpoints, ensuring only authorized users can access sensitive financial data.",
      },
      {
        title: "PDF & Document Management",
        description:
          "Implemented server-side PDF generation using ReportLab to dynamically create loan agreements based on approved amounts and interest rates. Customers can upload bank statements and tax returns directly through the portal",
      },
    ],
    challenges: [
      {
        problem: "Ensuring customers couldn't see other applicants' financial data.",
        solution:
          "Implemented strict data filtering at the backend level. The Django API checks the JWT token and filters the database query so a customer only ever receives their own loan records, while Admins receive the full portfolio.",
      },
     
    ],
    metrics: {
   users: "N/A (Internal Tool)",
    uptime: "99.9%",
    loadTime: "< 1s",
    stars: "1+" 
    },
  },

  // =============================================
  // Project Two
  // =============================================
  {
    name: "Project Two",
    tagline: "Another project with a short, punchy tagline.",
    overview:
      "A brief overview of your second project. Mention the inspiration and the core experience you wanted to create.",
    description:
      "A detailed description of Project Two covering its purpose, standout features, and the impact it had on the people who used it.",
    tech: ["React", "Vite", "Firebase", "Tailwind CSS", "Zustand"],
    link: "https://example.com",
    github: "https://github.com/your-github/project-two",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project Two screenshot one",
          caption: "Main dashboard view.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project Two screenshot two",
          caption: "A secondary view or feature.",
        },
      ],
    },
    features: [
      "A standout feature of this project",
      "Real-time updates and sync",
      "Clean, intuitive interface",
      "Works great on mobile",
    ],
    technicalDetails: [
      {
        title: "Real-Time Sync",
        description:
          "Describe how you implemented live updates and kept the UI in sync across clients.",
      },
      {
        title: "State Management",
        description:
          "Explain your approach to managing application state and why you chose it.",
      },
    ],
    challenges: [
      {
        problem: "A meaningful obstacle you overcame.",
        solution: "The technique or trade-off you used to get past it.",
      },
    ],
    // Optional: embed a YouTube demo video on the project page.
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  // =============================================
  // Project Three
  // =============================================
  {
    name: "Project Three",
    tagline: "A smaller side project or experiment.",
    overview:
      "Even small projects belong here. Briefly explain what you made and what you learned from it.",
    description:
      "A concise description of Project Three. Not every project needs metrics or a video — include only the sections that make sense.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com/your-github/project-three",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project Three screenshot",
          caption: "A look at the project in action.",
        },
      ],
    },
    features: [
      "Keep the feature list focused",
      "Highlight what makes it unique",
      "Quality over quantity",
    ],
    challenges: [
      {
        problem: "What was tricky about this one?",
        solution: "How you figured it out.",
      },
    ],
  },
];
