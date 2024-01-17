import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
