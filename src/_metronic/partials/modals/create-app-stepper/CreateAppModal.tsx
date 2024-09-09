import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
import { StepperComponent } from "../../../assets/ts/components";
import "../../../../app/modules/V8/components/estilo/mesa.css";
import X from "../../../../assets/svg/X.svg";
import { ModalName } from "../../../../app/modules/V8/components/componentesMesa/ModalName";
import { ModalPhone } from "../../../../app/modules/V8/components/componentesMesa/Phone";
import { ModalPax } from "../../../../app/modules/V8/components/componentesMesa/Pax";
import { ModalTime } from "../../../../app/modules/V8/components/componentesMesa/ModalTime";
import Confirm from "../../../../app/modules/V8/components/componentesMesa/Confirm";
import { useNavigate } from "react-router-dom";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const CreateAppModal = ({ show, handleClose }: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crafted/V8//restaurante/mesaReservacion");
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
      id="kt_modal_create_app"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modalCrack modal-dialog modal-dialog-centered modal-dialog-scrollable"
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
      backdrop={true}
    >
      <div className="close-modal">
        <img src={X} className="x" />
      </div>
      <div className="contenedor-modal">
        <div className="title-modal">Reservation</div>
        <div className="content-modal-padre">
          <div className="name">
            <ModalName />
          </div>
          <div className="content-pax">
            <div className="pax">
              <ModalPax titulo="2" />
              <div>PAX</div>
            </div>
            <div className="pax">
              <ModalPax titulo="4" />
              <div>PAX</div>
            </div>
            <div className="pax">
              <ModalPax titulo="6" />
              <div>PAX</div>
            </div>
            <div className="pax">
              <ModalPax titulo="8" />
              <div>PAX</div>
            </div>
          </div>
          <div className="name">
            <ModalPhone />
          </div>
          <div className="name">
            <ModalTime />
          </div>
          <div className="confirm">
            <div onClick={handleClick}>
              <Confirm titulo="CONFIRM" />
            </div>
          </div>
        </div>
      </div>
    </Modal>,
    modalsRoot
  );
};

export { CreateAppModal };
