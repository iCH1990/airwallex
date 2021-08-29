import React, { useState } from 'react';
import './Homepage.sass';
import Modal from '../components/Modal';
import Invite from '../components/Invite';

function Homepage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = async () => {
    setIsModalVisible(true);
  };

  const handleClose = async () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="homepage">
        <p className="title">
          A better way
        </p>
        <p className="title">
          to enjoy every day.
        </p>
        <p className="tips">
          Be the first to know when we launch.
        </p>
        <button
          className="button"
          type="button"
          onClick={handleClick}
        >
          Request an invite
        </button>
      </div>
      <Modal
        show={isModalVisible}
        onClose={handleClose}
      >
        <Invite onSuccess={handleClose} />
      </Modal>
    </>
  );
}

export default Homepage;
