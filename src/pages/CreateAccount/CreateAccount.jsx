import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { UserIcon, EnvelopeSimpleIcon, LockKeyIcon } from '@/assets/icons'
import styles from './CreateAccount.module.scss'

function CreateAccount() {
  return (
    <main className={styles.container}>
      <img src='/images/create-account.png' alt='Image' />
      <div className={styles.content}>
        <h1>Create account</h1>
        <p>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <div className={styles.wrapper}>
          <Input placeholder='Username' icon={<UserIcon fill='#b4b4b4' />} />
          <Input
            placeholder='Email Address'
            icon={<EnvelopeSimpleIcon fill='#b4b4b4' />}
          />
          <Input placeholder='Password' icon={<LockKeyIcon />} />
          <Input placeholder='Confirm Password' icon={<LockKeyIcon />} />
          <Button className={styles.button}>Create account</Button>
        </div>
      </div>
    </main>
  )
}

export default CreateAccount
