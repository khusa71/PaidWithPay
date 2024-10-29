import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '₹499',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 transactions/month',
        'Basic escrow protection',
        'Email support',
        'Standard processing time'
      ]
    },
    {
      name: 'Professional',
      price: '₹999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 transactions/month',
        'Advanced escrow protection',
        'Priority support',
        'Faster processing time'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Custom escrow solutions',
        '24/7 dedicated support',
        'Instant processing'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600">
          Choose the plan that works best for your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4 text-3xl font-bold">{plan.price}</div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}