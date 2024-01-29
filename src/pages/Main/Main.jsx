import Layout from '@/components/Layout/Layout'
import Discover from './Discover/Discover'
import Collection from './Collection/Collection'
import Creators from './Creators/Creators'
import Categories from './Categories/Categories'
import MoreNFTs from './MoreNFTs/MoreNFTs'
import Mushrooms from './Mushrooms/Mushrooms'
import HowItWorks from './HowItWorks/HowItWorks'
import Join from './Join/Join'

function Main() {
  return (
    <Layout>
      <main>
        <Discover />
        <Collection />
        <Creators />
        <Categories />
        <MoreNFTs />
        <Mushrooms />
        <HowItWorks />
        <Join />
      </main>
    </Layout>
  )
}

export default Main
