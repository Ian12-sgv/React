import React from "react";
import "../../estilo/takeaway.css";

function TopPayDescuento() {
  return (
    <div className="top-pay">
      <div className="top-pay-title">Discount options</div>
      <div className="top-pay-info">
        <div className="top-pay-info-title-desc">Student discount</div>
        <div className="top-pay-info-title">Staff discount</div>
      </div>
      <div className="staff">Staff discount</div>
      <div className="total-descuento">
        <div className="total-discount">Total Discount:</div>
        <div className="discount">20% off</div>
      </div>
    </div>
  );
}

export default TopPayDescuento;
