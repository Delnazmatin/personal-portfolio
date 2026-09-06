import { FaHtml5, FaReact, FaSass, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiJavascriptLine, RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiVitest } from "react-icons/si";
import { TbBrandTypescript, TbFileTypeCss } from "react-icons/tb";
import { SiAxios } from "react-icons/si";
import { PiClipboardTextFill } from "react-icons/pi";
import { SiZod, SiVite } from "react-icons/si";
import { GiOctopus } from "react-icons/gi";
import type { IconType } from "react-icons";

type SkillsDataType = {
  name: string;
  icon: IconType | null;
};

export const SkillsData: SkillsDataType[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: TbFileTypeCss },
  { name: "Sass", icon: FaSass },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "React Hook Form", icon: PiClipboardTextFill },
  { name: "Zod", icon: SiZod },

  { name: "REST APIs", icon: null },
  { name: "Axios", icon: SiAxios },

  { name: "Vitest", icon: SiVitest },
  { name: "React Testing Library", icon: GiOctopus },

  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];
