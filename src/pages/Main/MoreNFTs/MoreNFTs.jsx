import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import NFTCard from '@/components/Cards/NFTCard/NFTCard'
import { EyeIcon } from '@/assets/icons'
import { moreNFTsData } from '@/contents'
import styles from './MoreNFTs.module.scss'

function MoreNFTs() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h2 className={styles.heading}>Discover More NFTs</h2>
          <p className={styles.subheading}>Explore new trending NFTs</p>
        </div>
        <Button className={styles.button} variant='outlined'>
          <EyeIcon />
          See All
        </Button>
        <div className={styles.cards}>
          {moreNFTsData.map((item) => (
            <NFTCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MoreNFTs
