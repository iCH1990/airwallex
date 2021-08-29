import React from 'react';
import './index.sass';

function Modal(props: {
  show: boolean;
  children?: React.ReactElement;
  onClose: () => void;
} = {
  show: false,
  children: <></>,
  onClose: () => {},
}) {
  if (!props.show) {
    return (<></>);
  }

  return (
    <div
      className="modal"
      onClick={props.onClose}
    >
      <div className="modal-content">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
