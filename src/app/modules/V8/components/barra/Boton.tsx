import React from "react";

interface BotonProps {
  button: string;
}

const Boton: React.FC<BotonProps> = ({ button }) => {
  return (
    <div>
      <img src={button} />
    </div>
  );
};

export default Boton;
