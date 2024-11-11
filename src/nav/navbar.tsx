import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-black text-white h-20 flex items-center justify-between px-4">
      <div className="text-[1.5rem] font-extrabold">Node x</div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-white font-semibold hover:text-gray-400 focus:outline-none"
        >
          Features
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul className="text-black py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">Home page</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/mint">Mint page</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/transfer">Transfer page</Link>
              </li>
              
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/burn">Burn page</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <ConnectButton />
    </div>
  );
};

export default Navbar;
