import React from "react";
import "../../estilo/takeaway.css";
import { useNavigate } from "react-router-dom";
function MethoPay() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/restaurante/PayMetodo");
  };

  const handleClick2 = () => {
    navigate("/crafted/V8/Takeaway");
  };
  return (
    <div>
      <div className="methoPay-Footer">
        <div className="back" onClick={handleClick2}>
          BACK
        </div>
        <div className="next-pay" onClick={handleClick}>
          NEXT
        </div>
      </div>
    </div>
  );
}

export default MethoPay;
