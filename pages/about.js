/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { React } from 'react';
import { CodeIcon, LightningBoltIcon } from '@heroicons/react/outline';
import Navbar from '../components/navbar';

const features = [
  {
    name: 'Hosted on IPFS using Fleek',
    description:
      'This frontend is hosted itself on IPFS, using Fleek.co ⚡, we love their service, go check them out!',
    icon: LightningBoltIcon,
    href: 'https://github.com/hugoroussel/xirva',
  },
  {
    name: 'Open Source',
    description:
      'The full repository is open-source, you are free to do PRs or star ⭐ to increase the visibility',
    icon: CodeIcon,
    href: 'github.com/hugoroussel/xirva',
  },

];

export default function CS() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="py-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">A better way to send money.</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
              {features.map((feature) => (feature.name === 'Open Source' ? (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                    {' '}
                    <a
                      className="text-indigo-500 hover:underline"
                      href={feature.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    .
                    {' '}
                  </dd>

                </div>
              ) : (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              )

              ))}
            </dl>
          </div>
        </div>

      </div>
    </>
  );
}
