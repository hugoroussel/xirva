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
import Navbar from '../../../components/navbar';

const Post = () => {
  const router = useRouter();
  const { code } = router.query;
  const { yearmonth } = router.query;
  const [allDocs, setAllDocs] = useState([]);
  const [noArticles, setNoArticles] = useState(true);
  const [shownArticles, setShownArticles] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      const category = code.split()[0];
      console.log(yearmonth);
      const docs = require(`data/indexing/${category}/${yearmonth}/${yearmonth}.json`);
      setNoArticles(docs.length == 0);
      console.log(docs);
      setAllDocs(docs);
      if (docs.length < 6) {
        setShownArticles(docs.length);
      } else {
        setShownArticles(5);
      }
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
        {noArticles ? (
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">No articles found for this date :(</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500" />
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        ) : (
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
                    <h3 className="text-md leading-6 font-medium text-gray-900">
                      {article.title}
                    </h3>
                    <br />
                    <p className="text-xs">{article.abstract}</p>
                    <br />
                    <p className="text-xs text-blue-500">
                      {article.authors}
                    </p>
                    <p className="text-xs text-gray-500">
                      {article.update_date}
                    </p>
                    <div className="mt-2 max-w-xl text-sm text-gray-500" />
                    <div className="mt-5">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:blue-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                      >
                        Download
                      </button>
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
        )}

      </div>

    </>
  );
};

export default Post;
