
import React from 'react';
import Header from '@/components/Header';
import StepsDisplay from '@/components/StepsDisplay';
import NotificationToast from '@/components/NotificationToast';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow py-3">
        <div className="container mx-auto">
          <div className="text-center mb-3 px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Stimulus Assistance Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Check your eligibility and apply for your 
              <span className="text-stimulus-green font-bold"> $1,400 </span> 
              stimulus payment today.
            </p>
          </div>
          
          {/* Mobile-only quick access button */}
          <div className="md:hidden text-center mb-4 px-4">
            <button 
              onClick={() => window.open('#', '_blank')}
              className="w-full bg-stimulus-green hover:bg-stimulus-green/90 text-white font-bold text-lg py-3 rounded-lg shadow transition-all duration-300"
            >
              CHECK ELIGIBILITY NOW
            </button>
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
