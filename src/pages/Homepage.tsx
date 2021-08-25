import React, { useState } from 'react';
import './Homepage.sass';
import queryInviteInfo from '../services/queryInviteInfo';
import Modal from '../components/Modal';

function Homepage() {
  const [loading, setLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = async () => {
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await queryInviteInfo({
      email: 'test',
      name: '',
    }).catch(() => {});
    setLoading(false);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    await handleSubmit();
  };

  const handleCancel = () => {
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
        name="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default Homepage;
