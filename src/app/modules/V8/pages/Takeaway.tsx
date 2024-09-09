import React from "react";
import "../components/estilo/takeaway.css";
import BarraNav from "../components/barra/BarraNav";
import Search from "../components/componenteTakeaway/search";
import CtgIzquierda from "../components/componenteTakeaway/CtgIzquierda";
import CtgDerecho from "../components/componenteTakeaway/CtgDerecho";
import Tipo from "../components/componenteTakeaway/Tipo";
import PedidosOrden from "../components/componenteTakeaway/PedidosOrden";
import { obtenerMenus, JsonMenu } from "../API/ApiMenus";

class Takeaway extends React.Component {
  Menus: JSX.Element[] = [];

  constructor(props: any = {}) {
    super(props);
    this.state = { Menus: [] };
  }

  elementos = (): JSX.Element => {
    obtenerMenus()
      .then((JsonMenu) => {
        console.log(JSON.stringify(JsonMenu));
        const newMenus = JsonMenu.map((menu) => (
          <div key={menu.titulo} className="pizzas">
            <CtgIzquierda titulo={menu.titulo} />
          </div>
        ));

        //this.setState({ Menus: newMenus });
        this.Menus = newMenus;
      })
      .catch((error) => {
        console.error(error);
      });

    return (
      <div className="takeaway-page">
        <div className="takeaway">
          <div className="search">
            <Search />
          </div>
          <div className="conetenido">
            <div className="conetenido-page">
              <div className="contendio-izquierda">
                <div className="contendio-izquierda-ctg">
                  <div className="izquierda-ctg">{this.Menus}</div>
                </div>
              </div>
              <div className="contendio-medio">
                <Tipo />
              </div>
              <div className="contendio-derecha">
                <PedidosOrden />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Takeaway;
