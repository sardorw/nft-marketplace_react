import Container from '../../components/Container/Container'
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm'
import styles from './Join.module.scss'

function Join() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <img src='/images/join.png' />
          <div>
            <h2>Join our weekly digest</h2>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <SubscribeForm className={styles.form} icon />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Join
