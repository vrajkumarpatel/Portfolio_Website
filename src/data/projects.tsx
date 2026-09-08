import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiStreamlit,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiRailway,
  SiVercel,
  SiTwilio,
  SiStripe,
  SiPlaywright,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" width={20} height={20} />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/icons8-java.svg" alt="Java" width={20} height={20} />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit/>,
  },
  scikitlearn: {
    title: "scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn/>,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas/>,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy/>,
  },
  plotly: {
    title: "Plotly",
    bg: "black",
    fg: "white",
    icon: <SiPlotly/>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/fastapi-svgrepo-com.svg" alt="FastAPI" width={20} height={20} />,
  },
  tesseract: {
    title: "Tesseract OCR",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/tesseract-svgrepo-com.svg" alt="Tesseract" width={20} height={20} />,
  },
  sqlalchemy: {
    title: "SQLAlchemy",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/sqlalchemy-icon.svg" alt="SQLAlchemy" width={20} height={20} />,
  },
  csharp: {
    title: "C# .NET 9",
    bg: "black",
    fg: "white",
    icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width={20} height={20} />,
  },
  groq: {
    title: "Groq LLM",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold leading-none">GROQ</span>,
  },
  elevenlabs: {
    title: "ElevenLabs TTS",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold leading-none">11Labs</span>,
  },
  live2d: {
    title: "Live2D Avatar",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold leading-none">L2D</span>,
  },
  cuda: {
    title: "CUDA 12.8",
    bg: "black",
    fg: "white",
    icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg" alt="CUDA" width={20} height={20} />,
  },
  railway: {
    title: "Railway",
    bg: "black",
    fg: "white",
    icon: <SiRailway />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  n8n: {
    title: "n8n",
    bg: "black",
    fg: "white",
    icon: <Workflow />,
  },
  twilio: {
    title: "Twilio",
    bg: "black",
    fg: "white",
    icon: <SiTwilio />,
  },
  stripe: {
    title: "Stripe",
    bg: "black",
    fg: "white",
    icon: <SiStripe />,
  },
  playwright: {
    title: "Playwright",
    bg: "black",
    fg: "white",
    icon: <SiPlaywright />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  description: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  demo?: string;
};
const projects: Project[] = [
  {
    id: "stayvoo",
    category: "Hospitality SaaS",
    title: "Stayvoo – Hotel Booking Platform",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    description:
      "A hotel booking platform for extended-stay and group reservations, built full-stack with FastAPI, React, and Supabase. Includes an 8-phase security overhaul, a real-time admin dashboard, and a B2B lead-generation pipeline (n8n, Apollo.io, LLM-based lead scoring).",
    screenshots: [],
    live: "https://stayvoo.com",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vercel,
        PROJECT_SKILLS.playwright,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.railway,
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.twilio,
        PROJECT_SKILLS.stripe,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Stayvoo is a hotel booking platform built for extended-stay and group reservations, founded and developed end-to-end &mdash; full stack, security hardening, admin tooling, and go-to-market automation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono"><strong>Full-Stack Platform:</strong> Built with FastAPI, React, and Supabase, deployed on Railway (API) and Vercel (frontend).</li>
            <li className="font-mono"><strong>8-Phase Security Overhaul:</strong> Fixed IDOR and PII enumeration vulnerabilities, added authentication, rate limiting, and audit logging, plus Playwright end-to-end test coverage &mdash; preventing data-leak incidents.</li>
            <li className="font-mono"><strong>Admin Dashboard:</strong> Built with React and Supabase, providing global search, inline editing, and a real-time daily operations view so staff can manage reservations faster with fewer manual errors.</li>
            <li className="font-mono"><strong>Automation Architecture:</strong> Twilio SMS and Stripe payments, with a feature-flag kill switch for controlled launch.</li>
            <li className="font-mono"><strong>B2B Lead-Generation Pipeline:</strong> Apollo.io company search (real API with a mock fallback), LLM-based fit scoring via Groq with a deterministic heuristic fallback, full pipeline tracking (new → contacted → responded → qualified → closed/lost) with a per-lead activity log, and n8n workflows for intake, scheduled Apollo sync, and follow-up dispatch &mdash; all outreach gated by an allowlist plus a persistent CAN-SPAM suppression list, no bypass path.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "aria",
    category: "AI Capstone",
    title: "ARIA – Adaptive Responsive Intelligent Agent",
    src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop",
    description:
      "AI study companion backend: a hybrid BM25 + vector + knowledge-graph memory system, a rate-limited Groq LLM proxy, and Google Calendar integration — driving a third-party Live2D/TTS avatar engine I configured and integrated. NLU AI Senior Capstone, showcased May 8, 2026.",
    screenshots: [],
    live: "#",
    github: "https://github.com/vrajkumarpatel/ARIA",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.groq,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            ARIA is an AI study companion. My own work is the Python memory/orchestration backend: a hybrid BM25 + vector + knowledge-graph retrieval system, a rate-limited Groq LLM proxy with retry/backoff, and Google Calendar OAuth2 integration. That backend drives a Live2D avatar with voice and lip-sync — but the avatar/TTS/lip-sync engine itself is a third-party open-source project, <Link href="https://github.com/fagenorn/handcrafted-persona-engine" target="_blank" rel="noopener" className="underline">fagenorn/handcrafted-persona-engine</Link> (C#/.NET 9), which I configured, GPU-tuned, and integrated — I did not build it. Built as the NLU AI Senior Capstone, showcased May 8, 2026.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">What I Built</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono"><strong>Hybrid Memory Retrieval:</strong> BM25 keyword search, vector search, and a knowledge-graph layer combined to retrieve relevant past sessions from an Obsidian vault and inject them into every LLM prompt.</li>
            <li className="font-mono"><strong>Rate-Limited Groq Proxy:</strong> A Python/FastAPI proxy that handles memory injection, date awareness, Groq API rate-limiting with retry/backoff, and vault writes.</li>
            <li className="font-mono"><strong>Calendar Integration:</strong> Google Calendar OAuth2, so ARIA is aware of a student&apos;s schedule.</li>
            <li className="font-mono"><strong>Cross-Platform Memory Import:</strong> Exports from Claude, ChatGPT, and Gemini can be imported into the memory vault, giving ARIA knowledge of a student&apos;s full AI-assisted academic history.</li>
            <li className="font-mono"><strong>Educational Philosophy:</strong> ARIA guides students toward their own answers rather than completing work for them — structured to make AI-assisted learning meaningful, not a shortcut.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Third-Party Integration (Not My Code)</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono"><strong>Avatar &amp; Voice Engine:</strong> <Link href="https://github.com/fagenorn/handcrafted-persona-engine" target="_blank" rel="noopener" className="underline">fagenorn/handcrafted-persona-engine</Link> (C#/.NET 9) — the Live2D rendering, TTS (ElevenLabs/Qwen3), and NVIDIA Audio2Face lip-sync all live here. I configured, GPU-tuned, and integrated this engine against my backend; I did not author it.</li>
            <li className="font-mono"><strong>My integration surface:</strong> stripping inline emotion tags from LLM output before they reach the TTS layer, and GPU/CUDA environment tuning to keep it running smoothly alongside the local TTS model.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "inteldocs",
    category: "AI Infrastructure",
    title: "IntelDocs – Document Intelligence Platform",
    src: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2070&auto=format&fit=crop",
    description:
      "Document intelligence platform with hybrid retrieval (BM25 + vector + local reranking) and cited Q&A, plus an evaluation pipeline that measures retrieval accuracy and answer faithfulness across configurations. Multi-tenant, async ingestion, PostgreSQL/pgvector, Docker.",
    screenshots: [],
    live: "#",
    github: "https://github.com/vrajkumarpatel/IntelDocs",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.groq,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            IntelDocs is a document intelligence platform: upload contracts, invoices, or policies (scanned or native PDFs), ask cited questions against them, and — the differentiator — measure whether the retrieval and answers are actually correct with a real evaluation pipeline rather than just trusting the demo.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono"><strong>Hybrid Retrieval:</strong> BM25 and pgvector cosine similarity combined via reciprocal rank fusion, then narrowed by a local cross-encoder reranker — no paid embedding or reranking API.</li>
            <li className="font-mono"><strong>Cited Q&amp;A:</strong> Answers reference specific chunks/pages; citations are validated against what was actually retrieved rather than trusted blindly from the LLM.</li>
            <li className="font-mono"><strong>Evaluation Pipeline:</strong> Auto-generates test questions from real ingested documents, runs them through the actual retrieval and answer pipeline, and reports hit-rate, MRR, and LLM-judged answer faithfulness — comparable across retrieval configurations (vector-only, hybrid, hybrid+rerank).</li>
            <li className="font-mono"><strong>Async Ingestion:</strong> OCR (Tesseract) and native PDF text extraction, chunked and embedded in the background via Redis/ARQ workers.</li>
            <li className="font-mono"><strong>Multi-Tenant:</strong> Organization-scoped documents and users with JWT auth.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "leadtriage",
    category: "AI Automation",
    title: "LeadTriage – AI Lead Qualification",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description:
      "AI-powered lead qualification and follow-up automation: a webhook intake pipeline into a FastAPI backend that scores and classifies leads via LLM, tracks every automation run with retry and audit logging, and surfaces it all in a React dashboard.",
    screenshots: [],
    live: "#",
    github: "https://github.com/vrajkumarpatel/LeadTriage",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            LeadTriage replaces a manual &quot;someone reads every form submission and decides what matters&quot; process with a pipeline that classifies, scores, and drafts a first response automatically, while keeping a full audit trail of what happened and why.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono"><strong>AI Qualification:</strong> An LLM call (Groq) returns structured classification, score, reasoning, recommended next action, and a suggested follow-up — with a real deterministic heuristic fallback when no API key is set, so the demo always works.</li>
            <li className="font-mono"><strong>Workflow Tracking:</strong> Every qualification attempt is tracked to success or failure; failed runs can be retried, and every step is recorded in an audit log.</li>
            <li className="font-mono"><strong>Optional No-Code Orchestration:</strong> Three importable n8n workflows (intake, notification, follow-up) sit in front of the same API — the backend works standalone without n8n running at all.</li>
            <li className="font-mono"><strong>Operator Dashboard:</strong> A React dashboard for lead scoring breakdowns, workflow history, and automation status.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "idscnr",
    category: "Windows Automation",
    title: "IDSCNR – ID Scanning & Check-In Management System",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Privacy-first ID scanning and guest management system. The app scans ID front/back, extracts structured data locally, and manages guest check-ins with DNR checks.",
    screenshots: [],
    live: "#",
    demo: "/assets/projects-screenshots/idscnr/Untitled%20design.mp4",
    github: "https://github.com/vrajkumarpatel/ID_Scnr.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.tesseract,
        PROJECT_SKILLS.sqlalchemy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Privacy-first ID scanning and guest management system. The app scans ID front/back, extracts structured data locally, and manages guest check-ins with DNR (Do Not Rent) checks and exports for PMS systems.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Overview</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
             <li className="font-mono">Processes ID images from a physical scanner or manual upload.</li>
             <li className="font-mono">Extracts text with local OCR and parses barcode data when available.</li>
             <li className="font-mono">Creates a guest record with name, DOB, address, ID number, and more.</li>
             <li className="font-mono">Checks guests against a configurable DNR list and alerts on matches.</li>
             <li className="font-mono">Stores ID images encrypted at rest and keeps data local.</li>
             <li className="font-mono">Provides a modern UI for viewing, editing, and searching guest records.</li>
             <li className="font-mono">Exposes exports for PMS integration (JSON/CSV/API).</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Key Functions</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
             <li className="font-mono">Scan Duplex (Front & Back)</li>
             <li className="font-mono">Upload Front/Back and Process</li>
             <li className="font-mono">OCR + Barcode Parsing (AAMVA PDF417)</li>
             <li className="font-mono">Guest Record Creation & Editing</li>
             <li className="font-mono">DNR List Management & Matching</li>
             <li className="font-mono">Encrypted Image Storage</li>
             <li className="font-mono">Analytics & Daily Stats</li>
             <li className="font-mono">PMS Data Export (JSON/CSV/API)</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
             <li className="font-mono"><strong>Scanner Duplex:</strong> Use a WIA-compatible scanner to capture front and back sequentially.</li>
             <li className="font-mono"><strong>Data Extraction:</strong> OCR reads visible text; PDF417 barcode parsing is used when IDs include AAMVA data. The system normalizes names, dates, and addresses into structured fields.</li>
             <li className="font-mono"><strong>DNR Check:</strong> New guests are matched against the DNR list and flagged with details.</li>
             <li className="font-mono"><strong>Security:</strong> Encrypted storage, local processing, and no external APIs for core features.</li>
          </ul>

          <div className="my-6 space-y-2">
            <TypographyH3 className="my-4">Watch Demo</TypographyH3>
            <p className="font-mono text-sm text-neutral-500 mb-2">
              See the ID scanning and data extraction workflow in action.
            </p>
            <video
              src={`${BASE_PATH}/idscnr/Untitled%20design.mp4`}
              controls
              poster="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop"
              className="w-full rounded-md shadow-lg border border-black/10 dark:border-white/10"
            />
          </div>

          <SlideShow
            images={[
              `${BASE_PATH}/idscnr/Screenshot 2025-12-15 193855.png`,
              `${BASE_PATH}/idscnr/Screenshot 2025-12-15 193912.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "gun-violence-dashboard",
    category: "Data Dashboard",
    title: "Gun Violence Data Dashboard for Community Intervention",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicago_Skyline_as_seen_from_Lakeview.JPG",
    description:
      "Interactive dashboard analyzing Chicago gun violence with maps, KPIs, risk rankings, and scenario modeling to support community interventions.",
    screenshots: [
      "/assets/projects-screenshots/gun-violence-dashboard/dashboard-main.png",
      "/assets/projects-screenshots/gun-violence-dashboard/dashboard-map.png",
      "/assets/projects-screenshots/gun-violence-dashboard/dashboard-summary.png",
    ],
    live: "https://gun-violence-dashboard-l3zedtcamrmhu2yx7ekbcv.streamlit.app/",
    github: "https://github.com/vrajkumarpatel/gun-violence-dashboard",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.plotly],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Interactive analytics system for Chicago gun violence: fetches CPD crime data, aggregates monthly community metrics, computes risk rankings, and serves an interactive Streamlit dashboard with maps, KPIs, and scenario modeling to guide community interventions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/gun-violence-dashboard/dashboard-main.png",
              "/assets/projects-screenshots/gun-violence-dashboard/dashboard-map.png",
              "/assets/projects-screenshots/gun-violence-dashboard/dashboard-summary.png",
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "customer-segmentation-dashboard",
    category: "Data Science",
    title: "Customer Segmentation Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description:
      "RFM analysis and K-Means clustering for e-commerce customers. Visualizes segments, key metrics, and insights for targeted marketing.",
    screenshots: [
      "overview.svg",
      "clustering.svg",
      "cluster_rfm_bar.png",
      "correlation_heatmap.png",
      "rfm_hist_box.png",
    ],
    live: "https://vrajkumarpatel-customer-segmentation-dashboard-app-19pydm.streamlit.app/",
    github: "https://github.com/vrajkumarpatel/customer-segmentation-dashboard",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.plotly],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack data analysis project that segments e-commerce customers using RFM (Recency, Frequency, Monetary) analysis and K-Means clustering. The interactive Streamlit dashboard visualizes customer segments, key metrics, and insights, enabling businesses to identify high-value, loyal, and at-risk customers for targeted marketing and retention strategies.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/customer-segmentation-dashboard/overview.svg`,
              `${BASE_PATH}/customer-segmentation-dashboard/clustering.svg`,
              `${BASE_PATH}/customer-segmentation-dashboard/cluster_rfm_bar.png`,
              `${BASE_PATH}/customer-segmentation-dashboard/correlation_heatmap.png`,
              `${BASE_PATH}/customer-segmentation-dashboard/rfm_hist_box.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "3D Interactive Portfolio",
    src: `${BASE_PATH}/portfolio/ss-3.png`,
    description:
      "A visually stunning 3D interactive portfolio website built with Next.js, Spline, and Framer Motion. Features a custom 3D keyboard, space-themed design, and smooth animations.",
    screenshots: ["ss-3.png", "ss-1.png", "ss-2.png"],
    live: "/",
    github: "https://github.com/vrajkumarpatel/Portfolio-Showcase.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.aceternity,
      ],
      backend: [
        PROJECT_SKILLS.ts,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground! This portfolio is a culmination of my skills in creative web development and 3D design. Built with Next.js and Spline, it offers an immersive experience with interactive 3D elements and smooth animations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
             <li className="font-mono"><strong>3D Interactive Keyboard:</strong> A custom-built 3D scene using Spline that reacts to user interaction.</li>
             <li className="font-mono"><strong>Space Theme:</strong> A particle-based background that creates a depth-filled, space-like atmosphere.</li>
             <li className="font-mono"><strong>Smooth Animations:</strong> Powered by Framer Motion for buttery-smooth page transitions and element reveals.</li>
             <li className="font-mono"><strong>Responsive Design:</strong> Fully optimized for all devices, ensuring a seamless experience on mobile and desktop.</li>
          </ul>

          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/ss-3.png`,
              `${BASE_PATH}/portfolio/ss-1.png`,
              `${BASE_PATH}/portfolio/ss-2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "css-350-ml",
    category: "Machine Learning",
    title: "CSS 350: Machine Learning",
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    description:
      "A comprehensive collection of machine learning coursework covering supervised/unsupervised learning, fairness in AI, NLP, and reinforcement learning.",
    screenshots: [],
    live: "#",
    github: "https://github.com/vrajkumarpatel/CSS_350_ML.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.plotly,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive repository for CSS 350: Machine Learning, featuring coursework and projects that span fundamental to advanced ML concepts. From supervised learning to ethical AI considerations, this collection demonstrates practical implementations using Python and Jupyter Notebooks.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Modules Covered</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
             <li className="font-mono"><strong>Supervised Learning:</strong> Optimization algorithms and real-world dataset analysis.</li>
             <li className="font-mono"><strong>Fairness in ML:</strong> Mitigating bias in AI models using the Adult dataset.</li>
             <li className="font-mono"><strong>Regression & Classification:</strong> Predictive modeling on housing data and multi-class classification.</li>
             <li className="font-mono"><strong>Clustering:</strong> Unsupervised learning and PCA on music data.</li>
             <li className="font-mono"><strong>Conversational AI & NLP:</strong> Building and analyzing conversational agents.</li>
             <li className="font-mono"><strong>Time Series & Reinforcement Learning:</strong> Temporal data analysis and grid world simulations.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">
            Built primarily with Python and Jupyter Notebooks, leveraging Scikit-Learn for models, Pandas/NumPy for data manipulation, and Matplotlib/Seaborn for visualization.
          </p>
        </div>
      );
    },
  },
];
export default projects;
