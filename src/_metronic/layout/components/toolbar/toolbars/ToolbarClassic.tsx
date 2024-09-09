import { useState } from "react";
import { CreateAppModal } from "../../../../partials";
import { useLayout } from "../../../../layout/core";

const ToolbarClassic = () => {
  const { config } = useLayout();
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div className="footer-reserv">
      {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={() => setShowCreateAppModal(true)}
          className="reserv"
        >
          New reservation
        </a>
      )}
      <CreateAppModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      />
    </div> //modal
  );
};

export { ToolbarClassic };
