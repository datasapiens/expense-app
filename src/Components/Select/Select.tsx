import styles from '../../styles/common/input.module.scss'

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label: string
  children: React.ReactNode
}

export function Select({ label, ...selectProps }: Props) {
  return (
    <div className={styles.inputField}>
      <label htmlFor={selectProps.id}>{label}</label>
      <select {...selectProps} />
    </div>
  )
}
