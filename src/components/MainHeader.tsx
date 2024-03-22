import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { MdFileDownload } from "react-icons/md";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/background-beams";

const MainHeader: React.FC = () => {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "I'm",
    },
    {
      text: "Tushar",
    },
    {
      text: "Dahiya.",
    },
    {
      text: "I'm",
    },
    {
      text: "a",
    },
    {
      text: "full",
    },
    {
      text: "stack",
    },
    {
      text: "developer",
    },
    {
      text: "based",
    },
    {
      text: "in",
    },
    {
      text: "India",
      className:
        "bg-clip-text text-transparent bg-gradient-to-b from-[#FF671F] via-[#d4d4d8] to-[#046A38]",
    },
    {
      text: "!",
    },
  ];

  const paragraphHeader =
    "I love creating websites and gaming, doing freelance work and focusing on amazing UI designs for digital products. ❤️";

  return (
    <div className="h-dvh md:w-full rounded-md dark:bg-neutral-950 flex flex-col items-center justify-center antialiased pt-52 md:pt-20">
      <div className="md:flex items-center justify-between mx-auto w-[90%] md:w-[70%]">
        <div className="text-center mx-auto w-[90%] md:w-[80%]">
          <h1 className="w-full font-semibold mb-5">
            <TypewriterEffect words={words} />
          </h1>
          <TextGenerateEffect words={paragraphHeader} />
          <div className="flex items-center mt-5 justify-center flex-wrap gap-1 lg:gap-0">
            <a
              href="https://drive.google.com/file/d/1ZGbmOL9_4S7cg-rk71Aqkr4X66KPbGO7/view?usp=sharing"
              target="_blank"
              className="hover:scale-110 transition-all ease-in-out z-20"
            >
              <button className="mx-1 inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-200 transition-colors">
                Resume <MdFileDownload />
              </button>
            </a>
            <a
              href="https://github.com/tushardahiyaa"
              target="_blank"
              className="hover:scale-110 transition-all ease-in-out z-20"
            >
              <button className="mx-1 inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-200 transition-colors">
                Github <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/tushardahiya"
              target="_blank"
              className="hover:scale-110 transition-all ease-in-out z-20"
            >
              <button className="mx-1 inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-200 transition-colors">
                LinkedIn <FaLinkedin />
              </button>
            </a>
            <a
              href="https://twitter.com/tushardahiyaa"
              target="_blank"
              className="hover:scale-110 transition-all ease-in-out z-20"
            >
              <button className="mx-1 inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-200 transition-colors">
                Twitter <FaXTwitter />
              </button>
            </a>
          </div>
        </div>
        <img
          src="./header-image.jpg"
          alt=""
          className="rounded-full border-2 p-2 md:mx-20 border-zinc-300 movement text-center z-20 w-60 h-60 mx-auto mt-5 md:mt-0 md:w-80 md:h-80"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default MainHeader;
