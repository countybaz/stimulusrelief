import React from 'react';
import Header from '@/components/Header';
import StepsDisplay from '@/components/StepsDisplay';
import NotificationToast from '@/components/NotificationToast';
import Footer from '@/components/Footer';
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow py-2">
        <div className="container mx-auto">
          <div className="text-center mb-2 px-4">
            
            
          </div>
          
          <StepsDisplay />
        </div>
      </main>
      
      <NotificationToast />
      <Footer />
    </div>;
};
export default Index;