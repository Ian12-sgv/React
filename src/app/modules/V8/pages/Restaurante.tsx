import { FC, useState } from "react";
import "../../V8/components/estilo/mesa.css";
import EncabezadoFechaProps from "../components/componentesMesa/Fecha";
import EncabezadoMesasProps from "../components/componentesMesa/Mesa";
import arrowUp from "../../../../assets/svg/arrowUp.svg";
import arrowDow from "../../../../assets/svg/arrowDow.svg";
import btnGreen from "../../../../assets/svg/btnGreen.svg";
import btnRed from "../../../../assets/svg/btnRed.svg";
import btnMana from "../../../../assets/svg/btnMana.svg";
import megTable from "../../../../assets/svg/megTable.svg";
import openTable from "../../../../assets/svg/openTable.svg";
import circulo from "../../../../assets/svg/circulo.svg";
import circuloRed from "../../../../assets/svg/circuloRed.svg";
import cubo from "../../../../assets/svg/cubo.svg";
import PositionGreen from "../components/componentesMesa/PositionGreen";
import Boton from "../components/barra/Boton";
import paid from "../../../../assets/svg/paid.svg";
import dosAma from "../../../../assets/svg/dosAma.svg";
import flechaDere from "../../../../assets/svg/flechaDere.svg";
import { ToolbarClassic } from "../../../../_metronic/layout/components/toolbar/toolbars/ToolbarClassic";

const Restaurante: FC = () => {
  const [activeButton, setActiveButton] = useState("seated");
  const [color, setColor] = useState([true, false]);

  const handleClick = (index: any) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };
  return (
    <>
      <div className="contenido-medio">
        <div className="contenedor-izquierdo">
          <div className="media-izquierda">
            <div className="header-izquierda">
              <div
                style={{
                  color: color[0] ? "black" : "gray",
                  backgroundColor: color[0]
                    ? "rgba(247, 247, 247, 1)"
                    : "rgba(247, 247, 247, 1)",
                  borderBottom: color[0]
                    ? "8px solid rgba(155, 155, 155, 1)"
                    : "none",
                  borderRight: color[0]
                    ? "1px solid rgba(155, 155, 155, 1)"
                    : "none",
                }}
                className={`seated ${
                  activeButton === "seated" ? "active" : ""
                }`}
                onClick={() => {
                  handleClick(0);
                  setActiveButton("seated");
                }}
              >
                <div> Reservation</div>
              </div>
              <div
                style={{
                  color: color[1] ? "black" : "gray",
                  backgroundColor: color[1]
                    ? "rgba(247, 247, 247, 1)"
                    : "rgba(247, 247, 247, 1)",
                  borderBottom: color[1]
                    ? "8px solid rgba(155, 155, 155, 1)"
                    : "none",
                  borderLeft: color[1]
                    ? "1px solid rgba(155, 155, 155, 1)"
                    : "none",
                }}
                className={`reservation ${
                  activeButton === "reservation" ? "active" : ""
                }`}
                onClick={() => {
                  handleClick(1);
                  setActiveButton("reservation");
                }}
              >
                <div> Reservation</div>
                <div className="noti-reservation">
                  <img src={dosAma} className="reservation-noti" />
                </div>
              </div>
            </div>
            <div className="contenedor-seated">
              <div className="sort">
                <div className="sort-text">
                  <b style={{ color: "rgba(155, 155, 155, 1)" }}>
                    Sort By Time
                  </b>
                </div>
                <div className="sort-img">
                  <div>
                    <img src={arrowUp} className="arrow" />
                  </div>
                  <div>
                    <img src={arrowDow} className="arrow" />
                  </div>
                </div>
              </div>
              <div className="contenedor-seated-father ">
                {activeButton === "seated" && (
                  <div>
                    <div className="seated-table">
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={<span style={{ color: "red" }}>06:30</span>}
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="Walk-in"
                          table="Table: "
                          pax="Pax: "
                          data1={
                            <span style={{ color: "red" }}>
                              <p>B2</p>
                            </span>
                          }
                          data2={
                            <span style={{ color: "red" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                      </div>
                    </div>
                    <div className="footer-seated">
                      <div className="manage">MANAGE QUEUE</div>
                    </div>
                  </div>
                )}

                {activeButton === "reservation" && (
                  <div>
                    <div className="reservation-table">
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid">
                          <Boton button={paid} />
                        </div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                      <div className="contenido-reservation1">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="IVAN GAN"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>2</p>
                            </span>
                          }
                        />
                        <div className="botonPaid"></div>
                      </div>
                      <div className="contenido-seated2">
                        <div className="fechas">
                          <EncabezadoFechaProps
                            titulo={
                              <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                                06:30
                              </span>
                            }
                            subtitulo={
                              <span>
                                <b>PM</b>
                              </span>
                            }
                          />
                        </div>
                        <EncabezadoMesasProps
                          titulo="KIMBERLY"
                          table="82845288"
                          pax="Pax: "
                          data2={
                            <span style={{ color: "rgba(248, 174, 0, 1)" }}>
                              <p>6</p>
                            </span>
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <ToolbarClassic />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* lado derecho */}

        <div className="contenido-medio-derecho">
          <div className="contenedor-derecho">
            <div className="header-derecho">
              <div className="first-floor">
                <div className="first">
                  <b>First Floor</b>
                </div>
              </div>
              <div className="second-floor">
                <div className="second">
                  <b>Second floor</b>
                </div>
              </div>
              <div className="outdoor-floor">
                <div className="Outdoor">Outdoor</div>
                <div className="flechaDerecha">
                  <img src={flechaDere} />
                </div>
              </div>
              <div className="botones">
                <div className="boton-verde">
                  <img src={btnGreen} />
                </div>
                <div className="boton-rojo">
                  <img src={btnRed} />
                </div>
              </div>
            </div>
            <div className="footer-derecho">
              <div className="footer-header">
                <div className="botones-footer">
                  <div className="boton-verde">
                    <img src={megTable} />
                  </div>
                  <div className="boton-rojo">
                    <img src={openTable} />
                  </div>
                </div>
                <div className="footer-mesas-container">
                  <div className="mesas-footer">
                    <div>
                      <PositionGreen url={circulo} />
                    </div>
                    <div>
                      <PositionGreen url={circulo} />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div></div>
                    <div>
                      {" "}
                      <PositionGreen url={circuloRed} />
                    </div>
                    <div>
                      {" "}
                      <PositionGreen url={circuloRed} />
                    </div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div></div>
                    <div>
                      {" "}
                      <PositionGreen url={circuloRed} />
                    </div>
                    <div>
                      {" "}
                      <PositionGreen url={circuloRed} />
                    </div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                    <div>
                      <PositionGreen url={cubo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Restaurante };
