import { LogoIcon } from '../../assets/icons'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <a href='/'>
        <LogoIcon />
        NFT Marketplace
      </a>
    </header>
  )
}

export default Header
