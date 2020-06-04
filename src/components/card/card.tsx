import React from "react";

import "./card.css";

interface CardProps {
  imageUrl: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: React.SFC<CardProps> = ({ text, imageUrl, onClick }) => (
  <div className="card" onClick={onClick}>
    <div
      className="card__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="card__text">{text}</div>
  </div>
);

export default Card;
