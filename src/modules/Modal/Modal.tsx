import React from 'react';
import { Modal } from 'antd';

type CustomModalProps = {
  title: string;
  isVisible: boolean;
  onCloseModal: () => void;
  footer?: any;
  children: any;
};

const CustomModal: React.FC<CustomModalProps> = ({
  title,
  isVisible,
  onCloseModal,
  footer,
  children,
}) => {
  return (
    <Modal
      title={title}
      visible={isVisible}
      onOk={onCloseModal}
      onCancel={onCloseModal}
      footer={footer}
    >
      {children}
    </Modal>
  );
};

CustomModal.displayName = 'modules/Modal/CustomModal';

CustomModal.defaultProps = {
  footer: null,
};

export default CustomModal;
