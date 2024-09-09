import React from "react";
import OrdenView from "./OrdenView";
import ViewOrdenPrevius from "./ViewOrdenPrevius";

function ReciboPay() {
  return (
    <div className="takeaway-page-Orden">
      <div className="takeaway-Orden">
        <div className="takeaway-Orden-content">
          <OrdenView />
        </div>
        <div className="takeaway-Orden-pay-view">
          <ViewOrdenPrevius />
        </div>
      </div>
    </div>
  );
}

export default ReciboPay;
