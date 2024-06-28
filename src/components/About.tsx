import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center w-[80%] md:w-[60%] mx-auto">
      <h1 className=" text-3xl md:text-5xl my-10 font-bold">About Me 🧘‍♂️</h1>
      <p className="md:text-lg text-pretty mb-10">
        Hey there! 👋 I'm Tushar Dahiya, a full-stack web developer from India.
        By day, I'm a freelancer, and I've sharpened my skills at the{" "}
        <a
          href="https://www.credential.net/79667545-557f-46c8-91d0-d6e58e0edf0f"
          target="_blank"
          className="bg-stone-400 bg-opacity-40 px-1 rounded-lg"
        >
          MERN stack bootcamp from Upgrad.
        </a>{" "}
        Right now, I'm diving deep into the coding world as part of the 100xdevs
        Cohort, soaking up knowledge like a sponge. I love that eureka moment
        when everything clicks into place while solving problems.
      </p>
      <p className="md:text-lg text-pretty mb-10">
        My tech toolkit includes{" "}
        <span className="font-mono bg-zinc-500 bg-opacity-40 px-1 rounded-lg">
          React, Next.js, Node.js and MongoDB/PostgreSQL, with TypeScript and
          Prisma
        </span>{" "}
        adding that extra touch of magic. I'm always on the hunt for new tech to
        explore. Currently, I'm on the lookout for a full-time gig as a
        full-stack developer and ready to bring my A-game to any team.
      </p>
      <p className="md:text-lg text-pretty mb-10">
        When I'm not coding, you'll find me gaming, binging on movies, or just
        hanging out. Like Curious George, I'm always excited for the next tech
        adventure. 🐒✨
      </p>
    </div>
  );
};

export default About;
