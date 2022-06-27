import { addCategory } from '../../features/expenseTrackerSlice'
import CheckIcon from '../../assets/icons/check.svg'
import styles from './newCategoryChip.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useStore } from '../../app/store'

export function NewCategoryChip() {
  const { categories } = useStore()

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onCreateCategory = (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (
      categories.some((category) => category.label === value) ||
      value === ''
    ) {
      return
    }

    dispatch(
      addCategory({
        label: value,
        id: Date.now().toString(),
      })
    )
    setValue('')
  }

  return (
    <form className={styles.newCategoryChip} onSubmit={onCreateCategory}>
      <input
        type="text"
        placeholder="Add new category label"
        onChange={(e) => setValue(e.target.value)}
        required
        value={value}
      ></input>
      <button type="submit" aria-label="Add category">
        <img src={CheckIcon} alt="🗸" width={15} height={15} />
      </button>
    </form>
  )
}
