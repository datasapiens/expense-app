import { Category } from '../Home'

type Props = {
  categories: Category[]
}

export function NewTransaction({ categories }: Props) {
  return (
    <div className="new-transaction">
      <label>
        Nová transakce
        <input type="number" />
      </label>

      <label>
        Category
        <select name="category" id="category">
          {categories.map(({ id, label }) => (
            <option key={id}>{label}</option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </div>
  )
}
