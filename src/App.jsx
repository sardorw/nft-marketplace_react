import Layout from './components/Layout/Layout'
import Discover from './sections/Discover/Discover'
import Collection from './sections/Collection/Collection'
import Creators from './sections/Creators/Creators'
import Categories from './sections/Categories/Categories'
import MoreNFTs from './sections/MoreNFTs/MoreNFTs'
import Mushrooms from './sections/Mushrooms/Mushrooms'
import HowItWorks from './sections/HowItWorks/HowItWorks'

function App() {
  return (
    <>
      <Layout>
        <main>
          <Discover />
          <Collection />
          <Creators />
          <Categories />
          <MoreNFTs />
          <Mushrooms />
          <HowItWorks />
        </main>
      </Layout>
    </>
  )
}

export default App
