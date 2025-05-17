
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, CheckCircle2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  employmentStatus: string;
  incomeRange: string;
  hasChildren: string;
  agreeToTerms: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  employmentStatus: '',
  incomeRange: '',
  hasChildren: '',
  agreeToTerms: false
};

const StimulusForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { toast } = useToast();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const validateForm = () => {
    // Validate personal information
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all personal information fields.",
        variant: "destructive"
      });
      return false;
    }
    
    // Validate questions
    if (!formData.employmentStatus || !formData.incomeRange || !formData.hasChildren) {
      toast({
        title: "Missing Information",
        description: "Please answer all eligibility questions.",
        variant: "destructive"
      });
      return false;
    }
    
    // Validate address information
    if (!formData.address || !formData.city || !formData.state || !formData.zipCode || !formData.agreeToTerms) {
      toast({
        title: "Missing Information",
        description: "Please fill in all address fields and agree to the terms.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccess(true);
      window.scrollTo(0, 0);
      toast({
        title: "Application Submitted!",
        description: "Your information has been processed successfully."
      });
    }
  };

  const handleCheckEligibility = () => {
    // This function would handle redirecting to external website
    // For now just show confirmation message
    toast({
      title: "Checking Eligibility",
      description: "Redirecting to offer website..."
    });
  };

  if (isSuccess) {
    return (
      <Card className="w-full mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">4. Receive your <span className="text-stimulus-green font-bold">$1,400</span> Stimulus Check</CardTitle>
          <CardDescription>Direct payment to eligible recipients</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-stimulus-green/10 p-6 rounded-full">
              <DollarSign className="h-16 w-16 text-stimulus-green" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Congratulations, {formData.firstName}!</h3>
          <p className="mb-4">
            Your application for the stimulus check has been successfully submitted.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2">What happens next?</h4>
            <ol className="list-decimal list-inside text-left space-y-2">
              <li>Our team will review your application (typically 1-2 business days)</li>
              <li>You will receive an email confirmation at {formData.email}</li>
              <li>Once approved, your <span className="text-stimulus-green font-bold">$1,400</span> will be processed for payment</li>
              <li>Funds will be deposited directly to your preferred payment method</li>
            </ol>
          </div>
          
          <Button onClick={handleCheckEligibility} className="bg-stimulus-green hover:bg-stimulus-green/90 text-white font-semibold text-lg px-8 py-3 rounded-lg w-full md:w-auto">
            Check Eligibility Now
          </Button>
          
          <p className="text-sm text-gray-500 mt-6">
            If you have any questions about your application, please contact our support team.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Section 1: Personal Information */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-stimulus-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Submit Your Information
            </CardTitle>
            <CardDescription>Please ensure all information provided is accurate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Questions */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-stimulus-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Answer Couple of Questions
            </CardTitle>
            <CardDescription>Protected submission process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label>What is your current employment status?</Label>
                <RadioGroup 
                  value={formData.employmentStatus}
                  onValueChange={(value) => handleSelectChange('employmentStatus', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="employed" id="employed" />
                    <Label htmlFor="employed">Employed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unemployed" id="unemployed" />
                    <Label htmlFor="unemployed">Unemployed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self-employed" id="self-employed" />
                    <Label htmlFor="self-employed">Self-employed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="retired" id="retired" />
                    <Label htmlFor="retired">Retired</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="incomeRange">What is your annual household income?</Label>
                <Select 
                  value={formData.incomeRange}
                  onValueChange={(value) => handleSelectChange('incomeRange', value)}
                >
                  <SelectTrigger id="incomeRange">
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                    <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                    <SelectItem value="over-100k">Over $100,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Do you have dependent children?</Label>
                <RadioGroup 
                  value={formData.hasChildren}
                  onValueChange={(value) => handleSelectChange('hasChildren', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="has-children-yes" />
                    <Label htmlFor="has-children-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="has-children-no" />
                    <Label htmlFor="has-children-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Address Information */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-stimulus-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Fill The Form
            </CardTitle>
            <CardDescription>Tailored to your specific needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input 
                  id="address" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your street address"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select 
                    value={formData.state}
                    onValueChange={(value) => handleSelectChange('state', value)}
                  >
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="AR">Arkansas</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="CO">Colorado</SelectItem>
                      <SelectItem value="CT">Connecticut</SelectItem>
                      <SelectItem value="DE">Delaware</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="GA">Georgia</SelectItem>
                      <SelectItem value="HI">Hawaii</SelectItem>
                      <SelectItem value="ID">Idaho</SelectItem>
                      <SelectItem value="IL">Illinois</SelectItem>
                      <SelectItem value="IN">Indiana</SelectItem>
                      <SelectItem value="IA">Iowa</SelectItem>
                      <SelectItem value="KS">Kansas</SelectItem>
                      <SelectItem value="KY">Kentucky</SelectItem>
                      <SelectItem value="LA">Louisiana</SelectItem>
                      <SelectItem value="ME">Maine</SelectItem>
                      <SelectItem value="MD">Maryland</SelectItem>
                      <SelectItem value="MA">Massachusetts</SelectItem>
                      <SelectItem value="MI">Michigan</SelectItem>
                      <SelectItem value="MN">Minnesota</SelectItem>
                      <SelectItem value="MS">Mississippi</SelectItem>
                      <SelectItem value="MO">Missouri</SelectItem>
                      <SelectItem value="MT">Montana</SelectItem>
                      <SelectItem value="NE">Nebraska</SelectItem>
                      <SelectItem value="NV">Nevada</SelectItem>
                      <SelectItem value="NH">New Hampshire</SelectItem>
                      <SelectItem value="NJ">New Jersey</SelectItem>
                      <SelectItem value="NM">New Mexico</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="NC">North Carolina</SelectItem>
                      <SelectItem value="ND">North Dakota</SelectItem>
                      <SelectItem value="OH">Ohio</SelectItem>
                      <SelectItem value="OK">Oklahoma</SelectItem>
                      <SelectItem value="OR">Oregon</SelectItem>
                      <SelectItem value="PA">Pennsylvania</SelectItem>
                      <SelectItem value="RI">Rhode Island</SelectItem>
                      <SelectItem value="SC">South Carolina</SelectItem>
                      <SelectItem value="SD">South Dakota</SelectItem>
                      <SelectItem value="TN">Tennessee</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="UT">Utah</SelectItem>
                      <SelectItem value="VT">Vermont</SelectItem>
                      <SelectItem value="VA">Virginia</SelectItem>
                      <SelectItem value="WA">Washington</SelectItem>
                      <SelectItem value="WV">West Virginia</SelectItem>
                      <SelectItem value="WI">Wisconsin</SelectItem>
                      <SelectItem value="WY">Wyoming</SelectItem>
                      <SelectItem value="DC">District of Columbia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input 
                  id="zipCode" 
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Enter your zip code"
                />
              </div>
              
              <div className="flex items-center space-x-2 pt-4">
                <Checkbox 
                  id="agreeToTerms" 
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange('agreeToTerms', checked as boolean)
                  }
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I confirm all information provided is accurate and agree to the terms and conditions.
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final section with Submit button and CTA */}
        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full py-6 text-lg">Submit Application</Button>
          
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleCheckEligibility} 
            className="bg-stimulus-green hover:bg-stimulus-green/90 text-white border-none font-semibold text-lg py-6"
          >
            Check Eligibility Now
          </Button>
        </div>
      </form>
      
      {/* Testimonials Section */}
      <div className="mt-12 mb-8">
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
    </>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, location, text }: { name: string; location: string; text: string }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
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

// Add the import for StepIndicator
import StepIndicator from './StepIndicator';

export default StimulusForm;
