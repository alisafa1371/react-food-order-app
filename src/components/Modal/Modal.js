import style from "./Modal.module.css";

import ReactDOM from "react-dom";
import { Fragment } from "react";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onCancel}></div>;
  };
  const ModalOverlay = (props) => {
    return <div className={style.modal}>{props.children}</div>;
  };

  const parentEl = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel} />, parentEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        parentEl
      )}
    </Fragment>
  );
};
export default Modal;
