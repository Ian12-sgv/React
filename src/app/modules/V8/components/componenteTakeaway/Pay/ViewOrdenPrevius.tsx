import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";

function ViewOrdenPrevius() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/Takeaway/NumbreOrden");
  };
  return (
    <div className="ViewOrdenPrevius">
      <div className="ViewOrdenPrevius-viwe">View order history</div>
      <div className="ViewOrdenPrevius-order" onClick={handleClick}>
        Next order
      </div>
    </div>
  );
}

export default ViewOrdenPrevius;
