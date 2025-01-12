import Image from "next/image";
import Project1 from "@/assets/images/project-1.webp";
import Project2 from "@/assets/images/project-2.webp";
import Project3 from "@/assets/images/project-3.webp";
import Project4 from "@/assets/images/project-4.webp";
import Project5 from "@/assets/images/project-5.webp";
import Project6 from "@/assets/images/project-6.webp";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "QGENOMICS",
    year: "2023 - Present",
    title: "Genomic Data Visualization",
    results: [
      { title: "Led the frontend migration from PHP to React" },
      { title: "Developed internal and external modules" },
      { title: "Improved genomic data visualization and UX" },
    ],
    link: "Private",
    image: Project6,
    message: "This project is private and not accessible externally.",
  },
  {
    company: "Ironhack Spain",
    year: "2023",
    title: "Hands Up!",
    results: [
      { title: "Led the frontend with React" },
      { title: "Optimized load performance" },
      { title: "Integrated frontend with backend in Node.js" },
    ],
    link: "https://handsup-project.netlify.app/",
    image: Project1,
  },
  {
    company: "Freelance",
    year: "2021",
    title: "EVO-Gym",
    results: [
      { title: "Developed the frontend with React" },
      { title: "Optimized design and key functionalities" },
      { title: "Improved mobile experience and performance" },
    ],
    link: "https://gymsite-typescript.netlify.app/",
    image: Project2,
  },
  {
    company: "Freelance",
    year: "2023",
    title: "Brekki O'Clock",
    results: [
      { title: "Developed the frontend with BEM methodology" },
      { title: "Optimized design and accessibility" },
      { title: "Improved user experience" },
    ],
    link: "https://brekkie.netlify.app/",
    image: Project3,
  },
  {
    company: "Ironhack Spain",
    year: "2023",
    title: "Clippy",
    results: [
      { title: "Developed full-stack platform with Node.js and MongoDB" },
      { title: "Implemented a ticket system to resolve queries" },
      { title: "Automated emails with NodeMailer" },
    ],
    link: "https://clippy1.fly.dev/",
    image: Project4,
  },
  {
    company: "Ironhack Spain",
    year: "2023",
    title: "DragonBall Jump",
    results: [
      { title: "Developed a game in JavaScript using CANVAS and HTML5" },
      { title: "Created logic to avoid enemies and increase score" },
      { title: "Optimized gameplay for a smooth experience" },
    ],
    link: "https://dragon-doodle.netlify.app/",
    image: Project5,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Creative Solutions
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span> &bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link === "Private" ? (
                   <span className="text-sm text-yellow-800">{project.message}</span>
                  ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                   )}
                </div>
                <div className="relative">
                  <Image
                    className="rounded-t-lg mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
