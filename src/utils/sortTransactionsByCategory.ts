import Category from '../types/category';
import Transaction from '../types/transaction';
import getCategoryById from './getCategoryById';

type SortedTransactions = {
    category: string;
    categoryId: string;
    amount: number;
};

const sortTransactionsByCategory = (transactions: Transaction[], categories: Category[]) => {
    let sortedTransactions: SortedTransactions[] = [];

    transactions.forEach((transaction) => {
        const category = getCategoryById(transaction.categoryId, categories);

        const existingCategoryData = sortedTransactions.find(exist => exist.categoryId === transaction.categoryId)

        if (!existingCategoryData) {
            sortedTransactions.push({
                category: category?.label || '',
                amount: transaction.amount,
                categoryId: transaction.categoryId,
            })
        } else {
            existingCategoryData.amount += transaction.amount
        }
    })
    return sortedTransactions;
};

export default sortTransactionsByCategory;