import React from "react";
import "../../estilo/takeaway.css";
import TopPayDescuento from "./TopPayDescuento";
import MethoPayDesc from "./MethoPayDescuento";

function PaymentDescuento() {
  return (
    <div className="paymente-pay-container">
      <div className="top">
        <TopPayDescuento />
      </div>
      <div className="methoPay">
        <MethoPayDesc />
      </div>
    </div>
  );
}

export default PaymentDescuento;
