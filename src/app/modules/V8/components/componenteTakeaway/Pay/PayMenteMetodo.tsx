import React from "react";
import MetodoPay from "./MetodoPay";
import Metodo from "./Metodo";
function PayMenteMetodo() {
  return (
    <div className="paymente-pay">
      <div className="top">
        <Metodo />
      </div>
      <div className="methoPay">
        <MetodoPay />
      </div>
    </div>
  );
}

export default PayMenteMetodo;
