import React from "react";
import "../../estilo/takeaway.css";
import CardMetodo from "./CardMetodo";
import check from "../../../../../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";

function Metodo() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/restaurante/CashMetodo");
  };
  return (
    <div className="Metodo">
      <div className="title-metodo">Payment mode</div>
      <div className="check">
        <img src={check} />
      </div>

      <div id="cssportal-grid">
        <div id="div1">
          <CardMetodo titulo="Card A" />
        </div>
        <div id="div2">
          <CardMetodo titulo="Card A" />
        </div>
        <div id="div3">
          <CardMetodo titulo="Card A" />
        </div>
        <div id="div4"></div>
        <div id="div5"></div>
        <div id="div6"></div>
        <div id="div7"></div>
        <div id="div8" onClick={handleClick}>
          <CardMetodo titulo="Cash" />
        </div>
      </div>
    </div>
  );
}

export default Metodo;
