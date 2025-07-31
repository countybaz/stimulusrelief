import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What is credit line assistance money?",
      answer: "Credit line assistance money refers to the economic relief payments issued by the federal government to help Americans during credit card debt hardship. Most people are still eligible for unclaimed funds from previous credit line programs."
    },
    {
      id: "item-2", 
      question: "How do I know if I'm eligible?",
      answer: "Eligibility is based on several factors including your income, tax filing status, and whether you've already received all payments you're entitled to. Our quick eligibility check can help determine if you qualify."
    },
    {
      id: "item-3",
      question: "Is this service free?",
      answer: "No, our eligibility check is completely free. We only charge a small processing fee if you successfully claim funds through our service."
    },
    {
      id: "item-4",
      question: "How long does the claim process take?",
      answer: "The initial eligibility check takes just 60 seconds. If you qualify, the verification process typically takes 3-5 business days, and funds are usually received within 1-2 weeks after verification."
    },
    {
      id: "item-5",
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-level 256-bit SSL encryption to protect all your data. We never share your information with third parties without your explicit consent."
    },
    {
      id: "item-6",
      question: "What documents do I need?",
      answer: "For the verification process, you'll need a valid ID, your Social Security Number, and recent tax return information (if applicable). Our system will guide you through exactly what's needed."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <HelpCircle className="h-6 w-6 text-stimulus-blue mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
        </div>
        <p className="text-gray-600">Get answers to common questions about the Credit Line Assistance Program</p>
      </div>

      <Card className="shadow-sm border-gray-200">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                  <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;