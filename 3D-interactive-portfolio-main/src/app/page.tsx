"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("relative z-10 bg-slate-100 dark:bg-transparent pointer-events-none")}>
          <div
            className="top-0 fixed w-full"
            style={{ height: "100dvh", zIndex: "var(--bg-z)", pointerEvents: "var(--bg-pointer)" }}
          >
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
