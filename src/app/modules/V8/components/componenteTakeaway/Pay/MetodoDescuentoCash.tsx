import React from "react";
import "../../estilo/takeaway.css";
import CardMetodo from "./CardMetodo";
import check from "../../../../../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";

function MetodoDescuentoCash() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuento");
  };
  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuentoCard");
  };

  return (
    <div className="Metodo">
      <div className="title-metodo">Payment mode</div>

      <div className="metodo-desc">
        <div className="card-desc-card" onClick={handleClick2}>
          Card
        </div>
        <div className="cash-desc-cash" onClick={handleClick}>
          Cash
        </div>
      </div>
    </div>
  );
}

export default MetodoDescuentoCash;
