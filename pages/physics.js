/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { React, useEffect, useState } from 'react';
import router from 'next/router';
import Navbar from '../components/navbar';
import econ from '../data/physics.js';
import astro from '../routes/astro-ph.js';
import cond from '../routes/cond-mat.js';
import gr from '../routes/gr-qc.js';
import hepth from '../routes/hep-th.js';
import heplat from '../routes/hep-lat.js';
import hepph from '../routes/hep-ph.js';
import hepex from '../routes/hep-ex.js';
import math from '../routes/math-ph.js';
import nlin from '../routes/nlin.js';
import nucl from '../routes/nucl-ex.js';
import nucl1 from '../routes/nucl-th.js';
import phy from '../routes/physicsdat.js';

export default function CS() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const copycs = econ;
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
          <h3 className="text-4xl leading-6 font-medium text-gray-900">All Physics Categories</h3>
          <br />
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">Astrophysics</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {astro.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">Condensed Matter</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {cond.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">General Relativity and Quantum Cosmology</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {gr.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">High Energy Physics</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {hepex.concat(heplat, hepth, hepph).map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">Mathematical Physics</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {math.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code.split('-')[0]}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">Non Linear</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {nlin.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code.split('-')[0]}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline  leading-6 font-medium text-gray-900">Nuclear Physics</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {nucl.concat(nucl1).map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h3 className="text-xl underline leading-6 font-medium text-gray-900">Physics</h3>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            {phy.map((person) => (
              <div
                key={person.code}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-1 min-w-0">
                  <a
                    onClick={() => { router.push(`/categories/${person.code}`); }}
                    className="focus:outline-none"
                  >
                    {' '}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">{person.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
        </div>

      </div>

      <div />
    </>
  );
}
