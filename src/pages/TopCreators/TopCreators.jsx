import Container from '@/components/Container/Container'
import Tabs from '@/components/Tabs/Tabs'
import TopCreatorCard from '@/components/Cards/TopCreatorCard/TopCreatorCard'
import { topCreatorsData } from '@/contents'
import styles from './TopCreators.module.scss'

function TopCreators() {
  return (
    <main>
      <Container className={styles['header-container']}>
        <h1>Top Creators</h1>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </Container>
      <Tabs
        tabs={[
          {
            tab: 'Today',
          },
          {
            tab: 'This Week',
          },
          {
            tab: 'This Month',
          },
          {
            tab: 'All Time',
          },
        ]}
        topLine={false}
      />
      <section>
        <Container className={styles['cards-container']}>
          <div className={styles['cards-header']}>
            <div>#</div>
            <div>Artist</div>
            <div>Change</div>
            <div>NFTs Sold</div>
            <div>Volume</div>
          </div>
          <div className={styles.cards}>
            {Array(20)
              .fill(topCreatorsData[0])
              .map((item, index) => (
                <TopCreatorCard
                  key={item.id + index}
                  data={item}
                  number={index + 1}
                />
              ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default TopCreators
