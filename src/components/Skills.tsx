import React, { useState } from "react";
// import { FaLongArrowAltUp } from "react-icons/fa";
import DetailedSkill from "./DetailedSkill";

const Skills: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>("");

  const skillsArray = [
    // Core Languages
    {
      skillName: "JavaScript",
      imageLink: "./SkillsImages/js.png",
      typeOfSkill: "Core Languages",
    },
    {
      skillName: "TypeScript",
      imageLink: "./SkillsImages/typescript.png",
      typeOfSkill: "Core Languages",
    },

    // Frontend Systems
    {
      skillName: "React",
      imageLink: "./SkillsImages/react.svg",
      typeOfSkill: "Frontend Systems",
    },
    {
      skillName: "Next.js",
      imageLink: "./SkillsImages/next-js.svg",
      typeOfSkill: "Frontend Systems",
    },
    {
      skillName: "Tailwind CSS",
      imageLink: "./SkillsImages/tailwind-css.svg",
      typeOfSkill: "Frontend Systems",
    },
    {
      skillName: "Bootstrap",
      imageLink: "./SkillsImages/bootstrap.png",
      typeOfSkill: "Frontend Systems",
    },

    // Backend & APIs
    {
      skillName: "Node.js",
      imageLink: "./SkillsImages/node-js.png",
      typeOfSkill: "Backend & APIs",
    },
    {
      skillName: "Express",
      imageLink: "./SkillsImages/express.png",
      typeOfSkill: "Backend & APIs",
    },

    // Databases & Data Layer
    {
      skillName: "PostgreSQL",
      imageLink: "./SkillsImages/postgresql.png",
      typeOfSkill: "Databases & Data Layer",
    },
    {
      skillName: "MongoDB",
      imageLink: "./SkillsImages/mongodb.png",
      typeOfSkill: "Databases & Data Layer",
    },
    {
      skillName: "MySQL",
      imageLink: "./SkillsImages/mysql.png",
      typeOfSkill: "Databases & Data Layer",
    },
    {
      skillName: "Prisma",
      imageLink: "./SkillsImages/prisma.png",
      typeOfSkill: "Databases & Data Layer",
    },

    // DevOps & Infrastructure
    {
      skillName: "Docker",
      imageLink: "./SkillsImages/docker.png",
      typeOfSkill: "DevOps & Infrastructure",
    },
    {
      skillName: "Git",
      imageLink: "./SkillsImages/git.png",
      typeOfSkill: "DevOps & Infrastructure",
    },

    // Automation & Tooling
    {
      skillName: "AI Automation",
      imageLink: "./SkillsImages/workflow_pilot_logo.png",
      typeOfSkill: "Automation & Tooling",
    },
  ];

  const uniqueSkillTypes = new Set(
    skillsArray.map((skill) => skill.typeOfSkill),
  );

  const filterSkills = (type?: string) => {
    if (!type) return skillsArray; // Return all skills if no type selected
    return skillsArray.filter((skill) => skill.typeOfSkill === type);
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const filteredSkills = filterSkills(selectedType);

  return (
    <div className="mb-24">
      <h1 className="text-center text-3xl md:text-5xl font-bold mt-8">
        Technical Skillset
      </h1>
      <div className="flex justify-center mb-4 md:w-[70%] mx-auto rounded-2xl my-10 flex-wrap gap-4 md:gap-1 text-xs md:text-sm">
        <button
          className={`w-24 mx-2 px-2 py-1 rounded-md light:text-zinc-900  dark:text-zinc-200 ${
            selectedType === "" ? "dark:bg-emerald-600 light: bg-teal-200" : ""
          }`}
          onClick={() => handleTypeClick("")}
        >
          All
        </button>
        {Array.from(uniqueSkillTypes).map((type) => (
          <button
            key={type}
            className={`w-24 mx-2 px-2 py-1 rounded-md light:text-zinc-900  dark:text-zinc-200  ${
              selectedType === type
                ? "dark:bg-emerald-600 light: bg-teal-200"
                : ""
            }`}
            onClick={() => handleTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {/* <p className="mt-5 text-sm md:text-xl flex items-center justify-center">
        <FaLongArrowAltUp />
        Filter by Skill Type
        <FaLongArrowAltUp />
      </p> */}
      <div className=" w-[80%] md:w-[60%] mx-auto md:my-10">
        <div className="grid grid-flow-row grid-cols-2 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-2 justify-evenly">
          {filteredSkills?.map((skill: any) => (
            <DetailedSkill
              key={skill.skillName}
              skillName={skill.skillName}
              imageLink={skill.imageLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
