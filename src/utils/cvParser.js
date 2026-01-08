export const JOB_TITLES = [
  // Frontend
  "frontend developer",
  "front end developer",
  "frontend engineer",
  "react developer",
  "angular developer",
  "vue developer",
  "javascript developer",
  "web developer",
  "ui developer",
  "ui engineer",
  "ui ux designer",
  "ui/ux designer",
  "ux designer",
  "product designer",

  // Backend
  "backend developer",
  "back end developer",
  "backend engineer",
  "node js developer",
  "nodejs developer",
  "java developer",
  "spring boot developer",
  "python developer",
  "django developer",
  "flask developer",
  "php developer",
  "laravel developer",
  "dot net developer",
  ".net developer",
  "c# developer",
  "golang developer",
  "go developer",
  "ruby developer",
  "ruby on rails developer",

  // Full Stack
  "full stack developer",
  "fullstack developer",
  "full stack engineer",
  "mern stack developer",
  "mean stack developer",

  // Mobile
  "mobile app developer",
  "android developer",
  "ios developer",
  "flutter developer",
  "react native developer",
  "swift developer",
  "kotlin developer",

  // DevOps & Cloud
  "devops engineer",
  "cloud engineer",
  "aws engineer",
  "azure engineer",
  "gcp engineer",
  "site reliability engineer",
  "sre",
  "infrastructure engineer",
  "platform engineer",

  // Data & AI
  "data analyst",
  "data engineer",
  "data scientist",
  "machine learning engineer",
  "ml engineer",
  "ai engineer",
  "deep learning engineer",
  "nlp engineer",
  "computer vision engineer",
  "big data engineer",

  // QA & Testing
  "qa engineer",
  "quality assurance engineer",
  "software tester",
  "manual tester",
  "automation tester",
  "test engineer",
  "selenium tester",

  // Security
  "cyber security engineer",
  "security engineer",
  "information security analyst",
  "ethical hacker",
  "penetration tester",

  // Database
  "database administrator",
  "dba",
  "sql developer",
  "mysql developer",
  "postgresql developer",
  "mongodb developer",

  // ERP / CMS
  "sap consultant",
  "salesforce developer",
  "salesforce administrator",
  "oracle consultant",
  "erp developer",
  "wordpress developer",
  "shopify developer",

  // Game & Graphics
  "game developer",
  "unity developer",
  "unreal engine developer",
  "graphics programmer",

  // Management & Leads
  "software architect",
  "technical architect",
  "solution architect",
  "team lead",
  "tech lead",
  "engineering manager",
  "project manager",
  "product manager",
  "scrum master",

  // Support & IT Ops
  "system administrator",
  "network engineer",
  "it support engineer",
  "technical support engineer",
  "desktop support engineer",

  // Intern & Entry
  "software engineer intern",
  "developer intern",
  "graduate engineer trainee",
  "trainee software engineer",
];


export function parseCV(text) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // 📧 Email
  const email =
    text.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i)?.[0] || "";

  // 📞 Phone
  const phone =
    text.match(/(\+?\d{1,3}[\s-]?)?\d{10}/)?.[0] || "";

  // 👤 Name (top of CV, capitalized words)
  let name = "";
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    if (
      lines[i].split(" ").length <= 4 &&
      /^[A-Z\s]+$/.test(lines[i])
    ) {
      name = lines[i];
      break;
    }
  }

  // 💼 Designation
  let designation = "";

for (const title of JOB_TITLES) {
  if (text.toLowerCase().includes(title)) {
    designation = title
      .split(" ")
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join(" ");
    break;
  }
}

  return {
    name,
    email,
    phone,
    designation,
  };
}
