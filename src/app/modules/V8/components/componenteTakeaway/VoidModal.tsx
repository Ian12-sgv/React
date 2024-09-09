import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import {
  defaultCreateAppData,
  ICreateAppData,
} from "../../../../../_metronic/partials/modals/create-app-stepper/IAppModels";
import { StepperComponent } from "../../../../../_metronic/assets/ts/components";
import { useNavigate } from "react-router-dom";
import anular from "../../../../../assets/svg/anular.svg";
import X from "../../../../../assets/svg/x.svg";

import "../estilo/takeaway.css";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const VoidModal = ({ show, handleClose }: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/crafted/V8/Takeaway/NumbreVoid");
  };

  const loadStepper = () => {
    setStepper(
      StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    );
  };
  const updateData = (fieldsToUpdate: Partial<ICreateAppData>) => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  };

  const checkAppBasic = (): boolean => {
    if (!data.appBasic.appName || !data.appBasic.appType) {
      return false;
    }
    return true;
  };

  const checkAppDataBase = (): boolean => {
    if (!data.appDatabase.databaseName || !data.appDatabase.databaseSolution) {
      return false;
    }

    return true;
  };

  const prevStep = () => {
    if (!stepper) {
      return;
    }

    stepper.goPrev();
  };

  const nextStep = () => {
    setHasError(false);
    if (!stepper) {
      return;
    }

    if (stepper.getCurrentStepIndex() === 1) {
      if (!checkAppBasic()) {
        setHasError(true);
        return;
      }
    }

    if (stepper.getCurrentStepIndex() === 3) {
      if (!checkAppDataBase()) {
        setHasError(true);
        return;
      }
    }

    stepper.goNext();
  };

  const submit = () => {
    window.location.reload();
  };

  return createPortal(
    <Modal
      id="modalName"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modalCrack "
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
      backdrop={true}
    >
      <div className="close-modal">
        <img src={X} className="x" />
      </div>
      <div className="modal-header-anular">
        <div className="modal-title-pay-anular">
          <img src={anular} className="modal-title-anular" />
        </div>
        <div>
          <div className="paymnent-successful">VOID THIS ORDER</div>
          <div className="confirm-text" onClick={handleClick}>
            Confirm
          </div>
        </div>
      </div>
    </Modal>,

    modalsRoot
  );
};

export { VoidModal };
