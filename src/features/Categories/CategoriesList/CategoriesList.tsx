import React from 'react';
import { Empty } from 'antd';

import Category from '../../../types/category';
import SingleCategory from './Category';
import Transaction from '../../../types/transaction';

type CategoriesListProps = {
  categories: Category[];
  removeCategory: (category: Category) => void;
  transactions: Transaction[];
  updateTransactions: (transactions: Transaction[]) => void;
};

const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  removeCategory,
  transactions,
  updateTransactions,
}) => {
  return (
    <div>
      {categories.length === 0 && <Empty />}

      {categories.length > 0 && (
        <>
          <h3>Categories</h3>
          {categories.map((category) => (
            <span key={category.id}>
              <SingleCategory
                removeCategory={removeCategory}
                category={category}
                transactions={transactions}
                updateTransactions={updateTransactions}
              />
            </span>
          ))}
        </>
      )}
    </div>
  );
};

CategoriesList.displayName = 'features/Categories/CategoriesList';

export default CategoriesList;
