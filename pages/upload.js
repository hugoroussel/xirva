/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { Web3Storage } from 'web3.storage';
import { saveAs } from 'file-saver';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

export default function Upload() {
  // be careful to not push tokens on the VCS! Old one was revoked
  function getAccessToken() {
    return '';
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  function getFiles() {
    const fileInput = document.querySelector('input[type="file"]');
    console.log(fileInput.files[0].name);
    return fileInput.files;
  }

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log('stored files with cid:', cid);
    return cid;
  }

  function clickMe() {
    // storeFiles(getFiles())
    // retrieveFiles(cid)
  }

  async function retrieveFiles(cid) {
    const client = makeStorageClient();
    const res = await client.get(cid);
    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    if (!res.ok) {
      throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`);
    }
    // unpack File objects from the response
    const files = await res.files();
    const myfile = files[0];
    const FileSaver = require('file-saver');
    FileSaver.saveAs(myfile, 'test.png');
  }

  return (
    <>
      <Navbar />
      <div>
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-16 pb-16 border-dotted border-4 border-light-blue-500">
            Drop Files Here
          </div>
        </center>
      </div>
    </>
  );
}
