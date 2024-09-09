import { useState } from "react";
import { useLayout } from "../../../../../_metronic/layout/core";
import { ContentPax } from "../componentesMesa/ContentPax";
import "../estilo/mesa.css";

interface ModalPaxProps {
  titulo: string;
}
const ModalPax: React.FC<ModalPaxProps> = ({ titulo }) => {
  const { config } = useLayout();
  const [showModal, setShowModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div className="name-reserv">
      {config.app?.toolbar?.primaryButton && (
        <a href="#" onClick={() => setShowModal(true)} className="reserv-name">
          <p>{titulo}</p>
        </a>
      )}
      <ContentPax show={showModal} handleClose={() => setShowModal(false)} />
    </div> //modal
  );
};

export { ModalPax };
