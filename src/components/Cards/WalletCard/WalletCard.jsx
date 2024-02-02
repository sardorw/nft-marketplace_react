import styles from './WalletCard.module.scss'

function WalletCard({ img, name }) {
  return (
    <div className={styles.card}>
      <img src={img} />
      <p>{name}</p>
    </div>
  )
}

export default WalletCard
