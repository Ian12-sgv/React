import React from "react";
import "../../estilo/takeaway.css";
import OrdenPedidos from "./OrdenPedidos";
import PaymentDescuento from "./PaymentDescuento";

const OrdenPayDescuento = () => {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenPedidos />
        </div>
        <div className="takeaway-Orden-pay">
          <PaymentDescuento />
        </div>
      </div>
    </div>
  );
};

export { OrdenPayDescuento };
