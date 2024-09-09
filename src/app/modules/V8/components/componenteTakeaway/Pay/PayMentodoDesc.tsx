import React from "react";
import MetodoPayCard from "./MetodoPayCard";
import MetodoDesc from "./MetodoDesc";
function PayMenteMetodoDesc() {
  return (
    <div className="paymente-pay">
      <div className="top-desc">
        <MetodoDesc />
      </div>
      <div className="methoPay-desc">
        <MetodoPayCard />
      </div>
    </div>
  );
}

export default PayMenteMetodoDesc;
