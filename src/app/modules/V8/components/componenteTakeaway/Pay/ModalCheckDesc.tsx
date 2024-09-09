import { useState } from "react";
import { useLayout } from "../../../../../../_metronic/layout/core";
import { ControlModalCheckDesc } from "./ControlModalCheckDesc";
import "../../estilo/takeaway.css";

interface Props {
  titulo: string;
}

const ModalCheckDesc: React.FC<Props> = ({ titulo }) => {
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
      <ControlModalCheckDesc
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div> //modal
  );
};

export { ModalCheckDesc };
