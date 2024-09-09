import React from "react";

interface EncabezadoMesaProps {
  url: string;
}

const PositionGreen: React.FC<EncabezadoMesaProps> = ({ url }) => {
  return (
    <div className="positionGreen">
      <img src={url} />
    </div>
  );
};
export default PositionGreen;
