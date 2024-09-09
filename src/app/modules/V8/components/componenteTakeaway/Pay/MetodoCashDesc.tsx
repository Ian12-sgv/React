import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import change from "../../../../../../assets/svg/change.svg";
import "../../estilo/takeaway.css";

function MetodoCashDesc() {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate("/crafted/V8/restaurante/PayMetodoDescuento");
  };

  const handleClick3 = () => {
    navigate("/crafted/V8/restaurante/ConfirmPrintfDesc");
  };
  const [input, setInput] = useState("");

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBack = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    alert(`Entered: ${input}`);
  };
  return (
    <div className="keypad-Desc">
      <div>
        <h3 className="titleCash">Enter the amount received</h3>
        <div>
          <img src={change} className="change-buttom" />
        </div>
        <div className="display-input">${input}</div>
      </div>

      <div className="keypad-grid">
        <button className="uno" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="dos" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="tres" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="cuatro" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="cinco" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="seis" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="siete" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="ocho" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="nueve" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        <button className="cero" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="punto" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button className="backNumbre" onClick={handleClick2}>
          Back
        </button>

        <button className="enter" onClick={handleClick3}>
          ENTER
        </button>
      </div>
    </div>
  );
}

export default MetodoCashDesc;
