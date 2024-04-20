import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const skills = [
  { skill: "HTML", bg: "bg-sky-500/50", color: "text-white" },
  { skill: "CSS", bg: "bg-emerald-500/50", color: "text-white" },
  { skill: "JavaScript", bg: "bg-amber-500/50", color: "text-white-500" },
  { skill: "TypeScript", bg: "bg-blue-500/50", color: "text-white-500" },
  { skill: "React", bg: "bg-violet-500/50", color: "text-white-500" },
  { skill: "Next.js", bg: "bg-cyan-500/50", color: "text-white-500" },
  { skill: "Python", bg: "bg-purple-500/50", color: "text-white-500" },
  { skill: "Node JS", bg: "bg-indigo-500/50", color: "text-white-500" },
  { skill: "TRPC", bg: "bg-pink-500/50", color: "text-white-500" },
  { skill: "MongoDB", bg: "bg-fuchsia-500/50", color: "text-white-500" },
  { skill: "Prisma", bg: "bg-red-500/50", color: "text-white-500" },
  { skill: "Next Auth", bg: "bg-orange-500/50", color: "text-white-500" },
  { skill: "Shadcn UI", bg: "bg-zinc-900", color: "text-white" },
  { skill: "Tailwind CSS", bg: "bg-yellow-500/50", color: "text-white-500" },
  { skill: "Rest API", bg: "bg-green-500/50", color: "text-white-500" },
  { skill: "GraphQL", bg: "bg-teal-500/50", color: "text-white-500" },
  { skill: "Git", bg: "bg-cyan-600/50", color: "text-white-500" },
  { skill: "GitHub", bg: "bg-gray-800/50", color: "text-white-500" },
  { skill: "Docker", bg: "bg-gray-600/50", color: "text-white-500" },
  { skill: "Express JS", bg: "bg-gray-700/50", color: "text-white-500" },
  { skill: "MySQL", bg: "bg-gray-800/50", color: "text-white-500" },
  { skill: "Firebase", bg: "bg-yellow-500/50", color: "text-white-500" },
];

type Project = {
  name: string;
  description: string;
  image: string;
  github?: string;
  link: string;
  technologies?: string[];
};

const projects: Project[] = [
  {
    name: "Fx Edge",
    description:
      "Fx Edge is a saas platform for traders to journal their trades and analyze their performance, get insights, and make informed trading decisions.",
    image: "/fxEdge2.png",
    link: "https://fx-edge-saas.vercel.app/",
    technologies: ['Next.js', 'MongoDB', 'TypeScript', 'Shadcn UI']
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    <div className="flex flex-row items-center space-x-4">
                      {project?.github && (
                        <Link href={project?.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      {/* <p
                        className={`bg-gray-600 px-2 py-1 mr-2 text-sm text-white rounded font-semibold`}
                      >
                        MongoDB
                      </p> */}
                      {project.technologies?.map((tech, index) => {
                        const skill = skills.find(
                          (skill) => skill.skill === tech
                        );
                        if (skill) {
                          return (
                            <p
                              key={index}
                              className={`${skill.bg} px-2 py-1 mr-2 text-sm ${skill.color} rounded font-semibold`}
                            >
                              {tech}
                            </p>
                          );
                        }
                        return null; // Skip if tech not found in skills array
                      })}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
