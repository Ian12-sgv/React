import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";
import { ModalCheckDesc } from "./ModalCheckDesc";
function MetodoPayCard() {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuento");
  };
  return (
    <div>
      <div className="metodoPay-Footer">
        <div className="back" onClick={handleClick2}>
          BACK
        </div>
        <div className="confirm-pay">
          <ModalCheckDesc titulo="CONFIRM PAYMENT" />
        </div>
      </div>
    </div>
  );
}

export default MetodoPayCard;
