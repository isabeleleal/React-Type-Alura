import React from "react";
import "./button.css";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}
function Botao({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className="botao">
      {children}
    </button>
  );
}

export default Botao;
