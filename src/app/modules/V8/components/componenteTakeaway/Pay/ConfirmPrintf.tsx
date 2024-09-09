import React from "react";
import OrdenPedidosMetodo from "./OrdenPedidosMetodo";
import PrinftConfirm from "./PrinftConfirm";
import "../../estilo/takeaway.css";

function ConfirmPrintf() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenPedidosMetodo />
        </div>
        <div className="metodoCash">
          <PrinftConfirm />
        </div>
      </div>
    </div>
  );
}

export default ConfirmPrintf;
