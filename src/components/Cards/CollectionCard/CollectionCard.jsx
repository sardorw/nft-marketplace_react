import styles from './CollectionCard.module.scss'

function CollectionCard({ data }) {
  return (
    <div>
      <img src={data.imgs[0]} alt='Image' className={styles['main-image']} />
      <div className={styles['images-wrapper']}>
        <img src={data.imgs[1]} alt='Image' />
        <img src={data.imgs[2]} alt='Image' />
        <div className={styles.count}>1025+</div>
      </div>
      <h4 className={styles.heading}>{data.title}</h4>
      <div className={styles.creator}>
        <img
          src={data.creator.avatar}
          alt='Image'
          className={styles.creator__avatar}
        />
        <p>{data.creator.name}</p>
      </div>
    </div>
  )
}

export default CollectionCard
