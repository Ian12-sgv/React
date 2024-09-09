import React from "react";
import NumberView from "./NumberView";
import OrdenView from "./OrdenView";

function NumbreOrden() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenView />
        </div>
        <div className="takeaway-Orden-pay-view">
          <NumberView />
        </div>
      </div>
    </div>
  );
}

export default NumbreOrden;
