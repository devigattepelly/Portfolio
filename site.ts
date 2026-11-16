// ============================================================
// EDIT THIS FILE to change everything on the site.
// Anything in [square brackets] is a placeholder to replace.
// ============================================================

export type Category = "Data Science" | "Machine Learning" | "Applied AI" | "Generative AI" | "MLOps";
export type Status = "Planned" | "In Progress" | "Completed";

export const site = {
  name: "Devi Priyanka Gattepelly",
  headline: "Data Scientist | Machine Learning | Applied AI",
  tagline: "Transforming data into intelligent, scalable solutions.",
  intro:
    "Data Scientist with about six years of experience in predictive analytics, machine learning and statistical analysis. I'm now focused on building production-ready ML and generative AI applications.",
  about: [
    "I've spent about six years working on analytical and predictive problems as a data scientist, turning messy business questions into models and decisions people can act on.",
    "Along the way I've become more interested in what happens after the notebook: deployment, monitoring and keeping models reliable. That led me into an AI engineering role, where I started building applications on top of modern machine learning and language models.",
    "[Add one or two sentences in your own voice: what you enjoy working on, the kind of team you want to join.]",
  ],
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  location: "[City, Country]",
  resume: "/resume.pdf", // put your PDF in /public with this name, or change it here
  url: "https://your-domain.com",
};

export const experience = [
  { title: "Data Scientist", company: "[Company]", dates: "[Start] – [End]",
    points: ["[Responsibility or accomplishment. Add numbers only if they are real.]", "[Another responsibility]"], tech: ["[Technology]"] },
  { title: "AI Engineer", company: "[Company]", dates: "[Start] – [End] (3 months)",
    points: ["[Responsibility or accomplishment]", "[Another responsibility]"], tech: ["[Technology]"] },
  { title: "Data Analyst Intern", company: "[Company]", dates: "[Start] – [End] (3 months)",
    points: ["[Responsibility or accomplishment]"], tech: ["[Technology]"] },
];

// Skills below are SUGGESTIONS (dashed). Add a skill's name to `confirmedSkills` once it is true for you (solid).
export const skills: Record<string, string[]> = {
  "Programming and SQL": ["Python", "SQL"],
  "Data Analysis and Statistics": ["Pandas", "NumPy", "Hypothesis testing", "Regression"],
  "Machine Learning": ["Scikit-learn", "XGBoost", "Feature engineering", "Model explainability"],
  "Deep Learning": ["PyTorch", "TensorFlow"],
  "Generative AI": ["LLM APIs", "RAG", "LangChain", "Embeddings"],
  "MLOps and Deployment": ["FastAPI", "Docker", "MLflow", "GitHub Actions"],
  "Cloud Platforms": ["AWS"],
  "Visualization and BI": ["Matplotlib", "Tableau", "Power BI"],
};
export const confirmedSkills: string[] = []; // e.g. ["Python", "SQL"]

export const education = [{ degree: "[Degree]", school: "[University]", year: "[Graduation year]" }];
export const certifications: string[] = []; // e.g. ["Certification name, Issuer, Year"]

export interface Project {
  slug: string; title: string; category: Category; status: Status; problem: string;
  tags: string[]; github: string; demo: string; demonstrates: string;
}

// Proposed project concepts. Update `status`, `github` and `demo` as you build them.
export const projects: Project[] = [
  { slug: "churn-prediction", title: "Customer Churn Prediction and Retention Intelligence", category: "Machine Learning", status: "Planned",
    problem: "Identify which customers are likely to leave, why, and what the business should do about it.",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP", "SQL"], github: "", demo: "",
    demonstrates: "Exploratory analysis, feature engineering, predictive modeling, explainability and business recommendations." },
  { slug: "ab-testing", title: "A/B Testing and Causal Inference", category: "Data Science", status: "Planned",
    problem: "Decide whether a product change really worked, and how confident the team can be.",
    tags: ["Python", "SciPy", "Statsmodels", "SQL"], github: "", demo: "",
    demonstrates: "Experiment design, hypothesis testing, confidence intervals, statistical power and decision-making." },
  { slug: "production-ml-pipeline", title: "End-to-End Production ML Pipeline", category: "MLOps", status: "Planned",
    problem: "Take a trained model to a tested, versioned, monitored API.",
    tags: ["Python", "FastAPI", "Docker", "MLflow", "GitHub Actions", "AWS"], github: "", demo: "",
    demonstrates: "Training, model versioning, API deployment, automated tests, CI/CD and monitoring." },
  { slug: "rag-assistant", title: "Enterprise RAG Knowledge Assistant", category: "Generative AI", status: "Planned",
    problem: "Answer questions from internal documents with citations and fewer hallucinations.",
    tags: ["Python", "LLM APIs", "LangChain / LlamaIndex", "FAISS / pgvector", "FastAPI"], github: "", demo: "",
    demonstrates: "Document ingestion, embeddings, retrieval, cited answers, evaluation and hallucination mitigation." },
  { slug: "analytics-agent", title: "AI-Powered Data Analytics Agent", category: "Applied AI", status: "Planned",
    problem: "Let people explore a database in plain English, with guardrails on the SQL it writes.",
    tags: ["Python", "LangGraph", "LLM APIs", "SQL", "Streamlit"], github: "", demo: "",
    demonstrates: "Natural-language data exploration, controlled SQL generation, analytical workflows and automatic charts." },
];

export const categories: ("All" | Category)[] = ["All", "Data Science", "Machine Learning", "Applied AI", "Generative AI", "MLOps"];
