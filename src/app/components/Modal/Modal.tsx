import React from 'react';
import Modal from 'antd/lib/modal/Modal';

interface ICustomModalProps {
  children: React.ReactNode;
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  visible: boolean;
  footer?: React.ReactNode;
}

const CustomModal = ({
  children,
  title,
  onOk,
  onCancel,
  visible,
}: ICustomModalProps) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      closable={true}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
