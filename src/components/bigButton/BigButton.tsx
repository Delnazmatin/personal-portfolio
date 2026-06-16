import "@/components/bigButton/style.css";
import type { ButtonProps } from "@/app/page.tsx";

export const BigButton = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="bigButton">{text}</button>
    </>
  );
};
