import React from "react";
import MetodoPayDescuentoCard from "./MetodoPayDescuentoCard";
import MetodoDescuentoCard from "./MetodoDescuentoCard";
function PaymentMetodoDescuentoCard() {
  return (
    <div className="paymente-pay-desc">
      <div className="top">
        <MetodoDescuentoCard />
      </div>
      <div className="methoPay">
        <MetodoPayDescuentoCard />
      </div>
    </div>
  );
}

export default PaymentMetodoDescuentoCard;
