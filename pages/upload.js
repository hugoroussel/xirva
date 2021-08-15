/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Web3Storage } from 'web3.storage';
import { Switch } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import { ethers } from 'ethers';
import Navbar from '../components/navbar';
import xirva from '../contracts/abi';

const XIRVA_CONTRACT = '0x0FC1fC84c65C93fd79cC042D09f1789BB4b53FF2';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Upload() {
  const [enabled, setEnabled] = useState(false);

  // be careful to not push tokens on the VCS! Old one was revoked
  function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBGNEI5OWE0QTdiZTBBNzA3OEE0OGRDNjQwZEZjMjY3QzI2MDAxRjAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mjg3NzE1MDkzODYsIm5hbWUiOiJ4aXJ2YTIifQ.AW16Sau5kIPMk0ZlFuqpEalGzxWft0oVc6-UEgPIYb4';
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  async function getXirvaContract() {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.matic.network');
    const xirvaContract = new ethers.Contract(XIRVA_CONTRACT, xirva, provider);
    return xirvaContract;
  }

  async function getAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    return account;
  }

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    return cid;
  }

  async function mint(cid) {
    const xc = await getXirvaContract();
    const res = await xc.populateTransaction.createCollectible(cid);
    res.from = await getAccount();
    res.chainId = 137;
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [res],
    });
    alert('your tx hash', txHash);
  }

  async function uploadToIPFS() {
    const fileInput = document.querySelector('input[type="file"]');
    // console.log('uploading to IPFS', fileInput.files[0].name);
    const cid = storeFiles(fileInput.files);
    if (enabled) {
      alert('mint NFT?');
      await mint(cid);
    } else {
      alert('uploaded to IPFS', cid);
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // alert('MetaMask is installed!');
      getAccount();
    } else {
      // alert('Please use Metamask to use this application');
    }
  }, []);

  return (
    <>
      <Navbar />
      <div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <br />
          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    This project is in beta. Use at your own risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Community Upload</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    You can upload your research and publish it on the open web. Members of the community will be able to vote on your research to raise its visibility.
                    Your paper will be marked as a community-paper.
                  </p>
                </div>

                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Title
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm border-2">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Abstract
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      PDF upload
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">

                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Category
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>astro-ph.HE</option>
                        <option>astro-ph.IM</option>
                        <option>astro-ph.SR</option>
                        <option>cond-mat.dis-nn</option>
                        <option>cond-mat.mes-hall</option>
                        <option>cond-mat.mtrl-sci</option>
                        <option>cond-mat.other</option>
                        <option>cond-mat.quant-gas</option>
                        <option>cond-mat.soft</option>
                        <option>cond-mat.stat-mech</option>
                        <option>cond-mat.str-el</option>
                        <option>cond-mat.supr-con</option>
                        <option>gr-qc</option>
                        <option>hep-ex</option>
                        <option>hep-lat</option>
                        <option>hep-ph</option>
                        <option>hep-th</option>
                        <option>math-ph</option>
                        <option>nlin.AO</option>
                        <option>nlin.CD</option>
                        <option>nlin.CG</option>
                        <option>nlin.PS</option>
                        <option>nlin.SI</option>
                        <option>nucl-ex</option>
                        <option>nucl-th</option>
                        <option>physics.acc-ph</option>
                        <option>physics.ao-ph</option>
                        <option>physics.app-ph</option>
                        <option>physics.atm-clus</option>
                        <option>physics.atom-ph</option>
                        <option>physics.bio-ph</option>
                        <option>physics.chem-ph</option>
                        <option>physics.class-ph</option>
                        <option>physics.comp-ph</option>
                        <option>physics.data-an</option>
                        <option>physics.ed-ph</option>
                        <option>physics.flu-dyn</option>
                        <option>physics.gen-ph</option>
                        <option>physics.geo-ph</option>
                        <option>physics.hist-ph</option>
                        <option>physics.ins-det</option>
                        <option>physics.med-ph</option>
                        <option>physics.optics</option>
                        <option>physics.plasm-ph</option>
                        <option>physics.pop-ph</option>
                        <option>physics.soc-ph</option>
                        <option>physics.space-ph</option>
                        <option>quant-ph</option>
                        <option>q-bio.BM</option>
                        <option>q-bio.CB</option>
                        <option>q-bio.GN</option>
                        <option>q-bio.MN</option>
                        <option>q-bio.NC</option>
                        <option>q-bio.OT</option>
                        <option>q-bio.PE</option>
                        <option>q-bio.QM</option>
                        <option>q-bio.SC</option>
                        <option>q-bio.TO</option>
                        <option>q-fin.CP</option>
                        <option>q-fin.EC</option>
                        <option>q-fin.GN</option>
                        <option>q-fin.MF</option>
                        <option>q-fin.PM</option>
                        <option>q-fin.PR</option>
                        <option>q-fin.RM</option>
                        <option>q-fin.ST</option>
                        <option>q-fin.TR</option>
                        <option>stat.AP</option>
                        <option>stat.CO</option>
                        <option>stat.ME</option>
                        <option>stat.ML</option>
                        <option>stat.OT</option>
                        <option>stat.TH</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Authors
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm border-2">
                    <input
                      type="text"
                      name="authors"
                      id="authors"
                      autoComplete="authors"
                      className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <center>
                  <h1>
                    Mint as an NFT?
                  </h1>
                  <br />
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                      enabled ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      )}
                    />
                  </Switch>
                </center>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => { e.preventDefault(); uploadToIPFS(); }}
                >
                  Save
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>

      <center>
        <footer>
          <div className="space-x-2 align-middle">
            <div className="inline-block align-middle text-xl">Powered by</div>
            <div className="inline-block align-middle">
              {' '}
              <img
                className="h-10 w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/IPFS_logo.png"
                alt="ipfs logo"
              />
            </div>
            +
            <div className="inline-block align-middle">
              {' '}
              <img
                className="h-8 w-100"
                src="https://polygon.technology/media-kit/polygon-logo.svg"
                alt="polygon logo"
              />
            </div>
          </div>
        </footer>
      </center>

      <br />
      <br />
      <br />
    </>
  );
}
