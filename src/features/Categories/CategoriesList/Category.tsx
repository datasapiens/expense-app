import React from 'react';
import { Tag, Popconfirm, message } from 'antd';
import Category from '../../../types/category';
import Transaction from '../../../types/transaction';

type CategoryProps = {
  removeCategory: (category: Category) => void;
  category: Category;
  transactions: Transaction[];
  updateTransactions: (transactions: Transaction[]) => void;
};

const SingleCategory: React.FC<CategoryProps> = ({
  removeCategory,
  category,
  transactions,
  updateTransactions,
}) => {
  const [visible, setVisible] = React.useState(false);

  const showPopconfirm = (e: any) => {
    e.preventDefault();
    setVisible(true);
    
    const updatedTransactions = transactions.filter(transaction => transaction.categoryId !== category.id);
    updateTransactions(updatedTransactions);
  };

  const handleRemoveCategoryClick = (e: any, category: Category) => {
    e.preventDefault();
    removeCategory(category);
    message.success('Category removed successfully!');
  };

  return (
    <Popconfirm
      placement="topRight"
      title={`Do you want to remove the ${category.label} category? Transactions under this category would also be deleted, and cannot be recovered!`}
      visible={visible}
      onConfirm={(e: any) => handleRemoveCategoryClick(e, category)}
      onCancel={() => setVisible(false)}
      okText="Yes, remove category"
      cancelText="No"
    >
      <Tag color="blue" closable onClose={(e: any) => showPopconfirm(e)}>
        {category.label}
      </Tag>
    </Popconfirm>
  );
};

SingleCategory.displayName = 'features/Categories/CategoriesList/Category';

export default SingleCategory;
