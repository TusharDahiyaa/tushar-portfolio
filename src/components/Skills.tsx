import React, { useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import DetailedSkill from "./DetailedSkill";

const Skills: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>("");

  const skillsArray = [
    {
      skillName: "JavaScript",
      imageLink: "./SkillsImages/js.png",
      typeOfSkill: "Programming Language",
    },
    {
      skillName: "TypeScript",
      imageLink: "./SkillsImages/typescript.png",
      typeOfSkill: "Programming Language",
    },
    {
      skillName: "HTML",
      imageLink: "./SkillsImages/html.png",
      typeOfSkill: "Frontend Development",
    },
    {
      skillName: "CSS",
      imageLink: "./SkillsImages/css-3.png",
      typeOfSkill: "Frontend Development",
    },
    {
      skillName: "React",
      imageLink: "./SkillsImages/react.svg",
      typeOfSkill: "Frontend Development",
    },
    {
      skillName: "Next.js",
      imageLink: "./SkillsImages/next-js.svg",
      typeOfSkill: "Frontend Development",
    },
    {
      skillName: "Node.js",
      imageLink: "./SkillsImages/node-js.png",
      typeOfSkill: "Backend Development",
    },
    {
      skillName: "Git",
      imageLink: "./SkillsImages/git.png",
      typeOfSkill: "Version Control",
    },
    {
      skillName: "Tailwind",
      imageLink: "./SkillsImages/tailwind-css.svg",
      typeOfSkill: "CSS Framework",
    },
    {
      skillName: "Bootstrap",
      imageLink: "./SkillsImages/bootstrap.png",
      typeOfSkill: "CSS Framework",
    },
    {
      skillName: "Prisma",
      imageLink: "./SkillsImages/prisma.png",
      typeOfSkill: "Database",
    },
    {
      skillName: "MongoDB",
      imageLink: "./SkillsImages/mongodb.png",
      typeOfSkill: "Database",
    },
    {
      skillName: "Recoil",
      imageLink: "./SkillsImages/recoil.svg",
      typeOfSkill: "Frontend Development",
    },
    {
      skillName: "Docker",
      imageLink: "./SkillsImages/docker.png",
      typeOfSkill: "Deployment",
    },
    {
      skillName: "Express",
      imageLink: "./SkillsImages/express.png",
      typeOfSkill: "Backend Development",
    },
    {
      skillName: "PostgreSQL",
      imageLink: "./SkillsImages/postgresql.png",
      typeOfSkill: "Database",
    },
    {
      skillName: "MYSQL",
      imageLink: "./SkillsImages/mysql.png",
      typeOfSkill: "Database",
    },
    {
      skillName: "Figma",
      imageLink: "./SkillsImages/figma.png",
      typeOfSkill: "Design",
    },
    {
      skillName: "Photoshop",
      imageLink: "./SkillsImages/photoshop.svg",
      typeOfSkill: "Design",
    },
    {
      skillName: "Canva",
      imageLink: "./SkillsImages/canva.svg",
      typeOfSkill: "Design",
    },
  ];

  const uniqueSkillTypes = new Set(
    skillsArray.map((skill) => skill.typeOfSkill)
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
        Skills ⚙️
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
      <p className="mt-5 text-sm md:text-xl flex items-center justify-center">
        <FaLongArrowAltUp />
        Filter by Skill Type
        <FaLongArrowAltUp />
      </p>
      <div className=" w-[80%] md:w-[60%] mx-auto md:my-10">
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-evenly">
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
