import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";

class SeedService {
    getSeedCategories = (): Category[] => {
        return [
            { id: 1, label: "Salary", },
            { id: 2, label: "Gifts", },
            { id: 3, label: "Food", },
            { id: 4, label: "Going out", },
            { id: 5, label: "Traveling", },
        ];
    };

    getSeedTransactions = (): Transaction[] => {
        return [
            { id: 1, label: "Bought Food", date: new Date('04/03/2022'), amount: -1000, category: 3 },
            { id: 2, label: "Travelled to France", date: new Date(), amount: -1200, category: 5 },
        ];
    };
}

var seedService = new SeedService();

export { seedService };
