import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Token Name:", name);
    console.log("Token Symbol:", symbol);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Node X App</title>
        <meta content="Generated by @rainbow-me/create-rainbowkit" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

     

      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create ERC-20 Token</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Token Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Token Symbol:</label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
