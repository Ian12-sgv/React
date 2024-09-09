import React from "react";
import "../estilo/takeaway.css";
import EatOrder from "./EatOrder";
import delet from "../../../../../assets/svg/delet.svg";
import add from "../../../../../assets/svg/add.svg";

function OrdenTop() {
  return (
    <div className="orden-top-content">
      <div className="header-orden">
        <div>
          <b>No.</b>
        </div>
        <div>
          <b>ELEMENTOS</b>
        </div>
        <div className="cant">
          <b>CANTIDAD</b>
        </div>
        <div>
          <b>DTO</b>
        </div>
        <div>
          <b>TOTAL</b>
        </div>
        <div>
          <b>ELIMINAR</b>
        </div>
      </div>
      <div className="orden-top-eat">
        <div className="eat-order">
          <EatOrder
            id="1"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="2"
            title="Hamburguesa clasica queso"
            cant="1"
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            price={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="3"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="4"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="5"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="6"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="7"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="6"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="7"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="6"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="7"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="6"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="7"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order-2">
          <EatOrder
            id="6"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
        <div className="eat-order">
          <EatOrder
            id="7"
            title="Hamburguesa clasica queso"
            cant="1"
            price={
              <span>
                <img src={add} />
              </span>
            }
            total={
              <span style={{ color: "red" }}>
                <b>$2.00</b>
              </span>
            }
            delet={delet}
          />
        </div>
      </div>
    </div>
  );
}

export default OrdenTop;
