
import React from 'react';

const Header = () => {
  return (
    <header className="bg-stimulus-darkblue py-4 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            $1,400 STIMULUS CHECKS NOW AVAILABLE
          </h1>
          <p className="text-sm sm:text-base mt-2 text-center max-w-2xl">
            This assistance program helps eligible Americans with groceries, rent, and everyday expenses
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
