import React from "react";
import { useNavigate } from "react-router-dom";
import "../../estilo/takeaway.css";

function NumberViewVoid() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/OrdenCreada");
  };
  return (
    <div>
      <div className="takeaway-Orden-number">
        <div className="takeaway-Orden-number-info">
          <div style={{ fontWeight: "bold" }}>ORDER NO.</div>
          <div style={{ fontWeight: "bold", color: "rgba(155, 155, 155, 1)" }}>
            00001
          </div>
        </div>
        <div className="takeaway-Orden-number-info-data">
          <div style={{ fontWeight: "bold" }}>JIMMY TAN</div>
          <div style={{ fontWeight: "bold", color: "rgba(155, 155, 155, 1)" }}>
            8284 5288
          </div>
        </div>
        <div
          className="takeaway-Orden-number-completed"
          style={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "rgba(133, 133, 133, 1)",
          }}
          onClick={handleClick}
        >
          COMPLETED
        </div>
      </div>
    </div>
  );
}

export default NumberViewVoid;