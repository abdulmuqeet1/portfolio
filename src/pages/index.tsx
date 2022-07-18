import type { NextPage } from 'next'
// Components
import HeadComp from "../components/main/head"
// Styles
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <HeadComp />
      <main className={styles.main}>
        <h1>Portfolio App</h1>
      </main>

    </div>
  )
}

export default Home
