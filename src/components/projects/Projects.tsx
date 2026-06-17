import "@/components/projects/style.css";
import Image from "next/image";
import { Button } from "../button/Button";
import { ProjectData } from "@/data/projectData";

export const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1>Projects</h1>
      <ul>
        {ProjectData.map((project, index) => {
          return (
            <li key={index}>
              <Image
                src={project.imageSource}
                alt={project.imageAlt}
                width={100}
                height={250}
              />
              <h4>{project.name}</h4>
              <p>{project.explanation}</p>
              <h5>Tech: {project.tech}</h5>
              <a className="linkToGitHub" href={project.gitHubLink}>
                <Button text="go to gitHub" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
