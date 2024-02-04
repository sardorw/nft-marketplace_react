import styles from './NFT.module.scss'
import Description from './Description/Description'
import ArtistNFTs from './ArtistNFTs/ArtistNFTs'

function NFT() {
  return (
    <main>
      <img src='/images/nft.png' alt='Image' className={styles.thumbnail} />
      <Description />
      <ArtistNFTs />
    </main>
  )
}

export default NFT
