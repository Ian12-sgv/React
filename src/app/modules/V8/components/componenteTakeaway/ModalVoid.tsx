import { useState } from "react";
import { useLayout } from "../../../../../_metronic/layout/core";
import { VoidModal } from "./VoidModal";
import "../estilo/mesa.css";

const ModalVoid = () => {
  const { config } = useLayout();
  const [showModal, setShowModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div className="name-reserv">
      {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={() => setShowModal(true)}
          className="ModalVoid-btn"
          style={{ color: "white" }}
        >
          anular
        </a>
      )}
      <VoidModal show={showModal} handleClose={() => setShowModal(false)} />
    </div> //modal
  );
};

export { ModalVoid };
