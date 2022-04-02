import React from 'react';
import Modal from 'antd/lib/modal/Modal';

const CustomModal = ({ children }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={true}
      onOk={() => {}}
      onCancel={() => {}}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
