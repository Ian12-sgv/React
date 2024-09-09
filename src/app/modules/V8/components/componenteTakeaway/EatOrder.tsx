import React from "react";

import "../estilo/takeaway.css";

interface EatOrderProps {
  id: number;
  title: string;
  cant: number;
  price: number;
  total: number;
  delet: string;
}

const EatOrder: React.FC<EatOrderProps> = ({
  id,
  title,
  cant,
  price,
  total,
  delet,
}) => {
  return (
    <div className="eat">
      <div className="number">{id}</div>
      <div className="content-eat">
        <div>{title}</div>
        <div className="cant-eat">{cant}</div>
        <div>{price}</div>
        <div className="total">{total}</div>
        <div>
          <img src={delet} className="delet" />
        </div>
      </div>
    </div>
  );
};

export default EatOrder;
