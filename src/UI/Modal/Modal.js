import React from "react";

import classes from "./Modal.module.scss";

const modal = props => (
  <>
    <div className={props.show ? classes.Modal : classes.hideModal}>
      {props.children}
    </div>
    <div className={props.show ? classes.ModalBackground : classes.hideModal} />
  </>
);

export default modal;
