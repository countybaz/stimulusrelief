
import React from 'react';
import { DollarSign, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const StepsDisplay = () => {
  const handleCheckEligibility = () => {
    toast({
      title: "Checking Eligibility",
      description: "Redirecting to offer website..."
    });
  };
  
  return (
    <div className="space-y-10 max-w-3xl mx-auto px-4">
      {/* Steps Section */}
      <div className="grid gap-4">
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
      
      {/* CTA Button */}
      <div className="text-center">
        <Button 
          onClick={handleCheckEligibility} 
          className="bg-stimulus-green hover:bg-stimulus-green/90 text-white font-semibold text-lg px-8 py-6 rounded-lg w-full sm:w-auto"
        >
          Check Eligibility Now
        </Button>
        <p className="text-xs text-gray-500 mt-4">Click to see if you qualify for the stimulus assistance program</p>
      </div>
      
      {/* Testimonials Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-center">What People Are Saying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <Card className={`transition-all duration-300 hover:shadow-md ${highlight ? 'border-stimulus-green' : ''}`}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-stimulus-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          {number}
        </div>
        <div>
          <CardTitle className={highlight ? 'text-xl' : ''}>
            {title}
            {highlight && <span className="text-stimulus-green font-bold"> $1,400</span>}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
        {highlight && (
          <div className="mt-2 flex items-center text-stimulus-green">
            <DollarSign className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">Funds sent directly to eligible recipients</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, location, text }: { name: string; location: string; text: string }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="text-stimulus-green">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{text}</p>
      <div className="mt-3 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400">★</span>
        ))}
      </div>
    </div>
  );
};

export default StepsDisplay;
