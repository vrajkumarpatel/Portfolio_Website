"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const EXPERIENCE = [
  {
    company: "Stayvoo LLC",
    link: "https://stayvoo.com",
    role: "Founder & Full-Stack Developer",
    period: "Jun 2026 – Present",
    location: "Remote",
    bullets: [
      "Founded and built a hotel booking platform for extended-stay and group reservations, developing the full stack with FastAPI, React, and Supabase, deployed on Railway and Vercel.",
      "Engineered an 8-phase security overhaul that fixed IDOR and PII enumeration vulnerabilities, added authentication, rate limiting, and audit logging, plus Playwright end-to-end test coverage — resulting in a more secure platform and preventing data-leak incidents.",
      "Built an admin dashboard with React and Supabase providing global search, inline editing, and a real-time daily operations view, allowing staff to manage reservations faster with fewer manual errors.",
      "Designed automation architecture using n8n workflows, Twilio SMS, and Stripe payments with a feature-flag kill switch for controlled launch.",
      "Configured a B2B lead-generation pipeline using Apollo.io targeting construction and staffing companies.",
    ],
    tags: ["FastAPI", "React", "Supabase", "Railway", "Vercel", "n8n", "Twilio", "Stripe", "Playwright"],
  },
  {
    company: "Squareone",
    role: "Full Stack Software Developer Intern",
    period: "Jan 2026 – May 2026",
    location: "Remote",
    bullets: [
      "Led a 4-person team building a full-stack job search application, overseeing project planning and coordinating development using Agile methodologies.",
      "Built responsive frontend features with React and TypeScript; designed and optimized scalable REST APIs using Django REST Framework and PostgreSQL.",
      "Independently developed AI-powered resume builder, resume review, and automated cover letter generation features.",
      "Engineered backend systems including authentication, data modeling, and job management workflows for secure server-side functionality.",
      "Managed GitHub workflows, integrated frontend and backend systems, and supported AWS deployment and end-to-end delivery.",
    ],
    tags: ["React", "TypeScript", "Django", "PostgreSQL", "AWS", "AI"],
  },
  {
    company: "Flipkart Warehouse",
    role: "Seller Service Assistant",
    period: "Mar 2021 – Oct 2021",
    location: "Ahmedabad, India",
    bullets: [
      "Processed orders efficiently, ensuring timely fulfillment and shipment accuracy.",
      "Resolved 50+ seller issues daily, maintaining a 90%+ satisfaction rating.",
      "Coordinated with transport teams managing factory-to-hub movement of 1,000+ daily products.",
    ],
    tags: ["Customer Service", "Logistics", "Operations"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <Link href={"#experience"} className="pointer-events-none">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-6xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
              )}
            >
              Experience
            </h2>
          </BoxReveal>
        </Link>

        <div className="mt-12 relative z-10 flex flex-col gap-6">
          {EXPERIENCE.map((job, i) => (
            <BoxReveal key={i} width="100%">
              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-lg p-6 md:p-8 pointer-events-none">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-sky-400">
                      {job.link ? (
                        <Link
                          href={job.link}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1 pointer-events-auto cursor-can-hover hover:text-sky-300 transition-colors"
                        >
                          {job.company}
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="text-white/90 font-medium">{job.role}</p>
                  </div>
                  <div className="text-sm text-zinc-400 md:text-right shrink-0">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-2 mb-4">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm font-mono text-zinc-300">{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-sky-400/30 text-sky-400 bg-sky-400/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
