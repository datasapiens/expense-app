export interface ITransaction {
    id?: string;
    label: string;
    date: string;
    amount?: number | null;
    category?: number | null;
}
