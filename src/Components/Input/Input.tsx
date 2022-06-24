import styles from './input.module.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
}

export function Input({ label, ...props }: Props) {
  return (
    <div className={styles.ordinaryInput}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  )
}
