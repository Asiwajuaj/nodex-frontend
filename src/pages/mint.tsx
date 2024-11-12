import React, { useState } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constant/constant';
import { useWriteContract } from "wagmi";
const Mint = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const { writeContract, error:errorOne, isError, isPending ,isSuccess} = useWriteContract();

    const handleMint = async () => {
      console.log(address,amount);
      
      const result = writeContract({
        abi: CONTRACT_ABI,
        address: CONTRACT_ADDRESS,
        functionName: "mint",
        args: [address,amount],
      });

    };
  
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold mb-6">Mint Tokens</h2>
        
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Recipient Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0x1234...abcd"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Amount to mint"
            />
          </div>
  
          <button
            onClick={handleMint}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
           {isPending ? "Minting" : "Mint Tokens"}
          </button>
        </div>
      </div>
    );
}

export default Mint