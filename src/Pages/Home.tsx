import { Transactions } from "./Transaction/Transactions";
import { Categories } from './Category/Categories';

export function Home() {
    return <>
        <Transactions />
        <Categories />
    </>
}