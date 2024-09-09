import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";
import { ModalCheck } from "./ModalCheck";
function MetodoPay() {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/OrdenPay");
  };
  return (
    <div>
      <div className="metodoPay-Footer">
        <div className="back" onClick={handleClick2}>
          BACK
        </div>
        <div className="confirm-pay">
          <ModalCheck titulo="CONFIRM PAYMENT" />
        </div>
      </div>
    </div>
  );
}

export default MetodoPay;
