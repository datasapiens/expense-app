import styles from "./Tag.module.scss";

export interface TagProps {
  label?: string;
  onClose?: () => void;
}

export const Tag = ({ label, onClose }: TagProps) => (
  <div className={styles.tag}>
    {label}
    {onClose && (
      <button aria-label="Remove category" className={styles.tagClose} onClick={onClose}>
        &times;
      </button>
    )}
  </div>
);
