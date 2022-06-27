import styles from '../../styles/common/input.module.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
}

export function Input({ label, ...props }: Props) {
  return (
    <div className={styles.inputField}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} required />
    </div>
  )
}
