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
import Navbar from '../../components/navbar';

const years0to9 = [
  {
    year: '2000',
  },
  {
    year: '2001',
  },
  {
    year: '2002',
  },
  {
    year: '2003',
  },
  {
    year: '2004',
  },
  {
    year: '2005',
  },
  {
    year: '2006',
  },
  {
    year: '2007',
  },
  {
    year: '2008',
  },
  {
    year: '2009',
  },
];

const years10to20 = [
  {
    year: '2010',
  },
  {
    year: '2011',
  },
  {
    year: '2012',
  },
  {
    year: '2013',
  },
  {
    year: '2014',
  },
  {
    year: '2015',
  },
  {
    year: '2016',
  },
  {
    year: '2017',
  },
  {
    year: '2018',
  },
  {
    year: '2019',
  },
];

const years20to21 = [
  {
    year: '2020',
  },
  {
    year: '2021',
  },
];

const Post = () => {
  const router = useRouter();
  const { code } = router.query;
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (router.isReady) {
      const category = code.split('.')[0];
      const filepath = `${category}.js`;
      const docs = require(`../../data/${filepath}`);
      docs.default.forEach((doc) => {
        if (doc.code.trim() == code) {
          setDesc(doc.desc);
          setName(doc.name);
        }
      });
    }
  }, [router]);

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
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              {desc}
            </div>
            <div className="mt-5" />
          </div>
        </div>
        <br />
        <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">

          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                {years0to9.map((person) => (
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {person.year}
                  </a>
                ))}
              </nav>
              <br />
              <br />
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {years10to20.map((person) => (
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {person.year}
                  </a>
                ))}
              </nav>
              <br />
              <br />
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {years20to21.map((person) => (
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {person.year}
                  </a>
                ))}
              </nav>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Post;
