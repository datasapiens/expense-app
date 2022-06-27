import { useState } from 'react'
import { Input } from '../Input/Input'
import styles from './NewTransaction.module.scss'
import { useStore } from '../../app/store'
import { useDispatch } from 'react-redux'
import {
  addTransaction,
  DEFAULT_CATEGORY,
} from '../../features/expenseTrackerSlice'
import { Select } from '../Select/Select'

export function NewTransaction() {
  const { categories } = useStore()
  const dispatch = useDispatch()

  const [transactionLabel, setTransactionLabel] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(DEFAULT_CATEGORY.id)
  const [date, setDate] = useState<string>(
    // iso format is looks like "2022-06-25T00:37:18.547Z" and input type="date" wants "2022-06-25"
    () => new Date().toISOString().split('T')[0]
  )

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const amountNumber = Number(amount)

    if (!Number.isNaN(amountNumber)) {
      dispatch(
        addTransaction({
          id: Date.now().toString(),
          amount: amountNumber,
          category,
          label: transactionLabel,
          date,
        })
      )
    }
    setAmount('')
    setTransactionLabel('')
  }

  return (
    <section className={styles.newTransaction}>
      <h2>New transaction</h2>
      <form className={styles.card} onSubmit={submit}>
        <Input
          id="transaction-label"
          label="Label"
          name="transaction-label"
          placeholder="Name of new transaction"
          required
          onChange={(e) => setTransactionLabel(e.target.value)}
          value={transactionLabel}
        />
        <Input
          id="amount"
          label="Amount"
          name="amount"
          type="number"
          placeholder="€"
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <Input
          id="date"
          label="Date"
          name="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <Select
          label="Category"
          name="category"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }}
        >
          {categories.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </Select>

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </section>
  )
}
