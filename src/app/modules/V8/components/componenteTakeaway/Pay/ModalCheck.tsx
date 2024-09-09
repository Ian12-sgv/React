import { useState } from "react";
import { useLayout } from "../../../../../../_metronic/layout/core";
import { ControlModalCheck } from "./ControlModalCheck";
import "../../estilo/takeaway.css";

interface Props {
  titulo: string;
}

const ModalCheck: React.FC<Props> = ({ titulo }) => {
  const { config } = useLayout();
  const [showModal, setShowModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div>
      {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={() => setShowModal(true)}
          className="reserv-payment-btn"
        >
          {titulo}
        </a>
      )}
      <ControlModalCheck
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div> //modal
  );
};

export { ModalCheck };
