import React from "react";
import "../../estilo/takeaway.css";
interface CardMetodoProps {
  titulo: string;
}

const CardMetodo: React.FC<CardMetodoProps> = ({ titulo }) => {
  return <div>{titulo}</div>;
};

export default CardMetodo;
