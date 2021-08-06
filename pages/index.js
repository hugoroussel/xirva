import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Web3Storage } from 'web3.storage'
import { saveAs } from 'file-saver';

export default function Home() {

  // be careful to not push tokens on the VCS! Old one was revoked
  function getAccessToken() {
    return ''
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }

  function getFiles() {
    const fileInput = document.querySelector('input[type="file"]')
    console.log(fileInput.files[0].name)
    return fileInput.files
  }

  async function storeFiles(files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }


  function clickMe(){
    //storeFiles(getFiles())
    //retrieveFiles(cid)
  }

  async function retrieveFiles(cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
    }

    // unpack File objects from the response
    const files = await res.files()
    const myfile = files[0];
    var FileSaver = require('file-saver');

    FileSaver.saveAs(myfile, "test.png");

    
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Xirva</title>
        <meta name="Xirva" content="Xirva | Upload your scientific papers on the decentralised web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Xirva
        </h1>
        <br/>

        <button
        onClick={clickMe}
        >Click Me</button>

        <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>

      </main>

      <footer className={styles.footer}>
       Made by Hugo Roussel for ETHGlobal Hack-FS 2021
      </footer>
    </div>
  )
}
