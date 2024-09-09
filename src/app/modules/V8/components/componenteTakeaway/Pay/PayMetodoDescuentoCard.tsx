import React from "react";
import PedidosOrdenDescuento from "./PedidosOdenDescuento";

import PaymentMetodoDescuentoCard from "./PaymentMetodoDescuentoCard";

function PayMetodoDescuentoCard() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <PedidosOrdenDescuento />
        </div>
        <div className="takeaway-Orden-pay">
          <PaymentMetodoDescuentoCard />
        </div>
      </div>
    </div>
  );
}

export default PayMetodoDescuentoCard;
