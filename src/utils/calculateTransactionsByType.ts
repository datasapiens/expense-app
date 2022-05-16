import Transaction, { TransactionType } from "../types/transaction";

const calculateTransactionsByType = (transactions: Transaction[]) => {
    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {
        if (transaction.type === TransactionType.INCOME) {
            income += transaction.amount;
        } else {
            expenses -= transaction.amount;
        }
    });
    return { income, expenses };
};

export default calculateTransactionsByType;