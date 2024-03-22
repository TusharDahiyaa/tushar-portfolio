import { BackgroundGradient } from "./ui/background-gradient";

type SkillType = {
  skillName: string;
  imageLink: string;
};

export default function DetailedSkill({ skillName, imageLink }: SkillType) {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-1 md:p-5 bg-white dark:bg-gradient-to-b from-zinc-400 to-slate-500 light:bg-transparent">
      <div className="transition-all ease-in-out hover:scale-[105%]">
        <img
          src={imageLink}
          alt=""
          className="w-16 h-16 md:w-[50%] mx-auto md:h-24"
        />
        <h1 className="cursor-pointer w-28 mx-auto text-sm md:text-xl font-bold text-center mt-2 md:mt-5 p-1 border-2 rounded-full md:rounded dark:hover:bg-zinc-900 light: hover:bg-zinc-200">
          {skillName}
        </h1>
      </div>
    </BackgroundGradient>
  );
}
