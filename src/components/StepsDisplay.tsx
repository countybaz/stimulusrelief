
import React from 'react';
import { CheckCircle2, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StepsDisplay = () => {
  return (
    <div className="space-y-8 max-w-2xl mx-auto px-4">
      {/* Steps Section */}
      <div className="grid gap-3">
        <StepCard 
          number="1"
          title="Submit Your Information"
          description="Please ensure all information provided is accurate"
        />
        
        <StepCard 
          number="2"
          title="Answer Couple of Questions"
          description="Protected submission process"
        />
        
        <StepCard 
          number="3"
          title="Fill The Form"
          description="Tailored to your specific needs"
        />
        
        <StepCard 
          number="4"
          title="Receive your $1,400 Stimulus Check"
          description="Direct payment to eligible recipients"
          highlight
        />
      </div>
      
      {/* Disclaimer and CTA Button */}
      <div className="text-center my-6">
        <div className="bg-gray-100 p-3 rounded-md text-xs text-gray-600 text-center mb-4">
          This site is not affiliated with any government agency. Eligibility for assistance programs varies and results are subject to verification.
        </div>
        
        <button 
          onClick={() => window.open('#', '_blank')}
          className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-stimulus-green hover:bg-stimulus-green/90 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
        >
          CHECK ELIGIBILITY NOW
        </button>
        <p className="text-xs text-gray-500 mt-2">Click to see if you qualify for the stimulus assistance program</p>
      </div>
      
      {/* Testimonials Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">What People Are Saying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TestimonialCard 
            name="Sarah Johnson"
            location="Texas"
            text="I was skeptical at first, but after applying I received my stimulus check within days. This program was a true lifesaver for our family."
          />
          <TestimonialCard 
            name="Michael Rodriguez"
            location="Florida"
            text="The application process was incredibly simple. I filled out the form in under 10 minutes and received my $1,400 the following week."
          />
          <TestimonialCard 
            name="Jennifer Williams"
            location="Ohio"
            text="As a single mother of two, this stimulus check helped me catch up on bills and put food on the table. I'm incredibly grateful."
          />
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ number, title, description, highlight = false }: { 
  number: string; 
  title: string; 
  description: string;
  highlight?: boolean;
}) => {
  return (
    <Card className={`transition-all duration-300 ${highlight ? 'border-stimulus-green' : 'border-gray-200'} shadow-sm`}>
      <CardHeader className="flex flex-row items-center gap-2 py-2 px-3">
        <div className="bg-stimulus-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold">
          {number}
        </div>
        <div>
          <CardTitle className={`${highlight ? 'text-lg' : 'text-base'}`}>
            {title}
            {highlight && <span className="text-stimulus-green font-bold"> $1,400</span>}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="py-2 px-3">
        <p className="text-xs text-gray-500">{description}</p>
        {highlight && (
          <div className="mt-1 flex items-center text-stimulus-green text-xs">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="font-medium">Funds sent directly to eligible recipients</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, location, text }: { name: string; location: string; text: string }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
      <div className="flex items-center mb-2">
        <div className="text-stimulus-green">
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div className="ml-2">
          <h4 className="font-medium text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 text-xs">{text}</p>
      <div className="mt-2 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400 text-xs">★</span>
        ))}
      </div>
    </div>
  );
};

export default StepsDisplay;
