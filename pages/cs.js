/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { React, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import cs from '../data/cs.js';

export default function CS() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const copycs = cs;
    data.sort((a, b) => {
      const keyA = a.name;
      const keyB = b.name;
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setData(copycs);
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div>
          <br />
          <br />
          <h3 className="text-lg leading-6 font-medium text-gray-900">Computer Science</h3>
          <br />
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {data.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a href={`./out/categories/${person.code}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>

      </div>

      <div />
    </>
  );
}
