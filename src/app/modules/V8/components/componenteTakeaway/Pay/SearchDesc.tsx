import React from "react";
import "../../estilo/takeaway.css";
import Lupa from "../Lupa";

function SearchDesc() {
  return (
    <div>
      <div className="search-page">
        <div className="lenguaje">
          <div className="esp">
            <b>Esp</b>
          </div>
          <div className="ing">
            <b>Ing</b>
          </div>
        </div>
        <div className="search-content">
          <Lupa />
        </div>
        <div className="orden">
          <div className="inicio">
            <b>Inicio</b>
          </div>
          <div className="mesa-desc">Mesa A1,A2</div>
          <div className="personas">
            <b>6 PERSONAS</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDesc;
