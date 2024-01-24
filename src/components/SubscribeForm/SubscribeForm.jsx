import { EnvelopeSimpleIcon } from '../../assets/icons'
import Button from '../Button/Button'
import styles from './SubscribeForm.module.scss'

function SubscribeForm({ className, icon }) {
  return (
    <form className={`${styles.form} ${className}`}>
      <input placeholder='Enter your email here' />
      <Button type='submit'>
        {icon && <EnvelopeSimpleIcon />}
        Subscribe
      </Button>
    </form>
  )
}

export default SubscribeForm
