import { useState } from "react";
import { useLayout } from "../../../../../_metronic/layout/core";
import { ModalDone } from "./ModalDone";
import done from "../../../../../assets/svg/done.svg";

import "../estilo/mesa.css";

const ModalDon = () => {
  const { config } = useLayout();
  const [showModal, setShowModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div className="name-reserv">
      {config.app?.toolbar?.primaryButton && (
        <a href="#" onClick={() => setShowModal(true)} className="reserv-name">
          <img src={done} />
        </a>
      )}
      <ModalDone show={showModal} handleClose={() => setShowModal(false)} />
    </div> //modal
  );
};

export { ModalDon };
