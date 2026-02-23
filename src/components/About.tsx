import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-[85%] md:w-[60%] mx-auto">
      <h1 className="text-center text-3xl md:text-5xl my-10 font-bold">
        About Me
      </h1>

      {/* Intro */}
      <p className="md:text-lg text-center text-neutral-300 mb-12 leading-relaxed">
        I’m <span className="font-semibold text-white">Tushar Dahiya</span>, a
        full-stack developer based in India, focused on building
        production-ready web platforms and AI-driven automation systems for real
        businesses.
      </p>

      {/* Focus */}
      <div className="mb-12">
        <h2 className="text-lg md:text-2xl font-semibold mb-5">
          What I work on
        </h2>

        <ul className="space-y-2 md:text-lg text-neutral-300">
          <li>• Scalable, production-ready web platforms</li>
          <li>• Internal tools, dashboards, and CMS systems</li>
          <li>• Workflow automation to reduce manual operations</li>
          <li>• Systems designed for long-term maintainability</li>
        </ul>
      </div>

      {/* Background */}
      <div className="mb-12">
        <h2 className="text-lg md:text-2xl font-semibold mb-5">Background</h2>

        <p className="md:text-lg text-neutral-300 leading-relaxed">
          I have formal MERN stack training combined with hands-on experience
          building real-world systems. My work spans role-based platforms,
          inbuilt CMS solutions, automation workflows, and scalable backends
          used in real estate and service-based businesses.
        </p>
      </div>

      {/* Stack */}
      <div className="mb-10">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">Core stack</h2>

        <div className="flex flex-wrap gap-2 text-sm md:text-base">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Prisma",
          ].map((tech) => (
            <span
              key={tech}
              className="font-mono bg-zinc-500/25 px-3 py-1 rounded-lg text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="md:text-lg text-neutral-300 mt-6 leading-relaxed">
          My work focuses on systems that are deployed, maintained, and actively
          used in real business environments.
        </p>
      </div>

      {/* Closing */}
      <div className="text-center">
        <h3 className="text-md md:text-xl font-bold bg-zinc-600/25 rounded-lg p-4">
          Custom web platforms, internal tools, and AI automation systems.
        </h3>
      </div>
    </div>
  );
};

export default About;
