import "@/components/footer/style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="footerContainer" id="contactMe">
      <div className="socialMedia">
        <a href="https://github.com/Delnazmatin">
          <span>
            <FaGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/delnaz-pourmatin-771018352/">
          <span>
            <FaLinkedin />
          </span>
        </a>
        <a href="mailto:Delnazmatin@gmail.com">
          <span>
            <MdEmail />
          </span>
        </a>
      </div>
      <h4>Delnazmatin@gmail.com</h4>
    </div>
  );
};
