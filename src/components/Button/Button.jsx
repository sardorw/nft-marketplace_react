import styles from './Button.module.scss'

function Button({ children, className, variant }) {
  return (
    <button
      className={`${styles.button}${className ? ` ${className}` : ''}${
        variant === 'outlined' ? ` ${styles.outlined}` : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
