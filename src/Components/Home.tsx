import { ListOfTransactions } from './ListOfTransactions/ListOfTransactions'
import { NewTransaction } from './NewTransaction/NewTransaction'

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <NewTransaction />
      <ListOfTransactions />
    </>
  )
}
