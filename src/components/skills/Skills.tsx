import "@/components/skills/style.css";
import { SkillsData } from "@/data/skillData";
export const Skills = () => {
  return (
    <div className="skillsContainer" id="skills">
      <h1> Skills</h1>
      <ul>
        {SkillsData.map((skill, index) => {
          return (
            <li key={index}>
              <span className="skillTitle">{skill.name}</span>
              {skill.icon && (
                <span className="skillIcon">
                  <skill.icon />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
