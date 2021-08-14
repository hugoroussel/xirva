/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import router from 'next/router';
import { React } from 'react';
import Navbar from '../components/navbar';
import actions from '../data/generalCategories';

// eslint-disable-next-line no-unused-vars
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <br />
        <div className="md:items-center">
          <center>
            <br />
            <br />
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">Welcome to Xirva</h2>
            <br />
            <br />
            <h2 className="text-3xl leading-7 text-black sm:text-xl sm:truncate hover:opacity-25">
              Publish and Browse Scientific Papers
              {' '}
              <br />
              on the Open Web
            </h2>
            <br />
            <br />
          </center>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {actions.map((person) => (
            <div
              key={person.name}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-600 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-shrink-0">
                <person.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <a
                  className="focus:outline-none text-center"
                  onClick={() => { router.push(person.href); }}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-md font-medium text-gray-900">{person.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
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
            </div>
          </footer>
        </center>
      </div>
    </>
  );
}
