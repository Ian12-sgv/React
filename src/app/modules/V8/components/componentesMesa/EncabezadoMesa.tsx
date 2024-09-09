import React from "react";
import "../estilo/mesa.css";

interface EncabezadoMesaProps {
  titulo: string;
  url: string;
}

const EncabezadoMesa: React.FC<EncabezadoMesaProps> = ({ titulo, url }) => {
  return (
    <div className="contenidoEncabezado">
      <img src={url} className="imagenEncabezado" />
      <h2 className="encabezados">{titulo}</h2>
    </div>
  );
};

export default EncabezadoMesa;
