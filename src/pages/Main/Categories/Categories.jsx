import CategoryCard from '@/components/Cards/CategoryCard/CategoryCard'
import Container from '@/components/Container/Container'
import { categoriesData } from '@/contents'
import styles from './Categories.module.scss'

function Categories() {
  return (
    <section>
      <Container className={styles.container}>
        <h2 className={styles.heading}>Browse Categories</h2>
        <div className={styles.cards}>
          {categoriesData.map((item) => (
            <CategoryCard key={item} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Categories
