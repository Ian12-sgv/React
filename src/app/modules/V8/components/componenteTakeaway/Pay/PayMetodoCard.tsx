import React from "react";
import PedidosOrdenDescuento from "./PedidosOdenDescuento";

import PayMenteMetodoDesc from "./PayMentodoDesc";

function PayMetodoCard() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <PedidosOrdenDescuento />
        </div>
        <div className="takeaway-Orden-pay">
          <PayMenteMetodoDesc />
        </div>
      </div>
    </div>
  );
}

export default PayMetodoCard;
