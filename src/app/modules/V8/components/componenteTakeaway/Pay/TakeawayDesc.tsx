import React from "react";
import "../../estilo/takeaway.css";
import BarraNav from "../../barra/BarraNav";
import SearchDesc from "../Pay/SearchDesc";
import CtgIzquierda from "../../componenteTakeaway/CtgIzquierda";
import CtgDerecho from "../../componenteTakeaway/CtgDerecho";
import Tipo from "../../componenteTakeaway/Tipo";
import PedidosOrdenDescVoid from "../Pay/PedidosOrdenDescVoid";
import { obtenerMenus, JsonMenu } from "../../../API/ApiMenus";

function TakeawayDesc(): JSX.Element {
  return (
    <div className="takeaway-page">
      <div className="takeaway">
        <div className="search">
          <SearchDesc />
        </div>
        <div className="conetenido">
          <div className="conetenido-page">
            <div className="contendio-izquierda">
              <div className="contendio-izquierda-ctg">
                <div className="pizzas">
                  <CtgIzquierda titulo="Pizzas" />
                </div>
                <div className="sushi">
                  <CtgDerecho titulo="Sushi" />
                </div>
                <div className="Ensalada">
                  <CtgIzquierda titulo="Ensalada" />
                </div>
                <div className="Hamburguesa">
                  <CtgDerecho titulo="Hamburguesa" />
                </div>
                <div className="Carne">
                  <CtgIzquierda titulo="Carne" />
                </div>
                <div className="Torta">
                  <CtgDerecho titulo="Torta" />
                </div>
                <div className="Mariscos">
                  <CtgIzquierda titulo="Mariscos" />
                </div>
                <div className="Hot_Dog">
                  <CtgDerecho titulo="Hot Dog" />
                </div>
                <div className="Pollo_asado">
                  <CtgIzquierda titulo="Pollo asado" />
                </div>
                <div className="Pasta">
                  <CtgDerecho titulo="Pasta" />
                </div>
                <div className="Pastelitos">
                  <CtgIzquierda titulo="Pastelitos" />
                </div>

                <div className="Entrada">
                  <CtgDerecho titulo="Entrada" />
                </div>
              </div>
            </div>
            <div className="contendio-medio">
              <Tipo />
            </div>
            <div className="contendio-derecha">
              <PedidosOrdenDescVoid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeawayDesc;
