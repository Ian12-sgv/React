import React from "react";
import NumberViewVoid from "./NumberViewVoid";
import OrdenVoid from "./OrdenVoid";

function NumbreVoid() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenVoid />
        </div>
        <div className="takeaway-Orden-pay-view">
          <NumberViewVoid />
        </div>
      </div>
    </div>
  );
}

export default NumbreVoid;
