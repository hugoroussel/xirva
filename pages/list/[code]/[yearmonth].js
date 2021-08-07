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

  useEffect(() => {
    if (router.isReady) {
      const category = code.split()[0];
      console.log(yearmonth);
      const docs = require(`data/indexing/${category}/${yearmonth}/${yearmonth}.js`);
      setAllDocs(docs);
      console.log('yes we have both parameters', docs[0].refs);
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">

        {/* allDocs.refs[0].map((doc) => (
          <div>
            {doc.title}
          </div>
        )) */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Once you delete your account, you will lose all data associated with it.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Post;
