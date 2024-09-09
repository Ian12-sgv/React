import { FC, useState } from "react";
import dosAma from "../../../../../assets/svg/dosAma.svg";
import arrowUp from "../../../../../assets/svg/arrowUp.svg";
import arrowDow from "../../../../../assets/svg/arrowDow.svg";
import EncabezadoFechaProps from "../componentesMesa/Fecha";
import EncabezadoMesasProps from "../componentesMesa/Mesa";
import flechaDere from "../../../../../assets/svg/flechaDere.svg";
import btnGreen from "../../../../../assets/svg/btnGreen.svg";
import btnRed from "../../../../../assets/svg/btnRed.svg";
import reservWhite from "../../../../../assets/svg/reserWhite.svg";
import openWhite from "../../../../../assets/svg/openWhite.svg";
import circuloWhite from "../../../../../assets/svg/circuloWhite.svg";
import PositionGreen from "./PositionGreen";
import circulo from "../../../../../assets/svg/circulo.svg";
import circuloRed from "../../../../../assets/svg/circuloRed.svg";
import redWhite from "../../../../../assets/svg/redWhite.svg";
import cubo from "../../../../../assets/svg/cubo.svg";
import check from "../../../../../assets/svg/check.svg";
import "../estilo/mesa.css";

import { ModalDon } from "./ModalDon";
import { ToolbarClassic } from "../../../../../_metronic/layout/components/toolbar/toolbars";

function MesaReservacion() {
  const [activeButton, setActiveButton] = useState("seated");
  const [color, setColor] = useState([true, false]);
  const [isOverlayVisible1, setIsOverlayVisible1] = useState(false);
  const [isOverlayVisible2, setIsOverlayVisible2] = useState(false);

  const handleClick = (index: any) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };
  const handleClick1 = () => {
    setIsOverlayVisible1(!isOverlayVisible1);
  };

  const handleClick2 = () => {
    setIsOverlayVisible2(!isOverlayVisible2);
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
                <div> Up-coming</div>
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
                    <img src={reservWhite} />
                  </div>
                  <div className="boton-rojo">
                    <ModalDon />
                  </div>
                  <div className="boton-rojo">
                    <img src={openWhite} />
                  </div>
                </div>
                <div className="footer-mesas-container">
                  <div className="mesas-footer">
                    <div>
                      <PositionGreen url={circuloWhite} />
                    </div>
                    <div>
                      <PositionGreen url={circuloWhite} />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          width: "110px",
                          height: "110px",
                        }}
                        onClick={handleClick1}
                      >
                        <img
                          src={cubo}
                          alt="Imagen 1"
                          style={{ width: "100%", height: "100%" }}
                        />
                        {isOverlayVisible1 && (
                          <img
                            src={check}
                            alt="Imagen 2"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 80,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          position: "relative",
                          width: "110px",
                          height: "110px",
                        }}
                        onClick={handleClick2}
                      >
                        <img
                          src={cubo}
                          alt="Imagen 1"
                          style={{ width: "100%", height: "100%" }}
                        />
                        {isOverlayVisible2 && (
                          <img
                            src={check}
                            alt="Imagen 2"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 80,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div></div>
                    <div>
                      {" "}
                      <PositionGreen url={redWhite} />
                    </div>
                    <div>
                      {" "}
                      <PositionGreen url={redWhite} />
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
                      <PositionGreen url={redWhite} />
                    </div>
                    <div>
                      {" "}
                      <PositionGreen url={redWhite} />
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
}

export default MesaReservacion;
