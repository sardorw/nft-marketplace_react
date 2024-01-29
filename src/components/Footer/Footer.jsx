import Container from '../Container/Container'
import SubscribeForm from '../SubscribeForm/SubscribeForm'
import {
  DiscordIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
  YouTubeIcon,
} from '../../assets/icons'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <a className={styles.logo} href='/'>
              <LogoIcon />
              NFT Marketplace
            </a>
            <p className={styles.creator}>
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className={styles['socials-title']}>Join our community</p>
            <div className={styles['socials-wrapper']}>
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
          <div>
            <h5 className={styles.heading}>Explore</h5>
            <ul className={styles['nav-list']}>
              <li>
                <a href='/'>Marketplace</a>
              </li>
              <li>
                <a href='/'>Rankings</a>
              </li>
              <li>
                <a href='/'>Connect a wallet</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.heading}>Join our weekly digest</h5>
            <p className={styles['join-subtitle']}>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <SubscribeForm className={styles['join-button']} />
          </div>
        </div>

        <div>
          <hr className={styles.line} />
          <p className={styles.copyright}>
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
