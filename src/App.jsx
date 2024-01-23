import Layout from './components/Layout/Layout'
import Discover from './sections/Discover/Discover'
import Collection from './sections/Collection/Collection'

function App() {
  return (
    <>
      <Layout>
        <main>
          <Discover />
          <Collection />
        </main>
      </Layout>
    </>
  )
}

export default App
