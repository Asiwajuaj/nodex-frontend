import React, { useState } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constant/constant';
import { useWriteContract } from "wagmi";
const Burn = () => {
  const [amount, setAmount] = useState('');
  const { writeContract, error:errorOne, isError, isPending ,isSuccess} = useWriteContract();
    
  const handleBurn = async () => {
    const result = writeContract({
      abi: CONTRACT_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "burn",
      args: [amount],
    });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-6">Burn Tokens</h2>
      
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount to Burn</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Amount to burn"
          />
        </div>

        <button
          onClick={handleBurn}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
        >
        {isPending ? "Burning....." : "Burn Tokens"}  
        </button>
      </div>
    </div>
  );
};

export default Burn;
