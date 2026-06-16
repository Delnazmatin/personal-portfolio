import { FaHtml5, FaReact, FaSass, FaGithub } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbFileTypeCss } from "react-icons/tb";

import type { IconType } from "react-icons";

type SkillsDataType = {
  name: string;
  icon: IconType | null;
};
export const SkillsData: SkillsDataType[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: TbFileTypeCss },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Git", icon: FaGitAlt },
  { name: "Sass", icon: FaSass },
  { name: "GitHub", icon: FaGithub },
  { name: "REST APIs", icon: null },
];
