"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full py-24 pointer-events-auto"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechBadge = ({ label }: { label: string }) => {
  return (
    <span className="text-[11px] md:text-xs px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-black dark:text-white">
      {label}
    </span>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const ModalCloseButton = () => {
    const { setOpen } = useModal();
    return (
      <button
        onClick={() => setOpen(false)}
        className="px-3 py-1.5 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm transition-colors hover:bg-gray-300 dark:hover:bg-neutral-800"
      >
        Close
      </button>
    );
  };

  return (
    <Modal>
      <ModalTrigger className="w-full h-full p-0 text-left bg-transparent hover:bg-transparent group flex flex-col rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            src={project.src}
            alt={project.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className="flex flex-col flex-1 p-5 space-y-4 w-full">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-sky-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {[...project.skills.frontend, ...project.skills.backend]
              .slice(0, 4)
              .map((s) => (
                <TechBadge key={s.title} label={s.title} />
              ))}
            {([...project.skills.frontend, ...project.skills.backend].length > 4) && (
               <TechBadge label={`+${[...project.skills.frontend, ...project.skills.backend].length - 4}`} />
            )}
          </div>

          <div className="pt-4 mt-auto border-t border-black/5 dark:border-white/5 w-full">
            <span className="block w-full py-2.5 px-4 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium text-sm text-center group-hover:opacity-90 transition-opacity cursor-can-hover">
              View Details
            </span>
          </div>
        </div>
      </ModalTrigger>
      
      <ModalBody className="md:max-w-6xl md:max-h-[90vh] overflow-hidden">
        <ModalContent>
          <ProjectContents project={project} />
        </ModalContent>
        <ModalFooter className="gap-4">
          <ModalCloseButton />
          {(project.demo || (project.live && project.live !== "#")) && (
            <Link href={project.demo ?? project.live} target="_blank" aria-label={`Open live demo for ${project.title}`}>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-1.5 rounded-md border border-black hover:opacity-90 transition-opacity">
                Live Demo
              </button>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank" aria-label={`Open repository for ${project.title}`}>
              <button className="text-sm px-4 py-1.5 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Repository
              </button>
            </Link>
          )}
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="py-4">
      <h4 className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500">Tools & Technologies</p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 mb-8">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {project.content}
      </div>
    </div>
  );
};

export default ProjectsSection;
