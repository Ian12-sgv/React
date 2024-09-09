import React from "react";
import PedidosOrdenDescuento from "./PedidosOdenDescuento";
import PaymentMetodoDescuento from "./PaymentMetodoDescuento";

function PayMetodoDescuento() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <PedidosOrdenDescuento />
        </div>
        <div className="takeaway-Orden-pay">
          <PaymentMetodoDescuento />
        </div>
      </div>
    </div>
  );
}

export default PayMetodoDescuento;
