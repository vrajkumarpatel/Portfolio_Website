import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const programming = [
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
  ];
  const webdev = [
    { label: "HTML5", src: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
    { label: "CSS3", src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
    { label: "React", src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { label: "Node.js", src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { label: "Express", src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
    { label: "MongoDB", src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  ];
  const ml = [
    { label: "TensorFlow", src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
    { label: "Scikit-learn", src: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
    { label: "NumPy", src: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg" },
    { label: "Pandas", src: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
    { label: "Matplotlib", src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
    { label: "Seaborn", src: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
  ];
  const tools = [
    { label: "Git", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { label: "GitHub", src: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    { label: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { label: "Jupyter", src: "https://jupyter.org/assets/homepage/main-logo.svg" },
    { label: "Figma", src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { label: "Slack", src: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
    { label: "Docker", src: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  ];

  return (
    <section id="skills" className="w-full py-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] pointer-events-none" />
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
                <div key={i.label} className="text-center">
                  <Image src={i.src} alt={i.label} width={56} height={56} className="mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">{i.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">Web Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {webdev.map((i) => (
                <div key={i.label} className="text-center">
                  <Image src={i.src} alt={i.label} width={56} height={56} className="mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">{i.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">Machine Learning</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {ml.map((i) => (
                <div key={i.label} className="text-center">
                  <Image src={i.src} alt={i.label} width={56} height={56} className="mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">{i.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-sky-400 font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 max-w-6xl mx-auto">
              {tools.map((i) => (
                <div key={i.label} className="text-center">
                  <Image src={i.src} alt={i.label} width={56} height={56} className="mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">{i.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
