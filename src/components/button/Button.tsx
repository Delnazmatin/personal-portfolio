import "@/components/button/style.css";
import type { ButtonProps } from "@/app/page.tsx";

export const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="button">{text}</button>
    </>
  );
};
