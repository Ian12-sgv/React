import React from "react";
import PedidosOrdenDescuento from "./PedidosOdenDescuento";
import MetodoCashDesc from "./MetodoCashDesc";
import "../../estilo/takeaway.css";

function CardMetodoDesc() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <PedidosOrdenDescuento />
        </div>
        <div className="metodoCash">
          <MetodoCashDesc />
        </div>
      </div>
    </div>
  );
}

export default CardMetodoDesc;
