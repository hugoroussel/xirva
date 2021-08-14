/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { React } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import Navbar from '../components/navbar';

export default function CS() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <br />
          <br />
          <h3 className="text-lg leading-6 font-medium text-gray-900">Discover and increase visibility of new papers!</h3>
          <br />
          <br />
          <div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Coming Soon near you!
                    {' '}
                    <a href="#" className="font-medium underline text-yellow-700 hover:text-yellow-600">
                      This feature is still in development.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>

      </div>

      <div />
    </>
  );
}
