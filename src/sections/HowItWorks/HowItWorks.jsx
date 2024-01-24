import HowItWorkCard from '../../components/Cards/HowItWorkCard/HowItWorkCard'
import Container from '../../components/Container/Container'
import { howItWorksData } from '../../contents'
import styles from './HowItWorks.module.scss'

function HowItWorks() {
  return (
    <section>
      <Container className={styles.container}>
        <h2>How it works</h2>
        <p>Find out how to get started</p>
        <div className={styles.cards}>
          {howItWorksData.map((item) => (
            <HowItWorkCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
