/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable import/no-duplicates */
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
import router from 'next/router';
import { Web3Storage } from 'web3.storage';
import Navbar from '../../components/navbar';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBGNEI5OWE0QTdiZTBBNzA3OEE0OGRDNjQwZEZjMjY3QzI2MDAxRjAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mjg3NzE1MDkzODYsIm5hbWUiOiJ4aXJ2YTIifQ.AW16Sau5kIPMk0ZlFuqpEalGzxWft0oVc6-UEgPIYb4';
const actions = [
  {
    year: '2000',
    code: '0',
  },
  {
    year: '2001',
    code: '01',
  },
  {
    year: '2002',
    code: '02',
  },
  {
    year: '2003',
    code: '03',
  },
  {
    year: '2004',
    code: '04',
  },
  {
    year: '2005',
    code: '05',
  },
  {
    year: '2006',
    code: '06',
  },
  {
    year: '2007',
    code: '07',
  },
  {
    year: '2008',
    code: '08',
  },
  {
    year: '2009',
    code: '09',
  },
  {
    year: '2010',
    code: '10',
  },
  {
    year: '2011',
    code: '11',
  },
  {
    year: '2012',
    code: '12',
  },
  {
    year: '2013',
    code: '13',
  },
  {
    year: '2014',
    code: '14',
  },
  {
    year: '2015',
    code: '15',
  },
  {
    year: '2016',
    code: '16',
  },
  {
    year: '2017',
    code: '17',
  },
  {
    year: '2018',
    code: '18',
  },
  {
    year: '2019',
    code: '19',
  },
  {
    year: '2020',
    code: '20',
  },
  {
    year: '2021',
    code: '21',
  },

];

const Post = () => {
  const router1 = useRouter();
  const { code } = router1.query;
  const [desc, setDesc] = useState('Desc');
  const [name, setName] = useState('Name');
  const [ref, setRef] = useState('');
  const [first, setFirst] = useState(false);
  const [allDocs, setAllDocs] = useState([]);
  const [shownArticles, setShownArticles] = useState(0);
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
      return;
    }
    const files = await res.files();
    const myfile = files[0];
    const filetext = await myfile.text();
    const obj = JSON.parse(filetext);
    setAllDocs(obj);
    setLoading(false);
  }

  useEffect(() => {
    if (router1.isReady && !first) {
      console.log('and this?', code);
      setFirst(true);
      setRef(code);
      const category = code.split('.')[0];
      const filepath = `${category}.js`;

      const docs = require(`routes/${filepath}`);

      docs.default.forEach((doc) => {
        if (doc.code.trim() == code) {
          setDesc(doc.desc);
          setName(doc.name);
        }
      });
      getArticles(code, '2107');
    }
  }, [router1]);

  useEffect(() => {
    if (allDocs.length < 6 && allDocs.length >= 1) {
      setShownArticles(allDocs.length);
    } else {
      setShownArticles(5);
    }
  }, [allDocs]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
        <br />
        <br />
        <br />

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Welcome to
              {' '}
              {name}
            </h3>
            <div className="mt-2 max-w-xl text-md text-gray-500">
              {desc}
            </div>
            <div className="mt-5" />
          </div>
        </div>
        <br />

        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Browse by year
        </h3>
        <br />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-8">
          {actions.map((person) => (
            <div
              key={person.year}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex space-x-3 hover:border-gray-600 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-0 min-w-0">
                <a
                  className="focus:outline-none text-center"
                  onClick={() => { router.push(`/year/${ref}/${person.code}`); }}
                >

                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-md font-medium text-gray-900 text-center">{person.year}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

        <br />

        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Recents in
          {' '}
          {name}
        </h3>
        <br />

        {!loading ? (
          <>
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
                        (coming soon)
                      </button>

                    </div>
                      &nbsp;
                    <div className="mt-5 inline-block pr-14">
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
                        onClick={() => { router.push(`/list/${code}/2107/${article.id}`); }}
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
                <br />
              </>
            ))}
            <div>
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={(e) => { e.preventDefault(); setShownArticles(shownArticles + 5); }}
              >
                Show 5 more
              </button>
            </div>
            <br />
            <br />
            <br />
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
            <br />
            <br />
          </>
        )}

      </div>
    </>
  );
};

export default Post;
