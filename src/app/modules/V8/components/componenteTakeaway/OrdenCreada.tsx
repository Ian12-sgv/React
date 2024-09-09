import React from "react";
import "../estilo/takeaway.css";
import suma3 from "../../../../../assets/svg/suma3.svg";
import view from "../../../../../assets/svg/view.svg";

function OrdenCreada() {
  return (
    <div className="CrearOrden">
      <div className="CrearOrden-text">
        <div className="Agregar">
          <div>
            <img src={suma3} />
          </div>
          <div
            style={{
              color: "red",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "700",
              paddingLeft: "10px",
            }}
          >
            ADD TAKEAWAY ORDER
          </div>
        </div>
        <div className="agregado">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div
              class="accordion-item"
              style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.2)" }}
            >
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                  style={{
                    color: "rgba(127, 127, 127, 1)",
                    fontWeight: "bold",
                    fontSize: "20px",
                    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  TAKEAWAY PENDING (2)
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div
              class="accordion-item"
              style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.2)" }}
            >
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "20px",
                    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  TAKEAWAY HISTORY
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <table class="table table-striped">
                    <thead>
                      <tr
                        style={{
                          color: "rgba(155, 155, 155, 1)",
                          fontWeight: "bold",
                        }}
                      >
                        <th scope="col">No.</th>
                        <th scope="col">Order number</th>
                        <th scope="col">Time received</th>
                        <th scope="col">Name</th>
                        <th scope="col">PAGER NO.</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: "bold",
                          }}
                        >
                          1
                        </th>
                        <td
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: "bold",
                          }}
                        >
                          #0000101
                        </td>
                        <td
                          style={{
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          07:53pm
                        </td>
                        <td
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: "bold",
                          }}
                        >
                          JIMMY
                        </td>
                        <td
                          style={{
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          01
                        </td>
                        <td>
                          <img src={view} />
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: "bold",
                          }}
                        >
                          1
                        </th>
                        <td
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: "bold",
                          }}
                        >
                          #0000101
                        </td>
                        <td
                          style={{
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          07:53pm
                        </td>
                        <td
                          style={{
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: "bold",
                          }}
                        >
                          JIMMY
                        </td>
                        <td
                          style={{
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          01
                        </td>
                        <td>
                          {" "}
                          <img src={view} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdenCreada;
