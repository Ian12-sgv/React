import React from "react";
import TopOrdenDescuento from "./TopOrdenDescuento";
import { Navigate, useNavigate } from "react-router-dom";
import "../../estilo/takeaway.css";
import { NavLink } from "react-router-dom";
import add from "../../../../../../assets/svg/add.svg";

function PedidosOrden() {
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
        <div className="orden-bottom-content">
          <div className="orden-bottom-top">
            <div className="orden-bottom-title">
              <b>Introduce n. de telefono</b>
            </div>
            <div className="orden-bottom-client">
              <b>+ Cliente</b>
            </div>
          </div>
          <div className="orden-bottom-info-pedidos">
            <div className="orden-bottom-top-info">
              <div>Sub total</div>
              <div>Impuesto</div>
              <div>Propina</div>
              <div>Descuento</div>
              <div className="total-PedidosOrden-total">Total</div>
            </div>
            <div className="orden-bottom-bottom-info">
              <div>$50.00</div>
              <div>$5.00</div>
              <div>$3.50</div>
              <div>-$4.00</div>
              <div className="total-PedidosOrden">$46.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="orden-bottom-buttons">
        <div className="orden-bottom-button">anular</div>
        <div className="orden-imprimir">Imprimir</div>
        <div className="orden-pagar" onClick={handleClick}>
          Pagar
        </div>
      </div>
    </div>
  );
}

export default PedidosOrden;
