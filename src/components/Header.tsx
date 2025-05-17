
import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-stimulus-darkblue to-blue-900 py-4 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-white">
          <div className="flex items-center justify-center">
            <DollarSign className="h-6 w-6 mr-2 text-stimulus-green" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              $1,400 STIMULUS CHECKS AVAILABLE
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm mt-2 text-center max-w-xl">
            Helping eligible Americans with groceries, rent, and everyday expenses
          </p>
          
          <div className="mt-2 flex items-center bg-white/10 px-3 py-1 rounded-full text-xs">
            <ShieldCheck className="h-3 w-3 mr-1 text-stimulus-green" />
            <span>Secure Eligibility Check • Limited Time</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
