"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "IDscnr – On-Premise ID Scanning & Check-In Automation",
    description:
      "Windows application for hotel front desks: scans IDs/passports, parses MRZ/AAMVA, checks DNR lists, auto-fills PMS, uses encrypted local SQLite and UI automation to reduce check-in time to ~3 seconds.",
    link: "#",
    images: [
      "/assets/projects-import/home-page-ss.png",
      "/assets/projects-screenshots/idscnr/Screenshot 2025-12-15 193855.png",
      "/assets/projects-screenshots/idscnr/Screenshot 2025-12-15 193912.png",
    ],
  },
  {
    id: 2,
    name: "Gun Violence Data Dashboard for Community Intervention",
    description:
      "Interactive Streamlit dashboard analyzing Chicago gun violence: KPIs, maps, community risk rankings, and scenario modeling to support local intervention programs.",
    link: "https://gun-violence-dashboard-l3zedtcamrmhu2yx7ekbcv.streamlit.app/",
    images: [
      "/assets/projects-screenshots/gun-violence-dashboard/dashboard-main.png",
    ],
  },
  {
    id: 3,
    name: "HTML-CSS-JS template",
    description:
      "Simple HTML/CSS/JS template for ML models deployed on Python Flask.",
    link: "https://github.com/vrajkumarpatel/frontend-template",
    images: [
      "/assets/projects-import/bg.jpg",
    ],
  },
  {
    id: 4,
    name: "YouTube Clone Application",
    description:
      "YouTube-like app with video streaming, authentication, comments, and responsive UI.",
    link: "https://github.com/vrajkumarpatel/youtube-copy",
    images: [
      "/assets/projects-import/Youtube.png",
    ],
  },
  {
    id: 5,
    name: "Spotify Music Player Clone",
    description:
      "Modern music streaming application with playlist management, audio controls, and sleek UI.",
    link: "https://github.com/vrajkumarpatel/clone-Spotify-app",
    images: [
      "/assets/projects-import/Spotify.jpeg",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                        width={300}
                        height={200}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
