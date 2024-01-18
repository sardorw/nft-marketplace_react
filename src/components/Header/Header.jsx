import Button from '../Button/Button'
import { LogoIcon, UserIcon, NavMenuIcon } from '../../assets/icons'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href='/'>
        <LogoIcon />
        NFT Marketplace
      </a>

      <nav>
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
      </nav>

      <Button className={styles.button}>
        <UserIcon />
        Sign Up
      </Button>

      <button className={styles['nav-menu']}>
        <NavMenuIcon />
      </button>
    </header>
  )
}

export default Header
