import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useStore } from '../../app/store'
import {
  addCategory,
  removeCategory,
} from '../../features/categories/categoriesSlice'
import { Input } from '../Input/Input'
import styles from './categoryManagement.module.scss'

export function CategoryManagement() {
  const { categories } = useStore().categoires
  const dispatch = useDispatch()

  const [newCategoryLabel, setNewCategoryLabel] = useState('')

  const onRemoveCategory = (id: string) => {
    dispatch(removeCategory(id))
  }

  const onCreateCategory = (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (categories.some((category) => category.label === newCategoryLabel)) {
      return
    }

    dispatch(
      addCategory({
        label: newCategoryLabel,
        id: Date.now().toString(),
      })
    )
    setNewCategoryLabel('')
  }

  return (
    <div>
      <h2>Category management</h2>
      <div className={styles.card}>
        <ul>
          {categories.map(({ id, label }) => (
            <li key={id}>
              <p>{label}</p>
              <button
                onClick={() => onRemoveCategory(id)}
                title="Remove category"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={onCreateCategory}>
          <Input
            label="New category name"
            id="new-category-label"
            value={newCategoryLabel}
            onChange={(e) => setNewCategoryLabel(e.target.value)}
          />
          <button>Add category</button>
        </form>
      </div>
    </div>
  )
}
