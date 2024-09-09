import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";

function TopPay() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/restaurante/OrdenPayDescuento");
  };
  return (
    <div className="top-pay">
      <div className="top-pay-title">Discount options</div>
      <div className="top-pay-info">
        <div className="top-pay-info-title" onClick={handleClick}>
          Student discount
        </div>
        <div className="top-pay-info-title">Staff discount</div>
      </div>
      <div className="staff">Staff discount</div>
    </div>
  );
}

export default TopPay;
