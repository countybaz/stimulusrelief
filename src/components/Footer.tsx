
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Stimulus Support Program</h3>
          <p className="text-sm text-gray-500">Helping eligible Americans receive financial assistance</p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center text-xs text-gray-500 space-y-4">
          <p>
            The information provided on this website is for general informational purposes only. 
            All information on the site is provided in good faith, however we make no representation 
            or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
            reliability, availability or completeness of any information on the site.
          </p>
          
          <div className="border-t border-gray-200 pt-4">
            <p>&copy; {currentYear} Stimulus Support. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-700">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700">Terms of Service</a>
              <a href="#" className="hover:text-gray-700">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
