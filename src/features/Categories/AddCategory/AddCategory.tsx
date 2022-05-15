import React from 'react';
import { message } from 'antd';
import { v4 as uuid } from 'uuid';

import AddCategoryForm from './AddCategoryForm';
import Modal from '../../../modules/Modal';
import Category from '../../../types/category';

type AddCategoryProps = {
  isVisible: boolean;
  closeCategoryModal: () => void;
  addNewCategory: (category: Category) => void;
};

const AddCategory: React.FC<AddCategoryProps> = ({
  isVisible,
  closeCategoryModal,
  addNewCategory,
}) => {
  const handleCategorySuccess = (values: any) => {
    try {
      addNewCategory({
        id: uuid(),
        label: values.label,
      });
      message.success('Label created successfully!');
    } catch (error) {
      message.error('Error creating label, please try again!');
    }

    setTimeout(() => {
      closeCategoryModal();
    }, 100);
  };

  return (
    <div>
      <Modal
        title="Add New Category"
        isVisible={isVisible}
        onCloseModal={closeCategoryModal}
      >
        <AddCategoryForm onCategorySuccess={handleCategorySuccess} />
      </Modal>
    </div>
  );
};

AddCategory.displayName = 'features/Categories/AddCategory/AddCategory';

export default AddCategory;
