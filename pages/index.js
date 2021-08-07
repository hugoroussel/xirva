/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import Navbar from '../components/navbar';
import actions from '../data/generalCategories';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto sm:px-6 lg:px-12">
        <br />
        <br />
        <br />

        <div className="md:items-center">
          <center>
            <h2 className="text-2xl font-bold leading-7 text-black sm:text-3xl sm:truncate">Welcome to Xirva.org</h2>
            <br />
            <h2 className="text-xl leading-7 text-black sm:text-xl sm:truncate">
              Publish and Browse scientific Papers
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
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-shrink-0">
                <person.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <a href={person.href} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{person.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </>
  );
}
