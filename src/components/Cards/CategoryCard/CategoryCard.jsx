import styles from './CategoryCard.module.scss'

function CategoryCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <img src={data.img} alt='Image' />
        <data.icon />
      </div>
      <h4>{data.title}</h4>
    </div>
  )
}

export default CategoryCard
