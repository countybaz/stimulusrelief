
import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-stimulus-darkblue to-blue-900 py-6 px-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-white">
          <div className="flex items-center justify-center mb-3">
            <DollarSign className="h-8 w-8 mr-2 text-stimulus-green" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              $1,400 STIMULUS CHECKS NOW AVAILABLE
            </h1>
          </div>
          
          <p className="text-sm sm:text-base mt-2 text-center max-w-2xl">
            This assistance program helps eligible Americans with groceries, rent, and everyday expenses
          </p>
          
          <div className="mt-4 flex items-center bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm">
            <ShieldCheck className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Secure Eligibility Check • Limited Time Offer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
