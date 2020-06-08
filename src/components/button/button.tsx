import React from "react";

import "./button.css";

interface ButtonProps {
  value: string;
  leftIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.SFC<ButtonProps> = ({
  value,
  variant,
  leftIcon,
  onClick,
}) => (
  <button className={`button ${variant}`} onClick={onClick}>
    {leftIcon} {value}
  </button>
);

Button.defaultProps = {
  variant: "primary",
};

export default Button;
