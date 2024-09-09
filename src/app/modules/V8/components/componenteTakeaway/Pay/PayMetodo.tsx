import React from "react";
import OrdenPedidosMetodo from "./OrdenPedidosMetodo";
import PayMenteMetodo from "./PayMenteMetodo";

function PayMetodo() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenPedidosMetodo />
        </div>
        <div className="takeaway-Orden-pay">
          <PayMenteMetodo />
        </div>
      </div>
    </div>
  );
}

export default PayMetodo;
