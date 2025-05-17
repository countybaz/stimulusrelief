
import React from 'react';
import { CheckCircle2, DollarSign, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StepsDisplay = () => {
  const handleCheckEligibility = () => {
    window.open('https://glstrck.com/aff_c?offer_id=1421&aff_id=25969', '_blank');
  };

  return <div className="space-y-4 max-w-2xl mx-auto px-4">
      {/* Program Information */}
      
      {/* Steps Section - More compact on mobile */}
      <div className="grid gap-3">
        <h3 className="font-medium text-center">Follow These Steps:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <StepCard number="1" title="Eligibility Check" description="Confirm your qualification for the stimulus program" />
          
          <StepCard number="2" title="Identity Verification" description="Secure verification process to protect your information" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <StepCard number="3" title="Application Review" description="Your application is reviewed by our team" />
          
          <StepCard number="4" title="Receive your $1,400 Stimulus Check" description="Direct payment to qualified recipients" highlight />
        </div>

        {/* CTA Button moved directly after steps */}
        <div className="text-center mt-2">
          <button 
            onClick={handleCheckEligibility} 
            className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-stimulus-green hover:bg-stimulus-green/90 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            CHECK ELIGIBILITY NOW
          </button>
          <p className="text-xs text-gray-500 mt-2">Click to see if you qualify for the stimulus assistance program</p>
        </div>
      </div>
      
      {/* Testimonials Section - Shortened for mobile */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-3 text-center">What People Are Saying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <TestimonialCard name="Sarah Johnson" location="Texas" text="I was skeptical at first, but after applying I received my stimulus check within days. This program was a true lifesaver for our family." />
          <TestimonialCard name="Michael Rodriguez" location="Florida" text="The application process was incredibly simple. I filled out the form in under 10 minutes and received my $1,400 the following week." />
          <TestimonialCard name="Jennifer Williams" location="Ohio" text="As a single mother of two, this stimulus check helped me catch up on bills and put food on the table. I'm incredibly grateful." />
        </div>
      </div>
      
      {/* Security notice moved to bottom of page */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center bg-blue-50 px-4 py-2 rounded-md text-sm border border-blue-100 max-w-md">
          <ShieldCheck className="h-4 w-4 mr-2 text-stimulus-blue flex-shrink-0" />
          <span className="text-gray-700">Secure Eligibility Check • Limited Time Program</span>
        </div>
      </div>
      
      {/* Disclaimer at the bottom of page */}
      <div className="text-center mt-2">
        <div className="bg-gray-100 p-3 rounded-lg text-xs text-gray-600 text-center mb-4">
          <ShieldCheck className="h-4 w-4 mx-auto mb-1 text-stimulus-blue" />
          <p>This site is not affiliated with any government agency. Eligibility for assistance programs varies and results are subject to verification.</p>
        </div>
      </div>
    </div>;
};

// StepCard component definition
const StepCard = ({
  number,
  title,
  description,
  highlight = false
}: {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}) => {
  return <Card className={`transition-all duration-300 ${highlight ? 'border-stimulus-green' : 'border-gray-200'} shadow-sm`}>
      <CardHeader className="flex flex-row items-center gap-2 py-2 px-3">
        <div className={`${highlight ? 'bg-stimulus-green' : 'bg-stimulus-blue'} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold`}>
          {number}
        </div>
        <div>
          <CardTitle className={`${highlight ? 'text-base' : 'text-sm'}`}>
            {title}
            {highlight && <span className="text-stimulus-green font-bold"> $1,400</span>}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="py-1 px-3 text-xs md:text-sm">
        <p className="text-gray-600">{description}</p>
        {highlight && <div className="mt-1 flex items-center text-stimulus-green text-xs">
            <DollarSign className="h-3 w-3 mr-1" />
            <span className="font-medium">Funds sent directly to eligible recipients</span>
          </div>}
      </CardContent>
    </Card>;
};

// Testimonial Card Component
const TestimonialCard = ({
  name,
  location,
  text
}: {
  name: string;
  location: string;
  text: string;
}) => {
  return <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
      <div className="flex items-center mb-1">
        <div className="text-stimulus-green">
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div className="ml-2">
          <h4 className="font-medium text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 text-xs md:text-sm">{text}</p>
      <div className="mt-1 flex">
        {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-xs">★</span>)}
      </div>
    </div>;
};

export default StepsDisplay;
