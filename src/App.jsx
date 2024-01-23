import Layout from './components/Layout/Layout'
import Discover from './sections/Discover/Discover'
import Collection from './sections/Collection/Collection'
import Creators from './sections/Creators/Creators'
import Categories from './sections/Categories/Categories'

function App() {
  return (
    <>
      <Layout>
        <main>
          <Discover />
          <Collection />
          <Creators />
          <Categories />
        </main>
      </Layout>
    </>
  )
}

export default App
