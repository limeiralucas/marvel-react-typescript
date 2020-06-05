import React from "react";

import "./button.css";

interface ButtonProps {
  value: string;
  variant?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.SFC<ButtonProps> = ({ value, variant, onClick }) => (
  <button className={`button ${variant}`} onClick={onClick}>
    {value}
  </button>
);

Button.defaultProps = {
  variant: "primary",
};

export default Button;
