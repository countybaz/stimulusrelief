
import React from 'react';
import Header from '@/components/Header';
import StepsDisplay from '@/components/StepsDisplay';
import NotificationToast from '@/components/NotificationToast';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-4">
        <div className="container mx-auto">
          <div className="text-center mb-6 px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Apply for your stimulus assistance today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Follow these simple steps to determine your eligibility and apply for your 
              <span className="text-stimulus-green font-bold"> $1,400 </span> 
              stimulus payment.
            </p>
          </div>
          
          <div className="px-4 mb-8">
            <button 
              onClick={() => window.open('#', '_blank')}
              className="mx-auto block w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-stimulus-green hover:bg-stimulus-green/90 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-lg transition-all duration-300 animate-pulse"
            >
              CHECK ELIGIBILITY NOW
            </button>
            <p className="text-center text-xs mt-2 text-gray-500">Limited time offer - Check if you qualify</p>
          </div>
          
          <StepsDisplay />
        </div>
      </main>
      
      <NotificationToast />
      <Footer />
    </div>
  );
};

export default Index;
