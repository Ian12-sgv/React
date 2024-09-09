import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../../app/modules/V8/components/estilo/takeaway.css";
import Boton from "../../../../app/modules/V8/components/barra/Boton";
import TresLine from "../../../../assets/svg/TresLine.svg";
import { Navbar } from "../../../layout/components/header/Navbar";
import dos from "../../../../assets/svg/dos.svg";

export function HeaderFood() {
  const location = useLocation();
  const [color, setColor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // Obtener la ruta actual
    const currentPath = location.pathname;

    // Actualizar el estado de color según la ruta
    if (currentPath === "") {
      setColor([true, true, false, false, false, false]);
    } else if (currentPath === "/crafted/V8/restaurante") {
      setColor([false, true, false, false, false, false]);
    } else if (currentPath === "/crafted/V8/restaurante/ordenPay") {
      setColor([false, true, false, false, false, false]);
    } else if (currentPath === "/crafted/V8/restaurante/PayMetodo") {
      setColor([false, true, false, false, false, false]);
    } else if (currentPath === "/crafted/V8/Takeaway") {
      setColor([false, false, true, false, false, false]);
    } else if (currentPath === "/crafted/V8/Takeaway/ReciboPay") {
      setColor([false, false, true, false, false, false]);
    }
  }, [location.pathname]);

  const handClick = (index: number) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };

  return (
    <div className="headerFood">
      <NavLink
        to=""
        className="imagen"
        onClick={() => handClick(0)}
        style={{
          backgroundColor: color[0]
            ? "rgba(219, 24, 24, 1)"
            : "rgba(252, 63, 63, 1)",
        }}
      >
        <div>
          <Boton button={TresLine} />
        </div>
      </NavLink>

      <NavLink
        to="crafted/V8/restaurante"
        className="Mesas"
        onClick={() => handClick(1)}
        style={{
          backgroundColor: color[1]
            ? "rgba(219, 24, 24, 1)"
            : "rgba(252, 63, 63, 1)",
          textDecoration: color[1] ? "none" : "none",
          color: color[1] ? "white" : "white",
        }}
      >
        <div>Mesas</div>
      </NavLink>

      <NavLink
        to="crafted/V8/Takeaway"
        className="LLevar"
        onClick={() => handClick(2)}
        style={{
          backgroundColor: color[2]
            ? "rgba(219, 24, 24, 1)"
            : "rgba(252, 63, 63, 1)",
          textDecoration: color[1] ? "none" : "none",
          color: color[1] ? "white" : "white",
          borderRight: color[2] ? "none" : "1px solid white",
        }}
      >
        <div>Para llevar</div>
      </NavLink>
      <div className="Delivery-takeaway">Delivery</div>
      <div className="Pickup-takeaway">Pickup</div>
      <div className="noti-takeaway">
        <img src={dos} className="noti-takeaway-img" />
      </div>
      <div className="navbar-takeaway">
        <Navbar />
      </div>
    </div>
  );
}
