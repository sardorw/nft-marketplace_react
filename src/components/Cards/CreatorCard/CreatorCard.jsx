import styles from './CreatorCard.module.scss'

function CreatorCard({ data, index }) {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{index + 1}</div>
      <img src={data.img} alt='Image' />
      <div>
        <h4>{data.name}</h4>
        <p>
          Total Sales: <span>{data.totalSales}</span>
        </p>
      </div>
    </div>
  )
}

export default CreatorCard
