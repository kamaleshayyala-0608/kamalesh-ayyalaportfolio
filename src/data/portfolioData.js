export const portfolioData = {
  brand: "KAMALESH AYYALA",
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Let's connect", href: "#contact", className: "nav-contact" }
  ],
  hero: {
    status: "OPEN TO OPPORTUNITIES",
    location: "INDIA",
    headingLine1: "Building useful things",
    headingLine2Prefix: "with ",
    headingLine2Gradient: "AI & code.",
    name: "Kamalesh Ayyala",
    lede: "I'm Kamalesh Ayyala — an AI & Python Full Stack Developer focused on turning ideas into practical, data-driven applications.",
    buttons: [
      { label: "Explore my work", href: "#projects", className: "button button-primary" },
      { label: "Get in touch", href: "#contact", className: "button button-quiet" }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/kamaleshayyala-0608", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ayyala-kamalesh", external: true },
      { label: "Email", href: "mailto:kamaleshayyala@gmail.com", external: false }
    ],
    portrait: "assets/kamalesh-profile.png",
    caption: "Curious mind. Practical builder.",
    bottomLeft: "SCROLL TO EXPLORE",
    bottomRight: "01 / 06"
  },
  about: {
    index: "01 — ABOUT",
    heading: ["Curiosity meets", "engineering."],
    main: [
      "I enjoy building software that makes complex tasks easier — from document-grounded AI assistants to full-stack workflow tools and computer-vision applications.",
      "My background combines Artificial Intelligence and Data Science with practical application development. I work across Python, machine learning, data analysis, APIs, and modern web interfaces, and I like learning by building and improving real projects."
    ],
    link: { label: "See selected projects", href: "#projects" },
    facts: [
      { number: "AI", label: "Generative AI · RAG · Computer Vision" },
      { number: "WEB", label: "Python backend · React · REST APIs" },
      { number: "DATA", label: "Analysis · Visualization · ML" }
    ]
  },
  skills: {
    index: "02 — TOOLKIT",
    heading: ["Tools I use to", "make ideas real."],
    cards: [
      { symbol: "⌘", count: "01", title: "Programming", tags: ["Python", "SQL", "JavaScript", "HTML", "CSS"] },
      { symbol: "▧", count: "02", title: "Frameworks", tags: ["Django", "Flask", "React", "Streamlit", "LangChain"] },
      { symbol: "✳", count: "03", title: "AI & Data", tags: ["Machine Learning", "Generative AI", "RAG", "OpenCV", "YOLOv8", "Pandas", "NumPy", "Scikit-learn"] },
      { symbol: "⌁", count: "04", title: "Platforms & Concepts", tags: ["MySQL", "ChromaDB", "Ollama", "Git & GitHub", "REST APIs", "OOP", "Data Visualization"] }
    ],
    note: "Technology list is based on the skills stated in the supplied resumes."
  },
  projects: {
    index: "03 — SELECTED WORK",
    heading: ["Projects with a", "purpose."],
    githubLink: { label: "Browse GitHub", href: "https://github.com/kamaleshayyala-0608" },
    note: "Project descriptions reflect your resumes. Repository links currently point to your GitHub profile; update each link to its exact repository URL after confirming the matching public repositories.",
    items: [
      {
        featured: true,
        artClass: "art-rag",
        artLabel: "GENERATIVE AI",
        meta: ["01 / AI APPLICATION", "STREAMLIT"],
        title: "Agentic RAG Assistant",
        description: "A multi-agent document question-answering application designed to ground responses in uploaded documents. The resume describes PDF ingestion, chunking, embeddings, vector storage, semantic retrieval, and Retrieval, Answer, and Verification agents.",
        tags: ["LangChain", "ChromaDB", "HuggingFace", "Streamlit"],
        link: { href: "https://github.com/kamaleshayyala-0608", label: "Explore repository" }
      },
      {
        featured: false,
        artClass: "art-ticket",
        artLabel: "FULL STACK",
        meta: ["02 / WEB PLATFORM", "REACT + DJANGO"],
        title: "Enterprise Ticket Management",
        description: "A workflow platform with JWT authentication, role-based access, ticket assignment and escalation, approval and closure flows, REST APIs, SLA tracking, notifications, and audit logging.",
        tags: ["React", "Django REST", "MySQL", "JWT"],
        link: { href: "https://github.com/kamaleshayyala-0608", label: "Explore repository" }
      },
      {
        featured: false,
        artClass: "art-vision",
        artLabel: "COMPUTER VISION",
        meta: ["03 / CV SYSTEM", "YOLOv8"],
        title: "Water Brand Detection",
        description: "A real-time bottle detection and classification system using YOLOv8 and OpenCV, with synthetic dataset generation, image augmentation, webcam/video inference, and model validation workflows.",
        tags: ["YOLOv8", "OpenCV", "Object Detection", "Python"],
        link: { href: "https://github.com/kamaleshayyala-0608", label: "Explore repository" }
      },
      {
        featured: false,
        artClass: "art-plant",
        artLabel: "MACHINE LEARNING",
        meta: ["04 / AI WEB APP", "FLASK"],
        title: "Plant Care AI",
        description: "A Flask-based plant-care application described in the resume as supporting plant disease detection from image uploads, soil classification, crop recommendations from environmental inputs, authentication, and analysis history.",
        tags: ["Flask", "Machine Learning", "Image Analysis"],
        link: { href: "https://github.com/kamaleshayyala-0608", label: "Explore repository" }
      },
      {
        featured: false,
        artClass: "art-hr",
        artLabel: "WEB DEVELOPMENT",
        meta: ["05 / DJANGO APP", "BACKEND + UI"],
        title: "HR Portal",
        description: "A Django web application featuring a login system, employee database, and administrative workflows, with frontend integration and GitHub version control.",
        tags: ["Django", "Python", "SQL", "GitHub"],
        link: { href: "https://github.com/kamaleshayyala-0608", label: "Explore repository" }
      }
    ]
  },
  experience: {
    index: "04 — EXPERIENCE",
    heading: ["Learning by doing.", "Growing with purpose."],
    item: {
      date: "JUN 2026 — SEP 2026",
      title: "AI Research & Development Intern",
      company: "Dhruv Compusoft Consultancy Pvt. Ltd.",
      type: "PAID INTERNSHIP",
      description: "Three-month paid internship focused on research and development of AI-powered solutions, exploring Large Language Models (LLMs), Model Context Protocol (MCP), and Retrieval-Augmented Generation (RAG). Developed AI applications for PowerPoint presentation generation and natural-language-to-SQL query generation.",
      bullets: [
        "Researched and developed AI-powered solutions using Large Language Models (LLMs).",
        "Explored and implemented MCP-based integrations to enable AI applications to interact with external tools and services.",
        "Worked on Retrieval-Augmented Generation (RAG) applications to support context-aware information retrieval and response generation.",
        "Developed an AI PowerPoint Generator application to assist with creating presentation content and generating presentations.",
        "Developed a Natural Language to SQL application that translates user questions written in natural language into SQL queries.",
        "Worked on integrating AI models with application workflows and improving the usability of AI-powered tools."
      ],
      tags: ["Large Language Models (LLMs)", "Model Context Protocol (MCP)", "Retrieval-Augmented Generation (RAG)", "Natural Language Processing (NLP)", "SQL", "AI Application Development", "Python"]
    }
  },
  education: {
    index: "05 — EDUCATION",
    heading: ["Built on a foundation", "of learning."],
    items: [
      { year: "2022 — 2026", title: "B.Tech — Computer Science", subtitle: "Artificial Intelligence & Data Science", place: "NBKR Institute of Science and Technology", score: "75" },
      { year: "INTERMEDIATE", title: "MPC", subtitle: "Valley Oak Junior College", place: "Hyderabad", score: "79.7" },
      { year: "10TH GRADE", title: "Secondary Education", subtitle: "Dr. KKR Gowtham Conceptual School", place: "Gudivada", score: "70" }
    ],
    certifications: {
      title: "Certifications & learning",
      list: ["IBM · Artificial Intelligence Fundamentals", "Google Cloud · Introduction to Generative AI", "AISECT Learn · Python for Data Science Internship", "Deloitte · Data Analytics Simulation", "Power BI Workshops"],
      note: "Only certifications listed in the supplied resumes are shown here."
    }
  },
  contact: {
    index: "06 — CONTACT",
    kicker: "Have a role, project, or idea in mind?",
    headingLine1: "Let's build something",
    headingLine2Gradient: "meaningful.",
    copy: "I'm open to opportunities where I can contribute, keep learning, and build practical AI-powered or full-stack solutions.",
    button: { label: "Contact me", href: "mailto:kamaleshayyala@gmail.com?subject=Portfolio%20Inquiry" },
    details: [
      { label: "kamaleshayyala@gmail.com", href: "mailto:kamaleshayyala@gmail.com" },
      { label: "+91 79897 29979", href: "tel:+917989729979" },
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/ayyala-kamalesh", external: true },
      { label: "GitHub ↗", href: "https://github.com/kamaleshayyala-0608", external: true }
    ]
  },
  footer: {
    brand: "KAMALESH AYYALA",
    tagline: "Designed with intent · Built for the next opportunity",
    backToTop: "Back to top ↑"
  }
}
