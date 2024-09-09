import React from "react";
import PedidosOrdenDescuento from "./PedidosOdenDescuento";
import PaymentMetodoDescuentoCash from "./PaymentMetodoDescuentoCash";

function PayMetodoDescuentoCash() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <PedidosOrdenDescuento />
        </div>
        <div className="takeaway-Orden-pay">
          <PaymentMetodoDescuentoCash />
        </div>
      </div>
    </div>
  );
}

export default PayMetodoDescuentoCash;
