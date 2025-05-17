
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div 
            key={i} 
            className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${
              i + 1 === currentStep 
                ? 'border-stimulus-blue bg-stimulus-blue text-white' 
                : i + 1 < currentStep 
                  ? 'border-stimulus-green bg-stimulus-green text-white' 
                  : 'border-gray-300 bg-white text-gray-500'
            }`}
          >
            {i + 1 < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="text-sm font-medium">{i + 1}</span>
            )}
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute top-0 h-1 w-full bg-gray-200 rounded"></div>
        <div 
          className="absolute top-0 h-1 bg-stimulus-blue rounded transition-all duration-300 ease-in-out" 
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="text-xs text-center px-1">
            <span className={`${i + 1 <= currentStep ? 'text-stimulus-blue font-medium' : 'text-gray-500'}`}>
              Step {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Adding the missing import
import { Check } from 'lucide-react';

export default StepIndicator;
