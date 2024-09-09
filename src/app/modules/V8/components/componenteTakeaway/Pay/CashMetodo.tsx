import React from "react";
import OrdenPedidosMetodo from "./OrdenPedidosMetodo";
import MetodoCash from "./MetodoCash";
import "../../estilo/takeaway.css";

function CashMetodo() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenPedidosMetodo />
        </div>
        <div className="metodoCash">
          <MetodoCash />
        </div>
      </div>
    </div>
  );
}

export default CashMetodo;
