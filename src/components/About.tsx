import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center w-[80%] md:w-[60%] mx-auto">
      <h1 className="text-3xl md:text-5xl my-10 font-bold">About Me</h1>

      <p className="md:text-lg text-pretty mb-8">
        I’m Tushar Dahiya, a full-stack developer based in India, focused on
        building production-ready web platforms and AI-powered automations for
        real businesses. I work at the intersection of engineering, systems
        design, and operational efficiency.
      </p>

      <p className="md:text-lg text-pretty mb-8">
        My background includes formal MERN stack training and advanced system
        design work, but my real strength lies in applying technology to solve
        practical problems. I’ve built role-based platforms, inbuilt CMS
        systems, automation workflows, and scalable backends used in real estate
        and service-based businesses.
      </p>

      <p className="md:text-lg text-pretty mb-8">
        My core stack includes{" "}
        <span className="font-mono bg-zinc-500 bg-opacity-40 px-1 rounded-lg">
          React, Next.js, Node.js, PostgreSQL/MongoDB, TypeScript, Prisma
        </span>
        , with a strong focus on clean architecture, performance, and
        maintainability. Increasingly, my work involves AI-driven automation to
        reduce manual operations and improve decision-making.
      </p>

      <p className="md:text-lg text-pretty mb-10">
        I prefer building systems that scale, automate repetitive work, and
        directly impact revenue or efficiency. If a project doesn’t solve a real
        problem, I’m usually not interested.
      </p>

      <h2 className="text-xl md:text-2xl my-5 font-bold">
        Custom web platforms, internal tools, and AI automation systems.
      </h2>
    </div>
  );
};

export default About;
