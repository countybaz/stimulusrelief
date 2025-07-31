
import React from 'react';
import { DollarSign } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-gray-50 border-b border-gray-200 py-5 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-stimulus-blue rounded-full p-2 mr-3">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center font-sans text-gray-800 tracking-tight">
              2025 <span className="text-stimulus-green font-black">$1,000</span> CREDIT LINE ASSISTANCE PROGRAM
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
