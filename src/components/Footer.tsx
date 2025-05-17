
import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-4 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h3 className="text-base font-semibold text-gray-700">Stimulus Support Program</h3>
          <p className="text-xs text-gray-500">Helping eligible Americans receive financial assistance</p>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className="flex items-center text-xs text-gray-600">
            <ShieldCheck className="h-3 w-3 mr-1 text-stimulus-green" />
            <span>Secure Processing</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <CheckCircle className="h-3 w-3 mr-1 text-stimulus-green" />
            <span>Verified Program</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="text-[10px] text-gray-500 text-center">
            <p>
              The information provided on this website is for general informational purposes only. 
              All information on the site is provided in good faith, however we make no representation 
              or warranty of any kind regarding the accuracy or completeness of any information.
            </p>
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              <p>&copy; {currentYear} Stimulus Support. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
