import "@/components/introduction/style.css";
// import ProfilePicture from "@/public/picture/myPicture.jpg";
import Image from "next/image";
import { BigButton } from "../bigButton/BigButton";

export const Introduction = () => {
  return (
    <div className="introductionContainer">
      <div className="profilePicture">
        <Image
          src="/picture/myPicture.jpg"
          alt="my picture"
          width={350}
          height={350}
          className="profileImage"
        />
      </div>
      <div className="IntroductionInfo">
        <h2>Hello I&apos;m</h2>
        <h1>Delnaz Pourmatin</h1>

        <h4>Front-End Developer</h4>
        <p>
          Building responsive and user-centric web applications with React,
          TypeScript, and Next.js.
        </p>

        {/* <div className="buttonContainer">
          <a href="/resume/DelnazPourmatin-resume.pdf" download>
            <BigButton text="Download Resume" />
          </a>
        </div> */}
      </div>
    </div>
  );
};
