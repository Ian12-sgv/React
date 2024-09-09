import React from "react";

interface CtgDerechoProps {
  titulo: string;
}
const CtgIzquierda: React.FC<CtgDerechoProps> = ({ titulo }) => {
  return (
    <div className="ctgDerecho">
      <h2 className="ctgDerecho__titulo" style={{ color: "white" }}>
        {titulo}
      </h2>
    </div>
  );
};

export default CtgIzquierda;
