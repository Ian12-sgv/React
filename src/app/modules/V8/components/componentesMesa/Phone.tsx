import { useState } from "react";
import { useLayout } from "../../../../../_metronic/layout/core";
import { ContentPhone } from "../componentesMesa/ContentPhone";
import "../estilo/mesa.css";

const ModalPhone = () => {
  const { config } = useLayout();
  const [showModal, setShowModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div className="name-reserv">
      {config.app?.toolbar?.primaryButton && (
        <a href="#" onClick={() => setShowModal(true)} className="reserv-name">
          PHONE NUMBER
        </a>
      )}
      <ContentPhone show={showModal} handleClose={() => setShowModal(false)} />
    </div> //modal
  );
};

export { ModalPhone };
