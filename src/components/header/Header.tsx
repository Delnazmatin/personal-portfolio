import "@/components/header/style.css";
import { Logo } from "../logo/Logo";

export const Header = () => {
  return (
    <header className="">
      <Logo />
      <div className="navbar">
        <ul>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#education">
            <li>Education</li>
          </a>
          <a href="#experience">
            <li>Experience</li>
          </a>
          <a href="#contactMe">
            <li>Contact me</li>
          </a>
        </ul>
      </div>
    </header>
  );
};
