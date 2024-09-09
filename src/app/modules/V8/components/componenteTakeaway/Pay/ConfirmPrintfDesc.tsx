import React from "react";
import OrdenPedidosMetodo from "./OrdenPedidosMetodo";
import PrinftConfirmDesc from "./PrinftConfirmDesc";
import "../../estilo/takeaway.css";

function ConfirmPrintfDesc() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenPedidosMetodo />
        </div>
        <div className="metodoCash">
          <PrinftConfirmDesc />
        </div>
      </div>
    </div>
  );
}

export default ConfirmPrintfDesc;
