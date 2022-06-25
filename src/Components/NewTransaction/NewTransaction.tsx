import { useState } from 'react'
import { Category, Transaction } from '../Home'
import { Input } from '../Input/Input'
import styles from './newTransaction.module.scss'

type Props = {
  categories: Category[]
  addTransaction: (t: Transaction) => void
}

const DEFAULT_CATEGORY = 'other'

export function NewTransaction({ categories, addTransaction }: Props) {
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(DEFAULT_CATEGORY)
  const [transactionLabel, setTransactionLabel] = useState('')
  const [date, setDate] = useState<string>(
    () => new Date().toISOString().split('T')[0]
  )
  // const [category, setCategory] = useState(DEFAULT_CATEGORY)

  const submit = () => {
    const amountNumber = Number(amount)

    if (!Number.isNaN(amountNumber)) {
      addTransaction({
        id: Date.now().toString(),
        amount: amountNumber,
        category,
        label: transactionLabel,
        date,
      })
    }
  }

  return (
    <section className={styles.newTransaction}>
      <h2>New transaction</h2>

      <div className={styles.card}>
        <Input
          label="Label"
          name="transaction-label"
          id="transaction-label"
          value={transactionLabel}
          onChange={(e) => setTransactionLabel(e.target.value)}
        />
        <Input
          label="Amount"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          label="Date"
          name="date"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          label="Category"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className={styles.submitButton} onClick={submit}>
          Submit
        </button>
      </div>
    </section>
  )
}

{
  /*

      <section className={styles.newTransaction}>
        <h2>New transaction</h2>
<div className={styles.card}>
          <div className={styles.layout}>
            <Input
              label="Label"
              name="transaction-label"
              id="transaction-label"
              value={transactionLabel}
              onChange={(e) => setTransactionLabel(e.target.value)}
            />

            <Input label="Date" name="date" id="date" type="date" />

            <Input
              label="Amount"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <Input
              label="Category"
              name="category"
              id="category"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            /* <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            {categories.map(({ id, label }) => (
              <option key={id}>{label}</option>
            ))}
            <option key={DEFAULT_CATEGORY}>Other</option>
          </select> 
          </div>
          <button className={styles.submitButton}>Submit</button>
        </div>
      </section> 
  */
}
