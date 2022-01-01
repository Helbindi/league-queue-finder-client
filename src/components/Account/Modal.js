import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal, modalColor }) => {
  useEffect(() => {
    // close the Modal after 2 seconds
    setTimeout(() => {
      closeModal();
    }, 2000);
  });

  return (
    <div className='modal'>
      <h3 style={{color: `${modalColor}`, textAlign: 'center'}}>{modalContent}</h3>
    </div>
  );
};

export default Modal;