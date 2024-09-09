import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";
import { ModalCheck } from "./ModalCheck";
function MetodoPayDescuentoCash() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crafted/V8/restaurante/CardMetodoDesc");
  };

  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuentoCash");
  };

  return (
    <div>
      <div className="metodoPay-Footer">
        <div className="back" onClick={handleClick2}>
          BACK
        </div>
        <div className="confirm-pay" onClick={handleClick}>
          PROCEED
        </div>
      </div>
    </div>
  );
}

export default MetodoPayDescuentoCash;
