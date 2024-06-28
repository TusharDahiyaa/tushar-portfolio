import React, { useEffect, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import projectsData from "./ProjectsData";
import { BackgroundGradient } from "./ui/background-gradient";
import { WavyBackground } from "./ui/wavy-background";

export const Projects: React.FC = () => {
  interface ProjectContent {
    title: string;
    description: string;
    button1: {
      text: string;
      link: string;
    };
    button2: {
      text: string;
      link: string;
    };
    content: JSX.Element;
  }

  const [content, setContent] = useState<ProjectContent[]>([]);

  useEffect(() => {
    const projectContents: ProjectContent[] = projectsData.map(
      (project: any) => ({
        title: project.title,
        description: project.description,
        button1: {
          text: "Github",
          link: project.githubLink,
        },
        button2: {
          text: "Live Site",
          link: project.liveLink,
        },
        content: (
          <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-gradient-to-b from-zinc-400 to-slate-500 light:bg-transparent">
            <img
              src={project.img}
              alt={project.title}
              className="h-56 w-80 rounded-[22px]"
            />
          </BackgroundGradient>
        ),
      })
    );

    setContent(projectContents);
  }, []);

  return (
    <div className="">
      <WavyBackground>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold inter-var text-center my-5">
          Projects
        </h1>
      </WavyBackground>
      <div className="">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Projects;
