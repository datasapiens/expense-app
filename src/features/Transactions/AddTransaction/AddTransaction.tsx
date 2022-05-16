import React from 'react';
import { message } from 'antd';
import { v4 as uuid } from 'uuid';

import AddTransactionForm from './AddTransactionForm';
import Modal from '../../../modules/Modal';
import Transaction, { TransactionType } from '../../../types/transaction';
import Category from '../../../types/category';

type AddTransactionProps = {
  isVisible: boolean;
  closeTransactionModal: () => void;
  addNewTransaction: (transaction: Transaction) => void;
  categories: Category[];
};

const AddTransaction: React.FC<AddTransactionProps> = ({
  isVisible,
  closeTransactionModal,
  addNewTransaction,
  categories,
}) => {
  const handleCategorySuccess = (values: any) => {
    try {
      addNewTransaction({
        id: uuid(),
        label: values.label,
        date: values.date.format('YYYY-MM-DD HH:mm:ss'),
        categoryId: values.categoryId,
        amount: Number(values.amount),
        type:
          Number(values.amount) < 0
            ? TransactionType.EXPENSES
            : TransactionType.INCOME,
      });
      message.success('Transaction created successfully!');
    } catch (error) {
      message.error('Error creating transaction, please try again!');
    }

    setTimeout(() => {
      closeTransactionModal();
    }, 100);
  };

  return (
    <div>
      <Modal
        title="Add New Transaction"
        isVisible={isVisible}
        onCloseModal={closeTransactionModal}
      >
        <AddTransactionForm
          onTransactionSuccess={handleCategorySuccess}
          categories={categories}
        />
      </Modal>
    </div>
  );
};

AddTransaction.displayName =
  'features/Categories/AddTransaction/AddTransaction';

export default AddTransaction;
