import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";
function MethoPayDesc() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuento");
  };

  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/OrdenPay");
  };
  return (
    <div>
      <div className="methoPay-Footer">
        <div className="back" onClick={handleClick2}>
          BACK
        </div>
        <div className="next-pay" onClick={handleClick}>
          APLICAR
        </div>
      </div>
    </div>
  );
}

export default MethoPayDesc;
