import Container from '../Container/Container'
import styles from './Tabs.module.scss'

function Tabs({ tabs, topLine = true }) {
  return (
    <div className={styles.tabs}>
      <Container
        className={`${styles.container}${
          topLine ? ` ${styles['top-line']}` : ''
        }`}
      >
        {tabs.map((item, index) => (
          <div key={item.tab + index} className={styles.tab}>
            {item.tab}
            {item.count && <span>{item.count}</span>}
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Tabs
