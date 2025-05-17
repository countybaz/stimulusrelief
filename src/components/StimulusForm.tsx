
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dollar } from 'lucide-react';

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
  const [step, setStep] = useState(1);
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

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const validateCurrentStep = () => {
    switch(step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
          toast({
            title: "Missing Information",
            description: "Please fill in all required fields.",
            variant: "destructive"
          });
          return false;
        }
        return true;
        
      case 2:
        if (!formData.employmentStatus || !formData.incomeRange || !formData.hasChildren) {
          toast({
            title: "Missing Information",
            description: "Please answer all questions.",
            variant: "destructive"
          });
          return false;
        }
        return true;
        
      case 3:
        if (!formData.address || !formData.city || !formData.state || !formData.zipCode || !formData.agreeToTerms) {
          toast({
            title: "Missing Information",
            description: "Please fill in all required fields and agree to the terms.",
            variant: "destructive"
          });
          return false;
        }
        return true;
        
      default:
        return true;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      setStep(4); // Move to success step
      window.scrollTo(0, 0);
      toast({
        title: "Application Submitted!",
        description: "Your information has been processed successfully."
      });
    }
  };

  const renderStep1 = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>1. Submit Your Information</CardTitle>
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
                required
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
                required
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
              required
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
              required
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNext} className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>2. Answer Couple of Questions</CardTitle>
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
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Continue</Button>
      </CardFooter>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>3. Fill The Form</CardTitle>
        <CardDescription>Tailored to your specific needs</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input 
                id="address" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your street address"
                required
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
                  required
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
                required
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
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

          <div className="flex justify-between mt-6">
            <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
            <Button type="submit">Submit Application</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">4. Receive your <span className="text-stimulus-green font-bold">$1,400</span> Stimulus Check</CardTitle>
        <CardDescription>Direct payment to eligible recipients</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-stimulus-green/10 p-6 rounded-full">
            <Dollar className="h-16 w-16 text-stimulus-green" />
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
        
        <p className="text-sm text-gray-500">
          If you have any questions about your application, please contact our support team.
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline" onClick={() => window.location.reload()}>
          Submit Another Application
        </Button>
      </CardFooter>
    </Card>
  );

  const renderCurrentStep = () => {
    switch(step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 pb-12">
      <StepIndicator currentStep={step} totalSteps={4} />
      {renderCurrentStep()}
    </div>
  );
};

// Add the import for StepIndicator
import StepIndicator from './StepIndicator';

export default StimulusForm;
