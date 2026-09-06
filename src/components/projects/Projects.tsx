import "@/components/projects/style.css";
import Image from "next/image";
import { Button } from "../button/Button";
import { ProjectData } from "@/data/projectData";

export const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1 className="projectHeader">Projects</h1>
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
              <section className="explainProject">
                <h1>{project.name}</h1>
                <p>{project.explanation}</p>
                <h5>Tech: {project.tech}</h5>
                <a className="linkToGitHub" href={project.gitHubLink}>
                  <Button text="go to gitHub" />
                </a>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
