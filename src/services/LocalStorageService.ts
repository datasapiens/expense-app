import { max } from "lodash";
import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";
import { httpService } from "./HttpService";

class LocalStorageService {

    private CategoriesKey: string = 'categories';
    private TransactionKey: string = 'transactions';

    getCategories = (): Category[] => {
        let list = this.getLocalItem(this.CategoriesKey);

        if(list.length == 0) {
            localStorage.setItem(this.CategoriesKey, JSON.stringify(httpService.getSeedCategories()));
            return this.getLocalItem(this.CategoriesKey);
        }

        return list;
    }

    AddCategory = (label: string): void => {
        let list = this.getCategories();

        var maxId = max(list.map(a => a.id)) ?? 0;

        var category: Category = { id: maxId + 1, label: label };

        localStorage.setItem(this.CategoriesKey, JSON.stringify([...list, category]))
    }

    deleteCategory = (item: Category): boolean => {

        var transactions = this.getTransactions().filter(t => t.category == item.id);

        if (transactions.length > 0) {
            return false;
        }

        var existingCategories = this.getCategories();
        localStorage.setItem(this.CategoriesKey, JSON.stringify(existingCategories.filter(f => f.id != item.id)));

        return true;
    }

    setTransactionData = (item: Transaction) => {
        let transactions = this.getTransactions();

        var maxId = max(transactions.map(a => a.id)) ?? 0;

        item.id = maxId;

        localStorage.setItem(this.TransactionKey, JSON.stringify([...transactions, item]));
    }

    getTransactions = (): Transaction[] => {
        let list = this.getLocalItem(this.TransactionKey);

        if(list.length == 0) {
            localStorage.setItem(this.TransactionKey, JSON.stringify(httpService.getSeedTransactions()));
            return this.getLocalItem(this.TransactionKey);
        }

        return list;
    }

    private getLocalItem = (key: string): [] => {
        var items = localStorage.getItem(key);

        if (items == null || items == undefined) {
            return [];
        }

        return JSON.parse(items);
    }
}

var localStorageService = new LocalStorageService();

export { localStorageService };