import {
  Category,
  DEFAULT_CATEGORY,
  removeCategory,
} from '../../features/expenseTrackerSlice'
import CloseIcon from '../../assets/icons/close.svg'
import styles from './CategoryChip.module.scss'
import { useDispatch } from 'react-redux'

type Props = Category

export function CategoryChip({ id, label }: Props) {
  const dispatch = useDispatch()
  const onRemoveCategory = () => {
    // there's got to be better way to handle this without making one slice for both
    dispatch(removeCategory(id))
  }

  return (
    <div className={styles.categoryChip}>
      <p>{label}</p>
      {id !== DEFAULT_CATEGORY.id && (
        <button onClick={onRemoveCategory} aria-label="remove">
          <img src={CloseIcon} alt="×" width={15} height={15} />
        </button>
      )}
    </div>
  )
}
