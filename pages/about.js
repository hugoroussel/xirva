/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { React } from 'react';
import Navbar from '../components/navbar';

export default function CS() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div>
          <br />
          <br />
          <h3 className="text-lg leading-6 font-medium text-gray-900">About</h3>
          <br />
          <br />
          <div>Made by Hugo Roussel for HackFS 2021</div>

          <br />
          <br />
        </div>

      </div>

      <div />
    </>
  );
}
