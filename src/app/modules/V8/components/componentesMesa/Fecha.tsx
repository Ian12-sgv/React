import React from "react";
import "../estilo/mesa.css";
interface EncabezadoFechaProps {
  titulo: string;
  subtitulo: string;
}
const Fecha: React.FC<EncabezadoFechaProps> = ({ titulo, subtitulo }) => {
  return (
    <div className="contenidoFecha">
      <div className="fechaHora">
        <div className="fecha">{titulo}</div>
        <div className="hora">{subtitulo}</div>
      </div>
    </div>
  );
};

export default Fecha;
