
import React from 'react';
import Header from '@/components/Header';
import StepsDisplay from '@/components/StepsDisplay';
import NotificationToast from '@/components/NotificationToast';
import Footer from '@/components/Footer';
import RedTrackProtection from '@/components/RedTrackProtection';

const Index = () => {
  // In a real app, you would set this from an environment variable or a secure source
  const redTrackKey = ""; // Insert your actual secret key here
  
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Only apply protection in production
  if (isDevelopment) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Header />
        <main className="flex-grow py-2">
          <div className="container mx-auto">
            <div className="text-center mb-2 px-4"></div>
            <StepsDisplay />
          </div>
        </main>
        <NotificationToast />
        <Footer />
      </div>
    );
  }
  
  // Apply protection in production
  return (
    <RedTrackProtection secretKey={redTrackKey}>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Header />
        <main className="flex-grow py-2">
          <div className="container mx-auto">
            <div className="text-center mb-2 px-4"></div>
            <StepsDisplay />
          </div>
        </main>
        <NotificationToast />
        <Footer />
      </div>
    </RedTrackProtection>
  );
};

export default Index;
