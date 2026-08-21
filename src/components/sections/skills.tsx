import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import {
  Workflow,
  Webhook,
  Database,
  Braces,
  Terminal,
  Brain,
  Library,
  Wand2,
  Plug,
  Layers,
  Boxes,
  Network,
  Sparkles,
  Train,
  TestTube2,
  CreditCard,
  MessageCircle,
  Send,
  Triangle,
  PlayCircle,
  KeyRound,
  Gauge,
  ScrollText,
  ShieldAlert,
  Fingerprint,
  Crosshair,
  type LucideIcon,
} from "lucide-react";

type SkillItem = { label: string; src?: string; Icon?: LucideIcon };

const SkillTile = ({ item }: { item: SkillItem }) => {
  return (
    <div className="text-center">
      {item.src ? (
        <Image src={item.src} alt={item.label} width={56} height={56} className="mx-auto mb-2" />
      ) : item.Icon ? (
        <div className="mx-auto mb-2 flex items-center justify-center w-14 h-14">
          <item.Icon className="w-9 h-9 text-sky-400" />
        </div>
      ) : null}
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.label}</p>
    </div>
  );
};

const SkillsSection = () => {
  const programming: SkillItem[] = [
    { label: "Python", src: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
    { label: "Java", src: "/assets/icons/icons8-java.svg" },
    { label: "JavaScript", src: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
    { label: "HTML", src: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
    { label: "CSS", src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
    { label: "MySQL", src: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
    { label: "SQLite", src: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
    { label: "React", src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { label: "Node.js", src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { label: "Vite", src: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },
    { label: "TypeScript", src: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
    { label: "CI/CD", Icon: Workflow },
    { label: "RESTful API", Icon: Webhook },
    { label: "PostgreSQL", src: "/assets/icons/icons8-postgresql.svg" },
    { label: "FastAPI", src: "/assets/icons/fastapi-svgrepo-com.svg" },
    { label: "Django", src: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" },
    { label: "C#/.NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { label: "SQL", Icon: Database },
    { label: "Pydantic", Icon: Braces },
    { label: "Bash/Shell scripting", Icon: Terminal },
  ];

  const ai_ml: SkillItem[] = [
    { label: "TensorFlow", src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
    { label: "Scikit-learn", src: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
    { label: "NumPy", src: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg" },
    { label: "Pandas", src: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
    { label: "Matplotlib", src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
    { label: "Seaborn", src: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
    { label: "Large Language Models", Icon: Brain },
    { label: "Retrieval-Augmented Generation", Icon: Library },
    { label: "Prompt Engineering", Icon: Wand2 },
    { label: "LLM API Integration", Icon: Plug },
    { label: "OpenCV / Tesseract", src: "/assets/icons/tesseract-svgrepo-com.svg" },
    { label: "LlamaIndex", Icon: Layers },
    { label: "Vector databases", Icon: Boxes },
    { label: "Deep Learning", Icon: Network },
  ];

  const tools: SkillItem[] = [
    { label: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { label: "PyCharm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
    { label: "Jupyter Notebook", src: "https://jupyter.org/assets/homepage/main-logo.svg" },
    { label: "Git", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { label: "GitHub", src: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    { label: "Figma", src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { label: "Slack", src: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
    { label: "Docker", src: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { label: "Claude Code", Icon: Sparkles },
    { label: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { label: "Supabase", Icon: Database },
    { label: "Railway", Icon: Train },
    { label: "Playwright", Icon: TestTube2 },
    { label: "n8n", Icon: Workflow },
    { label: "Stripe API", Icon: CreditCard },
    { label: "Twilio API", Icon: MessageCircle },
    { label: "Postman", Icon: Send },
    { label: "Linux", src: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
    { label: "Vercel", Icon: Triangle },
    { label: "GitHub Actions", Icon: PlayCircle },
  ];

  const security: SkillItem[] = [
    { label: "OWASP Security Principles", src: "/assets/icons/owasp-svgrepo-com.svg" },
    { label: "Authentication & Authorization", Icon: KeyRound },
    { label: "Rate Limiting", Icon: Gauge },
    { label: "Audit Logging", Icon: ScrollText },
    { label: "IDOR Prevention", Icon: ShieldAlert },
    { label: "PII Protection", Icon: Fingerprint },
    { label: "Penetration Testing", Icon: Crosshair },
  ];

  return (
    <section id="skills" className="w-full py-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="min-h-[80vh] md:min-h-[95vh] lg:min-h-screen pointer-events-none" />
        <Link href={"#skills"} className="pointer-events-none">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-6xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
              )}
            >
              Technical Skills
            </h2>
          </BoxReveal>
        </Link>

        <div className="mt-12 relative z-10 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-lg p-8 grid gap-16 pointer-events-none">
          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">Programming</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {programming.map((i) => (
                <SkillTile key={i.label} item={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">AI/ML</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {ai_ml.map((i) => (
                <SkillTile key={i.label} item={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {tools.map((i) => (
                <SkillTile key={i.label} item={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">Security</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {security.map((i) => (
                <SkillTile key={i.label} item={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
