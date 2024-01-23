import Layout from './components/Layout/Layout'
import Discover from './sections/Discover/Discover'
import Collection from './sections/Collection/Collection'
import Creators from './sections/Creators/Creators'

function App() {
  return (
    <>
      <Layout>
        <main>
          <Discover />
          <Collection />
          <Creators />
        </main>
      </Layout>
    </>
  )
}

export default App
