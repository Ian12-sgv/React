import React from "react";
import MetodoDescuentoCash from "./MetodoDescuentoCash";
import MetodoPayDescuentoCash from "./MetodoPayDescuentoCash";
function PaymentMetodoDescuentoCash() {
  return (
    <div className="paymente-pay-desc">
      <div className="top">
        <MetodoDescuentoCash />
      </div>
      <div className="methoPay">
        <MetodoPayDescuentoCash />
      </div>
    </div>
  );
}

export default PaymentMetodoDescuentoCash;
