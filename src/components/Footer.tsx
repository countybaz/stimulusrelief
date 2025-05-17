
import React from 'react';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Stimulus Support Program</h3>
          <p className="text-sm text-gray-500">Helping eligible Americans receive financial assistance</p>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <ShieldCheck className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Secure Processing</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Fast Approval</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Verified Program</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-700 bg-gray-100 p-3 rounded-lg mb-4">
            This site is not affiliated with any government agency. Eligibility for assistance programs varies and results are subject to verification.
          </p>
          
          <div className="text-xs text-gray-500 space-y-4">
            <p>
              The information provided on this website is for general informational purposes only. 
              All information on the site is provided in good faith, however we make no representation 
              or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
              reliability, availability or completeness of any information on the site.
            </p>
            
            <div className="border-t border-gray-200 pt-4">
              <p>&copy; {currentYear} Stimulus Support. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
