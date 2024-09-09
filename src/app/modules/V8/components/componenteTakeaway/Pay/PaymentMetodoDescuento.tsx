import React from "react";
import MetodoPayDescuento from "./MetodoPayDescuento";
import MetodoDescuento from "./MetodoDescuento";
function PaymentMetodoDescuento() {
  return (
    <div className="paymente-pay-desc">
      <div className="top">
        <MetodoDescuento />
      </div>
      <div className="methoPay">
        <MetodoPayDescuento />
      </div>
    </div>
  );
}

export default PaymentMetodoDescuento;
