import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import NFTCard from '@/components/Cards/NFTCard/NFTCard'
import { ArrowRightIcon } from '@/assets/icons'
import { artistCardsData } from '@/contents'
import styles from './ArtistNFTs.module.scss'

function ArtistNFTs() {
  return (
    <section>
      <Container className={styles.container}>
        <h2>More from this artist</h2>
        <Button className={styles.button} variant='outlined'>
          <ArrowRightIcon />
          Go To Artist Page
        </Button>
        <div className={styles.cards}>
          {artistCardsData.map((item) => (
            <NFTCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ArtistNFTs
