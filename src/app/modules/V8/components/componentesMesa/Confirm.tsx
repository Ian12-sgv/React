import React from "react";

interface ConfirmProps {
  titulo: string;
}

const Confirm: React.FC<ConfirmProps> = ({ titulo }) => {
  return (
    <div className="contenidoMesa">
      <div className="contenedorMesa">
        <div className="entrada">
          <h3 style={{ color: "white" }}>{titulo}</h3>
        </div>
      </div>
    </div>
  );
};
export default Confirm;
