import React, { useState } from 'react';

function Modal({
  name,
}: {
  name: string;
}) {
  return (
    <div className="modal">
      Hello,
      {name}
    </div>
  );
}

export default Modal;
