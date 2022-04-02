import React from 'react';
import Modal from 'antd/lib/modal/Modal';

const CustomModal = ({}) => {
  return (
    <Modal
      title="Basic Modal"
      visible={true}
      onOk={() => {}}
      onCancel={() => {}}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CustomModal;
