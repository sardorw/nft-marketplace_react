import styles from './HowItWorkCard.module.scss'

function HowItWorkCard({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.img} alt='Image' />
      <div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default HowItWorkCard
