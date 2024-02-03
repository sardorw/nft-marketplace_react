import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import Tabs from '@/components/Tabs/Tabs'
import NFTCard from '@/components/Cards/NFTCard/NFTCard'
import {
  CopyIcon,
  PlusIcon,
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  GlobeIcon,
} from '@/assets/icons'
import { artistCardsData } from '@/contents'
import styles from './Artist.module.scss'

function Artist() {
  return (
    <main>
      <div className={styles.avatar}>
        <Container className={styles['avatar-container']}>
          <img src='/images/creators/animakid.png' alt='Image' />
        </Container>
      </div>

      <Container className={styles['artist-container']}>
        <h1 className={styles.name}>Animakid</h1>
        <div className={styles.buttons}>
          <Button className={styles.copy}>
            <CopyIcon />
            0xc0E3...B79C
          </Button>
          <Button className={styles.follow} variant='outlined'>
            <PlusIcon />
            0xc0E3...B79C
          </Button>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statistics__item}>
            <h4>250k+</h4>
            <p>Volume</p>
          </div>
          <div className={styles.statistics__item}>
            <h4>50+</h4>
            <p>NFTs Sold</p>
          </div>
          <div className={styles.statistics__item}>
            <h4>3000+</h4>
            <p>Followers</p>
          </div>
        </div>
        <div className={styles.bio}>
          <h4>Bio</h4>
          <p>The internet's friendliest designer kid.</p>
        </div>
        <div className={styles.links}>
          <h4>Links</h4>
          <div className={styles.socials}>
            <a href='/'>
              <GlobeIcon />
            </a>
            <a href='/'>
              <DiscordIcon />
            </a>
            <a href='/'>
              <YouTubeIcon />
            </a>
            <a href='/'>
              <TwitterIcon />
            </a>
            <a href='/'>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </Container>
      <Tabs
        tabs={[
          { tab: 'Created', count: 302 },
          { tab: 'Owned', count: 67 },
          { tab: 'Collection', count: 4 },
        ]}
      />

      <section className={styles.cards}>
        <Container className={styles['cards-container']}>
          {artistCardsData.map((item) => (
            <NFTCard key={item.id} data={item} bgColor />
          ))}
        </Container>
      </section>
    </main>
  )
}

export default Artist
