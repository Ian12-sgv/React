import React, { useState, useEffect } from "react";
import lupa from "../../../../../assets/svg/lupa.svg";
import "../estilo/takeaway.css";

function Lupa() {
  const [eat, setEat] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="search-lupa">
      <input type="search" placeholder="Busacar" className="search-input" />
      <img src={lupa} className="serch-icon" />
    </div>
  );
}

export default Lupa;
