/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Web3Storage } from 'web3.storage';
import { PaperClipIcon } from '@heroicons/react/solid';
import Navbar from '../../../../components/navbar';
import CS from '../../../physics';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBGNEI5OWE0QTdiZTBBNzA3OEE0OGRDNjQwZEZjMjY3QzI2MDAxRjAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mjg3NzE1MDkzODYsIm5hbWUiOiJ4aXJ2YTIifQ.AW16Sau5kIPMk0ZlFuqpEalGzxWft0oVc6-UEgPIYb4';
// Construct with token and endpoint

const Post = () => {
  const router = useRouter();
  const { code } = router.query;
  const { yearmonth } = router.query;
  const { ref } = router.query;
  // const [allDocs, setAllDocs] = useState([]);
  const [doc, setDoc] = useState();

  const [loading, setLoading] = useState(true);

  async function getArticles(category, period) {
    const docs = require(`data/indexing/${category}.json`);
    console.log(docs);
    const cid = docs[`${period}.json`];
    console.log(cid);
    const client = new Web3Storage({ token: API_TOKEN });
    console.log('downloading');
    let res = '';
    try {
      res = await client.get(cid);
    } catch (e) {
      console.log(e);
      setLoading(false);
      return;
    }
    const files = await res.files();
    const myfile = files[0];
    const filetext = await myfile.text();
    const obj = JSON.parse(filetext);

    obj.forEach((item) => {
      if (item.id === ref) {
        setDoc(item);
        console.log(item);
      }
    });
    setLoading(false);
  }

  useEffect(async () => {
    if (router.isReady) {
      const category = code.split()[0];
      console.log(yearmonth);
      await getArticles(category, yearmonth);
      console.log('got all docs');
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        { !loading ? (
          <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{doc.title}</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Authors</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.authors}</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Submitter</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.submitter}</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Categories</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.categories}</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Update Date</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.update_date}</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Abstract</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {doc.abstract}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Other informations</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Arxiv ID :
                      {' '}
                      {doc.id}
                      <br />
                      Comments :
                      {' '}
                      {doc.comments}
                      <br />
                      <a href={doc.license} className="text-blue-900 hover:underline">License</a>
                      <br />
                      DOI :
                      {' '}
                      {doc.doi}
                      <br />
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Download</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <div className="mt-5 inline-block">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:blue-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                        >
                          Download from
                          &nbsp;
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"
                            className="h-5 w-5"
                            alt="IPFS logo"
                          />
                          &nbsp;
                          (coming soon)
                        </button>

                      </div>
                      &nbsp;
                      <div className="mt-5 inline-block pr-14">
                        <a
                          href={`https://arxiv.org/pdf/${doc.id}.pdf`}
                        >
                          <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:blue-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                          >
                            Download from
                            &nbsp;
                            <img
                              src="https://oasismath.org/resources-directory/img/arxiv.png"
                              className="h-5 w-5"
                              alt="IPFS logo"
                            />
                          </button>
                        </a>
                      </div>

                      <br />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </>

        ) : (
          <>
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">

                  Loading articles indexes from IPFS..

                </h3>
                <center>
                  <img
                    src="https://i.pinimg.com/originals/9c/1c/40/9c1c4007b2da3330502be886db9ecac1.gif"
                    alt="loading gif"
                    className="h-40 w-42 bg-opacity-0"
                  />
                </center>
              </div>
            </div>
          </>
        )}

      </div>

    </>
  );
};

export default Post;
