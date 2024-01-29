import Container from '@/components/Container/Container'
import CollectionCard from '@/components/Cards/CollectionCard/CollectionCard'
import { collectionData } from '@/contents'
import styles from './Collection.module.scss'

function Collection() {
  return (
    <section>
      <Container className={styles.container}>
        <h2 className={styles.heading}>Trending Collection</h2>
        <p className={styles.subheading}>
          Checkout our weekly updated trending collection.
        </p>

        <div className={styles.cards}>
          {collectionData.map((item) => (
            <CollectionCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Collection
