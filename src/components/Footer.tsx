
import React from 'react';
import { ShieldCheck, CheckCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-6 border-t border-gray-200 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-base font-semibold text-gray-700">Credit Line Assistance Program</h3>
          <p className="text-sm text-gray-500">Helping Americans claim their rightful assistance funds</p>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-5">
          <div className="flex items-center text-sm text-gray-600">
            <ShieldCheck className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Secure Processing</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 mr-2 text-stimulus-green" />
            <span>Verified Program</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="text-xs text-gray-500 text-center">
            <p>
              The information provided on this website is for general informational purposes only. 
              All information on the site is provided in good faith, however we make no representation 
              or warranty of any kind regarding the accuracy or completeness of any information.
            </p>
            
            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-stimulus-blue" />
                  <a href="tel:1-800-123-4567" className="hover:text-stimulus-blue transition-colors">
                    Call: 1-800-123-4567
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-stimulus-blue" />
                  <a href="mailto:help@creditlineassist.com" className="hover:text-stimulus-blue transition-colors">
                    Email: help@creditlineassist.com
                  </a>
                </div>
              </div>
              <p className="text-center">&copy; {currentYear} Credit Line Assistance Program. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
