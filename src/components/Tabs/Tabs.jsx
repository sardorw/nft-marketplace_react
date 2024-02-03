import Container from '../Container/Container'
import styles from './Tabs.module.scss'

function Tabs({ tabs }) {
  return (
    <div className={styles.tabs}>
      <Container className={styles.container}>
        {tabs.map((item, index) => (
          <div key={item.tab + index} className={styles.tab}>
            {item.tab}
            <span>{item.count}</span>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Tabs
