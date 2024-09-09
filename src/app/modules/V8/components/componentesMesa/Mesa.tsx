import React from "react";
import "../estilo/mesa.css";
interface EncabezadoMesasProps {
  titulo: string;
  table: string;
  pax: string;
  data1: string;
  data2: string;
}

const Mesa: React.FC<EncabezadoMesasProps> = ({
  titulo,
  table,
  pax,
  data1,
  data2,
}) => {
  return (
    <div className="contenidoMesa">
      <div className="contenedorMesa">
        <div className="entrada">
          <h3>{titulo}</h3>
        </div>
        <div className="posicion">
          <div className="tablePosition">
            <div>{table}</div>
            <div>{data1}</div>
          </div>
          <div className="tablePositionPax">
            <div>{pax}</div>
            <div>{data2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mesa;
