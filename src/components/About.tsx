import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center w-[80%] md:w-[60%] mx-auto">
      <h1 className=" text-3xl md:text-5xl my-10 font-bold">About Me 🧘‍♂️</h1>
      <p className="md:text-lg text-pretty mb-10">
        Hello there! 👋 I'm Tushar Dahiya, your friendly neighborhood full-stack
        web developer hailing from India. By day, I'm a freelancer armed with
        skills honed in the illustrious{" "}
        <a
          href="https://www.credential.net/79667545-557f-46c8-91d0-d6e58e0edf0f"
          target="_blank"
          className="bg-stone-400 bg-opacity-40 px-1 rounded-lg"
        >
          MERN stack bootcamp from Upgrad.
        </a>{" "}
        Currently, I'm navigating the coding cosmos as part of the 100xdevs
        Cohort, soaking up knowledge like a sponge in a data ocean. Solving
        problems is my jam; there's nothing quite like that eureka moment when
        everything falls into place.
      </p>
      <p className="md:text-lg text-pretty mb-10">
        My tech arsenal includes{" "}
        <span className="font-mono bg-zinc-500 bg-opacity-40 px-1 rounded-lg">
          React, Next.js, Node.js and MongoDB/PostgreSQL, with TypeScript and
          Prisma
        </span>{" "}
        adding that extra sprinkle of magic. I'm always on the prowl for new
        tech to sink my teeth into. I'm also on the lookout for a full-time gig
        as a full-stack developer, I'm ready to bring my A-game to any team.
      </p>
      <p className="md:text-lg text-pretty mb-10">
        When I'm not coding, I'm gaming, movie-binging, or hanging out. Just
        like curious George, I'm always eager for the next tech adventure. 🐒✨
      </p>
    </div>
  );
};

export default About;
