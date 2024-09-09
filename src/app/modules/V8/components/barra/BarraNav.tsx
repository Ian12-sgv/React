import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TresLine from "../../../../../assets/svg/TresLine.svg";
import dos from "../../../../../assets/svg/dos.svg";
import noti from "../../../../../assets/svg/noti.svg";
import search from "../../../../../assets/svg/search.svg";
import "../estilo/mesa.css";
function BarraNav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div>
      <div className="encabezado">
        <ul className="nav">
          <li>
            <NavLink to="/V8">
              <img src={TresLine} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/V8/*">
              <span style={{ color: "white" }} className="dinning">
                Dinning
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/V8/pages/Takeaway*">
              <span
                style={{
                  color: "white",
                  backgroundColor: "rgba(219, 24, 24, 1)",
                }}
                className="Takeaway"
              >
                Takeaway
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/V8/Delivery*">
              <span style={{ color: "white" }} className="Delivery">
                Delivery
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/V8/Pickup*">
              {" "}
              <span style={{ color: "white" }} className="Pickup">
                Pickup
              </span>
            </NavLink>
          </li>
          <li className="icon">
            <li>
              <img src={search} />
            </li>
            <li>
              <img src={search} />
            </li>
            <li>
              <img src={search} />
            </li>
            <li>
              <img src={search} />
            </li>
            <li>
              <img src={search} />
            </li>
          </li>

          <li>Mon, Nov 23</li>
        </ul>
      </div>
    </div>
  );
}

export default BarraNav;
