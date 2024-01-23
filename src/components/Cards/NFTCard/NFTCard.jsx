import styles from './NFTCard.module.scss'

function NFTCard({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.img} alt='Image' />
      <div className={styles.body}>
        <h4>{data.name}</h4>
        <div className={styles.creator}>
          <img src={data.creator.avatar} />
          <p>{data.creator.name}</p>
        </div>
        <div className={styles.infos}>
          <div className={styles['infos-item']}>
            <p>Price</p>
            <p>{data.price}</p>
          </div>
          <div className={styles['infos-item']}>
            <p>Highest Bid</p>
            <p>{data.bid}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard
