
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
          
          <StepsDisplay />
        </div>
      </main>
      
      <NotificationToast />
      <Footer />
    </div>
  );
};

export default Index;
