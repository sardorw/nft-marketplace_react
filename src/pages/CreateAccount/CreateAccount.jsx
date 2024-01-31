import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button/Button'
import styles from './CreateAccount.module.scss'

function CreateAccount() {
  return (
    <Layout>
      <main className={styles.container}>
        <img src='/images/create-account.png' alt='Image' />
        <div className={styles.content}>
          <h1>Create account</h1>
          <p>
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
          <div className={styles.wrapper}>
            <Button className={styles.button}>Create account</Button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default CreateAccount
