import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import styles from './Discover.module.scss'
import { RocketLaunchIcon } from '../../assets/icons'

function Discover() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h1 className={styles.title}>Discover digital art & Collect NFTs</h1>
          <p className={styles.subtitle}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>

        <div className={styles.statistics}>
          <Button className={styles.button}>
            <RocketLaunchIcon />
            Get Started
          </Button>
          <div className={styles.statistics__wrapper}>
            <div className={styles.statistics__item}>
              <h4>240k+</h4>
              <p>Total Sale</p>
            </div>
            <div className={styles.statistics__item}>
              <h4>100k+</h4>
              <p>Auctions</p>
            </div>
            <div className={styles.statistics__item}>
              <h4>240k+</h4>
              <p>Artists</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src='/images/discover-card.png'
            alt='Image'
            className={styles.card__image}
          />
          <div className={styles.card__wrapper}>
            <h5>Space Walking</h5>
            <div className={styles.card__creator}>
              <img src='/images/creators/animakid.png' alt='Animakid' />
              <p>Animakid</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Discover
