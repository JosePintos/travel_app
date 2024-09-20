import React from "react";
import "./Modal.css";

const Modal = ({ show, handleClose, title, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
