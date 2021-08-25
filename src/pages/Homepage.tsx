import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './Homepage.sass';
import queryInviteInfo from '../services/queryInviteInfo';

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
        <Button
          className="button"
          type="primary"
          loading={loading}
          onClick={handleClick}
        >
          Request an invite
        </Button>
      </div>
      <Modal
        title="Basic Modal"
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
