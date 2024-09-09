import React from "react";
import "../estilo/takeaway.css";
import comida1 from "../../../../../assets/svg/comida1.svg";

function Hamburguesa() {
  return (
    <div>
      <div className="hamburguesa">
        <div className="hamburguesa-izq">
          <img src={comida1} className="comida1" />
          <div className="hamburguesa-info">
            <div className="hamburguesa-title">Hamburguesa black Agus</div>
            <div className="hamburguesa-price">$5.50</div>
          </div>
        </div>
        <div className="hamburguesa-med">
          <div>
            <img src={comida1} className="comida1" />
            <div className="hamburguesa-info">
              <div className="hamburguesa-title"> Hamburguesa black Agus</div>
              <div className="hamburguesa-price"> $5.50</div>
            </div>
          </div>
        </div>
        <div className="hamburguesa-der">
          {" "}
          <div>
            <img src={comida1} className="comida1" />
            <div className="hamburguesa-info">
              <div className="hamburguesa-title"> Hamburguesa black Agus</div>
              <div className="hamburguesa-price"> $5.50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburguesa;
