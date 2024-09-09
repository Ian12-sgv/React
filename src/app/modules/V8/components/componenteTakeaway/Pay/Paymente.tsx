import React from "react";
import "../../estilo/takeaway.css";
import TopPay from "./TopPay";
import MethoPay from "./MethoPay";

function Paymente() {
  return (
    <div className="paymente-pay-container">
      <div className="top">
        <TopPay />
      </div>
      <div className="methoPay">
        <MethoPay />
      </div>
    </div>
  );
}

export default Paymente;
