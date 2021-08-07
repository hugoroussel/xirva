import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Web3Storage } from 'web3.storage'
import { saveAs } from 'file-saver';
import Navbar from '../components/navbar';
export default function Home() {

  return (
    <>
      <Navbar/>
    <div className={styles.container}>
      


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Xirva
        </h1>
        <br/>
      </main>

      <footer className={styles.footer}>
       Made by Hugo Roussel for ETHGlobal Hack-FS 2021
      </footer>
    </div>
    </>
  )
}
