import React from "react";
import TopOrdenDescuento from "./TopOrdenDescuento";
import { Navigate, useNavigate } from "react-router-dom";
import "../../estilo/takeaway.css";
import Profile from "../../../../../../assets/svg/Profile.svg";
import { NavLink } from "react-router-dom";
import add from "../../../../../../assets/svg/add.svg";

function PedidosOrdenDescVoid() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/restaurante/ordenPay");
  };

  return (
    <div className="orden-content-pedidos">
      <div className="orden-top">
        {" "}
        <TopOrdenDescuento />
      </div>
      <div className="orden-bottom">
        <div className="takeaway-ContenidoOrder-Orden">
          <div className="button-orden">
            <div className="bottom-title-orden">
              <div
                style={{ fontWeight: "bold", color: "rgba(155, 155, 155, 1)" }}
              >
                JIMMY TAN
              </div>
              <div>
                <img src={Profile} />
              </div>
            </div>
            <div className="bottom-data-orden">
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>
                Jurong west st 65 blk 123-A #12-12
              </div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>8284 5288</div>
            </div>
            <div className="bottom-client-orden">
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>Expire:</div>
              <div style={{ fontWeight: "bold" }}>24/02/21</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>POINT: </div>
              <div className="point">80</div>
            </div>
          </div>
          <div className="orden-bottom-info">
            <div className="bottom-top-info-orden">
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>Sub total</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>Impuesto</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>Propina</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>Descuento</div>
              <div className="total-ContenidoOrden">Total</div>
            </div>
            <div className="bottom-top-info-orden">
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>$50.00</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>$5.00</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>$3.50</div>
              <div style={{ color: "rgba(155, 155, 155, 1)" }}>-$4.00</div>
              <div className="total-ContenidoOrden">$46.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="orden-bottom-buttons">
        <div className="imprimir-desc">Impimir</div>
        <div className="pagar-desc">Pagada</div>
      </div>
    </div>
  );
}

export default PedidosOrdenDescVoid;
