import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import {
  defaultCreateAppData,
  ICreateAppData,
} from "../../../../../_metronic/partials/modals/create-app-stepper/IAppModels";
import { StepperComponent } from "../../../../../_metronic/assets/ts/components";
import cubo from "../../../../../assets/svg/cubo.svg";
import suma2 from "../../../../../assets/svg/suma2.svg";
import resta2 from "../../../../../assets/svg/resta2.svg";
import x from "../../../../../assets/svg/x.svg";
import Confirm from "./Confirm";

import "../estilo/mesa.css";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const ModalDone = ({ show, handleClose }: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData);
  const [hasError, setHasError] = useState(false);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
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
        <img src={x} className="x" />
      </div>
      <div className="modal-content-mesas">
        <div className="modal-header-mesas">
          <div>
            <img src={cubo} />
          </div>
          <div>
            <img src={cubo} />
          </div>
        </div>

        <div>
          <div className="count">
            <div onClick={decrement} className="resta">
              <img src={resta2} />
            </div>
            <h1 style={{ color: "red" }}>{count}</h1>
            <div onClick={increment} className="resta">
              <img src={suma2} />
            </div>
          </div>

          <div className="pax-mesas">PAX</div>
          <div className="confirm-mesas">
            <Confirm titulo="CONFIRM" />
          </div>
        </div>
      </div>
    </Modal>,

    modalsRoot
  );
};

export { ModalDone };
