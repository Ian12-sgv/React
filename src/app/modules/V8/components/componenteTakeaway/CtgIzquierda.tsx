import React from "react";
import "../estilo/takeaway.css";

interface CtgIzquierdaProps {
  titulo: string;
}
const CtgIzquierda: React.FC<CtgIzquierdaProps> = ({ titulo }) => {
  return (
    <div className="ctgIzquierda">
      <div className="ctgIzquierda__titulo">
        {
          <span style={{ color: "white" }}>
            <b>{titulo}</b>
          </span>
        }
      </div>
    </div>
  );
};

export default CtgIzquierda;
