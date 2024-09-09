import React from "react";
import "../../estilo/takeaway.css";
import OrdenPedidos from "./OrdenPedidos";
import Paymente from "./Paymente";

const OrdenPay = () => {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenPedidos />
        </div>
        <div className="takeaway-Orden-pay">
          <Paymente />
        </div>
      </div>
    </div>
  );
};

export { OrdenPay };