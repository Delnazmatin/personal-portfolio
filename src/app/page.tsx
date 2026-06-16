import { AboutMe } from "@/components/aboutMe/AboutMe";
import { Education } from "@/components/education/Education";
import { Experience } from "@/components/experience/Experience";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Introduction } from "@/components/introduction/Introduction";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

export type ButtonProps = {
  text: string;
};

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Experience />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
