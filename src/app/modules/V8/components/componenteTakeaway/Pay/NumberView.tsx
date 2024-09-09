import React from "react";
import { useNavigate } from "react-router-dom";
import "../../estilo/takeaway.css";

function NumberView() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/OrdenCreada");
  };
  return (
    <div>
      <div className="takeaway-Orden-number">
        <div className="takeaway-Orden-number-info">
          <div style={{ fontWeight: "bold" }}>ORDER NO.</div>
          <div style={{ fontWeight: "bold", color: "rgba(252, 63, 63, 1)" }}>
            00001
          </div>
        </div>
        <div className="takeaway-Orden-number-info-data">
          <div style={{ fontWeight: "bold" }}>JIMMY TAN</div>
          <div style={{ fontWeight: "bold", color: "rgba(252, 63, 63, 1)" }}>
            8284 5288
          </div>
        </div>
        <div
          className="takeaway-Orden-number-completed"
          style={{ color: "white", fontWeight: "bold" }}
          onClick={handleClick}
        >
          COMPLETED
        </div>
      </div>
    </div>
  );
}

export default NumberView;
