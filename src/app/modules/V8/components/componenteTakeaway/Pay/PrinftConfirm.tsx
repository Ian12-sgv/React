import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalCheck } from "./ModalCheck";
import "../../estilo/takeaway.css";

function PrinftConfirm() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/CashMetodo");
  };

  return (
    <div className="ConfirmPrinft">
      <div className="Prinft">
        <div className="PrinftContent">
          <div className="PrinftContentData">
            <div className="amount">RECEIVED AMOUNT:</div>
            <div className="amount-value">$ 50.00</div>
          </div>
          <div className="PrinftContentData">
            <div className="amount">PAYABLE:</div>
            <div className="amount-value">$ 46.00</div>
          </div>
          <div className="PrinftContentData-change">
            <div className="change">CHANGE:</div>
            <div className="change-value">$ 4.00</div>
          </div>
        </div>
      </div>
      <div className="PrinftFooter">
        <div className="PrinftFooterText">
          <div className="PrinftFooterBack" onClick={handleClick}>
            Back
          </div>
          <div className="PrinftFooterConfirm">
            <ModalCheck titulo="CONFIRM & PRINT" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrinftConfirm;
