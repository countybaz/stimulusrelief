
import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-stimulus-darkblue to-blue-900 py-5 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-white">
          <div className="flex items-center justify-center mb-2">
            <DollarSign className="h-6 w-6 mr-2 text-stimulus-green" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center font-sans">
              2025 $1,400 STIMULUS ASSISTANCE RELIEF PROGRAM
            </h1>
          </div>
          
          <p className="text-sm sm:text-base mt-1 text-center max-w-xl">
            Helping eligible Americans with groceries, rent, and everyday expenses
          </p>
          
          <div className="mt-2 flex items-center bg-white/10 px-4 py-2 rounded-full text-sm">
            <ShieldCheck className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Secure Eligibility Check • Limited Time Program</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
