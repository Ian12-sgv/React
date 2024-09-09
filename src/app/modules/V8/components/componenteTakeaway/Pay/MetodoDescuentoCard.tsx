import React from "react";
import "../../estilo/takeaway.css";
import CardMetodo from "./CardMetodo";
import check from "../../../../../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";

function MetodoDescuentoCard() {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuentoCash");
  };
  const handleClick = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDesc");
  };
  return (
    <div className="Metodo">
      <div className="title-metodo">Payment mode</div>

      <div className="metodo-desc">
        <div className="card-desc-card-card" onClick={handleClick}>
          Card
        </div>
        <div className="cash-desc" onClick={handleClick2}>
          Cash
        </div>
      </div>
    </div>
  );
}

export default MetodoDescuentoCard;
