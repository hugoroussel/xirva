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
import { useEffect } from 'react';
import Navbar from '../../../components/navbar';

const Post = () => {
  const router = useRouter();
  const { code } = router.query;
  const { yearmonth } = router.query;

  useEffect(() => {
    if (router.isReady) {
      console.log(code.split('.')[0]);
      console.log(yearmonth);
      console.log('yes we have both parameters');
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">Whats up</div>

    </>
  );
};

export default Post;
