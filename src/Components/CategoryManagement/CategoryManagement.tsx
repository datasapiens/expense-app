import { useState } from 'react'
import { useStore } from '../../app/store'
import styles from './CategoryManagement.module.scss'
import ExpandIcon from '../../assets/icons/expand.svg'
import { CategoryChip } from '../CategoryChip/CategoryChip'
import { NewCategoryChip } from '../NewCategoryChip/NewCategoryChip'

export function CategoryManagement() {
  const [opened, setOpened] = useState(true)
  const { categories } = useStore()

  const toggleCategoryManagement = () => {
    setOpened(!opened)
  }

  return (
    <section className={styles.categoryManagement}>
      <span className={styles.header}>
        <h2 onClick={toggleCategoryManagement}>
          Categories
          <img
            className={styles.icon}
            src={ExpandIcon}
            data-reversed={opened}
            alt="toggle"
          />
        </h2>
      </span>

      {opened && (
        <div className={styles.card} data-opened={opened}>
          <div className={styles.chips}>
            {categories.map((category) => (
              <CategoryChip key={category.id} {...category} />
            ))}
            <NewCategoryChip />
          </div>
        </div>
      )}
    </section>
  )
}
