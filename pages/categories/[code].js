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

      </div>
    </>
  );
};

export default Post;
