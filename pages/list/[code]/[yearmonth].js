/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import Navbar from '../../../components/navbar';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBGNEI5OWE0QTdiZTBBNzA3OEE0OGRDNjQwZEZjMjY3QzI2MDAxRjAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mjg3NzE1MDkzODYsIm5hbWUiOiJ4aXJ2YTIifQ.AW16Sau5kIPMk0ZlFuqpEalGzxWft0oVc6-UEgPIYb4';
// Construct with token and endpoint

const Post = () => {
  const router = useRouter();
  const { code } = router.query;
  const { yearmonth } = router.query;
  const [allDocs, setAllDocs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [shownArticles, setShownArticles] = useState(0);

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
    console.log('filetext', filetext);
    const obj = JSON.parse(filetext);
    console.log(obj);
    setAllDocs(obj);
    setLoading(false);
  }

  useEffect(() => {
    if (allDocs.length < 6 && allDocs.length >= 1) {
      setShownArticles(allDocs.length);
    } else {
      setShownArticles(5);
    }
  }, [allDocs]);

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
          <div>

            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Found
              {' '}
              {allDocs.length}
              {' '}
              articles for this period
            </h1>
            <br />

            {allDocs.slice(0, shownArticles).map((article) => (
              <>
                <div className="bg-white shadow-xl sm:rounded-lg">
                  <div className="px-4 py-3 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {article.title}
                    </h3>
                    <br />
                    <p className="text-xs">{article.abstract}</p>
                    <br />
                    <p className="text-xs text-blue-500 hover:underline">
                      {article.authors}
                    </p>
                    <p className="text-xs text-gray-500">
                      {article.update_date}
                    </p>
                    <div className="mt-2 max-w-xl text-sm text-gray-500" />
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
                        (Coming soon)
                      </button>

                    </div>
                    &nbsp;
                    <div className="mt-5 inline-block">
                      <a
                        href={`https://arxiv.org/pdf/${article.id}.pdf`}
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
                    <div className="mt-5 inline-block pl-20">
                      <a
                        onClick={() => { router.push(`/list/${code}/${yearmonth}/${article.id}`); }}
                      >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Expand
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div><br /></div>
              </>
            ))}

            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={(e) => { e.preventDefault(); setShownArticles(shownArticles + 5); }}
            >
              Show 5 more
            </button>

            <br />
            <br />
            <br />

          </div>
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
