import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ActionCard = ({ icon: Icon, title, description, iconColor }) => (
  <Card className="hover:shadow-lg transition-shadow duration-200">
    <CardContent className="pt-6">
      <div className="flex flex-col items-center text-center">
        <Icon className={`h-8 w-8 ${iconColor} mb-2`} />
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </CardContent>
  </Card>
);