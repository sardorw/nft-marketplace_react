import { RocketLaunchIcon } from '../../assets/icons'
import Button from '../../components/Button/Button'
import CreatorCard from '../../components/Cards/CreatorCard/CreatorCard'
import Container from '../../components/Container/Container'
import { creatorsData } from '../../contents'
import styles from './Creators.module.scss'

function Creators() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h2 className={styles.heading}>Top creators</h2>
          <p className={styles.subheading}>
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button className={styles.button} variant='outlined'>
          <RocketLaunchIcon />
          View Rankings
        </Button>
        <div className={styles.cards}>
          {creatorsData.map((item, index) => (
            <CreatorCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Creators
