import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SparklesCore } from "./sparkles";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
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
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const scrollContainerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--zinc-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="overflow-hidden h-[40rem] md:h-[30rem] w-[95%] md:w-[70%] mx-auto overflow-y-auto md:flex justify-center relative md:space-x-10 rounded-xl p-2 md:p-10 scrollHidden"
      ref={scrollContainerRef}
    >
      <div className="relative md:flex items-start px-4 md:w-[60%]">
        <div className="md:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="pt-16 pb-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl md:text-5xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base text-slate-300 mt-10"
              >
                {item.description}
              </motion.p>
              <div className="flex space-x-4 mt-10">
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="p-[3px] relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-5 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent z-10">
                    <a href={item.button1.link} target="_blank">
                      {item.button1.text}
                    </a>
                  </div>
                </motion.button>
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="p-[3px] relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent z-10">
                    <a href={item.button2.link} target="_blank">
                      {item.button2.text}
                    </a>
                  </div>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-fit w-80 rounded-[22px] bg-white md:sticky top-20 overflow-hidden z-10",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </motion.div>
      <div className="scroll-downs absolute flex top-2 inset-x-0 left-1/3 md:left-[45%]">
        <motion.div className="z-0 mousey">
          <div className="scroller" />
          <p className="relative text-sm text-center bottom-5 left-7">
            Scroll for more
          </p>
        </motion.div>
      </div>
      <SparklesCore
        background={backgroundColors[activeCard % backgroundColors.length]}
        minSize={0.02}
        maxSize={0.7}
        particleDensity={window.innerWidth < 400 ? 1500 : 2000}
        className="absolute scale-y-[420%] scale-x-[500%] md:scale-x-[400%] md:scale-y-[520%] inset-x-0 inset-y-0"
        particleColor="#FFFFFF"
      />
    </motion.div>
  );
};
