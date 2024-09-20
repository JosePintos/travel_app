import "./AttractionCard.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const AttractionCard = ({ imageUrl, title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="card" onClick={handleOpenModal}>
        <div className="card-content flex">
          <div className="card-image">
            <div>
              <img src={imageUrl} />
            </div>
          </div>
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <div className="text-info">
              <div className="text-description">
                <span className="description-body">{description}</span>
                <span className="learn-more">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        title={title}
        content={description}
      />
    </>
  );
};

export default AttractionCard;
