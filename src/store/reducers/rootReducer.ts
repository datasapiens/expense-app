import { RequestCatAction, RequestTransAction } from "../../actions/action";

const cat = [
    { id: 0, name: "Salary" },
    { id: 1, name: "Gifts" },
    { id: 2, name: "Food" },
    { id: 3, name: "Traveling" },
    { id: 4, name: "Going out" },
];

const defaultDate = (new Date()).toISOString().split('T')[0];

const transactions = [
    {
        id: 0,
        label: "Сегодня потратился",
        date: defaultDate,
        amount: "-100",
        category: "Food",
    },
    {
        id: 1,
        label: "Давно",
        date: defaultDate,
        amount: "+200",
        category: "Food",
    },
];

const storedTransactionsJSON = localStorage.getItem("transactions");
const storedCategoriesJSON = localStorage.getItem("cat");

const initialState = {
    categories: (storedCategoriesJSON && JSON.parse(storedCategoriesJSON)) || cat,
    transactions: (storedTransactionsJSON && JSON.parse(storedTransactionsJSON)) || transactions
};

const rootReducer = (state = initialState, action: RequestCatAction | RequestTransAction) => {
    switch (action.type) {
        case "CREATE_TRANS":
            const oldTransactions = state.transactions;
            const lastTransaction = oldTransactions[oldTransactions.length - 1];
            const newTransactions = [...state.transactions, { ...action.payload, id: lastTransaction.id + 1 }];
            localStorage.setItem("transactions", JSON.stringify(newTransactions));
            return {
                ...state, transactions: newTransactions,
            }
        case "CREATE_CAT":
            const oldCategories = state.categories;
            const lastCategory = oldCategories[oldCategories.length - 1];
            const newCategories = [...state.categories, {name: action.payload, id: lastCategory.id + 1}]
            localStorage.setItem("cat", JSON.stringify(newCategories));
            return{
                ...state, categories: newCategories
            }
        default:
            return state
    }
}

export default rootReducer;
